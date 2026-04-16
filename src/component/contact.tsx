export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Contact
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          Let's talk
        </h2>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300">
          If you want to contact me to work together, collaborate, or simply
          chat about web development, you can write to me through any of these means.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:sebaromeratapia@gmail.com"
            className="w-fit rounded-full border border-white px-5 py-3 transition hover:bg-white hover:text-black"
          >
            Email
          </a>

          <a
            href="https://github.com/sebastianromera"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full border border-white px-5 py-3 transition hover:bg-white hover:text-black"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sebastian-romera-b95a573b7"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full border border-white px-5 py-3 transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}