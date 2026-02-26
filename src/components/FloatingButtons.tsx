const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/918240200667?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center text-2xl shadow-lg float-pulse hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        💬
      </a>
      <a
        href="tel:+918240200667"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl shadow-lg hover:scale-110 hover:shadow-spa-glow transition-all"
        aria-label="Call Now"
      >
        📞
      </a>
    </div>
  );
};

export default FloatingButtons;
