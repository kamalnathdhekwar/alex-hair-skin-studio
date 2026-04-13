import { Heart, Scissors, Smile, Sparkles, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Scissors,
    title: "Haircut & Styling",
    description:
      "Precision cuts and expert styling tailored to your face shape and lifestyle. From classic trims to bold transformations.",
    tag: "Most Popular",
  },
  {
    icon: Sparkles,
    title: "Hair Treatment",
    description:
      "Restore shine, strength, and health with our range of treatments — from deep conditioning to keratin smoothening.",
    tag: "Recommended",
  },
  {
    icon: Smile,
    title: "Skin Care / Facials",
    description:
      "Rejuvenate and glow with our curated facial treatments. Cleanups, bleach, and advanced skin therapies.",
    tag: "",
  },
  {
    icon: Heart,
    title: "Bridal Makeup",
    description:
      "Look radiant on your most special day. Our bridal packages are crafted for timeless elegance and lasting beauty.",
    tag: "Premium",
  },
  {
    icon: Star,
    title: "Beauty & Grooming",
    description:
      "Complete grooming services for men and women — waxing, threading, manicure, pedicure, and more.",
    tag: "",
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
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const item of items) obs.observe(item);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-dark py-24 lg:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              What We Offer
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-primary-foreground tracking-tight">
            Our <span className="gold-accent">Services</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                data-reveal
                data-ocid={`service-card-${i}`}
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
                className="relative border border-primary-foreground/10 hover:border-accent/60 p-8 group transition-smooth cursor-default"
              >
                {svc.tag && (
                  <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase border border-accent/50 text-accent px-2 py-0.5">
                    {svc.tag}
                  </span>
                )}
                <Icon className="w-10 h-10 gold-accent mb-5 group-hover:scale-110 transition-smooth" />
                <h3 className="font-display font-bold text-xl text-primary-foreground uppercase tracking-wide mb-3">
                  {svc.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed font-body">
                  {svc.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}

          {/* CTA card */}
          <div className="border border-accent/40 bg-accent/5 p-8 flex flex-col items-center justify-center text-center">
            <p className="font-display text-xl text-primary-foreground mb-4 uppercase tracking-wide">
              Ready to Transform?
            </p>
            <p className="text-primary-foreground/60 text-sm mb-6 font-body">
              Book your appointment today and experience the Alex difference.
            </p>
            <button
              type="button"
              data-ocid="services-book-btn"
              onClick={() =>
                document
                  .querySelector("#booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="premium-button premium-button-gold text-xs tracking-widest uppercase cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
