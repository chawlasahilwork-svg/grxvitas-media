export default function Portfolio() {
  const projects = [
    {
      title: "Audi R8 Commercial",
      category: "Automotive",
      video: "/portfolio/audi.mp4",
    },
    {
      title: "Luxury Watch",
      category: "Product Film",
      video: "/portfolio/watch.mp4",
    },
    {
      title: "Luxury Perfume",
      category: "Brand Commercial",
      video: "/portfolio/perfume.mp4",
    },
    {
      title: "Grxvitas.Media Showreel",
      category: "Agency Reel",
      video: "/portfolio/agency.mp4",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[#050505] py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-gray-400 backdrop-blur-xl">
            Portfolio
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Featured AI Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every visual is designed to stop scrolling and make brands unforgettable.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0B] transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >

              <div className="relative h-72 overflow-hidden">

                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 text-3xl text-white backdrop-blur-xl transition-all duration-500 group-hover:scale-110">
                    ▶
                  </div>

                </div>

              </div>

              <div className="space-y-5 p-8">

                <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  Cinematic AI production crafted for premium brands,
                  luxury storytelling and high-converting advertisements.
                </p>

                <button className="pt-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 group-hover:translate-x-2">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}