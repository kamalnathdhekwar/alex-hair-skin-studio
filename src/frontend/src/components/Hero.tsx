import { Star } from "lucide-react";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden section-dark"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-48 gold-divider hidden xl:block opacity-40" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-px h-48 gold-divider hidden xl:block opacity-40" />

      <div className="relative z-10 container px-6 animate-fade-in">
        {/* Tag line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px gold-divider" />
          <span className="text-accent text-xs tracking-[0.35em] uppercase font-body">
            Premium Unisex Salon · Nagpur
          </span>
          <div className="w-12 h-px gold-divider" />
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase text-primary-foreground leading-none tracking-tight mb-6">
          Alex
          <br />
          <span className="gold-accent">Hair &amp;</span>
          <br />
          Skin Studio
        </h1>

        {/* Sub heading */}
        <p className="font-body text-primary-foreground/70 text-base sm:text-lg tracking-[0.2em] uppercase mb-10 max-w-xl mx-auto">
          Best Unisex Salon in Nagpur — Where Style Meets Perfection
        </p>

        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 border border-accent/40 px-4 py-2 mb-10 rounded-none">
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
            <Star className="w-4 h-4 text-accent/50" />
          </div>
          <span className="text-accent text-sm font-semibold tracking-widest">
            4.0
          </span>
          <span className="text-primary-foreground/50 text-sm tracking-wider">
            |
          </span>
          <span className="text-primary-foreground/70 text-sm tracking-wider">
            500+ Reviews
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            data-ocid="hero-book-btn"
            onClick={() => scrollTo("#booking")}
            className="premium-button bg-accent text-primary border-accent hover:bg-transparent hover:text-accent text-sm tracking-widest uppercase w-full sm:w-auto cursor-pointer"
          >
            Book Appointment
          </button>
          <button
            type="button"
            data-ocid="hero-services-btn"
            onClick={() => scrollTo("#services")}
            className="premium-button premium-button-gold text-sm tracking-widest uppercase w-full sm:w-auto cursor-pointer"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-primary-foreground text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-accent animate-pulse" />
      </div>
    </section>
  );
}
