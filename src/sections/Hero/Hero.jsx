import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiMail } from 'react-icons/hi';

const profile = {
  greeting: "Hi, I'm",
  name: 'Your Name',
  role: 'Full Stack Developer',
  tagline:
    'I build fast, accessible web experiences with React and modern tooling.',
  social: [
    { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin },
    { label: 'Email', href: 'mailto:you@example.com', icon: HiMail },
  ],
};

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-sm font-medium tracking-wide text-violet-400 uppercase sm:text-base">
          {profile.greeting}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <ul className="mt-12 flex items-center gap-3">
          {profile.social.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-violet-500/50 hover:text-violet-400"
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 flex flex-col items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-300"
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <HiArrowDown className="animate-bounce" size={18} />
      </a>
    </section>
  );
}

export default Hero;
