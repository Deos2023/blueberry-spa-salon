import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-spa.jpg";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding bg-spa-cream/40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-spa">
              <img src={aboutImg} alt="Blue Berry Spa Interior" className="w-full h-80 md:h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-spa-deep/20 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase font-medium">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-2 mb-6">
              Your Peaceful Escape from Daily Stress
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Blue Berry Spa and Salon in Barasat offers premium massage therapies, hair treatments, and skin care services designed to provide deep relaxation and rejuvenation. We maintain the highest hygiene standards and provide services by professional therapists to ensure a safe, comfortable, and soothing experience.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Whether you want stress relief, muscle relaxation, or beauty enhancement, we deliver a peaceful escape from daily stress.
            </p>

            {/* Video */}
            <div className="rounded-xl overflow-hidden shadow-spa">
              <video
                src="/about-video.mp4"
                controls
                className="w-full"
                poster={aboutImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
