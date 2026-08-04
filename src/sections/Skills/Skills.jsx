import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, icon: SiReact },
      { name: 'JavaScript', level: 88, icon: SiJavascript },
      { name: 'TypeScript', level: 80, icon: SiTypescript },
      { name: 'HTML', level: 92, icon: SiHtml5 },
      { name: 'CSS', level: 85, icon: SiCss3 },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', level: 82, icon: SiNodedotjs },
      { name: 'Express', level: 78, icon: SiExpress },
      { name: 'MongoDB', level: 75, icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 85, icon: SiGit },
      { name: 'Vite', level: 88, icon: SiVite },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-violet-400 uppercase">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-4 text-zinc-400">
            A snapshot of my stack. Adjust names and levels in{' '}
            <code className="text-zinc-300">Skills.jsx</code>.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>

              <ul className="mt-6 space-y-5">
                {group.skills.map(({ name, level, icon: Icon }) => (
                  <li key={name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                        <Icon className="shrink-0 text-zinc-400" size={18} />
                        {name}
                      </span>
                      <span className="text-xs text-zinc-500">{level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-violet-600 to-violet-400"
                        style={{ width: `${level}%` }}
                        role="progressbar"
                        aria-valuenow={level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${name} proficiency`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
