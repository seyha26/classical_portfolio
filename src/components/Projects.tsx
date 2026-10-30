"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 relative border-t border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 border border-gold-400/30 bg-surface/80 text-[11px] font-serif tracking-[0.25em] uppercase text-gold-300">
            <span>❖</span>
            <span>III // Selected Works</span>
            <span>❖</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-parchment tracking-tight">
            The Digital Folio (Opera)
          </h2>
          <div className="gold-divider w-32 mx-auto my-2" />
          <p className="text-sm sm:text-base font-light text-slate-400 font-sans">
            A curated exhibition of major software endeavors, demonstrating structural depth and
            uncompromising technical craftsmanship.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-serif tracking-widest uppercase transition-all duration-200 border ${
                activeCategory === category
                  ? "bg-gold-400 text-stone-950 border-gold-400 font-semibold shadow-md shadow-gold-950/40"
                  : "bg-surface text-slate-400 border-gold-400/20 hover:text-gold-200 hover:border-gold-400/50"
              }`}
            >
              {category === "All" ? "Complete Folio" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="classical-card group flex flex-col overflow-hidden relative"
            >
              {/* Outer Top Notch */}
              <div className="absolute top-2 left-2 z-10 text-[9px] font-serif text-gold-400/50">✦</div>
              <div className="absolute top-2 right-2 z-10 text-[9px] font-serif text-gold-400/50">✦</div>

              {/* Project Image & Plate Thumbnail */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-surface-light border-b border-gold-400/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-transparent" />

                {/* Classical Opus Banner on Image */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-0.5 text-[10px] font-serif tracking-widest uppercase bg-[#080a0f]/90 text-gold-300 border border-gold-400/40">
                    {project.opusNumber}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-serif tracking-wider uppercase bg-[#080a0f]/80 text-sand border border-gold-400/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-parchment group-hover:text-gold-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-sand/90 font-light"
                        >
                          <span className="text-gold-400 text-xs">❖</span>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-gold-400/20">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-sand/80 bg-surface border border-gold-400/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-serif tracking-wider uppercase font-semibold bg-gold-400 text-stone-950 hover:bg-gold-300 transition-all duration-200 shadow-sm"
                    >
                      <span>Live Exhibit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-serif tracking-wider uppercase border border-gold-400/30 bg-surface text-sand hover:text-gold-200 hover:border-gold-400 transition-all duration-200"
                      aria-label={`View ${project.title} repository archive`}
                    >
                      <Github className="w-4 h-4 text-gold-400" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Archival Callout Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 border border-gold-400/25 bg-surface/70">
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span className="text-xs sm:text-sm font-serif text-slate-300">
              Seeking additional open-source manuscripts and architectural explorations?
            </span>
            <a
              href="https://github.com/[Your-GitHub-Handle]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-serif tracking-widest uppercase font-semibold text-gold-300 hover:text-gold-200 inline-flex items-center gap-1 underline underline-offset-4"
            >
              Consult GitHub Archive
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
