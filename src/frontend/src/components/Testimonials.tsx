import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    initials: "PS",
    rating: 5,
    text: "Best salon experience I've ever had in Nagpur! The keratin treatment they did for my hair is absolutely life-changing. My hair is so smooth and shiny now. Highly recommend Alex Hair & Skin Studio!",
    service: "Keratin Treatment",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    rating: 4,
    text: "Got a haircut and beard trim here — the stylist really understood what I wanted. Very professional setup, clean and premium ambiance. Will definitely come back.",
    service: "Men's Grooming",
  },
  {
    name: "Anjali Deshmukh",
    initials: "AD",
    rating: 5,
    text: "My bridal look was absolutely stunning! The makeup artist was so talented and patient. I received so many compliments on my wedding day. Thank you Alex Studio!",
    service: "Bridal Makeup",
  },
  {
    name: "Sneha Patil",
    initials: "SP",
    rating: 4,
    text: "Had a facial and cleanup done — my skin feels amazing! The products they use are really good quality and the staff is knowledgeable. Great value for money.",
    service: "Skin Care",
  },
  {
    name: "Vikram Joshi",
    initials: "VJ",
    rating: 5,
    text: "Visited for a haircut and hair spa. The atmosphere is so relaxing, the team is skilled and friendly. It's become my go-to salon in Nagpur now. 10/10!",
    service: "Hair Spa",
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

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= count ? "fill-accent text-accent" : "text-accent/20"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section-light py-24 lg:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Client Love
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-foreground tracking-tight">
            What Our Clients <span className="gold-accent">Say</span>
          </h2>
        </div>

        {/* Aggregate rating */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
            <Star className="w-8 h-8 text-accent/30" />
          </div>
          <p className="font-display text-5xl font-black gold-accent mb-1">
            4.0
          </p>
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            500+ Verified Reviews
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              data-ocid={`testimonial-${i}`}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
              className="border border-border hover:border-accent/50 p-6 transition-smooth relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-smooth" />
              <StarRow count={t.rating} />
              <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-6 font-body">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-semibold text-xs tracking-widest">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-accent text-xs tracking-widest uppercase">
                    {t.service}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
