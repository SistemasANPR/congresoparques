import logoANPR from "@assets/LOGO ANPR_1758652591788.png";

interface SupportSectionProps {
  sectionId?: string;
  className?: string;
}

export default function SupportSection({ sectionId, className = "" }: SupportSectionProps) {
  return (
    <section id={sectionId} className={`py-5 sm:py-6 md:py-8 bg-white ${className}`}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row items-start justify-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">
            {/* Organiza */}
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <h3 className="text-xs sm:text-sm md:text-base font-bold whitespace-nowrap" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Organiza:</h3>
              <div className="bg-white rounded-lg shadow-md w-full max-w-[520px] min-h-[220px] flex items-center justify-center p-8">
                <a
                  href="https://anpr.org.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={logoANPR}
                    alt="ANPR - Asociación Nacional de Parques y Recreación México"
                    className="object-contain max-h-[140px] w-auto hover:scale-105 transition-transform"
                    style={{ imageRendering: 'auto' }}
                  />
                </a>
              </div>
            </div>

            {/* Separador visual */}
            <div className="hidden sm:block w-px min-h-[220px] bg-gray-200 mt-6"></div>

            {/* Proyecto apoyado */}
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-center" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Apoyado con recursos de:</h3>
              <div className="bg-white rounded-lg shadow-md w-full max-w-[520px] min-h-[220px] flex items-center justify-center p-8">
                <img
                  src="https://anpr.org.mx/wp-content/uploads/2026/04/LOGOS-FIDEM-CINTILLO.png"
                  alt="FIDEM - CDT Patrocinadores"
                  className="object-contain max-h-[140px] w-auto hover:scale-105 transition-transform"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
