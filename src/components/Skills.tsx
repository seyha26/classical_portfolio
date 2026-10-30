"use client";

import React, { useState } from "react";
import { portfolioData, SkillItem } from "@/data/portfolioData";
import {
  Code2,
  Database,
  Layers,
  Server,
  Wrench,
  Palette,
  Terminal,
  ShieldCheck,
  Zap,
  Box,
  HardDrive,
  Cloud,
  GitBranch,
  Container,
  CloudRain,
  CheckCircle2,
  Layout,
  Cpu,
  Gauge,
  Network,
  BookOpen,
} from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const categoryKeys = Object.keys(skillCategories);

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return Layers;
      case "Code2": return Code2;
      case "Palette": return Palette;
      case "Layout": return Layout;
      case "Cpu": return Cpu;
      case "Gauge": return Gauge;
      case "Server": return Server;
      case "Network": return Network;
      case "Terminal": return Terminal;
      case "ShieldCheck": return ShieldCheck;
      case "Zap": return Zap;
      case "Database": return Database;
      case "Box": return Box;
      case "HardDrive": return HardDrive;
      case "Cloud": return Cloud;
      case "GitBranch": return GitBranch;
      case "Container": return Container;
      case "CloudRain": return CloudRain;
      case "CheckCircle2": return CheckCircle2;
      default: return Wrench;
    }
  };

  const getLevelBadge = (level: SkillItem["level"]) => {
    switch (level) {
      case "Mastery":
        return {
          bg: "bg-gold-400/10 text-gold-300 border-gold-400/40",
          dots: 3,
        };
      case "Advanced":
        return {
          bg: "bg-surface-light text-sand border-gold-400/25",
          dots: 2,
        };
      case "Proficient":
      default:
        return {
          bg: "bg-surface text-slate-400 border-surface-border",
          dots: 1,
        };
    }
  };

  return (
    <section id="skills" className="py-28 relative border-t border-gold-400/20 bg-[#06080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.25em] uppercase text-gold-300">
            <span>❖</span>
            <span>II // Repertoire</span>
            <span>❖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-parchment tracking-tight">
            Technical Canon &amp; Disciplines
          </h2>
          <div className="gold-divider w-32 mx-auto my-2" />
          <p className="text-sm sm:text-base font-light text-slate-400 font-sans">
            A comprehensive catalog of languages, architectures, datastores, and toolchains honed through practice.
          </p>
        </div>

        {/* Classical Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
              activeFilter === "all"
                ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
            }`}
          >
            Omnis (All Disciplines)
          </button>
          {categoryKeys.map((key) => {
            const cat = skillCategories[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
                  activeFilter === key
                    ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                    : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
                }`}
              >
                {cat.numeral}. {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-12">
          {categoryKeys
            .filter((key) => activeFilter === "all" || activeFilter === key)
            .map((catKey) => {
              const category = skillCategories[catKey];
              return (
                <div
                  key={catKey}
                  className="classical-card p-6 sm:p-8 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-gold-400/20 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-serif font-bold text-lg text-gold-400">
                        {category.numeral}.
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-serif font-bold text-parchment tracking-wide">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-sans font-light mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-serif tracking-widest uppercase text-gold-300 border border-gold-400/30 px-3 py-1 self-start sm:self-auto bg-surface">
                      {category.skills.length} Competencies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => {
                      const IconComponent = getIcon(skill.iconName);
                      const badgeInfo = getLevelBadge(skill.level);

                      return (
                        <div
                          key={skill.name}
                          className="group p-4 bg-[#0a0d14] border border-gold-400/15 hover:border-gold-400/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 border border-gold-400/25 bg-surface flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-serif text-slate-200 group-hover:text-gold-200 transition-colors">
                                {skill.name}
                              </h4>
                              {skill.featured && (
                                <span className="inline-flex items-center gap-1 text-[10px] text-gold-400 font-serif tracking-wider uppercase">
                                  <span>✦</span> Primus
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Skill Level Badge */}
                          <div className="flex flex-col items-end gap-1">
                            <span
                              className={`text-[10px] font-serif uppercase tracking-widest px-2 py-0.5 border ${badgeInfo.bg}`}
                            >
                              {skill.level}
                            </span>
                            <div className="flex items-center gap-1 mt-0.5">
                              {[1, 2, 3].map((dot) => (
                                <span
                                  key={dot}
                                  className={`w-1 h-1 ${
                                    dot <= badgeInfo.dots
                                      ? "bg-gold-400"
                                      : "bg-surface-border"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
