type Project = {
  title: string;
  description: string;
  stack: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Developer Portfolio",
    description: "My personal portfolio",
    stack: "Next.js · TypeScript · Tailwind",
    link: "#",
  },
  {
    title: "HOA",
    description: "Application to manage private neighborhoods",
    stack: "React · CSS · JavaScript · Next.js",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 px-6 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Some projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-zinc-600">{project.description}</p>
              <p className="mb-6 text-sm text-zinc-500">{project.stack}</p>

              <a
                href={project.link}
                className="inline-block rounded-full border border-black px-4 py-2 text-sm transition hover:bg-black hover:text-white"
              >
                See more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}