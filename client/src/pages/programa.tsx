import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export default function Programa() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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
              <img 
                src={logoUrl} 
                alt="IX Congreso Internacional de Parques Urbanos y Espacio Público" 
                className="h-12 sm:h-14 md:h-16 w-auto"
                data-testid="header-logo"
              />
              <div className="bg-[#0e0477] px-2.5 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-xs md:text-sm tracking-wide" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  TIJUANA <span className="text-[#1edede]">2026</span>
                </span>
              </div>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              data-testid="back-to-home"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Volver al inicio</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
              data-testid="page-title"
            >
              Programa
            </h1>
            
            {/* Content Container */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10" data-testid="content-container">
              <p className="text-gray-600 text-center text-lg">
                Contenido próximamente disponible.
              </p>
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
