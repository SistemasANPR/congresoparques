import logoANPR from "@assets/LOGO ANPR_1758652591788.png";
import logoFIDEM from "@assets/LOGO_FIDEM_1775664518580.png";
import logoCDT from "@assets/LOGO_CDT_1775664518582.png";

interface SupportSectionProps {
  sectionId?: string;
  className?: string;
}

export default function SupportSection({ sectionId, className = "" }: SupportSectionProps) {
  return (
    <section id={sectionId} className={`py-4 sm:py-5 bg-white ${className}`}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-row items-stretch justify-center gap-0">

            {/* Organiza */}
            <div className="flex-1 flex flex-col items-center gap-1.5 px-3 sm:px-5">
              <h3
                className="text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap text-center"
                style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}
              >
                Organiza:
              </h3>
              <div className="w-full flex items-center justify-center py-3 sm:py-4">
                <a
                  href="https://anpr.org.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={logoANPR}
                    alt="ANPR - Asociación Nacional de Parques y Recreación México"
                    className="object-contain w-auto h-20 md:h-28 max-w-[180px] md:max-w-[240px] hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Separador */}
            <div className="w-px bg-gray-200 self-stretch mx-1" />

            {/* Apoyado con recursos de */}
            <div className="flex-1 flex flex-col items-center gap-1.5 px-3 sm:px-5">
              <h3
                className="text-[10px] sm:text-xs md:text-sm font-bold text-center"
                style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}
              >
                Apoyado con recursos de:
              </h3>
              <div className="w-full flex items-center justify-center py-3 sm:py-4">
                <a
                  href="https://www.bcfidem.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={logoFIDEM}
                    alt="FIDEM - Fideicomiso Empresarial del Estado de Baja California"
                    className="object-contain w-auto h-20 md:h-28 max-w-[180px] md:max-w-[240px] hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Separador */}
            <div className="w-px bg-gray-200 self-stretch mx-1" />

            {/* A través del */}
            <div className="flex-1 flex flex-col items-center gap-1.5 px-3 sm:px-5">
              <h3
                className="text-[10px] sm:text-xs md:text-sm font-bold text-center"
                style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}
              >
                A través del:
              </h3>
              <div className="w-full flex items-center justify-center py-3 sm:py-4">
                <a
                  href="https://cdt.org.mx/nosotros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <img
                    src={logoCDT}
                    alt="CDT - Consejo de Desarrollo de Tijuana"
                    className="object-contain w-auto h-20 md:h-28 max-w-[180px] md:max-w-[240px] hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
