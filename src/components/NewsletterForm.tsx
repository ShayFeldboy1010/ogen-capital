"use client";

import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type Status = "idle" | "loading" | "success" | "error" | "invalid";

/** Newsletter signup. Posts to /api/subscribe (see the stub there). */
export function NewsletterForm({
  t,
  className,
}: {
  t: Dictionary;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const n = t.contact.newsletter;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={`text-sm text-gold ${className ?? ""}`}>{n.success}</p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        {n.email}
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder={n.emailPlaceholder}
          dir="ltr"
          className="w-full min-w-0 rounded-full border border-line bg-ink px-5 py-3 text-sm text-bone placeholder:text-bone-dim/60 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full border border-gold bg-transparent px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink active:translate-y-px disabled:opacity-60"
        >
          {n.submit}
        </button>
      </div>
      {status === "invalid" && (
        <p className="mt-2 text-xs text-gold">{n.invalid}</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-bone-dim">{n.error}</p>
      )}
    </form>
  );
}
