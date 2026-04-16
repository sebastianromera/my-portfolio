export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            A little about me
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-zinc-700">
            I am a developer in training, specializing in JavaScript, and 
            I am eager to continue building real projects.
          </p>

          <p className="text-lg leading-8 text-zinc-700">
            I'm currently learning React, Next.js, and TypeScript. 
            While improving both my logic and the construction of functional pages.
          </p>

          <p className="text-lg leading-8 text-zinc-700">
            I'm interested in creating clean, modern, and functional web experiences.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              React
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              Next.js
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              TypeScript
            </span>
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}