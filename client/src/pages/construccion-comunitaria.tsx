import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ConstruccionComunitaria() {
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
      <main className="pt-28 md:pt-36 lg:pt-40 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }} data-testid="page-title">Construcción Comunitaria</h1>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
              <p className="text-gray-600 text-center text-lg">Contenido próximamente disponible.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
