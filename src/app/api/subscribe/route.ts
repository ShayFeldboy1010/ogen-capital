import { NextResponse } from "next/server";

/**
 * Newsletter subscription endpoint (stub).
 *
 * TODO(client): connect a real mailing list provider here, for example:
 * - Mailchimp: POST to their audience members API with the API key
 * - Brevo / ActiveTrail / smoove: same idea, one fetch call
 * Until then, subscriptions are acknowledged but not stored.
 */
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

  console.log(`[newsletter] new subscriber: ${email}`);
  return NextResponse.json({ ok: true });
}
