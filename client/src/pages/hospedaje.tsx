import { Hotel, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export default function Hospedaje() {
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
              Alojamiento
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-white/90 text-xl">¡Elige tu hospedaje!</p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg max-w-4xl mx-auto mb-6">
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Próximamente
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Estamos trabajando para ofrecerte las mejores opciones de hospedaje para el Congreso Parques Tijuana 2026.
                </p>
                
                <div className="bg-[#0e0477] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">¿Tu hotel desea participar?</h3>
                  <p className="text-white/90 mb-4">
                    Si tu hotel está interesado en integrarse como opción oficial para los participantes, contáctanos:
                  </p>
                  <a 
                    href="mailto:info@congresoparques.com" 
                    className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors"
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

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
