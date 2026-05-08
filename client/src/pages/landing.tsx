import { useState, useEffect } from "react";
import SupportSection from "@/components/SupportSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Menu,
  X,
  ArrowUp,
  Calendar,
  MapPin,
  Users,
  Mic,
  BookOpen,
  Hammer,
  Target,
  Building,
  PartyPopper,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Play,
  ZoomIn,
  ChevronUp,
  ChevronDown,
  Leaf,
  Compass,
  Zap,
  DollarSign,
  Ticket,
  GraduationCap,
  FlaskConical,
  Camera,
  Crown,
  Medal,
  Store,
  Check,
  Utensils,
  Wine,
  Sparkles,
  CircleDot,
  Download
} from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import decorativeLeavesUrl from "@assets/Hojas coloridas_1758562659824.png";
import heroImage1 from "@assets/Congreso Parques 1_1761672357092.jpg";
import heroImage2 from "@assets/Congreso Parques 2_1761672357092.jpg";
import heroImage3 from "@assets/Congreso Parques 3_1761672357092.jpg";
import heroImage4 from "@assets/Congreso Parques 4_1761672357092.jpg";
import expoEspacioPublicoUrl from "@assets/Expo Espacio Publico_1758578349359.jpg";
import tallerVivencialUrl from "@assets/Taller vivencial_1758578349360.jpg";
import sesionEducativaUrl from "@assets/Sesion educativa_1758578349360.jpg";
import conferenciaMagistralUrl from "@assets/Conferencia Magistral_1758578349365.jpg";
import masterClassesUrl from "@assets/Master classes_1758578349365.jpg";
import eventosSocialesUrl from "@assets/Eventos Sociales_1758578349366.jpg";
import masterClassesIconUrl from "@assets/Master Classes_1758578569492.png";
import conferenciasIconUrl from "@assets/Conferencias Magistrales_1758578569495.png";
import talleresIconUrl from "@assets/Talleres Vivenciales_1758578569495.png";
import expoIconUrl from "@assets/Expo Espacio Publico_1758580313612.png";
import sesionesIconUrl from "@assets/Sesiones Educativas_1758578569496.png";
import eventosIconUrl from "@assets/Eventos Sociales_1758578569496.png";
import logoANPRUrl from "@assets/LOGO ANPR_1758652591788.png";
import logoANPRWhiteUrl from "@assets/LOGO ANPR-PERFIL-BLANCO_1758654877619.png";
import logoBCCUrl from "@assets/LOGO BCC color_1761676598707.png";
import expoEspacioPublico2026Img from "@assets/expo-espacio-publico-2026.jpg";
import logoExpoEspacioPublicoUrl from "@assets/logo-expo-espacio-publico-2026.png";
import { BrandMarquee } from "@/components/BrandMarquee";
import { HexagonPhoto } from "@/components/HexagonPhoto";

// Cambiar a true para reactivar la sección de Convocatorias
const SHOW_CONVOCATORIAS = false;


interface StatCounterProps {
  target: number;
  duration?: number;
}

interface Conferencista {
  id: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  cargo: string;
  empresa: string;
  foto_url: string | null;
  ponencia: string;
}

interface TemaGroup {
  id_tema: string;
  tema: string;
  ponentes: Conferencista[];
}

function StatCounter({ target, duration = 2000 }: StatCounterProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16); // 60 FPS
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < target) {
        currentValue += increment;
        setCurrent(Math.floor(currentValue));
        requestAnimationFrame(updateCounter);
      } else {
        setCurrent(target);
      }
    };

    updateCounter();
  }, [target, duration]);

  return <span className="stat-counter">+{current.toLocaleString()}</span>;
}

