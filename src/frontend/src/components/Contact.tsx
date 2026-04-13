import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

const MAPS_URL =
  "https://maps.google.com/?q=Shop+No+2,+Aman+Vaili+Complex,+Jafar+Nagar+Road,+Near+Dinshaw+Factory,+Borgaon,+Bupeshnagar,+Nagpur,+Maharashtra+440013";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Aman+Vaili+Complex,+Jafar+Nagar+Road,+Borgaon,+Nagpur,+Maharashtra+440013&output=embed";

// WhatsApp SVG icon
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

export default function Contact() {
  return (
    <section id="contact" className="section-dark py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Visit Us
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-primary-foreground tracking-tight">
            Find <span className="gold-accent">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4 group">
              <MapPin className="w-6 h-6 gold-accent shrink-0 mt-1" />
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-widest uppercase mb-2">
                  Address
                </p>
                <p className="text-primary-foreground leading-relaxed font-body">
                  Shop No 2, Aman Vaili Complex,
                  <br />
                  Jafar Nagar Road, Near Dinshaw Factory,
                  <br />
                  Borgaon, Bupeshnagar, Nagpur, Maharashtra 440013
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs tracking-widest uppercase mt-2 inline-block border-b border-accent/40 hover:border-accent transition-smooth"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 gold-accent shrink-0 mt-1" />
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-widest uppercase mb-2">
                  Phone
                </p>
                <a
                  href="tel:+919822929415"
                  data-ocid="contact-phone1"
                  className="block text-primary-foreground hover:text-accent transition-smooth font-body mb-1"
                >
                  +91 98229 29415
                </a>
                <a
                  href="tel:+919551999511"
                  data-ocid="contact-phone2"
                  className="block text-primary-foreground hover:text-accent transition-smooth font-body"
                >
                  +91 95519 99511
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 gold-accent shrink-0 mt-1" />
              <div>
                <p className="text-primary-foreground/50 text-xs tracking-widest uppercase mb-2">
                  Hours
                </p>
                <p className="text-primary-foreground font-body">
                  Monday – Sunday
                </p>
                <p className="gold-accent font-semibold">9:00 AM – 10:00 PM</p>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-primary-foreground/50 text-xs tracking-widest uppercase mb-4">
                Connect With Us
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="tel:+919822929415"
                  data-ocid="social-phone"
                  aria-label="Call us"
                  className="w-12 h-12 border border-primary-foreground/20 hover:border-accent flex items-center justify-center gold-accent hover:bg-accent hover:text-primary transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919822929415"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-whatsapp"
                  aria-label="WhatsApp"
                  className="w-12 h-12 border border-primary-foreground/20 hover:border-accent flex items-center justify-center gold-accent hover:bg-accent hover:text-primary transition-smooth"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/alex_salon_nagpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-instagram"
                  aria-label="Instagram"
                  className="w-12 h-12 border border-primary-foreground/20 hover:border-accent flex items-center justify-center gold-accent hover:bg-accent hover:text-primary transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/alexhairandskinstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="social-facebook"
                  aria-label="Facebook"
                  className="w-12 h-12 border border-primary-foreground/20 hover:border-accent flex items-center justify-center gold-accent hover:bg-accent hover:text-primary transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div className="relative">
            <div className="border border-primary-foreground/10 hover:border-accent/40 transition-smooth overflow-hidden h-80 lg:h-full min-h-[320px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alex Hair & Skin Studio location"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-accent text-primary text-xs tracking-widest uppercase px-3 py-2 hover:bg-accent/90 transition-smooth"
            >
              View Larger Map
            </a>
          </div>
        </div>

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
