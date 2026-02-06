import { Plane, Bus, Car, Route } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import volarisLogo from "@assets/VOLARIS_1769210259352.jpg";
import vivaAerobusLogo from "@assets/VIVA_AEROBUS_1769210259350.jpg";
import aeromexicoLogo from "@assets/Aeromexico_1769210259346.jpg";
import americanAirlinesLogo from "@assets/America_Airlines_1769210259348.jpg";
import volarisBanner from "@assets/volaris_1770420013681.jpeg";
import aeromexicoBanner from "@assets/aeromexico_1770420013682.jpeg";

export default function Conectividad() {
  const vuelosNacionales = [
    "Acapulco",
    "Aguascalientes",
    "Cabo San Lucas (San José del Cabo)",
    "Cancún",
    "Ciudad de México (AICM y AIFA)",
    "Culiacán",
    "Guadalajara",
    "Hermosillo",
    "León / Bajío",
    "Mérida",
    "Monterrey",
    "Oaxaca",
    "Querétaro",
    "San Luis Potosí",
    "Torreón",
    "Tuxtla Gutiérrez",
    "Veracruz",
    "Villahermosa",
    "Zacatecas"
  ];

  const conexionesNacionales = [
    { estado: "Baja California Sur", distancia: "1,430 km" },
    { estado: "Sonora", distancia: "230 km" },
    { estado: "Sinaloa", distancia: "1,320 km" },
    { estado: "Chihuahua", distancia: "1,170 km" }
  ];

  const conexionesInternacionales = [
    { estado: "Arizona", distancia: "270 km" },
    { estado: "Nevada", distancia: "480 km" },
    { estado: "Nuevo México", distancia: "900 km" }
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
          title="Conectividad"
          subtitle="Descubre cómo llegar a Tijuana desde cualquier parte del mundo"
          lucideIcon={Route}
        />

        {/* Intro */}
        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-[#BCCE16] text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>¿Cómo llegar a Tijuana?</h3>
            <p className="text-lg max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
              Gracias a su ubicación estratégica en la frontera norte de México, llegar a Tijuana es sencillo y accesible. La ciudad cuenta con múltiples opciones de conexión tanto por aire como por tierra, lo que facilita el arribo de visitantes nacionales e internacionales.
            </p>
          </div>
        </section>

        {/* Conectividad Aérea */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                  Conectividad Aérea
                </h2>
                <Plane className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="mb-8 max-w-4xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#374151' }}>
                El Aeropuerto Internacional de Tijuana (TIJ) es un importante aeropuerto fronterizo en el norte de México, y su ubicación estratégica lo convierte en una puerta de enlace clave tanto para vuelos nacionales como internacionales.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12 items-stretch">
                <div className="bg-[#f5f3ff] border border-[#e0dbf5] rounded-xl p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos internacionales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#BCCE16] mt-1">•</span>
                      <span>Phoenix, Arizona (PHX) – American Eagle</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4 text-sm">
                    Además, la conexión a través de CBX permite a pasajeros de Estados Unidos volar hacia Tijuana utilizando rutas que despegan desde San Diego (SAN), ampliando significativamente las alternativas de llegada al destino.
                  </p>
                </div>
                <div className="bg-[#f5f3ff] border border-[#e0dbf5] rounded-xl p-6 md:p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos nacionales desde</h3>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
                    {vuelosNacionales.map((ciudad, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#BCCE16] mt-1">•</span>
                        <span className="text-sm">{ciudad}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-bold text-[#0e0477] mb-6">Aerolíneas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm border border-gray-100">
                    <img src={volarisLogo} alt="Volaris" className="max-h-14 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm border border-gray-100">
                    <img src={vivaAerobusLogo} alt="Viva Aerobus" className="max-h-14 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm border border-gray-100">
                    <img src={aeromexicoLogo} alt="Aeroméxico" className="max-h-14 max-w-full object-contain" />
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm border border-gray-100">
                    <img src={americanAirlinesLogo} alt="American Airlines" className="max-h-14 max-w-full object-contain" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '32px' }}>
                  <a href="https://www.volaris.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', borderRadius: '12px', minWidth: 0 }} className="shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <img src={volarisBanner} alt="Descuento en Volaris - Código V2G10 - Hasta 10% de descuento" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                  </a>
                  <a href="https://www.aeromexico.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', borderRadius: '12px', minWidth: 0 }} className="shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <img src={aeromexicoBanner} alt="Descuento en Aeroméxico - Código IT6MXRC01769C" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Terrestre */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                  Conectividad Terrestre
                </h2>
                <Bus className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="mb-8 max-w-4xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#374151' }}>
                Tijuana cuenta con una ubicación estratégica en la frontera norte de México, que le permite conectarse rápidamente con importantes corredores carreteros del país, así como con Estados Unidos y Canadá. Además, forma parte de la red federal que une Baja California con Sonora y otros estados del norte.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-6">Conexión terrestre nacional:</h3>
                  <div className="space-y-4">
                    {conexionesNacionales.map((conexion, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                          <Car className="w-6 h-6 text-[#6847f6]" />
                        </div>
                        <div>
                          <span className="text-gray-700">{conexion.estado}</span>
                          <span className="text-[#0e0477] font-bold ml-2">| {conexion.distancia}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-6">Conexión terrestre internacional:</h3>
                  <div className="space-y-4">
                    {conexionesInternacionales.map((conexion, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                        <div className="w-12 h-12 bg-[#BCCE16]/20 rounded-full flex items-center justify-center">
                          <Car className="w-6 h-6 text-[#0e0477]" />
                        </div>
                        <div>
                          <span className="text-gray-700">{conexion.estado}</span>
                          <span className="text-[#0e0477] font-bold ml-2">| {conexion.distancia}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
