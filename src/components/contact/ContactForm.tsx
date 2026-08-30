"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/lib/site";

const INTERESTS = ["Gym membership", "Personal training", "Snooker", "Something else"];

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

/**
 * There is no backend on this build, so the form composes the enquiry and hands
 * it to WhatsApp — the channel the club actually answers on. Everything is
 * validated first so nothing half-filled gets sent.
 */
export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    interest: INTERESTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const root = useRef<HTMLFormElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-field]",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
        },
      );
    },
    { scope: root },
  );

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const text = [
      `Hi Club X — I would like to know more.`,
      ``,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Interested in: ${values.interest}`,
      ``,
      values.message,
    ].join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
  };

  const field =
    "w-full border border-line bg-ink px-4 py-3.5 text-sm text-chalk transition-colors placeholder:text-muted-2 focus:border-brand focus:outline-none";

  return (
    <form ref={root} onSubmit={onSubmit} noValidate className="space-y-5">
      <div data-field className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-muted-2">Your name</span>
          <input
            type="text"
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
            value={values.phone}
            onChange={set("phone")}
            placeholder="0300 0000000"
            className={`mt-2.5 ${field} ${errors.phone ? "border-brand" : ""}`}
          />
          {errors.phone && <span className="mt-1.5 block text-xs text-brand">{errors.phone}</span>}
        </label>
      </div>

      <label data-field className="block">
        <span className="eyebrow text-muted-2">I am interested in</span>
        <select value={values.interest} onChange={set("interest")} className={`mt-2.5 ${field}`}>
          {INTERESTS.map((i) => (
            <option key={i} value={i} className="bg-ink">
              {i}
            </option>
          ))}
        </select>
      </label>

      <label data-field className="block">
        <span className="eyebrow text-muted-2">Message</span>
        <textarea
          rows={5}
          value={values.message}
          onChange={set("message")}
          placeholder="When can I come in for a tour?"
          className={`mt-2.5 resize-none ${field} ${errors.message ? "border-brand" : ""}`}
        />
        {errors.message && (
          <span className="mt-1.5 block text-xs text-brand">{errors.message}</span>
        )}
      </label>

      <div data-field className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="group relative overflow-hidden bg-brand px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white clip-corner-sm"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
          <span className="relative">Send via WhatsApp</span>
        </button>

        {sent && (
          <span className="text-xs text-muted">
            WhatsApp should have opened with your message ready to send.
          </span>
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted-2">
        This form opens WhatsApp with your details filled in — there is no server storing anything.
        Prefer to talk? Call{" "}
        <a href={site.phoneHref} className="text-brand hover:underline">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
