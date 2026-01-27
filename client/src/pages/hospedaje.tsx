import { Hotel, Mail, Bed } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function Hospedaje() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "boletos",
            text: "BOLETOS A LA VENTA A PARTIR DEL 2 DE FEBRERO",
          },
        ]}
        speed="normal"
      />
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader 
          title="Alojamiento"
          subtitle="¡Elige tu hospedaje!"
          lucideIcon={Bed}
        />

        {/* Intro */}
        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg max-w-4xl mx-auto mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
              Tijuana ofrece una variada y sólida infraestructura hotelera. En esta sección podrás consultar opciones de alojamiento en la ciudad sede.
            </p>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                <div className="w-24 h-24 bg-[#6847f6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hotel className="w-12 h-12 text-[#6847f6]" />
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                  Próximamente
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>
                  Estamos trabajando para ofrecerte las mejores opciones de hospedaje para el Congreso Parques Tijuana 2026.
                </p>
                
                <div className="bg-[#0e0477] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">¿Tu hotel desea participar?</h3>
                  <p className="text-white/90 mb-4">
                    Si tu hotel está interesado en integrarse como opción oficial para los participantes, contáctanos:
                  </p>
                  <a
                    href="mailto:info@congresoparques.com"
                    className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] px-8 py-4 rounded-lg hover:bg-[#d4e620] transition-colors uppercase tracking-wide"
                    style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                  >
                    <Mail className="w-5 h-5" />
                    info@congresoparques.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
