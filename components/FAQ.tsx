export default function FAQ() {
  const faqs = [
    {
      question: "How long does an AI commercial take?",
      answer:
        "Most projects are completed within 3–7 business days depending on complexity and revisions.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes. We collaborate remotely with brands and businesses worldwide.",
    },
    {
      question: "Can you create videos in different languages?",
      answer:
        "Absolutely. We can produce AI commercials in multiple languages with voiceovers and subtitles.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We create AI ads for automotive, fashion, tech, real estate, healthcare, e-commerce and many more.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply request a custom quote, tell us about your project and we'll guide you through the complete process.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#050505] py-36"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-gray-400">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Everything you need to know before starting your AI advertising project.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[28px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-300 hover:border-white/20"
            >

              <h3 className="text-2xl font-bold text-white">
                {faq.question}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}