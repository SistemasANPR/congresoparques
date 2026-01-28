import { useState } from "react";
import { expositores, shuffleExpositores } from "@/data/expositores";

interface BrandMarqueeProps {
  title?: string;
  showTitle?: boolean;
}

export function BrandMarquee({
  title = "Las Mejores Marcas Presentes",
  showTitle = true
}: BrandMarqueeProps) {
  // Shuffle brands on initial render for random order
  const [shuffledBrands] = useState(() => shuffleExpositores(expositores));

  return (
    <section id="marcas" className="py-16 bg-gray-50 overflow-hidden">
      {showTitle && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-center mb-12 uppercase section-title"
              style={{ color: '#0e0477' }}
              data-testid="brands-title"
            >
              {title}
            </h2>
          </div>
        </div>
      )}

      {/* Infinite Marquee Container */}
      <div className="relative w-full">
        <div
          className="flex animate-marquee"
          style={{ width: 'max-content' }}
        >
          {/* First set of shuffled brands */}
          {shuffledBrands.map((brand, index) => (
            <a
              key={`brand-1-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-3 md:mx-6 group"
              data-testid={`brand-logo-${brand.id}`}
            >
              <div className="bg-white rounded-lg shadow-md p-2 md:p-3 w-36 h-22 md:w-52 md:h-32 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 md:max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 opacity-80 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {shuffledBrands.map((brand, index) => (
            <a
              key={`brand-2-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-3 md:mx-6 group"
              aria-hidden="true"
            >
              <div className="bg-white rounded-lg shadow-md p-2 md:p-3 w-36 h-22 md:w-52 md:h-32 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-16 md:max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 opacity-80 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
