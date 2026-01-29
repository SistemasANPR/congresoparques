import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Ticket } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [sedeDropdownOpen, setSedeDropdownOpen] = useState(false);
  const [convocatoriasDropdownOpen, setConvocatoriasDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [mobileSedeOpen, setMobileSedeOpen] = useState(false);
  const [mobileConvocatoriasOpen, setMobileConvocatoriasOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Left Side: Logo + Tijuana 2026 */}
          <Link href="/" className="flex flex-row items-end gap-2 md:flex-col md:items-center md:gap-1.5 shrink-0">
            <img
              src={logoUrl}
              alt="IX Congreso Internacional de Parques Urbanos y Espacio Público - Logo Oficial ANPR Tijuana 2026"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
              data-testid="header-logo"
            />

            {/* Tijuana 2026 Badge */}
            <div className="bg-[#0e0477] px-2 py-0.5 md:px-2.5 md:py-1 rounded">
              <span className="text-[#d2dd0a] font-black text-[0.6rem] sm:text-[0.65rem] md:text-xs lg:text-sm tracking-wider uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                TIJUANA <span className="text-[#1edede]">2026</span>
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4 xl:mx-8">
            <div className="flex items-center gap-0.5 xl:gap-1">
              {/* Acerca de Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  className={`relative overflow-hidden px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md group flex items-center gap-1 ${aboutDropdownOpen ? 'text-[#d0dd15]' : 'text-white hover:text-[#d0dd15]'}`}
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                  data-testid="nav-acerca-de"
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                >
                  <span className="relative z-10">Acerca de</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Dropdown Menu */}
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-[#6847f6] rounded-lg shadow-xl border border-white/10 py-2">
                    <Link
                      href="/congreso"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-congreso"
                    >
                      Congreso
                    </Link>
                    <Link
                      href="/organizadores"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-organizadores"
                    >
                      Organizadores
                    </Link>
                    <Link
                      href="/ponentes"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-ponentes"
                    >
                      Ponentes
                    </Link>
                    <Link
                      href="/preparate"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-preparate"
                    >
                      Prepárate
                    </Link>
                    <Link
                      href="/comite-evaluador"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-comite"
                    >
                      Consejo Evaluador
                    </Link>
                    <span
                      className="block px-4 py-2.5 text-white/50 cursor-default text-sm"
                      data-testid="nav-dropdown-galerias"
                    >
                      Galerías
                    </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actividades Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActivitiesDropdownOpen(true)}
                onMouseLeave={() => setActivitiesDropdownOpen(false)}
              >
                <button
                  className={`relative overflow-hidden px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md group flex items-center gap-1 ${activitiesDropdownOpen ? 'text-[#d0dd15]' : 'text-white hover:text-[#d0dd15]'}`}
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                  data-testid="nav-actividades"
                  onClick={() => setActivitiesDropdownOpen(!activitiesDropdownOpen)}
                >
                  <span className="relative z-10">Actividades</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activitiesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Actividades Dropdown Menu */}
                {activitiesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-[#6847f6] rounded-lg shadow-xl border border-white/10 py-2">
                    <Link
                      href="/programa"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-programa"
                    >
                      Programa
                    </Link>
                    <Link
                      href="/talleres"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-talleres"
                    >
                      Talleres
                    </Link>
                    <Link
                      href="/eventos-sociales"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-eventos-sociales"
                    >
                      Eventos Sociales
                    </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Sede Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSedeDropdownOpen(true)}
                onMouseLeave={() => setSedeDropdownOpen(false)}
              >
                <button
                  className={`relative overflow-hidden px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md group flex items-center gap-1 ${sedeDropdownOpen ? 'text-[#d0dd15]' : 'text-white hover:text-[#d0dd15]'}`}
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                  data-testid="nav-sede"
                  onClick={() => setSedeDropdownOpen(!sedeDropdownOpen)}
                >
                  <span className="relative z-10">Prepárate</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sedeDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Sede Dropdown Menu */}
                {sedeDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-[#6847f6] rounded-lg shadow-xl border border-white/10 py-2">
                    <Link
                      href="/sede"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-sede"
                    >
                      Ciudad Sede
                    </Link>
                    <Link
                      href="/conectividad"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-conectividad"
                    >
                      Conectividad
                    </Link>
                    <Link
                      href="/hospedaje"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-hospedaje"
                    >
                      Hospedaje
                    </Link>
                    <Link
                      href="/recursos"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-recursos"
                    >
                      Recursos
                    </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Convocatorias Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setConvocatoriasDropdownOpen(true)}
                onMouseLeave={() => setConvocatoriasDropdownOpen(false)}
              >
                <button
                  className={`relative overflow-hidden px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md group flex items-center gap-1 ${convocatoriasDropdownOpen ? 'text-[#d0dd15]' : 'text-white hover:text-[#d0dd15]'}`}
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                  data-testid="nav-convocatorias"
                  onClick={() => setConvocatoriasDropdownOpen(!convocatoriasDropdownOpen)}
                >
                  <span className="relative z-10">Convocatorias</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${convocatoriasDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Convocatorias Dropdown Menu */}
                {convocatoriasDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-[#6847f6] rounded-lg shadow-xl border border-white/10 py-2">
                    <a
                      href="https://congresoparques.com/registro_sesiones.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-sesiones-educativas"
                    >
                      Sesiones Educativas
                    </a>
                    <a
                      href="https://congresoparques.com/registro_posters.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-posters"
                    >
                      Pósters Científicos
                    </a>
                    <a
                      href="https://congresoparques.com/registro_voluntarios.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                      data-testid="nav-dropdown-voluntarios"
                    >
                      Voluntarios
                    </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Expo Espacio Público - Direct Link */}
              <Link
                href="/expo-espacio-publico"
                className="relative overflow-hidden text-white hover:text-[#d0dd15] px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md"
                style={{fontFamily: 'Montserrat, sans-serif'}}
                data-testid="nav-expo-espacio-publico"
              >
                <span className="relative z-10">Expo</span>
              </Link>
            </div>
          </div>

          {/* Right Side: CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA Button - Disabled */}
            <button
              disabled
              className="hidden md:flex items-center gap-2 bg-white/20 text-white/50 px-6 xl:px-7 py-3 xl:py-3.5 rounded-full text-sm xl:text-base cursor-not-allowed opacity-60 border border-white/20 uppercase tracking-wide"
              style={{fontFamily: 'Antonio, sans-serif', fontWeight: 700}}
              data-testid="btn-adquirir-entradas"
              title="Próximamente disponible"
            >
              <Ticket className="w-4 h-4" />
              <span>Adquirir entradas</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/90 hover:text-white hover:bg-white/10"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                data-testid="mobile-menu-button"
              >
                <span className="sr-only">Abrir menú principal</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3" id="mobile-menu" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#6847f6]/95 backdrop-blur-md border-t border-white/20 rounded-md">
              {/* Mobile Acerca de Accordion */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                  data-testid="mobile-nav-acerca-de"
                >
                  <span>Acerca de</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileAboutOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/congreso"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-congreso"
                    >
                      Congreso
                    </Link>
                    <Link
                      href="/organizadores"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-organizadores"
                    >
                      Organizadores
                    </Link>
                    <Link
                      href="/ponentes"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-ponentes"
                    >
                      Ponentes
                    </Link>
                    <Link
                      href="/preparate"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-preparate"
                    >
                      Prepárate
                    </Link>
                    <Link
                      href="/comite-evaluador"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-comite"
                    >
                      Consejo Evaluador
                    </Link>
                    <span
                      className="block text-white/40 px-3 py-2 text-sm cursor-default"
                      data-testid="mobile-nav-galerias"
                    >
                      Galerías
                    </span>
                  </div>
                )}
              </div>

              {/* Mobile Actividades Accordion */}
              <div>
                <button
                  onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                  className="flex items-center justify-between text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                  data-testid="mobile-nav-actividades"
                >
                  <span>Actividades</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileActivitiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileActivitiesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/programa"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-programa"
                    >
                      Programa
                    </Link>
                    <Link
                      href="/talleres"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-talleres"
                    >
                      Talleres
                    </Link>
                    <Link
                      href="/eventos-sociales"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-eventos-sociales"
                    >
                      Eventos Sociales
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Sede Accordion */}
              <div>
                <button
                  onClick={() => setMobileSedeOpen(!mobileSedeOpen)}
                  className="flex items-center justify-between text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                  data-testid="mobile-nav-sede"
                >
                  <span>Prepárate</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSedeOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileSedeOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/sede"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-sede-link"
                    >
                      Ciudad Sede
                    </Link>
                    <Link
                      href="/conectividad"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-conectividad"
                    >
                      Conectividad
                    </Link>
                    <Link
                      href="/hospedaje"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-hospedaje"
                    >
                      Hospedaje
                    </Link>
                    <Link
                      href="/recursos"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-recursos"
                    >
                      Recursos
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Convocatorias Accordion */}
              <div>
                <button
                  onClick={() => setMobileConvocatoriasOpen(!mobileConvocatoriasOpen)}
                  className="flex items-center justify-between text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors"
                  data-testid="mobile-nav-convocatorias"
                >
                  <span>Convocatorias</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileConvocatoriasOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileConvocatoriasOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <a
                      href="https://congresoparques.com/registro_sesiones.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-sesiones-educativas"
                    >
                      Sesiones Educativas
                    </a>
                    <a
                      href="https://congresoparques.com/registro_posters.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-posters"
                    >
                      Pósters Científicos
                    </a>
                    <a
                      href="https://congresoparques.com/registro_voluntarios.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="mobile-nav-voluntarios"
                    >
                      Voluntarios
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Expo Espacio Público - Direct Link */}
              <Link
                href="/expo-espacio-publico"
                className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-nav-expo-espacio-publico"
              >
                Expo Espacio Público
              </Link>

              {/* Mobile CTA Button - Disabled */}
              <div className="pt-3 mt-2 border-t border-white/20">
                <button
                  disabled
                  className="flex items-center justify-center gap-2 w-full bg-white/20 text-white/50 px-6 py-3.5 rounded-full text-sm cursor-not-allowed opacity-60 border border-white/20 uppercase tracking-wide"
                  style={{fontFamily: 'Antonio, sans-serif', fontWeight: 700}}
                  data-testid="mobile-btn-adquirir-entradas"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Adquirir entradas</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
