import { useState, useEffect } from "react";
import { Calendar, MapPin, Store, Phone, Mail, Clock, Eye, Building2, MessageCircle, Play, X, Search, Users, TrendingUp, Scale, Sparkles, Globe, Target, Award, Briefcase, Rocket, Link2, BarChart3, Compass, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BrandMarquee } from "@/components/BrandMarquee";
import expoOfficialLogoUrl from "@assets/Recurso_17_1769556427973.png";
import decorativeLeavesUrl from "@assets/FONDO-HOJAS-WEB_1769119400379.png";
import expoVideoThumbnailUrl from "@assets/EXPO-PLAY_1769623548994.jpg";
import visitante1Url from "@assets/Visitante1_1769625889617.jpg";
import visitante2Url from "@assets/Visitante2_1769625889619.jpg";
import visitante3Url from "@assets/Visitante3_1769625889619.jpg";
import visitante4Url from "@assets/Visitante4_1769625889620.jpg";
import visitante5Url from "@assets/Visitante5_1769625889620.jpg";

export default function ExpoEspacioPublico() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: visitante1Url, alt: "Visitante disfrutando de la exposición" },
    { src: visitante2Url, alt: "Networking entre visitantes" },
    { src: visitante3Url, alt: "Experiencia del visitante en mobiliario urbano" },
    { src: visitante4Url, alt: "Visitantes conociendo productos" },
    { src: visitante5Url, alt: "Innovación en espacios públicos" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);
  const beneficiosVisitante = [
    { icon: Search, text: "Explorar el mercado especializado en parques y espacio público." },
    { icon: Users, text: "Conocer a los principales proveedores y fabricantes del sector." },
    { icon: TrendingUp, text: "Descubrir tendencias, tecnologías y productos innovadores." },
    { icon: Scale, text: "Comparar soluciones en calidad, precios y prestaciones." },
    { icon: Sparkles, text: "Inspirarte con proyectos, materiales y nuevos enfoques de diseño urbano." },
    { icon: Globe, text: "Intercambiar experiencias con profesionales de toda América Latina." },
    { icon: Target, text: "Tomar mejores decisiones para tus proyectos actuales y futuros." }
  ];

  const beneficiosExpositor = [
    { icon: Award, text: "Posicionar tu marca ante un público altamente especializado." },
    { icon: Briefcase, text: "Presentar tus productos y soluciones a tomadores de decisión." },
    { icon: Rocket, text: "Lanzar innovaciones y demostrar tus tecnologías en un entorno profesional." },
    { icon: Link2, text: "Generar contactos comerciales y alianzas estratégicas." },
    { icon: BarChart3, text: "Conocer qué está haciendo la competencia y cómo se mueve el mercado." },
    { icon: Compass, text: "Identificar nuevas oportunidades de negocio en América Latina." },
    { icon: HeartHandshake, text: "Fortalecer relaciones con clientes actuales y prospectos." }
  ];

  const industrias = [
    "Consultores",
    "Oficinas de Arquitectura",
    "Obras Públicas y Servicios Públicos Municipales",
    "Museos y Centros Culturales",
    "Espacios Recreativos",
    "Parques Nacionales",
    "Parques de Aventura",
    "Administradores de Parques Urbanos",
    "Clubes deportivos",
    "Grupos inmobiliarios o de construcción",
    "Restaurantes y Hoteles"
  ];

  const tiposExpositores = [
    "Equipo de mantenimiento",
    "Sistemas de riego / equipos hidráulicos",
    "Viveros y jardines",
    "Árboles de gran tamaño",
    "Productos recreativos",
    "Juegos infantiles",
    "Juegos acuáticos",
    "Equipo deportivo",
    "Mobiliario para parques caninos",
    "Muebles para monopatines y bicicletas",
    "Superficies",
    "Sombras y velarías",
    "Luminarias",
    "Pinturas y recubrimientos",
    "Señalética y equipamiento vial",
    "Señalética inclusiva",
    "Accesos automatizados",
    "Instalaciones e infraestructura deportiva",
    "Maquinaria de jardinería y mantenimiento",
    "Sistemas de tratamiento de agua",
    "Servicios de mantenimiento de áreas verdes"
  ];

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

      <main className="pt-24 md:pt-28">
        {/* Hero Section - Expo Espacio Público */}
        <section
          id="hero-expo"
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center py-16 md:py-24 lg:py-32"
          style={{ backgroundColor: '#0e0477' }}
        >
          {/* Background gradient overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, #6847f6 0%, transparent 70%)'
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo oficial de Expo Espacio Público */}
              <div className="mb-6 md:mb-8">
                <img
                  src={expoOfficialLogoUrl}
                  alt="Logo Expo Espacio Público 2026"
                  className="w-36 h-auto md:w-48 lg:w-56 mx-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Título */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
              >
                Expo Espacio Público 2026
              </h1>

              {/* Subtítulo */}
              <p
                className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 max-w-3xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#BCCE16' }}
              >
                La exhibición especializada del Congreso Parques 2026 para el sector de parques y espacios públicos en América Latina.
              </p>

              {/* Texto descriptivo */}
              <p
                className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Soluciones innovadoras para el diseño, construcción y gestión de espacios públicos que elevan la calidad de vida urbana.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="#seccion-visitante"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('seccion-visitante')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0e0477] px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  <Eye className="w-5 h-5" />
                  Participa como visitante
                </a>
                <a
                  href="#seccion-expositor"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('seccion-expositor')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#BCCE16] text-[#BCCE16] hover:bg-[#BCCE16] hover:text-[#0e0477] px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  <Building2 className="w-5 h-5" />
                  Participa como expositor
                </a>
              </div>
            </div>
          </div>

          {/* Decorative bottom leaves - consistent with other pages */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40 pointer-events-none"
            style={{
              backgroundImage: `url(${decorativeLeavesUrl})`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 100%'
            }}
          />
        </section>

        {/* Las Mejores Marcas Presentes */}
        <BrandMarquee />

        {/* Acerca del Evento */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center text-[#0e0477] mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Acerca del Evento
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[160px]">
                <Clock className="w-10 h-10 text-[#6847f6] mb-3" />
                <p className="text-2xl md:text-3xl font-black text-[#0e0477]">2</p>
                <p className="text-gray-600 text-sm">Días</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[160px]">
                <MapPin className="w-10 h-10 text-[#6847f6] mb-3" />
                <p className="text-base md:text-lg font-bold text-[#0e0477] leading-tight">BC Center</p>
                <p className="text-gray-600 text-sm">Tijuana</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[160px]">
                <Calendar className="w-10 h-10 text-[#6847f6] mb-3" />
                <p className="text-base md:text-lg font-bold text-[#0e0477]">14 y 15</p>
                <p className="text-gray-600 text-sm">de mayo 2026</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[160px]">
                <Store className="w-10 h-10 text-[#6847f6] mb-3" />
                <p className="text-2xl md:text-3xl font-black text-[#0e0477]">40</p>
                <p className="text-gray-600 text-sm">Stands</p>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="mt-10 max-w-4xl mx-auto">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg group focus:outline-none focus:ring-4 focus:ring-[#6847f6]/50"
                aria-label="Reproducir video de Expo Espacio Público"
              >
                {/* Thumbnail Image */}
                <img
                  src={expoVideoThumbnailUrl}
                  alt="Vista de Expo Espacio Público - Haz clic para ver el video"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Play button with pulse animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Pulse rings */}
                  <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 animate-ping-slow" />
                  <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/30 animate-ping-slower" />
                  
                  {/* Play button */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-[#0e0477] ml-1" fill="#0e0477" />
                  </div>
                </div>
                
                {/* Text label */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white font-semibold text-sm md:text-base drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Conoce Expo Espacio Público
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* ¡Participa como Visitante! */}
        <section id="seccion-visitante" className="py-12 md:py-16 scroll-mt-32" style={{ backgroundColor: '#6847f6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ¡Participa como Visitante!
              </h2>
              <p
                className="text-xl md:text-2xl text-white font-semibold mb-6 leading-snug max-w-3xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ¿Quieres descubrir cómo construir espacios públicos más sostenibles, inclusivos y llenos de vida?
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                Entonces <strong className="text-[#BCCE16]">no puedes faltar a la Expo Espacio Público</strong>, el evento que te acerca a las últimas tendencias y soluciones innovadoras que están moldeando el futuro urbano.
              </p>
              <a
                href="#"
                className="inline-block bg-[#BCCE16] hover:bg-[#a8b814] text-[#0e0477] px-8 py-4 sm:px-10 sm:py-5 rounded-lg text-base sm:text-lg font-bold transform hover:scale-105 transition-all uppercase tracking-wide shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Antonio, sans-serif' }}
                data-testid="btn-registro-visitante"
              >
                Regístrate (entrada sin costo)
              </a>
            </div>
          </div>
        </section>

        {/* Beneficios de Participar */}
        <section className="py-10 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Carrusel de imágenes */}
              <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
                <div className="relative aspect-[16/7] md:aspect-[16/6]">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#0e0477]" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight className="w-6 h-6 text-[#0e0477]" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentSlide 
                            ? "bg-white w-6" 
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-center text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Beneficios de participar
              </h3>
              <p
                className="text-lg md:text-xl font-semibold text-center text-[#6847f6] mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Como visitante podrás:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {beneficiosVisitante.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6847f6]/10 flex items-center justify-center">
                      <beneficio.icon className="w-5 h-5 text-[#6847f6]" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">{beneficio.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Encuentra toda la industria de espacio público */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-center text-[#0e0477] mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Encuentra toda la industria de espacio público
            </h2>
            <p className="text-center text-gray-600 mb-10">Proveedores de:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {industrias.map((industria, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-700 text-sm">{industria}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ¡Participa como Expositor! */}
        <section id="seccion-expositor" className="py-12 md:py-16 scroll-mt-32" style={{ backgroundColor: '#6847F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Building2 className="w-8 h-8 text-[#BCCE16]" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                ¡Participa como Expositor!
              </h2>
              <p className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Aparta tu lugar con un <strong className="text-[#BCCE16]">30% de anticipo</strong></p>
              <p className="mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>*Precios en Pesos Mexicanos más IVA (Tasa de IVA 16%)</p>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 md:p-8 mb-8">
                <p className="text-white/90 leading-relaxed">
                  En ediciones pasadas de Expo Espacio Público, los expositores pudieron conectar con <strong>clientes potenciales</strong>, establecer contacto con <strong>funcionarios públicos</strong> y acercarse a <strong>desarrolladores inmobiliarios</strong> a nivel regional y nacional, fortaleciendo así nuevas alianzas estratégicas.
                </p>
              </div>

              <button
                disabled
                className="inline-block bg-gray-400 text-white px-10 py-5 rounded-lg text-lg cursor-not-allowed opacity-70 uppercase tracking-wide"
                style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                data-testid="btn-registro-expositor-main"
              >
                Registro próximamente
              </button>
              <p className="text-white/70 text-sm mt-4">El registro de expositores estará disponible próximamente</p>
            </div>
          </div>
        </section>

        {/* Beneficios para Expositores */}
        <section className="py-10 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-center text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Beneficios de participar
              </h3>
              <p
                className="text-lg md:text-xl font-semibold text-center text-[#6847f6] mb-8"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Como expositor podrás:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {beneficiosExpositor.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6847f6]/10 flex items-center justify-center">
                      <beneficio.icon className="w-5 h-5 text-[#6847f6]" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">{beneficio.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tipo de Expositores */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-center text-[#0e0477] mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Tipo de Expositores
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {tiposExpositores.map((tipo, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 border-l-4 border-[#6847f6] p-3 rounded-r-lg">
                  <span className="text-gray-700 text-sm">{tipo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-center text-white mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Contacto
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-white/90 mb-8">
                Para más información sobre patrocinios o venta de stands:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-[#BCCE16] mb-4">Horario de Atención</h3>
                  <div className="space-y-2 text-white/90">
                    <p className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#BCCE16]" />
                      De miércoles a viernes
                    </p>
                    <p className="text-white/70 ml-7">9:00 am - 6:00 pm (GMT-6)</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-[#BCCE16] mb-4">Información de Contacto</h3>
                  <div className="space-y-3 text-white/90">
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#BCCE16]" />
                      01 999 944 4060
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#BCCE16]" />
                      +52 999 960 0765
                    </p>
                    <a href="mailto:vinculacion@anpr.org.mx" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-[#BCCE16]" />
                      vinculacion@anpr.org.mx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#BCCE16] transition-colors p-2"
              aria-label="Cerrar video"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* YouTube Embed */}
            <iframe
              src="https://www.youtube.com/embed/x4Xjw7JVr_Y?autoplay=1&rel=0"
              title="Video Expo Espacio Público"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* CSS Animations for Play Button */}
      <style>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
