export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your brand, audience and business goals before creating anything.",
    },
    {
      number: "02",
      title: "Creative Strategy",
      description:
        "Scripts, concepts and visual direction are carefully planned for maximum impact.",
    },
    {
      number: "03",
      title: "AI Production",
      description:
        "Your commercial is crafted using cutting-edge AI tools with cinematic quality.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Final optimized videos delivered for Instagram, Facebook, YouTube and more.",
    },
  ];

  return (
    <section
      id="process"
      className="relative bg-black py-36"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-gray-400 backdrop-blur-xl">
            Process
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every project follows a premium production pipeline from strategy
            to final delivery.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >

              <span className="text-6xl font-black text-white/10">
                {step.number}
              </span>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}