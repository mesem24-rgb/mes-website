const principles = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by learning how your business operates, where friction exists, and what a better experience should look like.",
  },
  {
    number: "02",
    title: "Collaborate",
    description:
      "The strongest solutions come from combining your operational knowledge with thoughtful design and technical guidance.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We create modern software around your workflow instead of forcing your business into a rigid, prebuilt system.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "The relationship does not end at launch. Your software should continue to evolve as your business grows and changes.",
  },
];

export function WorkingTogether() {
  return (
    <section
      id="working-together"
      aria-labelledby="working-together-heading"
      className="relative overflow-hidden py-28 sm:py-36 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.035] blur-[140px]"
      />

      <div className="mes-container relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              Working together
            </p>

            <h2
              id="working-together-heading"
              className="mt-6 max-w-[9ch] text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
leading-[0.92]
tracking-[-0.06em] font-semibold leading-[0.92] tracking-[-0.07em] text-white"
            >
              A different way to build software.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-white/46">
              MES combines business understanding, thoughtful design, and
              modern technology to create software that fits the way your
              organization actually works.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group grid gap-5 border-b border-white/[0.08] py-10 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-12"
              >
                <div>
                  <span className="font-mono text-[0.7rem] font-medium tracking-[0.12em] text-blue-300/60">
                    {principle.number}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="h-px w-7 bg-blue-400/35 transition-all duration-300 group-hover:w-10 group-hover:bg-blue-400/70"
                    />

                    <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="mt-5 max-w-xl text-base leading-8 text-white/45">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}