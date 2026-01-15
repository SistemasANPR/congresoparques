import { Link } from "wouter";
import { ArrowLeft, Download, FileText, CreditCard, Link2, BookOpen } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Preparate() {
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
              Prepárate Para<br />El Congreso
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Sección 1: Conoce acerca del congreso */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  1. Conoce acerca del congreso
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Antes de poder discutir con tu jefe tu posible participación al Congreso, es importante que <strong className="text-[#0e0477]">conozcas a fondo la estructura</strong> del mismo, fechas, horarios, logística, tipos de conferencias y conferencistas y precios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>A través de conocer toda esta información <strong className="text-[#0e0477]">establece metas</strong> a corto y largo plazo que te <strong className="text-[#0e0477]">ayuden a cumplir mejor tu trabajo.</strong> Estas metas deben de ser apoyadas por la idea de asistir al evento.</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-[#6847f6] mb-4">Kit de asistente:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Información general</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">Instrucciones para registro</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm">Datos bancarios</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <Link2 className="w-4 h-4" />
                      <span className="text-sm">Enlaces importantes</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#6847f6]/20 to-[#BCCE16]/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📋</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Organiza tu agenda */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  2. Organiza tu agenda de conferencias
                </h2>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Alinea tus objetivos laborales y los de tu organización con los objetivos de las conferencias y talleres a los que te gustaría asistir. La mejor forma de justificar tu asistencia al Congreso es que lo que vas a aprender te ayude a poder hacer mejor tu trabajo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Establece una agenda de contactos y planea un posible acercamiento con algún conferencista con el cual le llegue interesar a tu organización hacer relación.</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📅</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Lista de razones */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  3. Conoce la lista de razones
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Aprender de los mejores conferencistas y talleristas del mundo sobre parques y espacios públicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Ampliar tus contactos y generar valiosas relaciones públicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Conocer a los proveedores más importantes de la industria en Latinoamérica así como descubrir las últimas tendencias del mercado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Aprender de historias de éxito sobre parques y espacios públicos en Latinoamérica.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Llevar a tu organización nuevas ideas para el desarrollo de proyectos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Descargar todo el material de las conferencias al finalizar el Congreso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Visitar los parques y espacios públicos más emblemáticos de la ciudad sede.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Formar parte de la comunidad mexicana dedicada al cuidado, mantenimiento, administración y gestión de parques urbanos.</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#6847f6]/20 to-[#BCCE16]/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">✅</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Carta para justificar */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  4. Carta para justificar tu asistencia
                </h2>
                <ul className="space-y-4 text-white/90 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Descarga las cartas para presentar a tu jefe o institución.</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors">
                    <Download className="w-5 h-5" />
                    Descargar Carta Invitación
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors">
                    <Download className="w-5 h-5" />
                    Descargar Carta Molde
                  </button>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📄</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#0e0477] text-white text-center border-t border-white/20">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
