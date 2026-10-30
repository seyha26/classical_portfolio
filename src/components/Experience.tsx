"use client";

import React, { useState } from "react";
import { portfolioData, TimelineEntry } from "@/data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  const { timeline } = portfolioData;
  const [filter, setFilter] = useState<"all" | "experience" | "education">("all");

  const filteredEntries = timeline.filter((item) => {
    if (filter === "all") return true;
    if (filter === "experience") return item.type === "experience";
    if (filter === "education")
      return item.type === "education" || item.type === "certification";
    return true;
  });

  const getTimelineIcon = (type: TimelineEntry["type"]) => {
    switch (type) {
      case "experience":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "certification":
        return Award;
      default:
        return Briefcase;
    }
  };

  const getBadgeStyle = (type: TimelineEntry["type"]) => {
    switch (type) {
      case "experience":
        return "bg-gold-400/10 text-gold-300 border-gold-400/30";
      case "education":
        return "bg-surface-light text-sand border-gold-400/20";
      case "certification":
        return "bg-surface text-slate-300 border-gold-400/20";
    }
  };

  return (
    <section id="experience" className="py-28 relative border-t border-gold-400/20 bg-[#06080c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.25em] uppercase text-gold-300">
            <span>❖</span>
            <span>IV // Chronology</span>
            <span>❖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-parchment tracking-tight">
            Annals &amp; Pedigree
          </h2>
          <div className="gold-divider w-32 mx-auto my-2" />
          <p className="text-sm sm:text-base font-light text-slate-400 font-sans">
            A chronological record of engineering posts held, formal academic training, and validated credentials.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
              filter === "all"
                ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
            }`}
          >
            All Annals
          </button>
          <button
            type="button"
            onClick={() => setFilter("experience")}
            className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
              filter === "experience"
                ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
            }`}
          >
            Engineering Praxis
          </button>
          <button
            type="button"
            onClick={() => setFilter("education")}
            className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
              filter === "education"
                ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
            }`}
          >
            Academia &amp; Credentials
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-gold-400/30 space-y-12">
          {filteredEntries.map((entry) => {
            const Icon = getTimelineIcon(entry.type);
            const badgeClass = getBadgeStyle(entry.type);

            return (
              <div key={entry.id} className="relative group">
                {/* Timeline Classical Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-7 h-7 bg-[#080a0f] border border-gold-400 flex items-center justify-center text-gold-400 shadow-sm group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-stone-950 transition-all duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div className="classical-card p-6 sm:p-7 relative border border-gold-400/20 hover:border-gold-400/50 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-serif tracking-wider uppercase border ${badgeClass}`}
                        >
                          {entry.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-serif tracking-wider text-gold-300">
                          <Calendar className="w-3 h-3 text-gold-400" />
                          {entry.period}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-parchment group-hover:text-gold-300 transition-colors">
                        {entry.role}
                      </h3>
                    </div>

                    <div className="sm:text-right text-xs font-serif text-slate-400 space-y-0.5">
                      <p className="text-sand font-medium">{entry.organization}</p>
                      <p className="flex items-center sm:justify-end gap-1 text-slate-400 text-[11px]">
                        <MapPin className="w-3 h-3 text-gold-400/70" />
                        {entry.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans font-light text-slate-300 leading-relaxed mt-3">
                    {entry.description}
                  </p>

                  {/* Skills / Key Competencies */}
                  {entry.skillsAcquired && entry.skillsAcquired.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gold-400/15 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-serif uppercase tracking-widest text-gold-400 mr-1 flex items-center gap-1">
                        <span>❖</span> Domains:
                      </span>
                      {entry.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] font-mono bg-surface border border-gold-400/20 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
