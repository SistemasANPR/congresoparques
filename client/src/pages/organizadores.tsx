import { Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

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
      <AnnouncementBanner
        messages={[
          { id: "convocatorias", text: "REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO" },
          { id: "boletos", text: "BOLETOS A LA VENTA A PARTIR DEL 2 DE FEBRERO" },
        ]}
        speed="normal"
      />
      {/* Header Navigation */}
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Organizador
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
