"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  MapPin,
  Feather,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your honorable name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "A return email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please supply a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "The subject of your inquiry is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "An epistle message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Epistle must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setSubmitSuccess(data.message || "Epistle transmitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred while transmitting your message.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-28 relative border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.25em] uppercase text-gold-300">
            <span>❖</span>
            <span>V // Epistle &amp; Inquiries</span>
            <span>❖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-parchment tracking-tight">
            Initiate Correspondence
          </h2>
          <div className="gold-divider w-32 mx-auto my-2" />
          <p className="text-sm sm:text-base font-light text-slate-400 font-sans">
            Whether for a technical commission, architectural advisory, or an open engineering post,
            your correspondence is welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="classical-card p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-serif font-bold text-parchment uppercase tracking-wider">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm font-sans font-light text-slate-400 leading-relaxed">
                Currently considering selected full-time engineering posts, contracts, and
                architectural advisories. You may reach me directly through electronic dispatch.
              </p>

              {/* Direct Address Plaque */}
              <div className="p-4 bg-[#0a0d14] border border-gold-400/25 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-serif tracking-wider uppercase text-gold-400">
                    Direct Electronic Mail:
                  </span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-[10px] font-serif tracking-wider uppercase text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-gold-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-xs sm:text-sm text-parchment hover:text-gold-300 transition-colors block truncate"
                >
                  {personal.email}
                </a>
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3 pt-2 border-t border-gold-400/20 text-xs font-serif text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Stationed in {personal.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-gold-400 font-bold">❖</span>
                  <span className="text-gold-300">{personal.status}</span>
                </div>
              </div>

              {/* Archival Networks */}
              <div className="pt-4 border-t border-gold-400/20 space-y-3">
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-slate-400 block">
                  Archival Networks:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {socials.map((social) => {
                    let Icon = Github;
                    if (social.platform.toLowerCase().includes("linkedin")) Icon = Linkedin;
                    else if (social.platform.toLowerCase().includes("twitter") || social.platform.toLowerCase().includes("x"))
                      Icon = Twitter;
                    else if (social.platform.toLowerCase().includes("email")) Icon = Mail;

                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 border border-gold-400/20 bg-surface hover:border-gold-400 hover:bg-surface-light text-slate-300 hover:text-gold-200 transition-all text-xs font-serif tracking-wider"
                      >
                        <Icon className="w-3.5 h-3.5 text-gold-400" />
                        <span className="truncate">{social.platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Architectural Backend Notice */}
            <div className="p-4 border border-gold-400/20 bg-surface/50 text-xs text-slate-400 space-y-1 font-serif">
              <div className="flex items-center gap-1.5 text-gold-400 font-semibold tracking-wide">
                <span>✦</span>
                <span>Transmission Infrastructure</span>
              </div>
              <p className="font-sans font-light leading-relaxed text-[11px]">
                This transmission desk delivers inquiries to the Next.js API endpoint (<code>/api/contact</code>).
                To route to your inbox in production, simply supply your Resend or SendGrid key in <code>.env.local</code>.
              </p>
            </div>
          </div>

          {/* Right Column: Classical Epistle Writing Desk */}
          <div className="lg:col-span-7">
            <div className="classical-card p-6 sm:p-8 relative">
              <h3 className="text-lg font-serif font-bold text-parchment uppercase tracking-wider mb-2">
                Draft an Epistle
              </h3>
              <p className="text-xs sm:text-sm font-sans font-light text-slate-400 mb-6">
                Please articulate your project or engagement parameters below.
              </p>

              {submitSuccess && (
                <div className="p-4 border border-gold-400/40 bg-gold-400/10 text-gold-200 mb-6 flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-serif font-bold">{submitSuccess}</p>
                    <p className="font-sans text-xs text-slate-300">
                      Your missive has been authenticated. Expect a response in due course.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="p-4 border border-rose-500/40 bg-rose-500/10 text-rose-300 mb-6 flex items-start gap-3 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif font-semibold">{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-serif uppercase tracking-wider text-sand"
                    >
                      Your Name / Entity <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Marcus Aurelius"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-[#0a0d14] border ${
                        errors.name
                          ? "border-rose-500"
                          : "border-gold-400/25 focus:border-gold-400"
                      } text-parchment placeholder-slate-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-serif">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-serif uppercase tracking-wider text-sand"
                    >
                      Return Address <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correspondent@institution.org"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 bg-[#0a0d14] border ${
                        errors.email
                          ? "border-rose-500"
                          : "border-gold-400/25 focus:border-gold-400"
                      } text-parchment placeholder-slate-600 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-serif">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-serif uppercase tracking-wider text-sand"
                  >
                    Subject of Missive <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="re: Engineering Engagement / Architectural Advisory"
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 bg-[#0a0d14] border ${
                      errors.subject
                        ? "border-rose-500"
                        : "border-gold-400/25 focus:border-gold-400"
                    } text-parchment placeholder-slate-600 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 font-serif">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-serif uppercase tracking-wider text-sand"
                  >
                    Epistle Content <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Articulate your parameters, timeline, and architectural objectives..."
                    disabled={isSubmitting}
                    className={`w-full px-3.5 py-2.5 bg-[#0a0d14] border ${
                      errors.message
                        ? "border-rose-500"
                        : "border-gold-400/25 focus:border-gold-400"
                    } text-parchment placeholder-slate-600 text-sm focus:outline-none transition-colors resize-y`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1 font-serif">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gold-400 hover:bg-gold-300 disabled:bg-gold-900/60 disabled:cursor-not-allowed text-stone-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg shadow-gold-950/40 hover:-translate-y-0.5 focus:outline-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                      <span>Transmitting Epistle...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Epistle</span>
                      <Feather className="w-4 h-4 text-stone-950" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
