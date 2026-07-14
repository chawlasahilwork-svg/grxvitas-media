"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-[0_10px_40px_rgba(0,0,0,.45)] backdrop-blur-3xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black tracking-tight text-white transition hover:opacity-80"
        >
          Grxvitas
          <span className="text-gray-500">.Media</span>
        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-12 md:flex">

          <a
            href="#services"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            Services
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#portfolio"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            Portfolio
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#process"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            Process
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#reviews"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            Reviews
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#faq"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            FAQ
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="group relative text-sm font-medium uppercase tracking-[0.22em] text-gray-400 transition hover:text-white"
          >
            Contact
            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

        </nav>

      </div>
    </header>
  );
}