import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7 text-accent group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <span className="text-base font-semibold tracking-tight text-heading">Sunday Air Taxi</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a href="#adventures" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">Adventures</a>
            <a href="#about" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">About</a>
            <Link href="/pricing" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">Pricing</Link>
            <a href="#contact" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">Contact</a>
            <a
              href="tel:9078432002"
              className="ml-3 text-[13px] font-semibold bg-accent hover:bg-accent-light text-white px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Book Now
            </a>
          </div>
          <a
            href="tel:9078432002"
            className="md:hidden text-[13px] font-semibold bg-accent text-white px-4 py-2 rounded-full"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=85&fit=crop"
        alt="Alaska wilderness landscape with mountains and river"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-3xl">
          <p className="text-white/60 font-medium tracking-[0.25em] uppercase text-xs mb-6 animate-fade-in-up">
            Dillingham, Alaska
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] mb-6 text-white animate-fade-in-up animate-delay-100">
            Experience Alaska
            <br />
            <span className="italic font-normal">from Above</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            Bush plane charters, bear viewing, guided hunts, and raft rentals — all from 
            a local pilot with 15 years in Western Alaska.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#adventures"
              className="bg-white text-heading font-semibold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 text-sm"
            >
              Explore Adventures
            </a>
            <a
              href="tel:9078432002"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full transition-all hover:bg-white/10 text-sm"
            >
              (907) 843-2002
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdventuresSection() {
  const adventures = [
    {
      title: "Bear Viewing",
      subtitle: "Fly-in day trips",
      description: "Get up close with Alaska's incredible brown bears at remote viewing locations inaccessible by road.",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&h=1000&fit=crop",
    },
    {
      title: "Charter Flights",
      subtitle: "Anywhere in Alaska",
      description: "Whether it's the trip of a lifetime or a ride home to the village, we'll get you there safely.",
      image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=1000&fit=crop",
    },
    {
      title: "Raft Rentals",
      subtitle: "NRS quality gear",
      description: "High quality rafts with frame, straps, and cooler — everything for Alaska's world-class rivers.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=1000&fit=crop",
    },
    {
      title: "Outfitted Hunts",
      subtitle: "All-inclusive packages",
      description: "Fully outfitted self-guided hunts with all flights, food, gear, and supplies included.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1000&fit=crop",
    },
  ];

  return (
    <section id="adventures" className="py-28 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-xs mb-5">Our Adventures</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-[1.1]">
            Choose your Alaskan experience
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {adventures.map((adventure) => (
            <div
              key={adventure.title}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <Image
                src={adventure.image}
                alt={adventure.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-white/50 text-xs font-medium tracking-wider uppercase mb-1.5">{adventure.subtitle}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{adventure.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">{adventure.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-card-border bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <p className="font-display text-4xl lg:text-5xl font-bold text-heading mb-2">15+</p>
            <p className="text-sm text-muted">Years in Western Alaska</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl lg:text-5xl font-bold text-heading mb-2">1000+</p>
            <p className="text-sm text-muted">Flight Hours Logged</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl lg:text-5xl font-bold text-heading mb-2">100%</p>
            <p className="text-sm text-muted">Safety Record</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl lg:text-5xl font-bold text-heading mb-2">Local</p>
            <p className="text-sm text-muted">Family Owned & Operated</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { label: "Bear Viewing", src: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&h=600&fit=crop", span: "md:col-span-2 md:row-span-2" },
    { label: "Float Planes", src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&h=400&fit=crop", span: "" },
    { label: "River Adventures", src: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=600&h=400&fit=crop", span: "" },
    { label: "Mountain Views", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop", span: "" },
    { label: "Wildlife", src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop", span: "" },
  ];

  return (
    <section className="py-28 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-xs mb-5">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-heading">
            Into the Wild
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img) => (
            <div
              key={img.label}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-medium text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 lg:py-36 px-6 bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-xs mb-5">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-heading leading-[1.1] mb-8">
              Born & raised in<br />the Alaska wild
            </h2>
            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                Sunday Air Taxi is locally owned and operated by Gabe Davis and family.
                Gabe has spent the last fifteen years living, flying, hunting, fishing, and
                trapping in Western Alaska.
              </p>
              <p>
                Whether you&apos;re planning the trip of a lifetime, chartering to a remote job
                site, or need a ride home to the village — Gabe is the man to ask. His deep
                knowledge of the land, weather, and wildlife means you&apos;re always in the safest,
                most capable hands.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-heading hover:text-accent transition-colors group"
              >
                Get in touch with Gabe
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=1100&fit=crop"
                alt="Float plane on an Alaska lake"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-28 lg:py-36 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-8">
          <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"/>
          </svg>
        </div>
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-heading mb-8">
          &ldquo;Gabe made our bear viewing trip absolutely unforgettable. His knowledge of the
          area and wildlife is unmatched. We felt safe every moment.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-card-bg border border-card-border" />
          <div className="text-left">
            <p className="text-sm font-semibold text-heading">Happy Adventurer</p>
            <p className="text-xs text-muted">Bear Viewing Trip, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80&fit=crop"
        alt="Alaska mountain panorama"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Ready for the adventure of a lifetime?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Call us today to start planning your Alaskan experience. Custom trips tailored to exactly what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:9078432002"
            className="bg-white text-heading font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm"
          >
            Call (907) 843-2002
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-full transition-all hover:bg-white/10 text-sm"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-28 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-xs mb-5">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-heading leading-[1.1] mb-8">
              Let&apos;s plan your trip
            </h2>
            <p className="text-muted leading-relaxed mb-12 max-w-md">
              Give us a call or send a message. We&apos;ll help you plan the perfect Alaskan
              adventure — from day trips to multi-week expeditions.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-section-alt flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">Phone</p>
                  <a href="tel:9078432002" className="text-lg font-semibold text-heading hover:text-accent transition-colors">(907) 843-2002</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-section-alt flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider font-medium mb-0.5">Address</p>
                  <p className="font-medium text-heading">
                    PO Box 1422, Dillingham, Alaska 99576
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-card-border rounded-2xl p-8 lg:p-10 shadow-sm">
            <h3 className="text-lg font-semibold text-heading mb-6">Send a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-section-alt border-0 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-section-alt border-0 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="trip" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Trip Type</label>
                <select
                  id="trip"
                  className="w-full bg-section-alt border-0 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option>Bear Viewing</option>
                  <option>Charter Flight</option>
                  <option>Raft Rental</option>
                  <option>Outfitted Hunt</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-section-alt border-0 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell us about your trip..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-heading hover:bg-heading/80 text-white font-semibold py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-black/10 text-sm"
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
    <footer className="border-t border-card-border bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <span className="font-semibold text-heading">Sunday Air Taxi</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Locally owned bush plane charters serving Western Alaska from Dillingham.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-semibold text-heading text-xs uppercase tracking-wider mb-1">Navigation</p>
            <a href="#adventures" className="text-muted hover:text-heading transition-colors">Adventures</a>
            <a href="#about" className="text-muted hover:text-heading transition-colors">About</a>
            <Link href="/pricing" className="text-muted hover:text-heading transition-colors">Pricing</Link>
            <a href="#contact" className="text-muted hover:text-heading transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="font-semibold text-heading text-xs uppercase tracking-wider mb-1">Contact</p>
            <a href="tel:9078432002" className="text-muted hover:text-heading transition-colors">(907) 843-2002</a>
            <p className="text-muted">PO Box 1422</p>
            <p className="text-muted">Dillingham, Alaska 99576</p>
          </div>
        </div>
        <div className="border-t border-card-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Sunday Air Taxi. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Dillingham, Alaska
          </p>
        </div>
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
      <StatsSection />
      <GallerySection />
      <AboutSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
