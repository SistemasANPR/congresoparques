import { Mic } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { PageHeader } from "@/components/PageHeader";
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

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader 
          title="Ponentes"
          subtitle="Conoce a los expertos que construirán el programa más innovador"
          lucideIcon={Mic}
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
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
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
