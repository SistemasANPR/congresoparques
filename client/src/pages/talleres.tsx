import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import tallerVivencialImg from "@assets/Taller vivencial_1758578349360.jpg";
import masterClassesImg from "@assets/Master classes_1758578349365.jpg";

export default function Talleres() {
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
              Talleres
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
              <strong className="text-[#BCCE16]">Los más de 10 talleres</strong> se celebrarán el día miércoles <span className="text-white font-semibold">antes de las sesiones educativas y magistrales</span> y la Expo Espacio Público.
            </p>
          </div>
        </section>

        {/* Talleres Vivenciales Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${tallerVivencialImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0e0477]/95"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div></div>
              <div className="bg-[#0e0477]/90 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Talleres Vivenciales
                </h2>
                <h3 className="text-[#BCCE16] text-lg mb-4">¡Visita los parques más emblemáticos de la ciudad!</h3>
                <p className="text-white/90 text-justify">
                  ¡Conoce Tijuana y aprende al mismo tiempo! En los talleres vivenciales conocerás atractivos turísticos y proyectos ciudadanos relacionados con el espacio público; habrá expertos en el tema y colaboradores de la ciudad anfitriona que compartirán durante 4 horas sus experiencias en la administración de estos espacios, los retos que han enfrentado y las actividades que han implementado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Talleres Vivenciales Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#6847f6] to-[#0e0477] flex items-center justify-center">
                  <span className="text-5xl">🌳</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Parques Urbanos de Tijuana</h4>
                  <p className="text-gray-600 text-sm">Recorrido por los espacios verdes más emblemáticos de la ciudad fronteriza.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#BCCE16] to-[#8fa310] flex items-center justify-center">
                  <span className="text-5xl">🏛️</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Espacios Públicos Culturales</h4>
                  <p className="text-gray-600 text-sm">Visita a plazas y centros culturales que definen la identidad de la ciudad.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1edede] to-[#0e0477] flex items-center justify-center">
                  <span className="text-5xl">🌊</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Malecón y Zonas Costeras</h4>
                  <p className="text-gray-600 text-sm">Experiencia única en los espacios públicos junto al Océano Pacífico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Master Classes Section */}
        <section className="relative min-h-[500px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${masterClassesImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0e0477]/95"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e0477]/90 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Master Classes
                </h2>
                <p className="text-white/90 text-justify">
                  Obtén conocimientos técnicos sobre un tema especializado. Las master classes cuentan con la orientación de un especialista que te ayudará a ampliar tus conocimientos y a aprender técnicas sobre diversos temas del espacio público.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        {/* Master Classes Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#0e0477] to-[#6847f6] flex items-center justify-center">
                  <span className="text-5xl">🎨</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Diseño de Espacios Verdes</h4>
                  <p className="text-gray-600 text-sm">Técnicas avanzadas de diseño paisajístico y planificación urbana.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#6847f6] to-[#BCCE16] flex items-center justify-center">
                  <span className="text-5xl">📊</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Gestión y Administración</h4>
                  <p className="text-gray-600 text-sm">Estrategias para la administración eficiente de parques urbanos.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#BCCE16] to-[#1edede] flex items-center justify-center">
                  <span className="text-5xl">🌱</span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#0e0477] mb-2">Sustentabilidad Urbana</h4>
                  <p className="text-gray-600 text-sm">Prácticas sostenibles para el desarrollo de espacios públicos.</p>
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
