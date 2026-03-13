"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "General Inquiry",
  "Demo Request",
  "Sales Question",
  "Technical Support",
  "Partnership Opportunity",
];

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [emailValue, setEmailValue] = useState("");

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!form.get("name")) errs.name = "Name is required.";
    const email = form.get("email") as string;
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.get("reason")) errs.reason = "Please select a reason.";
    if (!form.get("message")) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setEmailValue(formData.get("email") as string);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          reason: formData.get("reason"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-card flex flex-col items-center rounded-2xl border p-12 text-center">
        <CheckCircle2 className="text-primary size-12" />
        <h2 className="mt-4 text-2xl font-bold">Message received.</h2>
        <p className="text-muted-foreground mt-3 max-w-md">
          Thanks for reaching out. We&apos;ll get back to you at{" "}
          <span className="font-medium text-foreground">{emailValue}</span>{" "}
          within 24 hours. In the meantime, feel free to explore the{" "}
          <Link href="/features" className="text-primary hover:underline">
            Features page
          </Link>{" "}
          or check out our{" "}
          <Link href="/pricing" className="text-primary hover:underline">
            Pricing
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border p-6 sm:p-8">
      <h2 className="text-lg font-bold">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2"
          />
          {errors.name && (
            <p className="text-destructive mt-1 text-xs">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@yourcompany.com"
            className="border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2"
          />
          {errors.email && (
            <p className="text-destructive mt-1 text-xs">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-sm font-medium"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            className="border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2"
          />
        </div>

        <div>
          <label htmlFor="reason" className="mb-1.5 block text-sm font-medium">
            Reason for Getting in Touch{" "}
            <span className="text-destructive">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            defaultValue=""
            className="border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2"
          >
            <option value="" disabled>
              Select a reason...
            </option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className="text-destructive mt-1 text-xs">{errors.reason}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium"
          >
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you're working on or what you'd like to know"
            className="border-input bg-background ring-ring/10 focus:ring-primary/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow focus:ring-2"
          />
          {errors.message && (
            <p className="text-destructive mt-1 text-xs">{errors.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
