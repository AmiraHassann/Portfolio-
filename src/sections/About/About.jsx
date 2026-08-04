import { HiCode, HiGlobeAlt, HiLightningBolt } from 'react-icons/hi';

const aboutContent = {
  title: 'About Me',
  subtitle: 'A quick intro to who I am and how I work.',
  paragraphs: [
    "I'm a developer focused on clean UI, solid architecture, and shipping products that people actually enjoy using. I like turning vague ideas into clear requirements and then into working software.",
    'When I am not coding, I am learning new tools, contributing to side projects, or refining how I design and test features before they go live.',
  ],
  highlights: [
    { icon: HiCode, label: '3+ years', detail: 'Building web apps' },
    { icon: HiLightningBolt, label: 'Performance', detail: 'Core Web Vitals minded' },
    { icon: HiGlobeAlt, label: 'Remote', detail: 'Open to collaboration' },
  ],
  cvHref: '/cv.pdf',
};

function About() {
  return (
    <section id="about" className="border-t border-white/5 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-violet-400 uppercase">
            {aboutContent.title}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Crafting thoughtful digital products
          </h2>
          <p className="mt-4 text-zinc-400">{aboutContent.subtitle}</p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-violet-600/30 to-zinc-900 p-1">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-zinc-900/80">
                <span className="text-5xl font-bold text-violet-400/80">YN</span>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-zinc-500 lg:text-left">
              Replace with your photo in <code className="text-zinc-400">About.jsx</code>
            </p>
          </div>

          <div>
            <div className="space-y-4 text-base leading-relaxed text-zinc-300">
              {aboutContent.paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {aboutContent.highlights.map(({ icon: Icon, label, detail }) => (
                <li
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="text-violet-400" size={22} />
                  <p className="mt-3 font-semibold text-white">{label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{detail}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={aboutContent.cvHref}
                className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/5"
              >
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
