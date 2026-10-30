"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Compass,
  Feather,
} from "lucide-react";

export default function Hero() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Classical Radial Gold Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Classical Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">
            {/* Roman Availability Ribbon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.2em] uppercase text-gold-300 shadow-sm">
              <span className="text-gold-400">❖</span>
              <span>{personal.status}</span>
              <span className="text-gold-400">❖</span>
            </div>

            {/* Classical Title & Epitaph */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-gold-400/90 font-medium">
                Folio &amp; Engineering Treatise
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-parchment tracking-tight leading-tight">
                {personal.name}
              </h1>
              <div className="h-0.5 w-24 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent my-3" />
              <h2 className="text-2xl sm:text-3xl font-serif italic text-sand/90">
                {personal.title}
              </h2>
            </div>

            {/* Philosophical Introduction */}
            <p className="text-base sm:text-lg font-sans text-slate-300 max-w-xl leading-relaxed font-light">
              {personal.tagline}{" "}
              <span className="text-sand/90">
                Bridging robust distributed backends with timeless user interfaces, engineered with
                structural discipline and precision.
              </span>
            </p>

            {/* Classical CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold-400 text-stone-950 font-serif text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-300 transition-all duration-300 shadow-lg shadow-gold-900/30 hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                <span>Inspect Selected Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-surface border border-gold-400/40 text-gold-200 hover:text-white hover:border-gold-400 hover:bg-surface-light font-serif text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-gold-400"
              >
                <Feather className="w-3.5 h-3.5 text-gold-400" />
                <span>Initiate Epistle</span>
              </button>
            </div>

            {/* Archival Links & Email Copy */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-slate-400 mr-2 flex items-center gap-1">
                <Compass className="w-3 h-3 text-gold-400" /> Archival:
              </span>

              {socials.map((social) => {
                let Icon = Github;
                if (social.platform.toLowerCase().includes("linkedin")) Icon = Linkedin;
                else if (social.platform.toLowerCase().includes("twitter") || social.platform.toLowerCase().includes("x")) Icon = Twitter;
                else if (social.platform.toLowerCase().includes("email")) Icon = Mail;

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-gold-400/20 bg-surface text-slate-400 hover:text-gold-300 hover:border-gold-400/50 hover:bg-surface-light transition-all duration-200 shadow-sm group"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-105" />
                  </a>
                );
              })}

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-gold-400/25 bg-surface text-xs font-mono text-slate-400 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
                title="Copy address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold-400" />
                    <span className="text-gold-300 font-serif text-[11px] tracking-wider uppercase">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold-400/80" />
                    <span className="font-serif text-[11px] tracking-wider uppercase">Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Classical Architectural Codex Specification */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Classical Framed Plate */}
            <div className="w-full max-w-lg classical-card p-1 shadow-2xl relative">
              {/* Outer Classical Corner Ornaments */}
              <div className="absolute top-2 left-2 text-[10px] text-gold-400/40 font-serif">⌜</div>
              <div className="absolute top-2 right-2 text-[10px] text-gold-400/40 font-serif">⌝</div>
              <div className="absolute bottom-2 left-2 text-[10px] text-gold-400/40 font-serif">⌞</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-gold-400/40 font-serif">⌟</div>

              {/* Inner Plate Border */}
              <div className="border border-gold-400/20 p-5 bg-[#0a0d14]/90 space-y-4">
                {/* Plate Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gold-400/20">
                  <div className="flex items-center gap-2">
                    <span className="text-gold-400 font-serif text-xs">✦</span>
                    <span className="font-serif text-xs tracking-[0.2em] uppercase text-gold-300 font-medium">
                      Codex Digitalis // Tabula I
                    </span>
                  </div>
                  <span className="text-[10px] font-serif uppercase tracking-widest text-slate-400 border border-gold-400/20 px-2 py-0.5">
                    Anno MMXXIV
                  </span>
                </div>

                {/* Classical Epigram */}
                <p className="font-serif italic text-xs text-gold-200/80 text-center py-1">
                  &ldquo;In structura veritas, in codice pulchritudo.&rdquo;
                </p>

                {/* Classical Architect Contract */}
                <div className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#07090e] p-4 border border-gold-400/10">
                  <div className="text-gold-400/60">// Architect Profile &amp; Specifications</div>
                  <div>
                    <span className="text-gold-400">const</span>{" "}
                    <span className="text-sand">artisan</span>:{" "}
                    <span className="text-gold-300">Architect</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-gold-200">&quot;{personal.name}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">vocation:</span>{" "}
                    <span className="text-gold-200">&quot;{personal.title}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">discipline:</span> [
                  </div>
                  <div className="pl-8 text-slate-300">
                    &quot;Distributed Architecture&quot;,
                  </div>
                  <div className="pl-8 text-slate-300">
                    &quot;Ergonomic Interface Design&quot;,
                  </div>
                  <div className="pl-8 text-slate-300">
                    &quot;Type-Safe Systems Engineering&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-400">creed:</span> [
                  </div>
                  <div className="pl-8 text-gold-300/90">
                    &quot;Firmitas&quot;, &quot;Utilitas&quot;, &quot;Venustas&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-400">&quot;Commission Ready&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Seal Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-serif">
                  <span className="text-gold-400 flex items-center gap-1">
                    <span>❖</span> Enduring Quality Standard
                  </span>
                  <span className="text-[10px] tracking-widest text-slate-400">AUTHENTICATED</span>
                </div>
              </div>
            </div>

            {/* Floating Classical Plaque */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -left-4 px-4 py-1.5 bg-[#0d1118] border border-gold-400/40 text-[11px] font-serif tracking-widest uppercase text-gold-300 shadow-xl backdrop-blur-md">
              <span>✦ High Reliability: 99.9% ✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
