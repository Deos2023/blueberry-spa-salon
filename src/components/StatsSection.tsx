import { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: string;
}

const Counter = ({ end, suffix = "", label, icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-body text-sm">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container max-w-5xl mx-auto section-padding py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter end={1000} suffix="+" icon="😊" label="Happy Clients" />
          <Counter end={10} suffix="+" icon="💆" label="Professional Therapists" />
          <Counter end={100} suffix="%" icon="✨" label="Hygienic Environment" />
          <Counter end={799} suffix="" icon="💎" label="Affordable Luxury Starting ₹" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
