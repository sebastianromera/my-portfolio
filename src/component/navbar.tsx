export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-black/90 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">&lt;/Sebastián Romera&gt;</div>

        <ul className="hidden gap-8 text-sm md:flex">
          <li><a href="#about" className="hover:text-zinc-300">About</a></li>
          <li><a href="#projects" className="hover:text-zinc-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-zinc-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}