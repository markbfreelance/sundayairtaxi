import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Sunday Air Taxi",
  description:
    "Charter rates, raft rentals, and outfitted hunt pricing for Sunday Air Taxi in Dillingham, Alaska.",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7 text-accent group-hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <span className="text-base font-semibold tracking-tight text-heading">Sunday Air Taxi</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Link href="/#adventures" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">Adventures</Link>
            <Link href="/#about" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">About</Link>
            <Link href="/pricing" className="text-[13px] font-medium text-heading bg-black/[0.03] px-4 py-2 rounded-full">Pricing</Link>
            <Link href="/#contact" className="text-[13px] font-medium text-muted hover:text-heading px-4 py-2 rounded-full hover:bg-black/[0.03] transition-all">Contact</Link>
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

export default function PricingPage() {
  const services = [
    {
      title: "Charter Flights",
      description:
        "We operate anywhere within the State of Alaska. Whether you're planning the trip of a lifetime, chartering to a remote job site, or just need a ride home to the village — we can get you there.",
      features: [
        "Anywhere in Alaska",
        "Remote job site access",
        "Village transportation",
        "Custom trip planning",
        "Experienced local pilot",
      ],
      cta: "Call for Quote",
      highlight: false,
    },
    {
      title: "Bear Viewing",
      description:
        "Fly to remote bear viewing locations inaccessible by road. Experience Alaska's incredible brown bears in their natural habitat with a knowledgeable local guide.",
      features: [
        "Remote fly-in locations",
        "Local guide included",
        "Full-day experiences",
        "Small group sizes",
        "Camera-friendly viewing spots",
      ],
      cta: "Call for Quote",
      highlight: true,
    },
    {
      title: "Raft Rentals",
      description:
        "High quality NRS Rafts that come with frame, straps, and a cooler. Everything you need to tackle Alaska's world-class rivers.",
      features: [
        "NRS quality rafts",
        "Frame & straps included",
        "Cooler provided",
        "Drop-off & pick-up available",
        "Multi-day rentals",
      ],
      cta: "Call for Quote",
      highlight: false,
    },
    {
      title: "Outfitted Hunts",
      description:
        "Fully outfitted hunts include all the flights, food, gear, and supplies you will need for a world-class self-guided hunt in Western Alaska.",
      features: [
        "All flights included",
        "Food & supplies provided",
        "Gear & equipment",
        "Self-guided flexibility",
        "World-class hunting grounds",
      ],
      cta: "Call for Quote",
      highlight: false,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-36 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-xs mb-5">
              Pricing
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-heading mb-6">
              Simple, Honest Rates
            </h1>
            <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Every trip is unique. Call us for a custom quote tailored to your adventure.
              We&apos;ll work with you to make it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className={`relative rounded-2xl p-8 lg:p-10 border transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-accent/5 border-accent/40"
                    : "bg-card-bg border-card-border hover:border-accent/20"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold text-heading mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-accent shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:9078432002"
                  className={`block w-full text-center font-semibold py-3.5 rounded-lg transition-colors ${
                    service.highlight
                      ? "bg-accent hover:bg-accent-light text-white"
                      : "border border-card-border hover:border-accent text-foreground hover:text-accent"
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-section-alt border border-card-border rounded-2xl p-10 lg:p-14 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-heading mb-4">Need Something Custom?</h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Every adventure is different. Give us a call and we&apos;ll put together a package
              that fits exactly what you&apos;re looking for.
            </p>
            <a
              href="tel:9078432002"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (907) 843-2002
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-card-border bg-section-alt py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <span className="font-semibold text-heading">Sunday Air Taxi</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/#adventures" className="hover:text-heading transition-colors">Adventures</Link>
            <Link href="/#about" className="hover:text-heading transition-colors">About</Link>
            <Link href="/pricing" className="hover:text-heading transition-colors">Pricing</Link>
            <Link href="/#contact" className="hover:text-heading transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Sunday Air Taxi. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
