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

      <div className="absolute inset-0 bg-black/60" />

      {/* Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[180px]" />
      </div>

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

        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.4em] text-gray-400 backdrop-blur-xl"
        >
          Luxury AI Advertising Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
          className="mt-10 text-6xl font-black leading-none tracking-tight text-white md:text-8xl xl:text-[7rem]"
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
          transition={{ delay: .45 }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl"
        >
          Grxvitas.Media creates cinematic AI commercials,
          premium product films and luxury brand visuals
          that capture attention and elevate perception.
        </motion.p>
                <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-14"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full border border-white bg-white px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,.25)]"
          >
            View Portfolio
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
          className="flex flex-col items-center gap-3 text-gray-500 transition hover:text-white"
        >
          <span className="text-[11px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="mt-2 h-2 w-2 rounded-full bg-white"
            />
          </div>
        </a>
      </motion.div>

    </section>
  );
}