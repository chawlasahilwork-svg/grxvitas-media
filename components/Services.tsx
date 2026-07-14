export default function Services() {
  const services = [
    {
      title: "AI Commercials",
      desc: "Luxury cinematic ads created with next-generation AI."
    },
    {
      title: "Product Videos",
      desc: "Premium product showcases that increase conversions."
    },
    {
      title: "Social Media Ads",
      desc: "Scroll-stopping Instagram, Facebook & YouTube creatives."
    },
    {
      title: "AI Reels",
      desc: "Short-form viral content designed for maximum engagement."
    },
    {
      title: "Brand Identity",
      desc: "Creative visuals that make your brand unforgettable."
    },
    {
      title: "Creative Strategy",
      desc: "From scripting to final delivery, everything under one roof."
    }
  ];

  return (
    <section className="py-32 px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-gray-500 mb-4">
            Services
          </p>

          <h2 className="text-5xl font-bold">
            What We Create
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We build premium AI advertisements and cinematic visuals that help brands dominate attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 hover:border-white transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}