"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const { personal, socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Prologue", href: "#about" },
    { name: "Repertoire", href: "#skills" },
    { name: "Selected Works", href: "#projects" },
    { name: "Chronology", href: "#experience" },
    { name: "Epistle", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gold-400/20 bg-[#05070a] text-slate-400 py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-gold-400/15">
          {/* Brand & Seal */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-gold-400/40 bg-surface flex items-center justify-center text-gold-400 rotate-45">
              <span className="-rotate-45 font-serif text-xs font-bold">✦</span>
            </div>
            <div>
              <span className="font-serif text-sm font-bold tracking-[0.2em] uppercase text-parchment">
                {personal.name}
              </span>
              <p className="text-[11px] font-serif text-gold-400/80 tracking-wider uppercase">{personal.title}</p>
            </div>
          </div>

          {/* Classical Section Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-serif tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gold-400/30 bg-surface hover:border-gold-400 hover:text-gold-200 text-slate-300 text-xs font-serif tracking-widest uppercase transition-all duration-200 group"
            aria-label="Return to summit of page"
          >
            <span>Ascend to Summit</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Bar: Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-slate-500">
          <p className="flex items-center gap-2 text-center sm:text-left tracking-wider">
            <span>&copy; MMXXIV—{currentYear} {personal.name}. Ex Libris Digitalis.</span>
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              let Icon = Github;
              if (social.platform.toLowerCase().includes("linkedin")) Icon = Linkedin;
              else if (
                social.platform.toLowerCase().includes("twitter") ||
                social.platform.toLowerCase().includes("x")
              )
                Icon = Twitter;
              else if (social.platform.toLowerCase().includes("email")) Icon = Mail;

              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-gold-300 transition-colors p-1"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
