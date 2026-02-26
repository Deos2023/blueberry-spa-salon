const MapSection = () => {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.6369863235786!2d88.47848680000001!3d22.7240869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899877738a893%3A0xff55833bbbc60943!2sBlue%20Berry%20Spa%20And%20Salon!5e1!3m2!1sen!2sin!4v1772095660582!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Blue Berry Spa and Salon Location"
        className="grayscale hover:grayscale-0 transition-all duration-700"
      />
    </section>
  );
};

export default MapSection;
