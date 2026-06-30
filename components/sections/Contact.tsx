"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@prepverse.ai",
    href: "mailto:hello@prepverse.ai",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatedSection id="contact" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Have questions or ready to start? We'd love to hear from you."
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
              <CheckCircle className="mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="mt-2 text-sm text-muted">
                Thanks for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-card p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your placement goals..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </AnimatedSection>
  );
}
