import logoANPR from "@assets/LOGO ANPR_1758652591788.png";
import logoFIDEM from "@assets/Fidem_1775773539832.png";
import logoCDT from "@assets/CDT_1775773539837.png";

interface SupportSectionProps {
  sectionId?: string;
  className?: string;
}

export default function SupportSection({ sectionId, className = "" }: SupportSectionProps) {
  return (
    <section
      id={sectionId}
      className={`py-6 sm:py-8 ${className}`}
      style={{ background: 'linear-gradient(135deg, #0e0477 0%, #35219b 50%, #6847f6 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row items-stretch justify-center gap-0">

            {/* Organiza */}
            <a
              href="https://anpr.org.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 px-4 sm:px-8 group"
            >
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center"
                style={{ color: '#BCCE16', fontFamily: 'Montserrat, sans-serif' }}
              >
                Organiza
              </span>
              <div
                className="w-full flex items-center justify-center rounded-xl py-4 px-3 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(188,206,22,0.3)]"
                style={{ background: 'rgba(255,255,255,0.95)' }}
              >
                <img
                  src={logoANPR}
                  alt="ANPR - Asociación Nacional de Parques y Recreación México"
                  className="object-contain h-16 md:h-24 w-auto max-w-[160px] md:max-w-[220px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Separador */}
            <div className="w-px self-stretch mx-2 sm:mx-3" style={{ background: 'rgba(255,255,255,0.2)' }} />

            {/* Apoyado con recursos de */}
            <a
              href="https://www.bcfidem.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 px-4 sm:px-8 group"
            >
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center whitespace-nowrap"
                style={{ color: '#BCCE16', fontFamily: 'Montserrat, sans-serif' }}
              >
                Apoyado con recursos de
              </span>
              <div
                className="w-full flex items-center justify-center rounded-xl py-4 px-3 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(188,206,22,0.3)]"
                style={{ background: 'rgba(255,255,255,0.95)' }}
              >
                <img
                  src={logoFIDEM}
                  alt="FIDEM - Fideicomiso Empresarial del Estado de Baja California"
                  className="object-contain h-16 md:h-24 w-auto max-w-[160px] md:max-w-[220px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Separador */}
            <div className="w-px self-stretch mx-2 sm:mx-3" style={{ background: 'rgba(255,255,255,0.2)' }} />

            {/* A través del */}
            <a
              href="https://cdt.org.mx/nosotros/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 px-4 sm:px-8 group"
            >
              <span
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center"
                style={{ color: '#BCCE16', fontFamily: 'Montserrat, sans-serif' }}
              >
                A través del
              </span>
              <div
                className="w-full flex items-center justify-center rounded-xl py-4 px-3 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(188,206,22,0.3)]"
                style={{ background: 'rgba(255,255,255,0.95)' }}
              >
                <img
                  src={logoCDT}
                  alt="CDT - Consejo de Desarrollo de Tijuana"
                  className="object-contain h-16 md:h-24 w-auto max-w-[160px] md:max-w-[220px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
