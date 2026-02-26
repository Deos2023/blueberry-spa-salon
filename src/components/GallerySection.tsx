import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-spa-cream/40">
      <div className="container max-w-6xl mx-auto">
        <span className="block text-primary font-body text-sm tracking-[0.2em] uppercase font-medium text-center mb-2">Gallery</span>
        <h2 className="section-heading">Our Ambience & Services</h2>
        <p className="section-subheading">Take a glimpse into our calming, hygienic, and beautifully maintained spa environment.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
            >
              <img
                src={img}
                alt={`Blue Berry Spa Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-spa-deep/0 group-hover:bg-spa-deep/30 transition-colors duration-500 flex items-center justify-center">
                <span className="text-primary-foreground text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground text-3xl hover:opacity-70"
          >
            ✕
          </button>
          <img
            src={images[lightbox]}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Nav */}
          <button
            className="absolute left-4 text-primary-foreground text-4xl hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 text-primary-foreground text-4xl hover:opacity-70"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
