export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-[#0B0B0B]/90 p-10 backdrop-blur-2xl md:p-16">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-gray-400">
              Contact
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
              Let's Build
              <br />
              Something Extraordinary
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Have a project in mind? Whether it's an AI commercial,
              luxury product film or cinematic brand campaign, let's
              create something unforgettable.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {/* Email */}

            <a
              href="mailto:chawlasahilwork@gmail.com"
              className="group rounded-3xl border border-white/10 bg-black/60 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Email
              </p>

              <h3 className="mt-5 text-3xl font-bold text-white">
                Send an Email
              </h3>

              <p className="mt-5 break-all text-gray-400">
                chawlasahilwork@gmail.com
              </p>

              <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-white transition group-hover:translate-x-2">
                Contact →
              </span>

            </a>

            {/* Instagram */}

            <a
              href="https://instagram.com/grxvitas.media"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-black/60 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >

              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                Instagram
              </p>

              <h3 className="mt-5 text-3xl font-bold text-white">
                DM on Instagram
              </h3>

              <p className="mt-5 text-gray-400">
                @grxvitas.media
              </p>

              <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-[0.25em] text-white transition group-hover:translate-x-2">
                Open Instagram →
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}