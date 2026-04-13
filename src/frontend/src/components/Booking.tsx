import { CheckCircle } from "lucide-react";
import { type FormEvent, useState } from "react";

const services = [
  "Haircut & Styling",
  "Hair Treatment",
  "Skin Care / Facials",
  "Bridal Makeup",
  "Beauty & Grooming",
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Booking request:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY);
    }, 5000);
  };

  return (
    <section id="booking" className="section-light py-24 lg:py-32">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider w-16" />
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-body">
              Reserve Your Slot
            </span>
            <div className="gold-divider w-16" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-foreground tracking-tight">
            Book Your <span className="gold-accent">Appointment</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide">
            Fill in the form and our team will confirm your appointment.
          </p>
        </div>

        {submitted ? (
          <div className="border border-accent/50 p-12 text-center animate-fade-in">
            <CheckCircle className="w-14 h-14 gold-accent mx-auto mb-5" />
            <p className="font-display text-2xl uppercase font-bold text-foreground mb-2">
              Appointment Requested!
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Thank you,{" "}
              <span className="text-foreground font-semibold">{form.name}</span>
              ! Our team will call you at{" "}
              <span className="text-foreground font-semibold">
                {form.phone}
              </span>{" "}
              to confirm your booking.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-ocid="booking-form"
            className="border border-border p-8 lg:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-foreground mb-2"
                  htmlFor="b-name"
                >
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="b-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  data-ocid="booking-name"
                  className="w-full bg-background border border-input hover:border-accent/50 focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm transition-smooth font-body"
                />
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-foreground mb-2"
                  htmlFor="b-phone"
                >
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  id="b-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  data-ocid="booking-phone"
                  className="w-full bg-background border border-input hover:border-accent/50 focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm transition-smooth font-body"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-foreground mb-2"
                  htmlFor="b-service"
                >
                  Service <span className="text-accent">*</span>
                </label>
                <select
                  id="b-service"
                  required
                  value={form.service}
                  onChange={set("service")}
                  data-ocid="booking-service"
                  className="w-full bg-background border border-input hover:border-accent/50 focus:border-accent outline-none px-4 py-3 text-foreground text-sm transition-smooth font-body appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-foreground mb-2"
                  htmlFor="b-date"
                >
                  Preferred Date <span className="text-accent">*</span>
                </label>
                <input
                  id="b-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={set("date")}
                  min={new Date().toISOString().split("T")[0]}
                  data-ocid="booking-date"
                  className="w-full bg-background border border-input hover:border-accent/50 focus:border-accent outline-none px-4 py-3 text-foreground text-sm transition-smooth font-body"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs tracking-widest uppercase text-foreground mb-2"
                htmlFor="b-message"
              >
                Message / Special Request
              </label>
              <textarea
                id="b-message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="Any specific requirements or preferences..."
                data-ocid="booking-message"
                className="w-full bg-background border border-input hover:border-accent/50 focus:border-accent outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm transition-smooth font-body resize-none"
              />
            </div>

            <button
              type="submit"
              data-ocid="booking-submit"
              className="premium-button bg-accent text-primary border-accent hover:bg-transparent hover:text-accent text-sm tracking-widest uppercase w-full sm:w-auto transition-smooth"
            >
              Request Appointment
            </button>
          </form>
        )}

        <div className="gold-divider w-full mt-20" />
      </div>
    </section>
  );
}
