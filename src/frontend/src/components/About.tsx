import { Award, Clock, MapPin, Sparkles, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { icon: Users, label: "500+ Happy Clients", sub: "and growing every month" },
  {
    icon: Award,
    label: "5+ Years Experience",
    sub: "of premium salon expertise",
  },
  {
    icon: Sparkles,
    label: "Expert Stylists",
    sub: "trained in latest techniques",
  },
  {
    icon: Clock,
    label: "Open 7 Days a Week",
    sub: "Monday – Sunday, 9 AM – 10 PM",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="section-light py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Our Story
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-foreground tracking-tight">
            Where Style Meets
            <br />
            <span className="gold-accent">Perfection</span>
          </h2>
        </div>

        {/* Content grid */}
        <div
          ref={revealRef}
          className="grid lg:grid-cols-2 gap-16 items-center opacity-0 translate-y-8 transition-all duration-700"
        >
          {/* Left — text */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
              Alex Hair &amp; Skin Studio is Nagpur's premier destination for
              unisex beauty and grooming. We bring together world-class
              techniques and a passion for perfection, delivering transformative
              experiences for every client who walks through our doors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body">
              From precision haircuts and luxurious treatments to radiant skin
              care and stunning bridal looks — our expert team is dedicated to
              making you look and feel your absolute best. We believe great
              style is not a luxury; it's a right.
            </p>

            {/* Address & Hours */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 gold-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-1">
                    Address
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shop No 2, Aman Vaili Complex, Jafar Nagar Road,
                    <br />
                    Near Dinshaw Factory, Borgaon, Bupeshnagar,
                    <br />
                    Nagpur, Maharashtra 440013
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 gold-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground mb-1">
                    Hours
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Monday – Sunday: 9:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 border-l-2 border-accent pl-4">
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <Star className="w-5 h-5 text-accent/30" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold gold-accent">
                  4.0 / 5
                </p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase">
                  500+ Verified Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right — photo collage + stats */}
          <div className="space-y-4">
            {/* Photo pair */}
            <div className="grid grid-cols-2 gap-3 h-56">
              <div className="overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Salon interior with stylish chairs"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
                  alt="Hairstylist working on client"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="border border-border hover:border-accent/60 p-5 transition-smooth group"
                >
                  <Icon className="w-7 h-7 gold-accent mb-3 group-hover:scale-110 transition-smooth" />
                  <p className="font-display font-bold text-foreground text-base leading-tight mb-0.5">
                    {label}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider bottom */}
        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
