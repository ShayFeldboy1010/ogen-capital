"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";
import { whatsappHref } from "@/lib/site";

/**
 * Contact form that converts straight into a WhatsApp conversation:
 * on submit it opens wa.me with a prefilled message built from the fields.
 * No backend, nothing stored, which is also stated to the user.
 *
 * Required fields per spec section 4: full name, phone, email, subject.
 */
export function ContactForm({ t }: { t: Dictionary }) {
  const f = t.contact.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(f.topics[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = f.errors.name;
    if (!/^[\d+\-\s()]{7,}$/.test(phone.trim())) next.phone = f.errors.phone;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = f.errors.email;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      f.whatsappIntro,
      `${f.whatsappName}: ${name.trim()}`,
      `${f.whatsappPhone}: ${phone.trim()}`,
      `${f.whatsappEmail}: ${email.trim()}`,
      `${f.whatsappTopic}: ${topic}`,
    ];
    if (message.trim()) lines.push(message.trim());

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener");
  }

  // [direction:inherit] undoes Chrome's UA rule that forces direction:ltr on
  // tel inputs, which would left-align that one field inside the RTL form.
  const inputClass =
    "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-bone [direction:inherit] placeholder:text-bone-dim/60 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="contact-name" className="block text-sm text-bone">
          {f.name}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={f.namePlaceholder}
          className={inputClass}
        />
        {errors.name && <p className="text-xs text-gold">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-phone" className="block text-sm text-bone">
          {f.phone}
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={f.phonePlaceholder}
          className={inputClass}
        />
        {errors.phone && <p className="text-xs text-gold">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-email" className="block text-sm text-bone">
          {f.email}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={f.emailPlaceholder}
          className={inputClass}
        />
        {errors.email && <p className="text-xs text-gold">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-topic" className="block text-sm text-bone">
          {f.topic}
        </label>
        <select
          id="contact-topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
        >
          {f.topics.map((option) => (
            <option key={option} value={option} className="bg-ink">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm text-bone">
          {f.message}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePlaceholder}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="btn-gold w-full rounded-full bg-gold px-9 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px sm:w-auto"
      >
        {f.submit}
      </button>
      <p className="text-xs leading-relaxed text-bone-dim/80">{f.note}</p>
    </form>
  );
}
