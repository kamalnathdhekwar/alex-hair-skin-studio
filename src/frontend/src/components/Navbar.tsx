import { Menu, Scissors, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elevated border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group bg-transparent border-0 p-0 cursor-pointer"
        >
          <Scissors className="w-5 h-5 gold-accent transition-smooth group-hover:rotate-12" />
          <div>
            <span className="font-display font-bold text-lg text-primary-foreground tracking-widest uppercase">
              Alex
            </span>
            <span className="ml-1 text-xs font-body text-accent tracking-[0.2em] uppercase hidden sm:inline">
              Hair &amp; Skin Studio
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-primary-foreground/70 hover:text-accent text-sm tracking-widest uppercase font-body transition-smooth bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            type="button"
            data-ocid="nav-book-btn"
            onClick={() => scrollTo("#booking")}
            className="premium-button premium-button-gold text-sm tracking-widest uppercase cursor-pointer"
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-accent/20 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => {
                setOpen(false);
                scrollTo(link.href);
              }}
              className="text-white hover:text-accent text-base tracking-widest uppercase font-body transition-smooth bg-transparent border-0 cursor-pointer text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            data-ocid="mobile-book-btn"
            onClick={() => {
              setOpen(false);
              scrollTo("#booking");
            }}
            className="premium-button premium-button-gold text-sm tracking-widest uppercase text-center mt-2 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
