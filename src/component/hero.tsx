import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
                src="/imagen cv.jpeg"
                alt="Foto de perfil"
                width={400}
                height={526}
                className="h-131.5 w-100 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold md:text-7xl">
            &lt;developer&gt;
          </h1>

          <p className="max-w-md text-lg text-zinc-600">
            I'm a web developer in training. I'm interested 
            in creating clean, modern, and functional websites.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800"
            >
              See projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}