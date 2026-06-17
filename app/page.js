import Image from "next/image";

const logoSrc = "/SuperZero Logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Music", href: "#music" },
  { label: "Photos", href: "#photos" },
  { label: "Video", href: "#video" },
  { label: "Contact", href: "#contact" },
];

const photos = [
  { id: 1, src: "/Bk-1.png", alt: "BK", label: "BK" },
  { id: 2, src: "/BK-2.png", alt: "BK", label: "BK" },
  { id: 3, src: "/neil-1.png", alt: "Neil", label: "Neil" },
  { id: 4, src: "/Sammy-1.png", alt: "Sammy", label: "Sammy" },
  { id: 5, src: "/Sammy-2.png", alt: "Sammy", label: "Sammy" },
  { id: 6, src: "/bex-1.png", alt: "Bex", label: "Bex" },
  { id: 7, src: "/band.jpg", alt: "The Band", label: "The Band" },
];

export default function Home() {
  return (
    <div className="grain-overlay">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-ash/80 bg-background/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <Image
              src={logoSrc}
              alt="SuperZero"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-2xl tracking-[0.2em] text-blood uppercase">
              SuperZero
            </span>
          </a>
          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm font-semibold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-blood"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 sm:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-xs font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:text-blood"
                >
                  {link.label.charAt(0)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6"
      >
        <Image
          src="/band.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/70" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 80%, #8B0000 0%, transparent 60%), radial-gradient(ellipse at 20% 20%, #1a0000 0%, transparent 40%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.3)_0%,#050505_100%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-blood" />

        <div className="relative z-10 text-center">
          <Image
            src={logoSrc}
            alt="SuperZero Rock & Roll"
            width={300}
            height={300}
            priority
            className="mx-auto mb-8 h-[300px] w-[300px] object-contain drop-shadow-[0_0_40px_rgba(139,0,0,0.35)]"
          />
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">
            Southeast England
          </p>
          <h1 className="red-glow font-display text-[clamp(5rem,18vw,14rem)] leading-none tracking-[0.05em] text-white uppercase">
            Super
            <span className="text-blood">Zero</span>
          </h1>
          <p className="mt-6 font-body text-lg font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Raw Rock &amp; Roll
          </p>
        </div>

        <a
          href="#music"
          className="absolute bottom-12 font-body text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600 transition-colors hover:text-blood"
        >
          Scroll ↓
        </a>
      </section>

      {/* Bio */}
      <section className="border-t border-ash bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-divider mx-auto mb-12 w-32" />
          <h2 className="mb-8 font-display text-5xl tracking-wider text-white uppercase">
            The Band
          </h2>
          <p className="font-body text-xl leading-relaxed font-normal text-zinc-300">
            A hard-hitting 4-piece rock band from Southeast England. Inspired by
            AC/DC, The Doors, Black Sabbath and ZZ Top.
          </p>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="border-t border-ash bg-background px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="section-divider mx-auto mb-12 w-32" />
          <h2 className="mb-4 text-center font-display text-5xl tracking-wider text-white uppercase">
            Music
          </h2>
          <p className="mb-12 text-center font-body text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Tracks coming soon
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((track) => (
              <div
                key={track}
                className="group border border-ash bg-charcoal p-6 transition-colors hover:border-blood"
              >
                <div className="mb-4 flex h-32 items-center justify-center border border-ash bg-background">
                  <span className="font-display text-4xl text-ash group-hover:text-blood">
                    ▶
                  </span>
                </div>
                <p className="font-display text-2xl tracking-wider text-zinc-400 uppercase">
                  Track {track}
                </p>
                <p className="font-body text-xs uppercase tracking-widest text-zinc-600">
                  Placeholder
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="border-t border-ash bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="section-divider mx-auto mb-12 w-32" />
          <h2 className="mb-12 text-center font-display text-5xl tracking-wider text-white uppercase">
            Photos
          </h2>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden border border-ash bg-background"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-blood/50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="red-glow font-display text-2xl tracking-[0.2em] text-white uppercase md:text-3xl">
                    {photo.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-blood transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="border-t border-ash bg-background px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="section-divider mx-auto mb-12 w-32" />
          <h2 className="mb-12 text-center font-display text-5xl tracking-wider text-white uppercase">
            Video
          </h2>
          <div className="relative aspect-video border-2 border-ash bg-charcoal">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/ZwNJrEPzbFs"
              title="SuperZero video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-ash bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-divider mx-auto mb-12 w-32" />
          <h2 className="mb-4 font-display text-5xl tracking-wider text-white uppercase">
            Contact
          </h2>
          <p className="mb-12 font-body text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Booking &amp; Enquiries
          </p>
          <div className="space-y-6">
            <a
              href="mailto:keenenbk@gmail.com"
              className="block border border-ash bg-background px-8 py-6 font-body text-lg font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:border-blood hover:text-white"
            >
              keenenbk@gmail.com
            </a>
            <a
              href="tel:+447764873881"
              className="block border border-ash bg-background px-8 py-6 font-body text-lg font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:border-blood hover:text-white"
            >
              +44 7764 873881
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blood bg-background px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-2xl tracking-[0.2em] text-blood uppercase">
            SuperZero
          </p>
          <p className="font-body text-xs uppercase tracking-widest text-zinc-600">
            © {new Date().getFullYear()} SuperZero. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
