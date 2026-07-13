"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { whatsappHref } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

/**
 * Inline lead-capture band: name + phone, straight into WhatsApp with a
 * prefilled message. Repeated through the site as the main conversion push.
 * An intent chip (optional) is appended to the message so the partners
 * know what the visitor is looking for before the first reply.
 */
export function LeadBand({ t }: { t: Dictionary }) {
  const l = t.leadBand;
  const f = t.contact.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [chip, setChip] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError(f.errors.name);
    if (!/^[\d+\-\s()]{7,}$/.test(phone.trim())) return setError(f.errors.phone);
    setError(null);
    const message = [
      f.whatsappIntro,
      `${f.whatsappName}: ${name.trim()}`,
      `${f.whatsappPhone}: ${phone.trim()}`,
      ...(chip ? [`${f.whatsappTopic}: ${chip}`] : []),
    ].join("\n");
    window.open(whatsappHref(message), "_blank", "noopener");
  }

  return (
    <section className="px-4 py-10 md:px-6 md:py-14">
      <Reveal className="mx-auto max-w-6xl">
        <div className="border-glow">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-ink-3 px-7 py-10 md:px-14 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_85%_50%,rgba(201,164,92,0.18),transparent_60%)]"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[5fr_7fr]">
              <div>
                <h2 className="font-display text-2xl leading-snug text-bone md:text-3xl">
                  {l.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-bone-dim">
                  {l.body}
                </p>
              </div>
              <div>
                <p className="text-sm text-bone-dim">{l.chipsLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {l.chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setChip(chip === c ? null : c)}
                      aria-pressed={chip === c}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors active:scale-95 ${
                        chip === c
                          ? "border-gold/80 bg-gold/10 text-gold-bright"
                          : "border-line text-bone-dim hover:border-gold-deep hover:text-bone"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <label htmlFor="lead-name" className="sr-only">
                    {f.name}
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={f.name}
                    className="w-full rounded-full border border-line bg-ink px-6 py-4 text-sm text-bone placeholder:text-bone-dim/70 transition-shadow focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,164,92,0.15)] focus:outline-none"
                  />
                  <label htmlFor="lead-phone" className="sr-only">
                    {f.phone}
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={f.phone}
                    className="w-full rounded-full border border-line bg-ink px-6 py-4 text-sm text-bone placeholder:text-bone-dim/70 transition-shadow focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,164,92,0.15)] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-gold shrink-0 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
                  >
                    {l.submit}
                  </button>
                </form>
              </div>
            </div>
            {error && (
              <p className="relative mt-3 text-sm text-gold-bright lg:text-end">
                {error}
              </p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
