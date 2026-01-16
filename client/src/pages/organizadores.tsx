import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Organizadores() {
  const contactos = [
    { titulo: "Contenido y Programas:", email: "contenido@anpr.org.mx" },
    { titulo: "Comercial y Ventas:", email: "vinculacion@anpr.org.mx" },
    { titulo: "Comunicación y Prensa:", email: "comunicacion@anpr.org.mx" },
    { titulo: "Información General y Boletos:", email: "hola@anpr.org.mx" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0e0477] h-5 flex items-center justify-center">
        <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className="text-[#d0dd15]">★</span> REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO <span className="text-[#d0dd15]">★</span>
        </p>
      </div>
      <header className="fixed top-5 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <img src={logoUrl} alt="IX Congreso Internacional de Parques Urbanos y Espacio Público" className="h-12 sm:h-14 md:h-16 w-auto" data-testid="header-logo" />
              <div className="bg-[#0e0477] px-2.5 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-xs md:text-sm tracking-wide" style={{fontFamily: 'Montserrat, sans-serif'}}>TIJUANA <span className="text-[#1edede]">2026</span></span>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors" data-testid="back-to-home">
              <ArrowLeft className="w-5 h-5" /><span className="hidden sm:inline">Volver al inicio</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 md:pt-24">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Comité Organizador
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Descripción */}
              <div className="md:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  El Congreso Parques es organizado por la <strong className="text-[#0e0477]">Asociación Nacional de Parques y Recreación de México</strong>, una organización no gubernamental dedicada a la profesionalización y capacitación de quienes trabajan en el cuidado, administración, planeación y diseño de parques urbanos y espacios públicos en México y América Latina.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Su labor, junto con la de sus colaboradores, se refleja en la construcción de herramientas útiles para sus miembros, ofreciendo recursos como estudios e investigaciones, webinars mensuales, la Revista Parques, certificaciones, presentaciones, libros y, por supuesto, la organización anual del Congreso Parques.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Si deseas conocer más sobre la ANPR México y los beneficios de obtener una membresía, visita{" "}
                  <a 
                    href="https://anpr.org.mx/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6847f6] hover:text-[#0e0477] underline font-semibold"
                  >
                    www.anpr.org.mx
                  </a>
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#0e0477] mb-6 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <Mail className="w-5 h-5" />
                  Contáctanos:
                </h3>
                <ul className="space-y-4">
                  {contactos.map((contacto, index) => (
                    <li key={index}>
                      <p className="font-semibold text-[#0e0477] text-sm">{contacto.titulo}</p>
                      <a 
                        href={`mailto:${contacto.email}`}
                        className="text-gray-600 hover:text-[#6847f6] transition-colors"
                      >
                        {contacto.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Línea divisora */}
        <div className="container mx-auto px-4 bg-white pb-8">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>

        {/* Aliado Estratégico */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-xl font-semibold text-[#6847f6] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Aliado Estratégico: CDT Tijuana
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                El Congreso Parques se lleva a cabo de la mano del Consejo de Desarrollo de Tijuana (CDT), una institución que ha marcado la pauta en la planeación estratégica y el impulso de proyectos que transforman la región. Con un modelo de colaboración entre gobierno, iniciativa privada, academia y sociedad, el CDT es un aliado clave para hacer realidad esta edición del Congreso.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Si deseas conocer más sobre CDT Tijuana visita{" "}
                <a 
                  href="https://cdt.org.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#6847f6] hover:text-[#0e0477] underline font-semibold"
                >
                  cdt.org.mx
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Línea divisora final */}
        <div className="container mx-auto px-4 bg-white pb-16">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>
      </main>

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
