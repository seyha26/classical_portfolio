"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, Compass, Shield, Feather, Sparkles } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const approachIcons = [Shield, Compass, Feather];

  return (
    <section id="about" className="py-28 relative border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.25em] uppercase text-gold-300">
            <span>❖</span>
            <span>I // Prologue</span>
            <span>❖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-parchment tracking-tight">
            The Philosophy of Craft
          </h2>
          <div className="gold-divider w-32 mx-auto my-2" />
          <p className="text-sm sm:text-base font-light text-slate-400 font-sans">
            A treatise on architecture, structural integrity, and digital craftsmanship.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Classical Profile Plaque & Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md classical-card p-1 shadow-2xl">
              <div className="border border-gold-400/20 p-7 bg-[#0b0e14]/90 space-y-6">
                {/* Header Crest */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border-2 border-gold-400/60 bg-[#07090e] p-1 flex items-center justify-center shadow-inner">
                    <span className="font-serif text-2xl font-bold text-gold-300">
                      &sect;
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-parchment">{personal.name}</h3>
                    <p className="text-xs font-serif tracking-wider uppercase text-gold-400/90">{personal.title}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-serif">
                      <span>✦</span> {personal.location}
                    </p>
                  </div>
                </div>

                {/* Classical Highlights list */}
                <div className="space-y-3 pt-3 border-t border-gold-400/20 font-sans text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-serif font-bold">I.</span>
                    <span>Rigorous adherence to clean architecture &amp; structural durability.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-serif font-bold">II.</span>
                    <span>Fluid, accessible, and responsive visual composition across all viewports.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-400 font-serif font-bold">III.</span>
                    <span>Commitment to automated verification, type safety, and zero regressions.</span>
                  </div>
                </div>

                {/* Classic Epigram Card */}
                <div className="p-4 border-l-2 border-gold-400 bg-surface/70 text-xs font-serif italic text-sand/90">
                  &ldquo;A well-crafted system is not merely one that works today, but one whose structure remains clear and intelligible to tomorrow&apos;s stewards.&rdquo;
                </div>
              </div>
            </div>

            {/* Classical Stats Grid */}
            <div className="w-full max-w-md grid grid-cols-2 gap-3 mt-6">
              {personal.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 classical-card text-center border border-gold-400/20"
                >
                  <p className="text-2xl font-serif font-bold text-gold-300 tracking-wider">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-serif tracking-wider uppercase text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & The Vitruvian Triad */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {personal.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Vitruvian Principles Section */}
            <div className="space-y-4 pt-4 border-t border-gold-400/20">
              <h4 className="text-xs font-serif tracking-[0.25em] uppercase text-gold-400 flex items-center gap-2">
                <span>✦</span>
                <span>The Architectural Triad</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personal.approach.map((item, idx) => {
                  const Icon = approachIcons[idx % approachIcons.length];
                  return (
                    <div
                      key={item.title}
                      className="p-5 classical-card border border-gold-400/20 hover:border-gold-400/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-7 h-7 border border-gold-400/30 flex items-center justify-center text-gold-400">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-serif text-xs font-bold text-gold-400/80">
                          {item.numeral}
                        </span>
                      </div>
                      <h5 className="text-xs font-serif font-bold text-parchment uppercase tracking-wider mb-1.5">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
