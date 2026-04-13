import { Facebook, Instagram, MapPin, Phone, Scissors } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: "Book Appointment", href: "#booking" },
];

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

export default function Footer() {
  return (
    <footer className="section-dark border-t border-accent/20 pt-16 pb-8">
      <div className="container">
        <div className="gold-divider w-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 gold-accent" />
              <span className="font-display font-black text-xl text-primary-foreground tracking-widest uppercase">
                Alex Hair &amp; Skin Studio
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6 font-body max-w-sm">
              Best Unisex Salon in Nagpur — Where Style Meets Perfection.
              Committed to delivering premium beauty experiences for every
              client.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  href: "tel:+919822929415",
                  icon: <Phone className="w-4 h-4" />,
                  label: "Phone",
                },
                {
                  href: "https://wa.me/919822929415",
                  icon: <WhatsAppIcon className="w-4 h-4" />,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.instagram.com/alex_salon_nagpur/",
                  icon: <Instagram className="w-4 h-4" />,
                  label: "Instagram",
                },
                {
                  href: "https://www.facebook.com/alexhairandskinstudio/",
                  icon: <Facebook className="w-4 h-4" />,
                  label: "Facebook",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  data-ocid={`footer-social-${s.label.toLowerCase()}`}
                  className="w-9 h-9 border border-primary-foreground/20 hover:border-accent flex items-center justify-center gold-accent hover:bg-accent hover:text-primary transition-smooth"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-primary-foreground/50 text-xs tracking-[0.25em] uppercase mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-primary-foreground/50 text-xs tracking-[0.25em] uppercase mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 gold-accent shrink-0 mt-0.5" />
                <p className="text-primary-foreground/60 text-sm leading-relaxed font-body">
                  Shop No 2, Aman Vaili Complex,
                  <br />
                  Jafar Nagar Road, Borgaon,
                  <br />
                  Nagpur, MH 440013
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 gold-accent shrink-0" />
                <div>
                  <a
                    href="tel:+919822929415"
                    className="block text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
                  >
                    +91 98229 29415
                  </a>
                  <a
                    href="tel:+919551999511"
                    className="block text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
                  >
                    +91 95519 99511
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider w-full mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-primary-foreground/40 text-xs tracking-widest uppercase">
            © {year} Alex Hair &amp; Skin Studio. All Rights Reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/50 hover:text-accent transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
