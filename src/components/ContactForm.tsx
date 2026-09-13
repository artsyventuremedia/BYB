"use client";

import { useState } from "react";

const projectTypes = [
  "Commercial Film",
  "Brand Film",
  "Post Production",
  "Photography",
  "3D / Visual",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border-t border-line py-16">
        <p className="font-display text-3xl italic text-paper">
          Thank you. We&rsquo;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-line">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Company" name="company" />
      <div className="border-b border-line py-8">
        <label
          htmlFor="projectType"
          className="mb-4 block text-[11px] uppercase tracking-widest2 text-smoke"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full bg-transparent font-display text-2xl italic text-paper outline-none focus-ring md:text-3xl"
          defaultValue=""
          required
        >
          <option value="" disabled className="bg-ink text-smoke">
            Select one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-ink text-paper">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="border-b border-line py-8">
        <label
          htmlFor="message"
          className="mb-4 block text-[11px] uppercase tracking-widest2 text-smoke"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full resize-none bg-transparent font-display text-2xl italic text-paper outline-none placeholder:text-smoke/40 focus-ring md:text-3xl"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-10 flex items-center gap-4 text-sm uppercase tracking-widest2 text-paper focus-ring disabled:opacity-60"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/40 transition-colors group-hover:border-paper">
          &rarr;
        </span>
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="border-b border-line py-8">
      <label
        htmlFor={name}
        className="mb-4 block text-[11px] uppercase tracking-widest2 text-smoke"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent font-display text-2xl italic text-paper outline-none focus-ring md:text-3xl"
      />
    </div>
  );
}
