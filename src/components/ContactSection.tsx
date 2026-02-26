import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.%0APhone: ${form.phone}%0AService: ${form.service}%0APreferred Date: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918240200667?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto">
        <span className="block text-primary font-body text-sm tracking-[0.2em] uppercase font-medium text-center mb-2">Contact Us</span>
        <h2 className="section-heading">Book Your Appointment</h2>
        <p className="section-subheading">Fill out the form below and we'll connect with you on WhatsApp to confirm your booking.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-muted border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-muted border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            >
              <option value="">Select Service</option>
              <option>Relaxing Dry Massage</option>
              <option>Nourishing Oil Massage</option>
              <option>Soft Cream Massage</option>
              <option>Fresh Aroma Gel Massage</option>
              <option>Deep Tissue Massage</option>
              <option>Hair & Skin Care Treatment</option>
              <option>Hair Cutting</option>
            </select>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-muted border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              rows={3}
              placeholder="Message (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-muted border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-medium py-4 rounded-full text-lg hover:shadow-spa-glow hover:scale-[1.02] transition-all duration-300"
            >
              Send via WhatsApp 💬
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 font-body">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">📍 Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Laxmi Narayan Colony (Landmark: Parker Math)<br />
                Nabapally, Barasat, North 24 Parganas<br />
                West Bengal – 700126
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">📞 Phone</h3>
              <a href="tel:+918240200667" className="text-primary hover:underline text-lg">+91 8240200667</a>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">✉️ Email</h3>
              <a href="mailto:Blueberryspafamilysalon@gmail.com" className="text-primary hover:underline break-all">
                Blueberryspafamilysalon@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
