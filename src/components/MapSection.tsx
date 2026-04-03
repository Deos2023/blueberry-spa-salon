const MapSection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.6369863235786!2d88.47848680000001!3d22.7240869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899877738a893%3A0xff55833bbbc60943!2sBlue%20Berry%20Spa%20And%20Salon!5e1!3m2!1sen!2sin!4v1772095660582!5m2!1sen!2sin"
        className="w-full h-[400px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
        loading="lazy"
        allowFullScreen
        title="Map 1"
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3680.1151459612825!2d88.47615957530496!3d22.723961179384265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzI2LjMiTiA4OMKwMjgnNDMuNCJF!5e0!3m2!1sen!2sin!4v1775206070259!5m2!1sen!2sin"
        className="w-full h-[400px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
        loading="lazy"
        allowFullScreen
        title="Map 2"
      />
    </section>
  );
};

export default MapSection;
