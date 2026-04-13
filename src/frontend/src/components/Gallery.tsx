import { useEffect, useRef } from "react";

const galleryItems = [
  {
    label: "Hair Styling",
    caption: "Expert cuts & finishing",
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    span: "col-span-2",
  },
  {
    label: "Skin Treatment",
    caption: "Glow & rejuvenate",
    url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80",
    span: "",
  },
  {
    label: "Bridal Makeup",
    caption: "Your perfect bridal look",
    url: "https://images.unsplash.com/photo-1595163708893-5e5df74f1c1c?w=600&q=80",
    span: "",
  },
  {
    label: "Salon Interior",
    caption: "Premium studio ambiance",
    url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    span: "",
  },
  {
    label: "Hair Design",
    caption: "Bold, expressive styles",
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    span: "",
  },
  {
    label: "Hair Coloring",
    caption: "Color that turns heads",
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    span: "col-span-2",
  },
  {
    label: "Facial Care",
    caption: "Revive your skin",
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    span: "",
  },
  {
    label: "Men's Grooming",
    caption: "Sharp cuts & trims",
    url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    span: "",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "scale(1)";
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05 },
    );
    for (const item of items) obs.observe(item);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Gallery() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-dark py-24 lg:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Portfolio
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-primary-foreground tracking-tight">
            Our <span className="gold-accent">Work</span>
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              data-ocid={`gallery-item-${i}`}
              style={{
                opacity: 0,
                transform: "scale(0.95)",
                transition: `all 0.6s ease ${i * 0.07}s`,
              }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
            >
              {/* Real photo */}
              <img
                src={item.url}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark overlay — visible at rest, lightens on hover */}
              <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-smooth z-10" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/60 transition-smooth z-20" />
              {/* Gold accent overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-smooth z-20" />
              {/* Caption */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 z-30">
                <p className="text-primary-foreground font-body font-semibold text-sm tracking-[0.15em] uppercase text-center px-4 drop-shadow">
                  {item.label}
                </p>
                <p className="text-accent text-[10px] tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-smooth">
                  {item.caption}
                </p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accent/0 group-hover:border-accent/60 transition-smooth z-30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accent/0 group-hover:border-accent/60 transition-smooth z-30" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/alex_salon_nagpur/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent text-sm tracking-widest uppercase border-b border-accent/40 hover:border-accent pb-0.5 transition-smooth"
          >
            See More on Instagram →
          </a>
        </div>

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
