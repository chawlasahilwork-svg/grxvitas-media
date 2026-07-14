import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  return (
    <MotionWrapper>
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6"
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

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[180px]" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl text-center">

          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-gray-400 backdrop-blur-xl">
            Luxury AI Advertising Agency
          </span>

          <h1 className="mt-10 text-6xl font-black leading-none tracking-tight text-white md:text-8xl xl:text-9xl">
            CINEMATIC
            <br />
            AI ADS
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400 md:text-xl">
            We create premium AI commercials, luxury product films,
            cinematic advertisements and scroll-stopping visuals
            that help brands stand out.
          </p>

          {/* CTA */}

          <div className="mt-14 flex justify-center">

            <a
              href="#portfolio"
              className="rounded-full border border-white/15 bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105"
            >
              View Portfolio →
            </a>

          </div>

          {/* Features */}

          <div className="mt-24 flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-[0.25em] text-gray-500">

            <span>Commercial Quality</span>

            <span className="hidden md:block h-1 w-1 rounded-full bg-gray-700"></span>

            <span>Custom Concepts</span>

            <span className="hidden md:block h-1 w-1 rounded-full bg-gray-700"></span>

            <span>Worldwide Remote</span>

          </div>

        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-gray-500">
          ↓
        </div>

      </section>
    </MotionWrapper>
  );
}