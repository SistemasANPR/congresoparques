import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import fondoCongresoUrl from "@assets/fondo-congreso-parques_1766092963263.png";
import logoAnprBlanco from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";
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

export default function Congreso() {
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
      imagen: conferenciaMagistral,
      link: "/programa",
      posicionImagen: "left",
      showButton: false
    },
    {
      titulo: "Sesiones Educativas",
      fecha: "14 y 15 de mayo",
      descripcion: "Más de 30 sesiones educativas impartidas por conferencistas nacionales e internacionales ofrecerán un espacio dedicado al aprendizaje y la capacitación.",
      imagen: sesionEducativa,
      link: "/programa",
      posicionImagen: "right",
      showButton: false
    },
    {
      titulo: "Talleres Vivenciales",
      fecha: "13 de mayo",
      descripcion: "Explora parques urbanos, proyectos ciudadanos, centros recreativos y técnicas especializadas en temas clave del espacio público. Una oportunidad ideal para ampliar tus conocimientos.",
      imagen: tallerVivencial,
      link: "/talleres",
      posicionImagen: "left",
      showButton: false
    },
    {
      titulo: "Master Classes",
      fecha: "13 de mayo",
      descripcion: "Aprende de especialistas que te brindarán herramientas y técnicas avanzadas para profundizar en temas esenciales del espacio público.",
      imagen: masterClasses,
      link: "/talleres",
      posicionImagen: "right",
      showButton: false
    },
    {
      titulo: "Expo Espacio Público",
      fecha: "14 y 15 de mayo",
      descripcion: "El punto de encuentro de las compañías líderes que impulsan el sector, exhibiendo productos y servicios clave para transformar y equipar los espacios públicos.",
      imagen: expoEspacioPublico,
      link: "/expo-espacio-publico",
      posicionImagen: "left",
      showButton: false
    },
    {
      titulo: "Eventos Sociales",
      fecha: "13 al 15 de mayo",
      descripcion: "Disfruta tres experiencias pensadas para conectar y celebrar: la cena de consejo, la fiesta de la cerveza y la clausura del Congreso. Un ambiente ideal para convivir y crear nuevas relaciones profesionales.",
      imagen: eventosSociales,
      link: "/eventos-sociales",
      posicionImagen: "right",
      showButton: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
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

        {/* Objetivo del Evento */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Objetivo del evento
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Reunir, integrar y capacitar presencialmente a profesionales, autoridades, academia, industria y sociedad civil del espacio público.
                </p>
              </div>
              <div className="text-center">
                <img src={logoUrl} alt="Congreso Parques" className="max-w-[280px] mx-auto" />
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

        {/* Video y Organizado por */}
        <section className="bg-[#0e0477] py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Lr_ADiUJijc?si=T_yqMzbu_xmEw33u" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="text-center py-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Organizado por:
                </h2>
                <img src={logoAnprBlanco} alt="ANPR" className="max-w-[200px] mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Legado */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nuestro Legado
            </h2>
            <div className="max-w-4xl mx-auto">
              <img 
                src={lineaTiempo} 
                alt="Línea del tiempo del Congreso Parques 2018-2024" 
                className="w-full h-auto max-w-full"
                style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                data-testid="linea-tiempo-img"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Línea divisora */}
        <div className="container mx-auto px-4 bg-gray-50">
          <div className="h-px bg-gray-300 max-w-6xl mx-auto"></div>
        </div>

        {/* Diseña tu experiencia - Tarjetas */}
        <section className="py-16" style={{ backgroundColor: '#35219b' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Diseña tu experiencia
                </h2>
                <p className="text-white/80 text-lg">Los asistentes pueden participar en:</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experienciasCards.map((experiencia, index) => (
                  <div 
                    key={index} 
                    className="experience-card animate"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-testid={`congreso-experience-${index}`}
                  >
                    <Card className="bg-white overflow-visible relative card-content" style={{ margin: '10px 8px' }}>
                      <div className="experience-icon">
                        <img 
                          src={experiencia.iconUrl}
                          alt={`${experiencia.title} icon`}
                        />
                      </div>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={experiencia.image} 
                          alt={experiencia.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <CardContent className={`p-4 flex flex-col ${experiencia.title === "Expo Espacio Público" ? "h-56" : "h-48"}`}>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.title}</h3>
                          <p className="text-gray-600 mb-3 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.description}</p>
                          {experiencia.title === "Expo Espacio Público" && (
                            <a
                              href="https://www.expoespaciopublico.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:opacity-90"
                              style={{ backgroundColor: '#6847f6', fontFamily: 'Montserrat, sans-serif' }}
                            >
                              Ver más
                            </a>
                          )}
                        </div>
                        <div className="flex items-center justify-center text-sm font-medium mt-auto pt-2 border-t border-gray-100" style={{ color: '#35219b', fontFamily: 'Montserrat, sans-serif' }}>
                          <Calendar className="w-4 h-4 mr-2" />
                          {experiencia.fecha}
                        </div>
                      </CardContent>
                    </Card>
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
            className="relative min-h-[400px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `linear-gradient(to ${exp.posicionImagen === 'left' ? 'left' : 'right'}, rgba(14, 4, 119, 0.85) 50%, transparent 100%), url(${exp.imagen})` }}
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-xl ${exp.posicionImagen === 'left' ? 'ml-auto mr-0 md:mr-12' : 'mr-auto ml-0 md:ml-12'} text-white py-12`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.titulo}</h3>
                <p className="text-[#BCCE16] font-semibold mb-4">{exp.fecha}</p>
                <p className="text-white/90 mb-6 leading-relaxed">{exp.descripcion}</p>
                {exp.showButton && (
                  <Link 
                    href={exp.link}
                    className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors"
                  >
                    Ver Más
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
