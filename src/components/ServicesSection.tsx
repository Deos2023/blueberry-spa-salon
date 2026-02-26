import { useEffect, useRef, useState } from "react";
import serviceDry from "@/assets/service-dry-massage.jpg";
import serviceOil from "@/assets/service-oil-massage.jpg";
import serviceCream from "@/assets/service-cream-massage.jpg";
import serviceAroma from "@/assets/service-aroma-massage.jpg";
import serviceDeep from "@/assets/service-deep-tissue.jpg";
import serviceSkin from "@/assets/service-skincare.jpg";
import serviceHair from "@/assets/service-haircut.jpg";

const services = [
  { title: "Relaxing Dry Massage", desc: "Relieves stress and improves blood circulation.", img: serviceDry },
  { title: "Nourishing Oil Massage", desc: "Deep nourishment and muscle relaxation therapy.", img: serviceOil },
  { title: "Soft Cream Massage", desc: "Smooth cream therapy for glowing skin and relaxation.", img: serviceCream },
  { title: "Fresh Aroma Gel Massage", desc: "Refreshing aroma therapy for mental calmness.", img: serviceAroma },
  { title: "Deep Tissue Massage", desc: "Intensive therapy for muscle tension relief.", img: serviceDeep },
  { title: "Hair & Skin Care Treatment", desc: "Professional skin rejuvenation and hair nourishment.", img: serviceSkin },
  { title: "Hair Cutting with Professional Therapist", desc: "Stylish cuts and grooming by experts.", img: serviceHair },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`spa-card group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
        <p className="font-body text-sm text-muted-foreground">{service.desc}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto">
        <span className="block text-primary font-body text-sm tracking-[0.2em] uppercase font-medium text-center mb-2">Our Services</span>
        <h2 className="section-heading">Treatments & Therapies</h2>
        <p className="section-subheading">Professional spa and salon services designed for your complete relaxation and rejuvenation.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
