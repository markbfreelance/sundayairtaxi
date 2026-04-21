import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1a14]/80 backdrop-blur-md border-b border-[#2a3d30]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <svg className="w-4 h-4 text-[#0f1a14]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">Sunday Air Taxi</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#adventures" className="text-sm text-muted hover:text-foreground transition-colors">Adventures</a>
            <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">About</a>
            <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">Pricing</Link>
            <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">Contact</a>
            <a
              href="tel:9078432002"
              className="text-sm font-medium bg-accent hover:bg-accent-light text-[#0f1a14] px-5 py-2.5 rounded-full transition-colors"
            >
              (907) 843-2002
            </a>
          </div>
          <a
            href="tel:9078432002"
            className="md:hidden text-sm font-medium bg-accent hover:bg-accent-light text-[#0f1a14] px-4 py-2 rounded-full transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center placeholder-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a14]/60 via-transparent to-[#0f1a14]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">
          Dillingham, Alaska
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 animate-fade-in-up animate-delay-100">
          Your Alaskan
          <br />
          <span className="text-accent">Adventure</span> Awaits
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delay-200">
          Experience the untamed Alaska wilderness by air. Bear viewing, charter flights,
          guided hunts, and unforgettable journeys into the wild.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="#adventures"
            className="bg-accent hover:bg-accent-light text-[#0f1a14] font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 text-base"
          >
            Explore Adventures
          </a>
          <a
            href="#contact"
            className="border border-foreground/20 hover:border-accent text-foreground font-medium px-8 py-4 rounded-full transition-all hover:text-accent text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function AdventuresSection() {
  const adventures = [
    {
      title: "Bear Viewing",
      description: "Get up close with Alaska's incredible brown bears in their natural habitat. Fly to remote viewing locations inaccessible by road.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Charter Flights",
      description: "We operate anywhere within the State of Alaska. Whether it's the trip of a lifetime or a ride home, we'll get you there.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      title: "Raft Rentals",
      description: "High quality NRS rafts complete with frame, straps, and cooler. Everything you need for Alaska's world-class rivers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Outfitted Hunts",
      description: "Fully outfitted hunts include all flights, food, gear, and supplies for a world-class self-guided hunting experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="adventures" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Choose Your Adventure
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventures.map((adventure) => (
            <div
              key={adventure.title}
              className="group relative bg-card-bg border border-card-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {adventure.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{adventure.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{adventure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { label: "Bear Viewing", gradient: "from-[#2d4a3a] to-[#1a3a2a]" },
    { label: "Float Planes", gradient: "from-[#1a3a4a] to-[#0d2838]" },
    { label: "River Rafting", gradient: "from-[#3a4a2d] to-[#2a3a1a]" },
    { label: "Wilderness", gradient: "from-[#4a3a2d] to-[#3a2a1a]" },
    { label: "Mountain Views", gradient: "from-[#2d3a4a] to-[#1a2a3a]" },
    { label: "Wildlife", gradient: "from-[#3a2d4a] to-[#2a1a3a]" },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-[#0d1f16]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Scenes from the Wild
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.label}
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${img.gradient} flex items-end p-6 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer`}
            >
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {img.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-8">
          Placeholder images — real photography coming soon
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Locally Owned.
              <br />
              <span className="text-accent">Alaska Proven.</span>
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Sunday Air Taxi is locally owned and operated by Gabe Davis and family.
                Gabe has spent the last fifteen years living, flying, hunting, fishing, and
                trapping in Western Alaska.
              </p>
              <p>
                Whether you&apos;re planning the trip of a lifetime, chartering to a remote job
                site, or need a ride home to the village — Gabe is the man to ask. His deep
                knowledge of the land, weather, and wildlife ensures you&apos;re in the safest,
                most experienced hands.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted">Years in Alaska</p>
              </div>
              <div className="w-px h-12 bg-card-border" />
              <div>
                <p className="text-3xl font-bold text-accent">1000s</p>
                <p className="text-sm text-muted">Flight Hours</p>
              </div>
              <div className="w-px h-12 bg-card-border" />
              <div>
                <p className="text-3xl font-bold text-accent">Local</p>
                <p className="text-sm text-muted">Family Owned</p>
              </div>
            </div>
          </div>
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#2d4a3a] to-[#1a2a20] border border-card-border flex items-center justify-center">
            <div className="text-center text-muted">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-sm">Pilot portrait placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-[#0d1f16]">
      <div className="max-w-4xl mx-auto text-center">
        <svg className="w-12 h-12 text-accent/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
        </svg>
        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-8">
          &ldquo;Gabe made our bear viewing trip absolutely unforgettable. His knowledge of the
          area and the wildlife is unmatched. We felt safe every moment and saw things we&apos;ll
          remember forever.&rdquo;
        </blockquote>
        <p className="text-accent font-medium">— A Happy Adventurer</p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent font-medium tracking-[0.15em] uppercase text-sm mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ready to Fly?
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-lg">
              Give us a call or drop us a line. We&apos;ll help you plan the perfect Alaskan
              adventure, whether it&apos;s a day trip or the expedition of a lifetime.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:9078432002" className="text-accent hover:text-accent-light transition-colors text-lg">(907) 843-2002</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-muted">
                    PO Box 1422<br />
                    Dillingham, Alaska 99576
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#0f1a14] border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#0f1a14] border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-[#0f1a14] border border-card-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your trip..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-[#0f1a14] font-semibold py-3.5 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-card-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-[#0f1a14]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          <span className="font-semibold">Sunday Air Taxi</span>
        </div>
        <div className="flex items-center gap-8 text-sm text-muted">
          <a href="#adventures" className="hover:text-foreground transition-colors">Adventures</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted/60">
          &copy; {new Date().getFullYear()} Sunday Air Taxi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AdventuresSection />
      <GallerySection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