export default function Landing() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);
  const [selectedAxis, setSelectedAxis] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [magistrales, setMagistrales] = useState<Conferencista[]>([]);
  const [magistralesIndex, setMagistralesIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const heroBackgroundImages = [heroImage1, heroImage2, heroImage3, heroImage4];


  // Background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

  // Fetch magistrales
  useEffect(() => {
    const fetchMagistrales = async () => {
      try {
        const response = await fetch('https://congresoparques.com/cpanel/api/conferencistas.php');
        const data = await response.json();
        if (data.success && data.magistrales) {
          const allPonentes = data.magistrales.flatMap((tema: TemaGroup) => tema.ponentes);
          setMagistrales(allPonentes);
        }
      } catch (err) {
        console.error('Error fetching magistrales:', err);
      }
    };
    fetchMagistrales();
  }, []);

  // Auto-slide magistrales carousel every 5 seconds with infinite loop
  useEffect(() => {
    if (magistrales.length === 0) return;

    const interval = setInterval(() => {
      setMagistralesIndex((prev) => {
        // When we reach the end of the first set, we're showing the duplicate
        // so we can reset to 0 and it will look seamless
        if (prev >= magistrales.length - 1) {
          // Brief disable transition, reset to 0
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 50);
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [magistrales.length]);

  // Countdown timer
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const eventDate = new Date('2026-05-13T08:00:00');
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats visibility observer
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const statsSection = document.getElementById('legado');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => statsObserver.disconnect();
  }, []);

  // Section entrance animations observer
  useEffect(() => {
    const sectionsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !animatedSections.has(sectionId)) {
              setAnimatedSections(prev => new Set(Array.from(prev).concat([sectionId])));
              entry.target.classList.add('animate');
              // Also add animate class to any stagger-children elements
              const staggerElements = entry.target.querySelectorAll('.stagger-children');
              staggerElements.forEach(el => el.classList.add('animate'));
              sectionsObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all main sections except header and footer
    const sections = [
      'info', 'experiencias', 'ejes', ...(SHOW_CONVOCATORIAS ? ['convocatorias'] : []), 'precios', 'legado', 'aliados'
    ];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        sectionsObserver.observe(section);
      }
    });

    return () => sectionsObserver.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header height
      const headerHeight = 140; // Approximate height of the header with logo and banner
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const experiencias = [
    {
      iconUrl: conferenciasIconUrl,
      title: "Conferencias Magistrales",
      description: "Voces inspiradoras que marcan el rumbo de los parques y las ciudades.",
      fecha: "14 y 15 de mayo",
      image: conferenciaMagistralUrl,
      link: "/ponentes"
    },
    {
      iconUrl: sesionesIconUrl,
      title: "Sesiones Educativas",
      description: "+30 espacios formativos con especialistas de todo el mundo.",
      fecha: "14 y 15 de mayo",
      image: sesionEducativaUrl,
      link: "/ponentes"
    },
    {
      iconUrl: talleresIconUrl,
      title: "Talleres Vivenciales",
      description: "Aprende con dinámicas prácticas sobre diseño, gestión y activación comunitaria.",
      fecha: "13 de mayo",
      image: tallerVivencialUrl,
      link: "/talleres"
    },
    {
      iconUrl: masterClassesIconUrl,
      title: "Master Classes",
      description: "Formación intensiva en temas especializados con expertos reconocidos.",
      fecha: "13 de mayo",
      image: masterClassesUrl,
      link: "/talleres"
    },
    {
      iconUrl: expoIconUrl,
      title: "Expo Espacio Público",
      description: "Encuentro de negocios con las empresas líderes del sector en México y el mundo.",
      fecha: "14 y 15 de mayo",
      image: expoEspacioPublicoUrl,
      link: "/expo-espacio-publico"
    },
    {
      iconUrl: eventosIconUrl,
      title: "Eventos Sociales",
      description: "Beer and Mix Party y fiesta de clausura: la mejor oportunidad para ampliar tu red en un ambiente relajado y divertido.",
      fecha: "14 y 15 de mayo",
      image: eventosSocialesUrl,
      link: "/eventos-sociales"
    }
  ];

  const ejesTemáticos = [
    {
      título: "1. Naturaleza y Sostenibilidad",
      descripción: "La resiliencia climática es prioridad operativa para los espacios públicos del futuro.",
      subtemas: [
        "Hidrología: zanjas, jardines de lluvia, humedales, reutilización de agua",
        "Bosque urbano: metas de sombra, especies para calor/sequía",
        "Biodiversidad funcional: polinizadores, corredores verde-azules",
        "Buenas prácticas de áreas verdes y arbolado"
      ]
    },
    {
      título: "2. Comunidad y Participación Ciudadana",
      descripción: "Legitimidad, activación y corresponsabilidad con la comunidad.",
      subtemas: [
        "Co-gestión: voluntariado, amigos del parque, presupuestos participativos",
        "Comunicación efectiva y educación ambiental",
        "Eventos y experiencias que fortalecen el tejido social"
      ]
    },
    {
      título: "3. Diseño, Operación y Gestión Eficiente",
      descripción: "Lo que no se mantiene, se pierde. Gestión integral de activos públicos.",
      subtemas: [
        "Asset management, TCO (costo de ciclo de vida), planes de mantenimiento",
        "Innovaciones en mobiliario y equipamiento urbano",
        "Estrategias de gestión integral de espacios públicos",
        "Diseño universal; perspectiva de género y niñez"
      ]
    },
    {
      título: "4. Tecnología e Innovación Urbana",
      descripción: "Datos para decidir, no para decorar dashboards.",
      subtemas: [
        "Mantenimiento predictivo, inventarios de arbolado",
        "Señalética y wayfinding digital; AR/QR para interpretación",
        "Analítica de aforos y percepción"
      ]
    },
    {
      título: "5. Ciudad, Movilidad y Gobernanza",
      descripción: "Los parques como red, no islas. Integración sistémica en la planificación urbana.",
      subtemas: [
        "Parques + movilidad sostenible",
        "Planeación sistémica: red de parques, estándares de cobertura y equidad",
        "Modelos de gobernanza: agencias, fideicomisos, conservancies, OCVs"
      ]
    },
    {
      título: "6. Finanzas, Patrocinios y Modelos de Ingreso",
      descripción: "Sin flujo financiero sostenido, no hay excelencia operativa.",
      subtemas: [
        "Estructuras de ingreso: concesiones, eventos, membresías, donativos",
        "Patrocinios con ROI; contratos y KPIs",
        "Fondos climáticos y subvenciones (proyectos SBN)"
      ]
    }
  ];

  const timeline = [
    { icon: <Calendar className="w-6 h-6" />, título: "Apertura", fecha: "26 de septiembre de 2026" },
    { icon: <Calendar className="w-6 h-6" />, título: "Cierre", fecha: "15 de enero de 2026" }
  ];

  const estadísticas = [
    { valor: 9100, etiqueta: "Asistentes", icon: Users },
    { valor: 145, etiqueta: "Países", icon: Compass },
    { valor: 600, etiqueta: "Ponentes", icon: Mic },
    { valor: 300, etiqueta: "Conferencias", icon: BookOpen },
    { valor: 85, etiqueta: "Talleres", icon: Hammer },
    { valor: 250, etiqueta: "Expositores", icon: Building }
  ];

  const videosLegado = [
    {
      embedUrl: "https://www.youtube.com/embed/Lr_ADiUJijc",
      título: "MÉRIDA 2024",
      año: "2024"
    },
    {
      embedUrl: "https://www.youtube.com/embed/uqru5Tgoj_U",
      título: "LEÓN 2023",
      año: "2023"
    },
    {
      embedUrl: "https://www.youtube.com/embed/Rov_ecOfY34",
      título: "MUNDIAL MONTERREY 2022",
      año: "2022"
    },
    {
      embedUrl: "https://www.youtube.com/embed/x_oSKftOUhY",
      título: "LEÓN 2020",
      año: "2020"
    },
    {
      embedUrl: "https://www.youtube.com/embed/ZwH7OSGZxww",
      título: "SALTA, ARGENTINA 2019",
      año: "2019"
    },
    {
      embedUrl: "https://www.youtube.com/embed/kOJ5Qm3vLHE",
      título: "MÉRIDA 2018",
      año: "2018"
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "miembros",
            text: "20% DE DESCUENTO PARA MIEMBROS ANPR",
          },          {
            id: "estudiantes",
            text: "PRECIO ESPECIAL PARA ESTUDIANTES",
          },
        ]}
        speed="normal"
      />
      <Navigation />

      <div className="pt-[100px] md:pt-[116px] lg:pt-[132px]">
        <SupportSection />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center hero-bg-new pb-16 sm:pb-18 md:pb-24 lg:pb-28 xl:pb-32 2xl:pb-36 overflow-hidden">
        {/* Background Image Carousel with Purple Halftone Filter */}
        <div className="absolute inset-0 hero-bg-carousel">
          {heroBackgroundImages.map((image, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentBgImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        {/* Animated Waves Background */}
        <div className="absolute inset-0 z-0">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-5">
          <div className="hero-particle triangle-particle-1"></div>
          <div className="hero-particle triangle-particle-2"></div>
          <div className="hero-particle triangle-particle-3"></div>
          <div className="hero-particle circle-particle-1"></div>
          <div className="hero-particle circle-particle-2"></div>
          <div className="hero-particle circle-particle-3"></div>
          <div className="hero-particle triangle-particle-4"></div>
          <div className="hero-particle circle-particle-4"></div>
          <div className="hero-particle triangle-particle-5"></div>
          <div className="hero-particle circle-particle-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="event-date-location mb-3 sm:mb-4 md:mb-5 flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto gap-2 sm:gap-0 hero-date-animate px-4" data-testid="event-date-location">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white hero-icon" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold hero-date-text" style={{ fontFamily: 'Antonio, sans-serif' }}>13-15 DE MAYO, 2026</p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white hero-icon" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold hero-location-text" style={{ fontFamily: 'Antonio, sans-serif' }}>TIJUANA, BAJA CALIFORNIA</p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-4 hero-title-animate hero-main-title" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="hero-title">
              IX Congreso Internacional<br />de Parques Urbanos
            </h1>

            {/* Countdown Timer */}
            <div className="mb-3 sm:mb-4 md:mb-6 hero-countdown-animate px-4" data-testid="countdown-timer">
              <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5 max-w-3xl mx-auto">
                {[
                  { value: timeRemaining.days, label: 'Días', max: 365, colors: ['#ff69b4', '#ff8c42'] },
                  { value: timeRemaining.hours, label: 'Horas', max: 24, colors: ['#4169e1', '#40e0d0'] },
                  { value: timeRemaining.minutes, label: 'Minutos', max: 60, colors: ['#ffd700', '#ff8c42'] },
                  { value: timeRemaining.seconds, label: 'Segundos', max: 60, colors: ['#ffd700', '#87ceeb'] }
                ].map((item, index) => {
                  const circumference = 2 * Math.PI * 54;
                  const progress = item.value / item.max;
                  const offset = circumference - (progress * circumference);
                  
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-1 hero-countdown-circle">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(0 60 60)">
                              <stop offset="0%" style={{ stopColor: item.colors[0], stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: item.colors[1], stopOpacity: 1 }} />
                              <animateTransform
                                attributeName="gradientTransform"
                                type="rotate"
                                from="0 60 60"
                                to="360 60 60"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </linearGradient>
                          </defs>
                          <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="rgba(255, 255, 255, 0.1)"
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="3"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            className="countdown-circle"
                            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white hero-countdown-number" style={{ fontFamily: 'Antonio, sans-serif' }}>
                            {String(item.value).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center hero-button-animate px-4">
              <button
                onClick={() => scrollToSection('precios')}
                className="hero-cta-button px-7 py-3.5 sm:px-8 md:px-10 sm:py-4 md:py-4.5 text-base sm:text-lg md:text-xl font-bold transform hover:scale-105 transition-all text-white rounded-lg border-0 hero-cta-responsive uppercase tracking-wide"
                style={{ fontFamily: 'Antonio, sans-serif', lineHeight: '1.2' }}
                data-testid="hero-cta"
              >
                Ver precios de venta
              </button>
              <a
                href="https://anpr.org.mx/wp-content/uploads/2026/03/CP-2026-Universidades-2-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 md:px-10 sm:py-4 text-base sm:text-lg md:text-xl font-bold transform hover:scale-105 transition-all rounded-lg uppercase tracking-wide hero-cta-responsive"
                style={{
                  fontFamily: 'Antonio, sans-serif',
                  lineHeight: '1.2',
                  background: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.7)',
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                }}
                data-testid="hero-download"
              >
                <Download className="w-5 h-5 flex-shrink-0" />
                Descarga los detalles
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Image */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none hero-bottom-image-mosaic"
          style={{ backgroundImage: `url(${decorativeLeavesUrl})` }}
          data-testid="hero-bottom-decoration"
        ></div>
      </section>


      {/* Information Section */}
      <section id="info" className="py-20 bg-[#f5f5f7] section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl text-center mb-12 uppercase section-title" style={{ color: '#0e0477' }} data-testid="info-subtitle">¿POR QUÉ ASISTIR?</h2>

            {/* Icons - Full Width */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-4 stagger-children" data-testid="info-value-proposition">
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d0dd15" />
                    <stop offset="100%" stopColor="#00deff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-center">
                <div className="icon-container-gradient mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <div className="keyword-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Conecta</div>
                <div className="description-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Con líderes y profesionales del sector</div>
              </div>
              <div className="text-center">
                <div className="icon-container-gradient mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <div className="keyword-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Descubre</div>
                <div className="description-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Tendencias globales y soluciones innovadoras</div>
              </div>
              <div className="text-center">
                <div className="icon-container-gradient mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="keyword-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Aprende</div>
                <div className="description-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>De expertos nacionales e internacionales</div>
              </div>
              <div className="text-center">
                <div className="icon-container-gradient mb-6">
                  <PartyPopper className="w-8 h-8" />
                </div>
                <div className="keyword-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Vive</div>
                <div className="description-text" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Una experiencia única de capacitación, inspiración y networking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiencias" className="py-16" style={{ backgroundColor: '#6847f6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-12" data-testid="experiences-title">
              <span className="experience-title-experiencias">EXPERIENCIAS</span>
              <span className="experience-title-evento">DEL EVENTO</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiencias.map((experiencia, index) => {
                const hasLink = !!experiencia.link;
                const cardContent = (
                  <Card className={`bg-white overflow-visible relative card-content h-full ${hasLink ? 'transition-all duration-300 cursor-pointer group-hover:shadow-2xl group-hover:-translate-y-2' : ''}`} style={{ margin: '10px 8px' }}>
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
                    <CardContent className="p-4 flex flex-col" style={{ height: '200px' }}>
                      <div className="flex-1 overflow-hidden">
                        <h3 className={`text-xl font-semibold mb-2 ${hasLink ? 'transition-colors duration-300 text-gray-900 group-hover:text-[#6847f6]' : 'text-gray-900'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.title}</h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.description}</p>
                      </div>
                      <div className="flex items-center justify-center text-sm font-medium pt-2 border-t border-gray-100 mt-auto" style={{ color: '#35219b', fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4 mr-2" />
                        {experiencia.fecha}
                      </div>
                    </CardContent>
                  </Card>
                );

                return (
                  <div
                    key={index}
                    className={`experience-card animate h-full ${hasLink ? 'group' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    data-testid={`experience-${index}`}
                  >
                    {hasLink ? (
                      <Link href={experiencia.link} className="block h-full focus:outline-none">
                        {cardContent}
                      </Link>
                    ) : (
                      cardContent
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ponentes Magistrales Carousel Section */}
      {magistrales.length > 0 && (
        <section id="ponentes-magistrales" className="py-16" style={{ backgroundColor: '#35219b' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-center mb-4 uppercase text-white section-title">
                Conferencistas Magistrales
              </h2>
              <p className="text-center text-white/80 text-lg md:text-xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                Conoce a los expertos que liderarán las conferencias del congreso
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={() => setMagistralesIndex((prev) => (prev - 1 + magistrales.length) % magistrales.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white flex items-center justify-center shadow-lg hover:bg-white/40 transition-colors backdrop-blur-sm"
                aria-label="Anterior"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 -rotate-90" />
              </button>
              <button
                onClick={() => setMagistralesIndex((prev) => (prev + 1) % magistrales.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white flex items-center justify-center shadow-lg hover:bg-white/40 transition-colors backdrop-blur-sm"
                aria-label="Siguiente"
              >
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 -rotate-90" />
              </button>

              {/* Gradient fade left */}
              <div
                className="absolute left-0 top-0 h-full w-28 md:w-40 z-[5] pointer-events-none"
                style={{ background: 'linear-gradient(to right, #35219b 0%, #35219b 20%, transparent 100%)' }}
              />
              {/* Gradient fade right */}
              <div
                className="absolute right-0 top-0 h-full w-28 md:w-40 z-[5] pointer-events-none"
                style={{ background: 'linear-gradient(to left, #35219b 0%, #35219b 20%, transparent 100%)' }}
              />

              {/* Carousel Container - Infinite loop */}
              <div className="overflow-hidden">
                <div
                  className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                  style={{
                    transform: `translateX(calc(-${magistralesIndex * 25}% - ${magistralesIndex * 12}px - 12.5%))`,
                  }}
                >
                  {/* Duplicamos los elementos para crear efecto infinito sin espacios */}
                  {[...magistrales, ...magistrales].map((ponente, idx) => (
                    <div
                      key={`${ponente.id}-${idx}`}
                      className="w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-1.5"
                    >
                      <div className="group bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                        <div className="mb-3">
                          <HexagonPhoto
                            src={ponente.foto_url}
                            alt={`${ponente.nombres} ${ponente.apellido_paterno}`}
                            category="magistral"
                            width={120}
                            height={135}
                            showTriangles={true}
                            hoverTriangles={true}
                            iconSize="w-10 h-10"
                          />
                        </div>
                        <div
                          className="w-full rounded-md px-3 py-1.5 mb-1"
                          style={{ backgroundColor: '#35219b' }}
                        >
                          <h3
                            className="text-sm md:text-base font-bold line-clamp-2"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}
                          >
                            {`${ponente.nombres} ${ponente.apellido_paterno}`.trim()}
                          </h3>
                        </div>
                        {(ponente.cargo || ponente.empresa) && (
                          <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                            {ponente.cargo}{ponente.cargo && ponente.empresa ? ' · ' : ''}{ponente.empresa}
                          </p>
                        )}
                        {ponente.ponencia && (
                          <p className="text-xs italic text-[#6847f6] mt-auto pt-2 line-clamp-2">{ponente.ponencia}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 gap-2">
                {magistrales.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMagistralesIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      magistralesIndex % magistrales.length === idx ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Ir a ponente ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Ver todos link */}
            <div className="text-center mt-8">
              <Link href="/ponentes">
                <Button
                  variant="outline"
                  className="border-white bg-white text-[#35219b] hover:bg-transparent hover:text-white transition-colors btn-antonio"
                >
                  Ver todos los conferencistas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Thematic Axes Section */}
      <section id="ejes" className="py-16 bg-white overflow-hidden section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 flex items-center justify-center gap-4" data-testid="axes-title">
              <span 
                className="px-6 py-3 text-white font-bold uppercase rounded-lg"
                style={{ 
                  backgroundColor: '#0e0477',
                  fontFamily: 'Antonio, sans-serif'
                }}
              >
                EJES
              </span>
              <span 
                className="font-black uppercase"
                style={{ 
                  color: '#0e0477',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                TEMÁTICOS
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-2 md:h-96 relative">
              {ejesTemáticos.map((eje, index) => {
                const gradients = [
                  'linear-gradient(to bottom right, #68df8b, #c1dd00)', // Naturaleza y Sostenibilidad
                  'linear-gradient(to bottom right, #1adfab, #00e1fc)', // Comunidad y Participación Ciudadana
                  'linear-gradient(to bottom right, #ff8daa, #ff13e3)', // Diseño, Operación y Gestión Eficiente
                  'linear-gradient(to bottom right, #ff7991, #d6d300)', // Tecnología e Innovación Urbana
                  'linear-gradient(to bottom right, #6847f6, #ff13e3)', // Ciudad, Movilidad y Gobernanza
                  'linear-gradient(to bottom right, #68df8b, #6847f6)'  // Finanzas, Patrocinios y Modelos de Ingreso
                ];
                
                const textColors = [
                  '#0e0477', // Azul oscuro para Naturaleza (fondo claro verde)
                  '#0e0477', // Azul oscuro para Comunidad (fondo claro cyan)
                  '#ffffff', // Blanco para Diseño (fondo rosa/magenta)
                  '#0e0477', // Azul oscuro para Tecnología (fondo rosa/amarillo)
                  '#ffffff', // Blanco para Ciudad (fondo púrpura/magenta)
                  '#ffffff'  // Blanco para Finanzas (fondo verde/púrpura)
                ];
                
                const IconComponents = [Leaf, Users, Compass, Zap, Building, DollarSign];
                
                const isHovered = hoveredAxis === index;
                const isSelected = selectedAxis === index;
                const isExpanded = isHovered || isSelected;
                const isOtherExpanded = (hoveredAxis !== null && hoveredAxis !== index) || (selectedAxis !== null && selectedAxis !== index);
                
                
                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`${eje.título}: ${eje.descripción}`}
                    style={{ background: gradients[index] }}
                    className={`relative cursor-pointer transition-all duration-500 ease-in-out rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 ${
                      isExpanded 
                        ? 'md:flex-[2] shadow-2xl md:transform md:scale-105' 
                        : isOtherExpanded 
                          ? 'md:flex-[0.5] opacity-75' 
                          : 'flex-1 hover:shadow-lg'
                    } ${
                      isExpanded 
                        ? 'h-auto md:h-full' 
                        : 'min-h-[120px] md:h-full'
                    }`}
                    data-testid={`axis-${index}`}
                    onClick={() => setSelectedAxis(selectedAxis === index ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAxis(selectedAxis === index ? null : index);
                      }
                    }}
                    onMouseEnter={() => setHoveredAxis(index)}
                    onMouseLeave={() => setHoveredAxis(null)}
                  >
                    <div className="h-full p-3 md:p-4 flex flex-col relative" style={{ color: textColors[index] }}>
                      {/* Hexagonal Icon at Top - Prominent and distinctive */}
                      <div className="mb-2 md:mb-3">
                        <svg 
                          width="0" 
                          height="0" 
                          className="absolute"
                        >
                          <defs>
                            <clipPath id={`hexagon-clip-${index}`} clipPathUnits="objectBoundingBox">
                              <path d="M0.5,0.03 L0.93,0.25 Q0.97,0.27 0.97,0.32 L0.97,0.68 Q0.97,0.73 0.93,0.75 L0.5,0.97 Q0.5,0.97 0.5,0.97 L0.07,0.75 Q0.03,0.73 0.03,0.68 L0.03,0.32 Q0.03,0.27 0.07,0.25 Z" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div 
                          className="flex items-center justify-center bg-white shadow-lg transition-all duration-300"
                          style={{
                            width: isExpanded ? '52px' : '44px',
                            height: isExpanded ? '60px' : '50px',
                            clipPath: 'polygon(50% 2%, 95% 25%, 95% 75%, 50% 98%, 5% 75%, 5% 25%)',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {(() => {
                            const IconComponent = IconComponents[index];
                            return <IconComponent 
                              className={`transition-all duration-300 ${isExpanded ? 'w-6 h-6 md:w-7 md:h-7' : 'w-5 h-5 md:w-6 md:h-6'}`}
                              style={{ color: '#0e0477' }}
                            />;
                          })()}
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="text-[9px] md:text-[10px] font-semibold mb-1 opacity-90">CONGRESO PARQUES</div>
                        <h3 className={`font-bold leading-tight transition-all duration-300 ${
                          isExpanded ? 'text-sm md:text-base lg:text-lg mb-2' : 'text-xs md:text-sm mb-1'
                        }`} style={{ 
                          display: '-webkit-box',
                          WebkitLineClamp: isExpanded ? 'unset' : 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: isExpanded ? 'visible' : 'hidden'
                        }}>
                          {eje.título.replace(/^\d+\.\s*/, '').toUpperCase()}
                        </h3>
                        
                        {/* Expanded Content on Hover/Click */}
                        <div className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-xs md:text-sm mb-2 leading-relaxed" style={{ opacity: 0.9 }}>
                            {eje.descripción}
                          </p>
                          <div className="space-y-1">
                            <div className="text-[10px] md:text-xs font-semibold mb-1" style={{ opacity: 0.8 }}>TEMAS PRINCIPALES:</div>
                            <ul className="text-[10px] md:text-xs space-y-0.5" style={{ opacity: 0.8 }}>
                              {eje.subtemas.map((subtema, subIndex) => (
                                <li key={subIndex} className="flex items-start gap-1">
                                  <span className="mt-0.5 flex-shrink-0" style={{ opacity: 0.6 }}>•</span>
                                  <span>{subtema}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* MORE INFO Button */}
                      <div className={`mt-auto pt-2 transition-all duration-300 ${
                        isExpanded ? 'opacity-100' : 'opacity-70'
                      }`}>
                        <Link 
                          href="/congreso"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-black/20 hover:bg-black/30 text-white text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 inline-block"
                        >
                          MÁS INFO →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Instructions */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                <span className="hidden md:inline">Pasa el cursor o haz clic sobre cada eje para conocer más detalles</span>
                <span className="md:hidden">Toca cada eje para conocer más detalles</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Convocatorias Section — activar cambiando SHOW_CONVOCATORIAS a true */}
      {SHOW_CONVOCATORIAS && <section id="convocatorias" className="py-16 section-animate animate-fadeInLeft relative overflow-hidden" style={{ backgroundColor: '#35219B' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 text-white uppercase section-title" data-testid="calls-title">Convocatorias 2026</h2>

            {/* Grid de convocatorias */}
            <div className="flex justify-center stagger-children">
              {/* Convocatoria Exhibición Fotográfica */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full max-w-sm" data-testid="call-photo-exhibition">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-4" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)' }}>
                  <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Ícono */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#35219b' }}>
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Título */}
                  <h4 className="text-lg text-center uppercase mb-3" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    EXHIBICIÓN FOTOGRÁFICA
                  </h4>

                  {/* Subtítulo */}
                  <p className="text-center text-xs font-semibold uppercase tracking-wide mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#6847f6' }}>
                    "10 años de Parques en Latinoamérica"
                  </p>

                  {/* Descripción */}
                  <p className="text-center text-sm leading-relaxed mb-6 flex-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>
                    Participa en la exhibición fotográfica que celebra una década de transformación de parques y espacios públicos en Latinoamérica. Comparte tu mejor fotografía.
                  </p>

                  {/* Fechas */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span><strong>Inicio:</strong> 13 de marzo, 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span><strong>Cierre:</strong> 30 de abril, 2026</span>
                    </div>
                  </div>

                  {/* Botón */}
                  <div className="text-center mt-auto">
                    <button
                      onClick={() => window.open('https://congresoparques.com/registro_galerias.php', '_blank')}
                      className="convocatoria-btn px-9 py-4 rounded-lg font-bold text-white uppercase transition-all duration-300 text-base tracking-wide"
                      style={{
                        backgroundColor: '#35219b',
                        fontFamily: 'Antonio, sans-serif'
                      }}
                      data-testid="cta-photo-exhibition"
                    >
                      PARTICIPA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* Pricing Section */}
      <section id="precios" className="py-16 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <h2 className="text-3xl md:text-4xl text-center mb-4 uppercase section-title" style={{ color: '#0e0477' }} data-testid="pricing-title">
              PRECIOS
            </h2>
            <p className="text-center text-gray-600 mb-6 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Opciones de participación
            </p>


            {/* Pricing Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">

              {/* CARD ORO */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#6847f6] flex flex-col transform hover:scale-[1.02] transition-all duration-300" data-testid="pricing-oro">
                {/* Badge Preventa */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#f0d875] text-[#0e0477] text-xs font-bold rounded-full uppercase tracking-wide shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mejor opción
                  </span>
                </div>

                {/* Header - Solid purple background */}
                <div className="bg-[#6847f6] p-6 text-center">
                  {/* Icon with gold gradient */}
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f0d875 50%, #d4af37 100%)' }}>
                    <Crown className="w-8 h-8 text-[#0e0477]" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    ORO
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Benefits List */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Hammer className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <strong>1 taller vivencial o masterclass</strong> (cupo limitado)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mic className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Conferencias magistrales
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Sesiones educativas
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Store className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Acceso a Expo Espacio Público
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Wine className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Beer Party (networking)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <PartyPopper className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Fiesta de Clausura en Parque Esperanto
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Utensils className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Comida jueves y viernes incluidas
                      </span>
                    </div>
                  </div>

                  {/* Pricing & CTA - Fixed at bottom */}
                  <div className="mt-auto pt-6">
                    <div className="text-center py-4 border-t border-gray-100">
                      <p className="text-3xl font-black text-[#6847f6] mb-1" style={{ fontFamily: 'Antonio, sans-serif' }}>
                        $3,944.00 MXN
                      </p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        IVA incluido
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://eventos.podiumeeting.com/es/registro/congreso-parques-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-4 py-4 bg-[#6847f6] text-white font-bold text-center rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-[#5438d5] hover:shadow-lg hover:scale-[1.02]"
                      style={{ fontFamily: 'Antonio, sans-serif' }}
                      data-testid="cta-oro"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" />
                        REGISTRARME
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD PLATA */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#6847f6] flex flex-col transform hover:scale-[1.02] transition-all duration-300" data-testid="pricing-plata">
                {/* Header - Solid purple background */}
                <div className="bg-[#6847f6] p-6 text-center">
                  {/* Icon with silver gradient */}
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #a8a9ad 0%, #d4d5d9 50%, #a8a9ad 100%)' }}>
                    <Medal className="w-8 h-8 text-[#0e0477]" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    PLATA
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Benefits List */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mic className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Conferencias magistrales
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BookOpen className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Sesiones educativas
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Store className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Acceso a Expo Espacio Público
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Wine className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Beer Party (networking)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <PartyPopper className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Fiesta de Clausura
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Utensils className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Comida jueves y viernes incluidas
                      </span>
                    </div>
                  </div>

                  {/* Pricing & CTA - Fixed at bottom */}
                  <div className="mt-auto pt-6">
                    <div className="text-center py-4 border-t border-gray-100">
                      <p className="text-3xl font-black text-[#6847f6] mb-1" style={{ fontFamily: 'Antonio, sans-serif' }}>
                        $3,362.00 MXN
                      </p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        IVA incluido
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://eventos.podiumeeting.com/es/registro/congreso-parques-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-4 py-4 bg-[#6847f6] text-white font-bold text-center rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-[#5438d5] hover:shadow-lg hover:scale-[1.02]"
                      style={{ fontFamily: 'Antonio, sans-serif' }}
                      data-testid="cta-plata"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" />
                        REGISTRARME
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD EXPO */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#6847f6] flex flex-col transform hover:scale-[1.02] transition-all duration-300 md:col-span-2 lg:col-span-1" data-testid="pricing-expo">
                {/* Header - Solid purple background */}
                <div className="bg-[#6847f6] p-6 text-center">
                  {/* Icon with purple gradient */}
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #8b6cf8 0%, #a78bfa 50%, #8b6cf8 100%)' }}>
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    EXPO
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Benefits List */}
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#6847f6]" />
                      </div>
                      <span className="text-sm text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <strong>Acceso a Expo Espacio Público</strong>
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="py-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        No incluye:
                      </p>
                    </div>

                    <div className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-500 line-through" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Conferencias magistrales
                      </span>
                    </div>
                    <div className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-500 line-through" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Sesiones educativas
                      </span>
                    </div>
                    <div className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-500 line-through" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Talleres o master classes
                      </span>
                    </div>
                  </div>

                  {/* Pricing & CTA - Fixed at bottom */}
                  <div className="mt-auto pt-6">
                    <div className="text-center py-4 border-t border-gray-100">
                      <p className="text-4xl font-black text-[#6847f6] mb-1" style={{ fontFamily: 'Antonio, sans-serif' }}>
                        GRATUITO
                      </p>
                      <p className="text-xs text-gray-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Registro requerido
                      </p>
                      {/* Spacer to align with other cards */}
                      <div className="h-[26px]"></div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://eventos.podiumeeting.com/es/registro/congreso-parques-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-4 py-4 bg-[#6847f6] text-white font-bold text-center rounded-xl uppercase tracking-wide transition-all duration-300 hover:bg-[#5438d5] hover:shadow-lg hover:scale-[1.02]"
                      style={{ fontFamily: 'Antonio, sans-serif' }}
                      data-testid="cta-expo"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" />
                        REGISTRARME
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Banner Promocional Miembros ANPR */}
            <div className="mt-12">
              <a
                href="mailto:hola@anpr.org.mx"
                className="block w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer group"
              >
                <img
                  src="/assets/CONGRESO-PROMO-MIEMBRO_1770130810434.png"
                  alt="Beneficio Exclusivo - 20% descuento para miembros ANPR"
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:opacity-95"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legado" className="py-16 section-animate animate-scaleIn" style={{ backgroundColor: '#6847F6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-4 uppercase text-white section-title" data-testid="legacy-title">NUESTRO LEGADO</h2>
            <p className="text-center text-white mb-12 text-lg md:text-xl text-dark-bg">
              Una trayectoria de impacto en la transformación de espacios públicos en América Latina
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 stagger-children">
              {estadísticas.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="p-6 text-center legacy-stat-card" data-testid={`stat-${index}`}>
                    <div className="flex justify-center mb-3">
                      <div className="legacy-icon-gradient">
                        <IconComponent className="w-10 h-10" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Antonio, sans-serif' }}>
                      {statsVisible ? <StatCounter target={stat.valor} /> : "0"}
                    </div>
                    <div className="text-sm text-white font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{stat.etiqueta}</div>
                  </div>
                );
              })}
            </div>

            {/* Videos del Legado */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosLegado.slice(0, 3).map((video, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  data-testid={`legacy-video-${index}`}
                >
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={video.embedUrl}
                      title={video.título}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-lg text-primary mb-1">{video.título}</h3>
                    <p className="text-sm text-muted-foreground">{video.año}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Videos adicionales (acordeón) */}
            {videosLegado.length > 3 && (
              <>
                <div 
                  className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 overflow-hidden transition-all duration-500 ease-in-out ${showAllVideos ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {videosLegado.slice(3).map((video, index) => (
                    <div 
                      key={index + 3}
                      className="relative overflow-hidden rounded-lg shadow-lg"
                      data-testid={`legacy-video-${index + 3}`}
                    >
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={video.embedUrl}
                          title={video.título}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-bold text-lg text-primary mb-1">{video.título}</h3>
                        <p className="text-sm text-muted-foreground">{video.año}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllVideos(!showAllVideos)}
                    className="flex items-center gap-2.5 px-7 py-4 bg-white text-[#6847f6] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 uppercase tracking-wide text-base"
                    style={{ fontFamily: 'Antonio, sans-serif', lineHeight: '1.2' }}
                  >
                    {showAllVideos ? 'Ver menos' : 'Eventos anteriores'}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAllVideos ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Las Mejores Marcas Presentes - Infinite Marquee */}
      <BrandMarquee />

      {/* Expo Banner - Promotional Banner for Stand Reservation */}
      <section 
        className="expo-banner-section relative overflow-hidden"
        style={{
          backgroundImage: `url(${expoEspacioPublico2026Img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '350px'
        }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,4,119,0.85)] via-[rgba(14,4,119,0.75)] to-[rgba(14,4,119,0.65)]"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 max-w-6xl">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/expo-espacio-publico"
                className="expo-logo-link block transition-transform duration-300 hover:scale-105"
                data-testid="expo-logo-link"
              >
                <img 
                  src={logoExpoEspacioPublicoUrl} 
                  alt="Expo Espacio Público 2026 - Exposición Productos y Servicios Parques Urbanos México" 
                  className="w-full max-w-[160px] lg:max-w-[200px] h-auto object-contain"
                  loading="lazy"
                />
              </Link>
            </div>
            
            {/* Text Content with Hierarchy */}
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              {/* Level 1: Main Title */}
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#d2dd0a',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
                data-testid="expo-banner-title"
              >
                ¡RESERVA TU STAND!
              </h2>
              
              {/* Level 2: Subtitle */}
              <h3 
                className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold leading-snug"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#ffffff',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
                }}
                data-testid="expo-banner-subtitle"
              >
                Tu marca merece estar donde se toman las decisiones.
              </h3>
              
              {/* Level 3: Description */}
              <p 
                className="text-sm sm:text-base lg:text-lg leading-relaxed"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#1edede',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
                data-testid="expo-banner-description"
              >
                Participa como expositor y conéctate con nuevos clientes.
              </p>
              
              {/* WhatsApp Contact Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/5219993530691?text=Hola,%20me%20interesa%20reservar%20un%20stand%20en%20la%20Expo%20Espacio%20Público%202026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-button inline-flex items-center gap-3 text-white font-bold px-7 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide"
                  style={{ fontFamily: 'Antonio, sans-serif', lineHeight: '1.2' }}
                  data-testid="whatsapp-contact-button"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span className="text-base sm:text-lg lg:text-xl">SOLICITAR INFORMES</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 uppercase section-title" style={{ color: '#0e0477' }} data-testid="location-title">Ubicación del Evento</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-white shadow-lg p-8">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-6">
                      <img 
                        src={logoBCCUrl} 
                        alt="Baja California Center - Sede Congreso Internacional Parques Urbanos Tijuana 2026" 
                        className="max-h-32 object-contain"
                        data-testid="logo-bcc"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#6847f6', fontFamily: 'Montserrat, sans-serif' }}>Baja California Center</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6847f6' }} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Dirección</p>
                          <p className="text-gray-700 text-sm">Carretera Escénica Tijuana – Ensenada</p>
                          <p className="text-gray-700 text-sm">Ejido No.1029 Mazatlan</p>
                          <p className="text-gray-700 text-sm">22710 Playas de Rosarito, B.C., México</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Building className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#6847f6' }} />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recinto</p>
                          <p className="text-gray-700 text-sm">Centro de convenciones de clase mundial con instalaciones modernas.</p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <a
                          href="https://maps.app.goo.gl/kkYY5pVgpbwgrik49"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-7 py-4 rounded-lg text-white font-bold transition-all hover:opacity-90 w-full justify-center uppercase tracking-wide text-base"
                          style={{ backgroundColor: '#6847f6', fontFamily: 'Antonio, sans-serif', lineHeight: '1.2' }}
                          data-testid="button-view-map"
                        >
                          <MapPin className="w-5 h-5" />
                          Ver en Google Maps
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-white shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.5638725662387!2d-117.08087279999999!3d32.393126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d934024224d295%3A0x4cbb5ca2998369be!2sBaja%20California%20Center!5e0!3m2!1sen!2smx!4v1698765432100!5m2!1sen!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del Baja California Center"
                    data-testid="map-iframe"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 z-40 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 transform-none' : 'opacity-0 transform-translate-y-20 pointer-events-none'
        }`}
        aria-label="Volver arriba"
        data-testid="back-to-top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>


      {/* Video Modal */}
      <Dialog open={videoModalOpen} onOpenChange={setVideoModalOpen}>
        <DialogContent className="max-w-4xl" data-testid="video-modal">
          <DialogHeader>
            <DialogTitle>Video del Congreso Parques</DialogTitle>
          </DialogHeader>
          <div className="bg-gray-800 p-8 rounded-lg text-center text-white">
            <p className="text-gray-300 mb-6">En una implementación real, aquí se mostraría el video promocional del evento.</p>
            <div className="bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Video placeholder</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
