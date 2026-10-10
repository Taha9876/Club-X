"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const INTERESTS = [
  "Gym membership",
  "Personal training",
  "Ladies timing (11 AM – 3 PM)",
  "Snooker",
  "Pool / Foosball / PS4",
  "Something else",
];

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

/**
 * There is no backend on this build, so the form composes the enquiry and hands
 * it straight to the Club X WhatsApp number. Submitting opens the WhatsApp app
 * itself (phone or desktop) with the chat and message ready; the web link is
 * kept as a fallback for devices without the app.
 */
export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [webLink, setWebLink] = useState<string | null>(null);

  const set =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Tell us what to call you.";
    if (!/^[+0-9\s-]{7,}$/.test(values.phone.trim())) next.phone = "A reachable number, please.";
    if (values.message.trim().length < 5) next.message = "A line or two is enough.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = encodeURIComponent(
      [
        `Hi Club X — I would like to know more.`,
        ``,
        `Name: ${values.name.trim()}`,
        `Phone: ${values.phone.trim()}`,
        `Interested in: ${values.interest}`,
        ``,
        values.message.trim(),
      ].join("\n"),
    );

    setWebLink(`${site.whatsapp}?text=${text}`);

    /* The whatsapp:// scheme launches the installed app directly, skipping the
       wa.me interstitial page. It is a navigation the page never leaves. */
    window.location.href = `whatsapp://send?phone=${site.whatsappNumber}&text=${text}`;
  };

  const field =
    "w-full border border-line bg-ink px-4 py-3.5 text-sm text-chalk transition-colors placeholder:text-muted-2 focus:border-brand focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-muted-2">Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            placeholder="Ali Raza"
            className={`mt-2.5 ${field} ${errors.name ? "border-brand" : ""}`}
          />
          {errors.name && <span className="mt-1.5 block text-xs text-brand">{errors.name}</span>}
        </label>

        <label className="block">
          <span className="eyebrow text-muted-2">Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="0300 0000000"
            className={`mt-2.5 ${field} ${errors.phone ? "border-brand" : ""}`}
          />
          {errors.phone && <span className="mt-1.5 block text-xs text-brand">{errors.phone}</span>}
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-muted-2">I am interested in</span>
        <select
          name="interest"
          value={values.interest}
          onChange={set("interest")}
          className={`mt-2.5 ${field}`}
        >
          {INTERESTS.map((i) => (
            <option key={i} value={i} className="bg-ink">
              {i}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="eyebrow text-muted-2">Message</span>
        <textarea
          rows={5}
          name="message"
          value={values.message}
          onChange={set("message")}
          placeholder="When can I come in for a tour?"
          className={`mt-2.5 resize-none ${field} ${errors.message ? "border-brand" : ""}`}
        />
        {errors.message && (
          <span className="mt-1.5 block text-xs text-brand">{errors.message}</span>
        )}
      </label>

      <button
        type="submit"
        className="group relative overflow-hidden bg-brand px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white clip-corner-sm"
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
        <span className="relative">Send on WhatsApp</span>
      </button>

      {webLink && (
        <div role="status" className="rise border border-line bg-ink px-5 py-4 text-sm text-muted">
          <p className="text-chalk">
            Opening WhatsApp with your message to {site.phone} — just press send.
          </p>
          <p className="mt-1.5 text-xs">
            WhatsApp did not open?{" "}
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Continue in WhatsApp Web
            </a>
            .
          </p>
        </div>
      )}

      <p className="text-xs leading-relaxed text-muted-2">
        This form opens the WhatsApp app with your details filled in — there is no server
        storing anything. Prefer to talk? Call{" "}
        <a href={site.phoneHref} className="text-brand hover:underline">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
