import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-spa-deep text-primary-foreground/80 font-body">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Blue Berry" className="h-10 rounded-full" />
              <span className="font-display font-semibold text-xl text-primary-foreground">Blue Berry Spa & Salon</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Premium spa and salon services in Barasat, offering relaxation, rejuvenation, and professional beauty treatments.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#home" className="hover:text-primary-foreground transition-colors">Home</a>
              <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
              <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
              <a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Laxmi Narayan Colony, Nabapally, Barasat</p>
              <p>📞 <a href="tel:+918240200667" className="hover:text-primary-foreground">8240200667</a></p>
              <p>✉️ <a href="mailto:blueberryspafamilysalon@gmail.com" className="hover:text-primary-foreground break-all">blueberryspafamilysalon@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 Blue Berry Spa and Salon. All Rights Reserved. || Developed & Maintained by <a href="https://teamdeos.co.in/"><span className="text-accent">Digital Exposure Online Services</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
