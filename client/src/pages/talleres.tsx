import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import tallerVivencialImg from "@assets/Taller vivencial_1758578349360.jpg";
import masterClassesImg from "@assets/Master classes_1758578349365.jpg";

export default function Talleres() {
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
