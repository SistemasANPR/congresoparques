import { Link } from "wouter";
import { ArrowLeft, Hotel, Mail } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Hospedaje() {
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
              Alojamiento
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-white/90 text-xl">¡Elige tu hospedaje!</p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg max-w-4xl mx-auto mb-6">
              Tijuana ofrece una variada y sólida infraestructura hotelera. En esta sección podrás consultar opciones de alojamiento en la ciudad sede.
            </p>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                <div className="w-24 h-24 bg-[#6847f6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hotel className="w-12 h-12 text-[#6847f6]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Próximamente
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Estamos trabajando para ofrecerte las mejores opciones de hospedaje para el Congreso Parques Tijuana 2026.
                </p>
                
                <div className="bg-[#0e0477] rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">¿Tu hotel desea participar?</h3>
                  <p className="text-white/90 mb-4">
                    Si tu hotel está interesado en integrarse como opción oficial para los participantes, contáctanos:
                  </p>
                  <a 
                    href="mailto:info@congresoparques.com" 
                    className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@congresoparques.com
                  </a>
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
