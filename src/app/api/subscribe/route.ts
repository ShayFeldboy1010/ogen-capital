import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint.
 *
 * Every signup is emailed to the partners. Delivery goes through Resend's REST
 * API over plain fetch, no SDK, so nothing to keep in sync in package.json.
 *
 * Required environment variables (set them in Vercel → Project → Settings →
 * Environment Variables, and in a local .env.local for `npm run dev`):
 *
 *   RESEND_API_KEY   API key from https://resend.com (starts with "re_")
 *   NEWSLETTER_FROM  Sender, e.g. "OGen Website <no-reply@ogen.capital>".
 *                    The domain must be verified in Resend. Until it is, use
 *                    Resend's shared sandbox sender: "OGen <onboarding@resend.dev>"
 *   NEWSLETTER_TO    Comma-separated recipients. Defaults to both partners.
 *
 * Without RESEND_API_KEY the route answers 503 and the form shows its error
 * message, rather than pretending the address was captured.
 */

const DEFAULT_RECIPIENTS = ["dooby@ogen.capital", "gil@ogen.capital"];

function recipients(): string[] {
  const raw = process.env.NEWSLETTER_TO;
  if (!raw) return DEFAULT_RECIPIENTS;
  const list = raw
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
  return list.length > 0 ? list : DEFAULT_RECIPIENTS;
}

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const subscriber = email.trim();
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      `[newsletter] RESEND_API_KEY is not set, could not deliver signup: ${subscriber}`,
    );
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.NEWSLETTER_FROM ?? "OGen <onboarding@resend.dev>",
        to: recipients(),
        replyTo: subscriber,
        subject: `הרשמה חדשה לניוזלטר: ${subscriber}`,
        text: [
          "נרשם/ת חדש/ה לניוזלטר באתר OGen Family Office.",
          "",
          `כתובת מייל: ${subscriber}`,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      console.error(
        `[newsletter] Resend rejected the signup for ${subscriber}: ${res.status} ${await res.text()}`,
      );
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error(`[newsletter] delivery failed for ${subscriber}:`, error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
