import { Link } from "wouter";
import { ArrowLeft, Plane, Bus, Car } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

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
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0e0477] h-5 flex items-center justify-center">
        <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className="text-[#d0dd15]">★</span> REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO <span className="text-[#d0dd15]">★</span>
        </p>
      </div>
      <header className="fixed top-5 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <img src={logoUrl} alt="IX Congreso Internacional de Parques Urbanos y Espacio Público" className="h-12 sm:h-14 md:h-16 w-auto" data-testid="header-logo" />
              <div className="bg-[#0e0477] px-2.5 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-xs md:text-sm tracking-wide" style={{fontFamily: 'Montserrat, sans-serif'}}>TIJUANA <span className="text-[#1edede]">2026</span></span>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors" data-testid="back-to-home">
              <ArrowLeft className="w-5 h-5" /><span className="hidden sm:inline">Volver al inicio</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 md:pt-24">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Conectividad
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-[#BCCE16] text-2xl font-bold mb-4">¿Cómo llegar a Tijuana?</h3>
            <p className="text-white text-lg max-w-4xl mx-auto">
              Gracias a su ubicación estratégica en la frontera norte de México, llegar a Tijuana es sencillo y accesible. La ciudad cuenta con múltiples opciones de conexión tanto por aire como por tierra, lo que facilita el arribo de visitantes nacionales e internacionales.
            </p>
          </div>
        </section>

        {/* Conectividad Aérea */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Conectividad Aérea
                </h2>
                <Plane className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="text-gray-700 mb-8 max-w-4xl">
                El Aeropuerto Internacional de Tijuana (TIJ) es un importante aeropuerto fronterizo en el norte de México, y su ubicación estratégica lo convierte en una puerta de enlace clave tanto para vuelos nacionales como internacionales.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos internacionales:</h3>
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
                <div>
                  <h3 className="text-xl font-bold text-[#0e0477] mb-4">Vuelos directos nacionales desde:</h3>
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
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Volaris</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Viva Aerobus</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">Aeroméxico</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                    <span className="text-gray-600 font-semibold text-sm">American Airlines</span>
                  </div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Conectividad Terrestre
                </h2>
                <Bus className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="text-gray-700 mb-8 max-w-4xl">
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

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
