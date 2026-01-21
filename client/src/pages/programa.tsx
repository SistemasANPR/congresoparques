import { Cog, Settings, Wrench } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export default function Programa() {
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

      {/* Main Content */}
      <main className="pt-28 md:pt-36 lg:pt-40 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
              data-testid="page-title"
            >
              Programa
            </h1>
            
            {/* Actividades Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0e0477]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Actividades
              </h2>

              {/* Ilustración de engranajes */}
              <div className="flex justify-center items-center gap-2 mb-8">
                <Cog className="w-12 h-12 text-[#6847f6] animate-spin" style={{ animationDuration: '8s' }} />
                <Settings className="w-16 h-16 text-[#0e0477] animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                <Cog className="w-10 h-10 text-[#BCCE16] animate-spin" style={{ animationDuration: '10s' }} />
                <Wrench className="w-8 h-8 text-[#6847f6] ml-2" />
              </div>

              <p className="text-gray-700 text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Nuestro equipo está seleccionando a los expertos que construirán el programa más innovador.
                <span className="block mt-2 font-semibold text-[#0e0477]">¡Mantente atento para conocerlos!</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">
            © 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
