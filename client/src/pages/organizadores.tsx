import { Mail } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import logoANPRUrl from "@assets/ANPR_1769104901762.png";

export default function Organizadores() {
  const contactos = [
    { titulo: "Contenido y Programas:", email: "contenido@anpr.org.mx" },
    { titulo: "Comercial y Ventas:", email: "vinculacion@anpr.org.mx" },
    { titulo: "Comunicación y Prensa:", email: "comunicacion@anpr.org.mx" },
    { titulo: "Información General y Boletos:", email: "hola@anpr.org.mx" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "miembros",
            text: "30% DE DESCUENTO PARA MIEMBROS ANPR",
          },
          {
            id: "estudiantes",
            text: "PRECIO ESPECIAL PARA ESTUDIANTES",
          },
        ]}
        speed="normal"
      />
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader 
          title="Organizador"
          icon={logoANPRUrl}
          iconAlt="Logo ANPR México"
        />

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

        {/* APOYA - Flip Card */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex justify-center">
              <div className="group w-full max-w-2xl h-80" style={{ perspective: '1000px' }}>
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateY(180deg)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateY(0deg)'}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backfaceVisibility: 'hidden', backgroundColor: '#35219B' }}
                  >
                    <h3 className="text-5xl md:text-6xl text-white uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                      APOYA
                    </h3>
                  </div>
                  {/* Back */}
                  <div 
                    className="absolute inset-0 bg-white border-2 border-[#0e0477] rounded-xl p-6 md:p-8 overflow-y-auto shadow-lg"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      El Congreso Parques es organizado por la Asociación Nacional de Parques y Recreación de México (ANPR México), una organización no gubernamental dedicada a la profesionalización del sector de parques y espacios públicos en México y América Latina, a través de contenidos, certificaciones y eventos que convierten el conocimiento en herramientas prácticas.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Conoce más en{" "}
                      <a 
                        href="https://www.anpr.org.mx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#6847f6] hover:text-[#0e0477] underline font-semibold"
                      >
                        www.anpr.org.mx
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Línea divisora final */}
        <div className="container mx-auto px-4 bg-white pb-16">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
