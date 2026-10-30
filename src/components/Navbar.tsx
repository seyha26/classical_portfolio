"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Prologue", href: "#about" },
    { name: "Repertoire", href: "#skills" },
    { name: "Selected Works", href: "#projects" },
    { name: "Chronology", href: "#experience" },
    { name: "Epistle", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080a0f]/90 backdrop-blur-md border-b border-gold-400/20 shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Classical Seal / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-base tracking-widest text-parchment focus:outline-none focus:ring-1 focus:ring-gold-400 p-1"
          aria-label="Homepage"
        >
          <div className="w-8 h-8 rounded-none border border-gold-400/40 bg-surface flex items-center justify-center text-gold-400 group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300 shadow-sm rotate-45">
            <span className="-rotate-45 font-serif text-xs font-bold">✦</span>
          </div>
          <span className="font-serif tracking-[0.25em] uppercase text-xs sm:text-sm text-sand group-hover:text-gold-300 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Classical Navigation */}
        <nav className="hidden md:flex items-center gap-1 border border-gold-400/20 bg-surface/90 px-5 py-2 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3.5 py-1 text-xs font-serif tracking-widest uppercase transition-all duration-200 ${
                  isActive
                    ? "text-gold-300 font-semibold border-b border-gold-400"
                    : "text-slate-400 hover:text-gold-200 hover:border-b hover:border-gold-400/40"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-serif tracking-widest uppercase text-gold-300 border border-gold-400/50 hover:bg-gold-400/15 hover:border-gold-400 hover:text-gold-200 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-400"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-gold-400/30 bg-surface text-gold-300 hover:text-gold-200 focus:outline-none focus:ring-1 focus:ring-gold-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14]/98 backdrop-blur-xl border-b border-gold-400/30 px-6 pt-5 pb-6 mt-2 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-2 py-1.5 text-xs font-serif tracking-widest uppercase text-sand hover:text-gold-300 border-l-2 border-transparent hover:border-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-gold-400/20">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-serif tracking-widest uppercase text-gold-200 border border-gold-400/60 bg-gold-400/10"
            >
              <span>Transmit Epistle</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
