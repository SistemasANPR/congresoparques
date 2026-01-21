import { useState, useCallback, useEffect } from "react";
import { Link } from "wouter";
import { Clock, Calendar, MapPin, Globe, Users, Mic, GraduationCap, Wrench, Building, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import fondoCongresoUrl from "@assets/fondo-congreso-parques_1766092963263.png";
import lineaTiempo from "@assets/image_1765236417102.png";
import conferenciaMagistral from "@assets/Conferencia Magistral_1758578349365.jpg";
import sesionEducativa from "@assets/Sesion educativa_1758578349360.jpg";
import tallerVivencial from "@assets/Taller vivencial_1758578349360.jpg";
import masterClasses from "@assets/Master classes_1758578349365.jpg";
import expoEspacioPublico from "@assets/Expo Espacio Publico_1758578349359.jpg";
import eventosSociales from "@assets/Eventos Sociales_1758578349366.jpg";
import masterClassesIconUrl from "@assets/Master Classes_1758578569492.png";
import conferenciasIconUrl from "@assets/Conferencias Magistrales_1758578569495.png";
import talleresIconUrl from "@assets/Talleres Vivenciales_1758578569495.png";
import expoIconUrl from "@assets/Expo Espacio Publico_1758580313612.png";
import sesionesIconUrl from "@assets/Sesiones Educativas_1758578569496.png";
import eventosIconUrl from "@assets/Eventos Sociales_1758578569496.png";
import fondoMagistrales from "@assets/fondo_Magistrales_1_1769038490767.jpg";
import fondoSesiones from "@assets/fondo_Sesiones_1769038490765.jpg";
import fondoTalleres from "@assets/fondo_Talleres_1769038490767.jpg";
import fondoMasterClass from "@assets/Fondo_Master_Class_1769038490766.jpg";
import fondoExpo from "@assets/fondo_expo_1769038490767.jpg";
import fondoEventosSociales from "@assets/fondo_Eventos_sociales_1769038490767.jpg";
import iconoMagistrales from "@assets/Conferencias_Magistrales_1769038571197.png";
import iconoSesiones from "@assets/Sesiones_Educativas_1769038571198.png";
import iconoTalleres from "@assets/Talleres_Vivenciales_1769038571197.png";
import iconoMasterClass from "@assets/Master_Classes_1769038571193.png";
import iconoExpo from "@assets/Expo_Espacio_Publico_1769038571197.png";
import iconoEventos from "@assets/Eventos_Sociales_1769038571198.png";
// Imágenes adicionales para carruseles
import congresoParques1 from "@assets/Congreso Parques 1_1761672357092.jpg";
import congresoParques2 from "@assets/Congreso Parques 2_1761672357092.jpg";
import congresoParques3 from "@assets/Congreso Parques 3_1761672357092.jpg";
import congresoParques4 from "@assets/Congreso Parques 4_1761672357092.jpg";

// Componente de carrusel con indicadores de navegación
interface ImageCarouselProps {
  images: string[];
  title: string;
}

function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <div className="relative group">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`${title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Flechas de navegación */}
      {count > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#0e0477]" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5 text-[#0e0477]" />
          </button>
        </>
      )}

      {/* Indicadores de puntos */}
      {count > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white w-4"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Congreso() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(0);

  const timelineData = [
    {
      year: "2018",
      city: "Mérida",
      conferencias: 8,
      sesiones: 64,
      talleres: 9,
      asistentes: "1,866",
      ponentes: 136,
      paises: 22,
      expositores: 51
    },
    {
      year: "2019",
      city: "Monterrey",
      conferencias: 4,
      sesiones: 55,
      talleres: 18,
      asistentes: "1,600",
      ponentes: 128,
      paises: 19,
      expositores: 62
    },
    {
      year: "2019",
      city: "Salta",
      conferencias: 5,
      sesiones: 30,
      talleres: 7,
      asistentes: "400",
      ponentes: 28,
      paises: 15,
      expositores: 9
    },
    {
      year: "2020",
      city: "León",
      conferencias: 4,
      sesiones: 41,
      talleres: 9,
      asistentes: "537",
      ponentes: 88,
      paises: 18,
      expositores: 20
    },
    {
      year: "2020",
      city: "Guayaquil",
      conferencias: 6,
      sesiones: 22,
      talleres: 7,
      asistentes: "1,179",
      ponentes: 30,
      paises: 20,
      expositores: 12
    },
    {
      year: "2022",
      city: "Mundial",
      conferencias: 7,
      sesiones: 34,
      talleres: 17,
      asistentes: "1,690",
      ponentes: 80,
      paises: 37,
      expositores: 54
    },
    {
      year: "2023",
      city: "León",
      conferencias: 5,
      sesiones: 27,
      talleres: 11,
      asistentes: "1,273",
      ponentes: 60,
      paises: 8,
      expositores: 21
    },
    {
      year: "2024",
      city: "Mérida",
      conferencias: 5,
      sesiones: 24,
      talleres: 9,
      asistentes: "+600",
      ponentes: "+64",
      paises: 7,
      expositores: 29
    }
  ];

  const experienciasCards = [
    {
      iconUrl: conferenciasIconUrl,
      title: "Conferencias Magistrales",
      description: "Presentaciones de alto nivel con expertos internacionales en espacios públicos y sostenibilidad urbana.",
      fecha: "14 y 15 de mayo",
      image: conferenciaMagistral
    },
    {
      iconUrl: sesionesIconUrl,
      title: "Sesiones Educativas",
      description: "Más de 30 espacios de aprendizaje especializado con casos de estudio y mejores prácticas.",
      fecha: "14 y 15 de mayo",
      image: sesionEducativa
    },
    {
      iconUrl: talleresIconUrl,
      title: "Talleres Vivenciales",
      description: "Experiencias prácticas hands-on para aplicar conocimientos en tiempo real.",
      fecha: "13 de mayo",
      image: tallerVivencial
    },
    {
      iconUrl: masterClassesIconUrl,
      title: "Master Classes",
      description: "Sesiones intensivas con maestros reconocidos internacionalmente.",
      fecha: "13 de mayo",
      image: masterClasses
    },
    {
      iconUrl: expoIconUrl,
      title: "Expo Espacio Público",
      description: "Muestra comercial con las últimas innovaciones, tecnologías y soluciones del sector.",
      fecha: "14 y 15 de mayo",
      image: expoEspacioPublico
    },
    {
      iconUrl: eventosIconUrl,
      title: "Eventos Sociales",
      description: "Beer and Mix Party y ceremonia de clausura para networking y celebración.",
      fecha: "14 y 15 de mayo",
      image: eventosSociales
    }
  ];

  const experienciasDetalle = [
    {
      titulo: "Conferencias Magistrales",
      fecha: "14 y 15 de mayo",
      descripcion: "Líderes en parques y espacios públicos ofrecerán charlas inspiradoras basadas en su trayectoria y en los desafíos urbanos actuales.",
      imagen: fondoMagistrales,
      icono: iconoMagistrales,
      link: "",
      posicionImagen: "left",
      isActive: false
    },
    {
      titulo: "Sesiones Educativas",
      fecha: "14 y 15 de mayo",
      descripcion: "Más de 30 sesiones educativas impartidas por conferencistas nacionales e internacionales ofrecerán un espacio dedicado al aprendizaje y la capacitación.",
      imagen: fondoSesiones,
      icono: iconoSesiones,
      link: "",
      posicionImagen: "right",
      isActive: false
    },
    {
      titulo: "Talleres Vivenciales",
      fecha: "13 de mayo",
      descripcion: "Explora parques urbanos, proyectos ciudadanos, centros recreativos y técnicas especializadas en temas clave del espacio público. Una oportunidad ideal para ampliar tus conocimientos.",
      imagen: fondoTalleres,
      icono: iconoTalleres,
      link: "",
      posicionImagen: "left",
      isActive: false
    },
    {
      titulo: "Master Classes",
      fecha: "13 de mayo",
      descripcion: "Aprende de especialistas que te brindarán herramientas y técnicas avanzadas para profundizar en temas esenciales del espacio público.",
      imagen: fondoMasterClass,
      icono: iconoMasterClass,
      link: "",
      posicionImagen: "right",
      isActive: false
    },
    {
      titulo: "Expo Espacio Público",
      fecha: "14 y 15 de mayo",
      descripcion: "El punto de encuentro de las compañías líderes que impulsan el sector, exhibiendo productos y servicios clave para transformar y equipar los espacios públicos.",
      imagen: fondoExpo,
      icono: iconoExpo,
      link: "/expo-espacio-publico",
      posicionImagen: "left",
      isActive: true
    },
    {
      titulo: "Eventos Sociales",
      fecha: "13 al 15 de mayo",
      descripcion: "Disfruta tres experiencias pensadas para conectar y celebrar: la cena de consejo, la fiesta de la cerveza y la clausura del Congreso. Un ambiente ideal para convivir y crear nuevas relaciones profesionales.",
      imagen: fondoEventosSociales,
      icono: iconoEventos,
      link: "",
      posicionImagen: "right",
      isActive: false
    }
  ];

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
        <section 
          className="relative py-20 md:py-28 lg:py-32 text-center text-white overflow-hidden"
          style={{
            backgroundImage: `url(${fondoCongresoUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0477]/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Congreso Parques 2026
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white drop-shadow-md">
              Un espacio de aprendizaje y formación creado para quienes transforman los parques y espacios públicos en motores de bienestar urbano.
            </p>
          </div>
        </section>

        {/* ¿Por qué asistir? */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Grid: 2 columnas en desktop, 1 en mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                {/* Columna izquierda: Texto */}
                <div>
                  <h2
                    className="text-2xl md:text-3xl uppercase mb-8"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 900,
                      color: '#0e0477'
                    }}
                  >
                    ¿Por qué asistir?
                  </h2>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 400,
                      color: '#374151'
                    }}
                  >
                    Un evento internacional de capacitación, intercambio y experiencias
                    inmersivas, dirigido a quienes gestionan, diseñan y promueven los
                    parques urbanos y los espacios públicos. Reunimos presencialmente a
                    profesionales, sociedad civil, funcionarios públicos, académicos y
                    empresas de la industria para generar conocimiento, crear redes y
                    transformar ciudades.
                  </p>
                </div>

                {/* Columna derecha: Video */}
                <div className="w-full">
                  <div
                    className="w-full rounded-2xl overflow-hidden shadow-lg bg-black"
                    style={{ aspectRatio: '16 / 9', minHeight: '280px' }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/9A7G7Ar9Ji8"
                      title="Congreso Parques Video"
                      className="w-full h-full border-0"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Línea divisora */}
        <div className="container mx-auto px-4">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>

        {/* Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Duración</h4>
                <p className="text-gray-600">3 días de actividades</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Fechas</h4>
                <p className="text-gray-600">Del 13 al 15 de mayo del 2026</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Lugar</h4>
                <p className="text-gray-600">Tijuana, Baja California, México</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#0e0477]/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-[#0e0477]" />
                </div>
                <h4 className="text-lg font-bold text-[#0e0477] mb-2">Lenguaje Oficial</h4>
                <p className="text-gray-600">Español</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Legado - Interactive Timeline */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nuestro Legado
            </h2>
            <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
              Una trayectoria de impacto en la transformación de espacios públicos en América Latina
            </p>
            
            {/* Timeline Container */}
            <div className="max-w-6xl mx-auto">
              {/* Desktop Timeline */}
              <div className="hidden md:block relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#d0dd15] via-[#6847f6] to-[#d0dd15] rounded-full"></div>
                
                {/* Timeline Events */}
                <div className="grid grid-cols-8 gap-2">
                  {timelineData.map((event, index) => (
                    <div 
                      key={index}
                      className="relative flex flex-col items-center"
                    >
                      {/* Year Dot */}
                      <button
                        onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                        className={`relative z-10 w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer border-4 ${
                          expandedEvent === index 
                            ? 'bg-[#d0dd15] border-white scale-110 shadow-lg shadow-[#d0dd15]/40' 
                            : 'bg-[#6847f6] border-[#d0dd15] hover:scale-105 hover:bg-[#7c5df7]'
                        }`}
                      >
                        <span className={`text-xs font-bold ${expandedEvent === index ? 'text-[#0e0477]' : 'text-white'}`} style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {event.year}
                        </span>
                      </button>
                      
                      {/* City Label */}
                      <div className={`mt-3 text-center transition-all duration-300 ${expandedEvent === index ? 'text-[#d0dd15]' : 'text-white/80'}`}>
                        <span className="text-sm font-semibold block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {event.city}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Expanded Details Card */}
                {expandedEvent !== null && (
                  <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#d0dd15] text-[#0e0477] px-4 py-2 rounded-lg">
                          <span className="text-2xl font-black" style={{ fontFamily: 'Antonio, sans-serif' }}>
                            {timelineData[expandedEvent].year}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {timelineData[expandedEvent].city}
                          </h3>
                          <p className="text-white/60 text-sm">Congreso Internacional de Parques Urbanos</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setExpandedEvent(null)}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <ChevronUp className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Mic className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].conferencias}
                        </div>
                        <div className="text-xs text-white/60">Conferencias</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <GraduationCap className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].sesiones}
                        </div>
                        <div className="text-xs text-white/60">Sesiones Educativas</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Wrench className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].talleres}
                        </div>
                        <div className="text-xs text-white/60">Talleres</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Users className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].asistentes}
                        </div>
                        <div className="text-xs text-white/60">Asistentes</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Mic className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].ponentes}
                        </div>
                        <div className="text-xs text-white/60">Ponentes</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Globe className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].paises}
                        </div>
                        <div className="text-xs text-white/60">Países</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                        <Building className="w-6 h-6 text-[#d0dd15] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>
                          {timelineData[expandedEvent].expositores}
                        </div>
                        <div className="text-xs text-white/60">Expositores</div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hint text */}
                {expandedEvent === null && (
                  <p className="text-center text-white/50 text-sm mt-8">
                    Haz clic en un año para ver los detalles del congreso
                  </p>
                )}
              </div>
              
              {/* Mobile Timeline */}
              <div className="md:hidden space-y-4">
                {timelineData.map((event, index) => (
                  <div 
                    key={index}
                    className={`bg-white/5 rounded-xl overflow-hidden border transition-all duration-300 ${
                      expandedEvent === index ? 'border-[#d0dd15]' : 'border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                      className="w-full p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          expandedEvent === index ? 'bg-[#d0dd15]' : 'bg-[#6847f6]'
                        }`}>
                          <span className={`text-sm font-bold ${expandedEvent === index ? 'text-[#0e0477]' : 'text-white'}`} style={{ fontFamily: 'Antonio, sans-serif' }}>
                            {event.year}
                          </span>
                        </div>
                        <div className="text-left">
                          <h3 className="text-white font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {event.city}
                          </h3>
                          <p className="text-white/50 text-xs">{event.asistentes} asistentes</p>
                        </div>
                      </div>
                      {expandedEvent === index ? (
                        <ChevronUp className="w-5 h-5 text-[#d0dd15]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/50" />
                      )}
                    </button>
                    
                    {expandedEvent === index && (
                      <div className="px-4 pb-4 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <Mic className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.conferencias}</div>
                          <div className="text-[10px] text-white/60">Conferencias</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <GraduationCap className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.sesiones}</div>
                          <div className="text-[10px] text-white/60">Sesiones</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <Wrench className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.talleres}</div>
                          <div className="text-[10px] text-white/60">Talleres</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <Users className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.ponentes}</div>
                          <div className="text-[10px] text-white/60">Ponentes</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <Globe className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.paises}</div>
                          <div className="text-[10px] text-white/60">Países</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 text-center">
                          <Building className="w-5 h-5 text-[#d0dd15] mx-auto mb-1" />
                          <div className="text-lg font-bold text-white">{event.expositores}</div>
                          <div className="text-[10px] text-white/60">Expositores</div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Secciones detalladas de experiencias */}
        {experienciasDetalle.map((exp, index) => (
          <div 
            key={index} 
            className="relative min-h-[450px] md:min-h-[500px] bg-cover bg-center flex items-center overflow-hidden"
            style={{ backgroundImage: `url(${exp.imagen})` }}
          >
            {/* Duotone overlay similar to Hero */}
            <div 
              className="absolute inset-0"
              style={{
                background: exp.posicionImagen === 'left' 
                  ? 'linear-gradient(to left, rgba(104, 71, 246, 0.15) 0%, rgba(14, 4, 119, 0.92) 45%, rgba(14, 4, 119, 0.98) 100%)'
                  : 'linear-gradient(to right, rgba(104, 71, 246, 0.15) 0%, rgba(14, 4, 119, 0.92) 45%, rgba(14, 4, 119, 0.98) 100%)'
              }}
            />
            {/* Additional cyan/magenta duotone effect */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 222, 222, 0.3) 0%, rgba(104, 71, 246, 0.4) 50%, rgba(188, 206, 22, 0.2) 100%)'
              }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-xl ${exp.posicionImagen === 'left' ? 'ml-auto mr-0 md:mr-12' : 'mr-auto ml-0 md:ml-12'} text-white py-12`}>
                {/* Icon */}
                <div className="mb-6">
                  <img 
                    src={exp.icono} 
                    alt={`Icono ${exp.titulo}`}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
                  />
                </div>
                
                <h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-3 drop-shadow-md"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {exp.titulo}
                </h3>
                <p className="text-[#1edede] font-semibold mb-4 text-lg">{exp.fecha}</p>
                <p className="text-white/90 mb-8 leading-relaxed text-base md:text-lg">{exp.descripcion}</p>
                
                {/* Button - Active only for Expo Espacio Público */}
                {exp.isActive ? (
                  <Link 
                    href={exp.link}
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-[#0e0477] transition-all duration-300 text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Ver más
                  </Link>
                ) : (
                  <button
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 text-white/40 font-bold px-8 py-3 rounded-full cursor-not-allowed opacity-60 text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Ver más
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
