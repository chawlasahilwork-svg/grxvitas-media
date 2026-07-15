"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="group text-3xl font-black tracking-tight text-white"
        >
          GRXVITAS
          <span className="text-zinc-500 transition group-hover:text-white">
            .MEDIA
          </span>
        </a>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm uppercase tracking-[0.28em] text-zinc-400 transition hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
                {/* Mobile Menu */}

        {open && (
          <div className="absolute left-0 top-20 w-full border-t border-white/10 bg-black/95 backdrop-blur-3xl md:hidden">
            <nav className="flex flex-col py-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 px-8 py-5 text-sm uppercase tracking-[0.3em] text-zinc-400 transition hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}