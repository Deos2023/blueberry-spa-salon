import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/918240200667?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Blue%20Berry%20Spa%20and%20Salon.";

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Blue Berry Spa Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-spa-deep/70 via-spa-deep/50 to-spa-deep/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Rejuvenate Your Body.{" "}
          <span className="text-spa-gold italic">Refresh Your Mind.</span>
        </h1>

        <p
          className={`font-body text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience professional spa & salon treatments in a fully hygienic and relaxing environment.
        </p>

        <p
          className={`font-display text-2xl md:text-3xl text-spa-gold font-semibold mb-8 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0 animate-rubber-band" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "1.5s" }}
        >
          Services Starting From ₹799
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-full text-lg hover:shadow-spa-glow hover:scale-105 transition-all duration-300"
          >
            Book Appointment
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
