export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative bg-[#050505] py-36"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-gray-400 backdrop-blur-xl">
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Trusted By
            <br />
            Real Brands
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every project is built with cinematic quality, premium visuals
            and a focus on delivering real business value.
          </p>

        </div>

        <div className="rounded-[40px] border border-white/10 bg-[#0B0B0B] p-12 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)] md:p-16">

          <div className="mb-8 flex gap-2 text-3xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="max-w-4xl text-2xl leading-10 text-gray-300 md:text-3xl">
            "Grxvitas.Media delivered a premium AI commercial for our
            hydrogen water ionizer that perfectly matched our brand vision.
            The visuals felt cinematic, communication was smooth and the
            final advertisement exceeded our expectations."
          </p>

          <div className="mt-12">

            <h3 className="text-3xl font-bold text-white">
              Manix World
            </h3>

            <p className="mt-2 uppercase tracking-[0.3em] text-gray-500">
              Premium Alkaline Water Brand
            </p>

            <a
              href="https://manixworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Visit Client →
            </a>

          </div>

        </div>

        <p className="mt-12 text-center text-gray-500">
          More client success stories coming soon.
        </p>

      </div>
    </section>
  );
}