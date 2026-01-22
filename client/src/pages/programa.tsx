import { Cog, Settings, Wrench, CalendarDays } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { PageHeader } from "@/components/PageHeader";

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

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader 
          title="Programa"
          subtitle="Descubre todas las actividades del congreso"
          lucideIcon={CalendarDays}
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
              <h2
                className="text-2xl md:text-3xl text-center mb-8 uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}
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
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
