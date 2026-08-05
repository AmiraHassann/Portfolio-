import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiLayers, FiStar } from 'react-icons/fi';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_28%,rgba(255,255,255,0)_68%)] blur-3xl" />
        <div className="absolute left-[-8rem] top-[22rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.18)_0%,rgba(96,165,250,0.05)_35%,rgba(96,165,250,0)_70%)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[18rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.16)_0%,rgba(168,85,247,0.05)_32%,rgba(168,85,247,0)_72%)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/70 uppercase backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.75)]" />
            Available for select freelance work
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
          >
            Crafting premium digital products with a sharp eye for detail.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            I build dark, polished interfaces for modern brands and products, with motion,
            clarity, and a strong visual hierarchy. The focus is on projects that feel as
            good as they look.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              View Projects
              <FiArrowRight size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/18 hover:bg-white/10"
            >
              Download Resume
              <FiDownload size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap gap-3 text-sm text-white/70"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <FiStar className="text-white/85" />
              Apple-inspired UI systems
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <FiLayers className="text-white/85" />
              Motion-led frontends
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <FiStar className="text-white/85" />
              Projects first
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0)_60%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <img
                src="/Profile.webp"
                alt="Profile portrait"
                className="h-[28rem] w-full object-cover object-top sm:h-[34rem]"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <p className="text-xs tracking-[0.18em] text-white/45 uppercase">Focus</p>
                <p className="mt-2 text-sm text-white">UI, motion, and product polish</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <p className="text-xs tracking-[0.18em] text-white/45 uppercase">Stack</p>
                <p className="mt-2 text-sm text-white">React, Vite, Tailwind, Framer</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <p className="text-xs tracking-[0.18em] text-white/45 uppercase">Output</p>
                <p className="mt-2 text-sm text-white">Portfolio and landing pages</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;