import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
