"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6"
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Main Spotlight */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[180px]" />

      {/* Top Glow */}

      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[150px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.45em] text-gray-400 backdrop-blur-xl">
            Luxury AI Advertising Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-10 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white md:text-8xl xl:text-[8rem]"
        >
          AI Ads
          <br />
          That Don't
          <br />
          Look Like AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl"
        >
          Grxvitas.Media crafts cinematic AI commercials,
          luxury product films and premium brand visuals
          designed to elevate perception and make brands
          impossible to ignore.
        </motion.p>
                <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white px-10 py-4 text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,255,255,.25)]"
          >
            <span className="relative z-10 font-semibold tracking-wide">
              View Portfolio
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-700 group-hover:translate-x-full" />
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="group flex flex-col items-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.35em] text-gray-500 transition group-hover:text-white">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="mt-2 h-2 w-2 rounded-full bg-white"
            />
          </div>
        </a>
      </motion.div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#030303] to-transparent" />

    </section>
  );
}