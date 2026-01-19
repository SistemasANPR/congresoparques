import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import gearsImageUrl from "@assets/generated_images/gears_illustration_teamwork_concept.png";

export default function Ponentes() {
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
              Ponentes
            </h1>
            
            {/* Content Container */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
              <p className="text-gray-700 text-center text-lg md:text-xl leading-relaxed mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Nuestro equipo está seleccionando a los expertos que construirán el programa más innovador. ¡Mantente atento para conocerlos!
              </p>
              <div className="flex justify-center">
                <img 
                  src={gearsImageUrl} 
                  alt="Ilustración de engranajes representando trabajo en equipo" 
                  className="w-full max-w-md rounded-lg"
                />
              </div>
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
