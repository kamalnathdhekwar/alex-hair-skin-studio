import { useEffect, useRef } from "react";

const pricingCategories = [
  {
    title: "Haircut & Styling",
    featured: false,
    items: [
      { service: "Men's Haircut", price: "₹150 – ₹300" },
      { service: "Women's Haircut", price: "₹300 – ₹600" },
      { service: "Hair Styling", price: "₹200 – ₹500" },
      { service: "Beard Trim & Shape", price: "₹100 – ₹200" },
    ],
  },
  {
    title: "Hair Treatment",
    featured: true,
    items: [
      { service: "Basic Hair Spa", price: "₹500 – ₹800" },
      { service: "Deep Conditioning", price: "₹800 – ₹1200" },
      { service: "Keratin Treatment", price: "₹2000 – ₹5000" },
      { service: "Hair Smoothening", price: "₹3000 – ₹7000" },
    ],
  },
  {
    title: "Skin Care",
    featured: false,
    items: [
      { service: "Cleanup", price: "₹300 – ₹500" },
      { service: "Basic Facial", price: "₹400 – ₹800" },
      { service: "Bleach", price: "₹200 – ₹400" },
      { service: "Advanced Facial", price: "₹800 – ₹1500" },
    ],
  },
  {
    title: "Bridal Makeup",
    featured: false,
    items: [
      { service: "Basic Bridal Package", price: "₹5000 – ₹8000" },
      { service: "Premium Bridal Package", price: "₹10000 – ₹20000" },
      { service: "Pre-Bridal Session", price: "₹2000 – ₹4000" },
    ],
  },
  {
    title: "Beauty & Grooming",
    featured: false,
    items: [
      { service: "Waxing (Full Body)", price: "₹100 – ₹300" },
      { service: "Threading", price: "₹30 – ₹60" },
      { service: "Manicure", price: "₹300 – ₹500" },
      { service: "Pedicure", price: "₹400 – ₹600" },
    ],
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

export default function Pricing() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-light py-24 lg:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Transparent Pricing
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-foreground tracking-tight">
            Service <span className="gold-accent">Pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm tracking-wide">
            Honest, competitive pricing with no hidden charges. All prices in
            INR (₹).
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingCategories.map((cat, i) => (
            <div
              key={cat.title}
              data-reveal
              data-ocid={`pricing-card-${i}`}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
              className={`relative border p-6 transition-smooth ${
                cat.featured
                  ? "border-accent bg-primary text-primary-foreground"
                  : "border-border hover:border-accent/50 bg-card"
              }`}
            >
              {cat.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] tracking-widest uppercase px-3 py-1 font-semibold">
                  Popular
                </div>
              )}
              <h3
                className={`font-display font-bold text-lg uppercase tracking-wide mb-5 ${cat.featured ? "gold-accent" : "text-foreground"}`}
              >
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item.service}
                    className="flex items-center justify-between gap-4"
                  >
                    <span
                      className={`text-sm font-body ${cat.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {item.service}
                    </span>
                    <span
                      className={`text-sm font-semibold shrink-0 ${cat.featured ? "text-accent" : "gold-accent"}`}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Note card */}
          <div className="border border-accent/30 p-6 flex flex-col justify-center">
            <p className="font-display text-lg font-bold uppercase tracking-wide text-foreground mb-3">
              Custom Packages
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-body">
              Special combo deals and seasonal offers available. Ask our team
              for personalized package quotes.
            </p>
            <a
              href="tel:+919822929415"
              className="text-accent text-sm tracking-widest uppercase border-b border-accent/40 hover:border-accent transition-smooth inline-block pb-0.5"
            >
              Call for Quote →
            </a>
          </div>
        </div>

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
