import { useState, useEffect } from "react";
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
  Ticket
} from "lucide-react";
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
import logoFIDEMUrl from "@assets/LOGO FIDEM_1758652591788.png";
import logoCDTUrl from "@assets/LOGO CDT_1758652591783.png";
import logoBCCUrl from "@assets/LOGO BCC color_1761676598707.png";
import hojasIzquierdaImg from "@assets/hojas izquierda_1758644374397.png";
import hojasDerechaImg from "@assets/hojas derecha_1758644374401.png";
import expoEspacioPublico2026Img from "@assets/expo-espacio-publico-2026.jpg";
import logoExpoEspacioPublicoUrl from "@assets/logo-expo-espacio-publico-2026.png";
import parquesAlegresLogoUrl from "@assets/Parques_Alegres_1766080172845.png";
import parquesMexicoLogoUrl from "@assets/Parques_de_Mexico_1766080172846.png";
import jimumexLogoUrl from "@assets/Jimumex_1766080172847.png";
import playClubLogoUrl from "@assets/Play_Club_1766080172847.png";
import deportanLogoUrl from "@assets/Deportan_1766080172847.png";
import hunterLogoUrl from "@assets/Hunter_1766080172848.png";
import muscoLogoUrl from "@assets/Musco_1766080172848.png";
import bodenLogoUrl from "@assets/Boden_1766080172848.png";
import bugyLogoUrl from "@assets/Bugy_1766080172848.png";
import rainBirdLogoUrl from "@assets/Rain_Bird_1766080172849.png";
import dihlaLogoUrl from "@assets/DIHLA_1766080172849.png";
import cdtLogoUrl from "@assets/CDT_1766080172849.png";
import jumboLogoUrl from "@assets/Jumbo_1766080172849.png";
import proludicLogoUrl from "@assets/Proludic_1766080172850.png";
import parkSysLogoUrl from "@assets/ParkSys_1766080172850.png";


interface StatCounterProps {
  target: number;
  duration?: number;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null);
  const [selectedAxis, setSelectedAxis] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [animatedSections, setAnimatedSections] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  const [sedeDropdownOpen, setSedeDropdownOpen] = useState(false);
  const [mobileSedeOpen, setMobileSedeOpen] = useState(false);
  const [convocatoriasDropdownOpen, setConvocatoriasDropdownOpen] = useState(false);
  const [mobileConvocatoriasOpen, setMobileConvocatoriasOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  
  const heroBackgroundImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  // Brand logos data - easily extensible for future additions
  const brands = [
    { id: 'parksys', logo: parkSysLogoUrl, name: 'ParkSys Smart Management', url: 'https://park-sys.com/' },
    { id: 'proludic', logo: proludicLogoUrl, name: 'Proludic', url: 'https://www.proludic.com/' },
    { id: 'jumbo', logo: jumboLogoUrl, name: 'Productos Jumbo', url: 'https://www.productosjumbo.com/' },
    { id: 'cdt', logo: cdtLogoUrl, name: 'CDT Centro de Desarrollo Turístico', url: 'https://cdt.org.mx/' },
    { id: 'dihla', logo: dihlaLogoUrl, name: 'DIHLA', url: 'https://dihla.com.mx/' },
    { id: 'rainbird', logo: rainBirdLogoUrl, name: 'Rain Bird', url: 'https://www.rainbird.com/es' },
    { id: 'bugy', logo: bugyLogoUrl, name: 'Grupo Bugy Proyectos Recreativos', url: 'https://bugy.mx/' },
    { id: 'boden', logo: bodenLogoUrl, name: 'Boden Eco Superficie', url: 'https://www.bodeneco.com/' },
    { id: 'musco', logo: muscoLogoUrl, name: 'Musco Lighting', url: 'https://www.musco.com/' },
    { id: 'hunter', logo: hunterLogoUrl, name: 'Hunter Industries', url: 'https://www.hunterirrigation.com/es' },
    { id: 'deportan', logo: deportanLogoUrl, name: 'Deportan Soluciones Deportivas', url: 'https://deportan.com.mx/' },
    { id: 'playclub', logo: playClubLogoUrl, name: 'Play Club', url: 'https://www.playclub.com.mx/' },
    { id: 'jimumex', logo: jimumexLogoUrl, name: 'Jimumex Equipamiento Urbano', url: 'https://jimumex.com.mx/' },
    { id: 'parquesmexico', logo: parquesMexicoLogoUrl, name: 'Parques de México', url: 'https://parquesdemexico.org/' },
    { id: 'parquesalegres', logo: parquesAlegresLogoUrl, name: 'Parques Alegres', url: 'https://parquesalegres.org/' },
  ];

  // Shuffle brands on initial render for random order
  const [shuffledBrands] = useState(() => {
    const shuffled = [...brands];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  // Background image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

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
      'info', 'experiencias', 'ejes', 'convocatorias', 'legado', 'aliados'
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
      setMobileMenuOpen(false);
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
      image: conferenciaMagistralUrl
    },
    {
      iconUrl: sesionesIconUrl,
      title: "Sesiones Educativas",
      description: "+30 espacios formativos con especialistas de todo el mundo.",
      fecha: "14 y 15 de mayo",
      image: sesionEducativaUrl
    },
    {
      iconUrl: talleresIconUrl,
      title: "Talleres Vivenciales",
      description: "Aprende con dinámicas prácticas sobre diseño, gestión y activación comunitaria.",
      fecha: "13 de mayo",
      image: tallerVivencialUrl
    },
    {
      iconUrl: masterClassesIconUrl,
      title: "Master Classes",
      description: "Formación intensiva en temas especializados con expertos reconocidos.",
      fecha: "13 de mayo",
      image: masterClassesUrl
    },
    {
      iconUrl: expoIconUrl,
      title: "Expo Espacio Público",
      description: "Encuentro de negocios con las empresas líderes del sector en México y el mundo.",
      fecha: "14 y 15 de mayo",
      image: expoEspacioPublicoUrl
    },
    {
      iconUrl: eventosIconUrl,
      title: "Eventos Sociales",
      description: "Beer and Mix Party y fiesta de clausura: la mejor oportunidad para ampliar tu red en un ambiente relajado y divertido.",
      fecha: "14 y 15 de mayo",
      image: eventosSocialesUrl
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
    { icon: <Calendar className="w-6 h-6" />, título: "Apertura", fecha: "26 de septiembre de 2025" },
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
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" aria-label="Navegación principal">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Left Side: Logo + Tijuana 2026 */}
            <div className="flex flex-row items-end gap-2 md:flex-col md:items-center md:gap-1.5 shrink-0">
              <img 
                src={logoUrl} 
                alt="IX Congreso Internacional de Parques Urbanos y Espacio Público - Logo Oficial ANPR Tijuana 2026" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                data-testid="header-logo"
              />
              
              {/* Tijuana 2026 Badge - al lado en móvil (alineado al fondo), debajo en desktop (centrado) */}
              <div className="bg-[#0e0477] px-2 py-0.5 md:px-2.5 md:py-1 rounded">
                <span className="text-[#d2dd0a] font-black text-[0.6rem] sm:text-[0.65rem] md:text-xs lg:text-sm tracking-wider uppercase" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  TIJUANA <span className="text-[#1edede]">2026</span>
                </span>
              </div>
            </div>
            
            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8">
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
                        href="/preguntas-frecuentes"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-faq"
                      >
                        Preguntas Frecuentes
                      </Link>
                      <Link 
                        href="/preparate"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-preparate"
                      >
                        Prepárate
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
                    <span className="relative z-10">Sede</span>
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
                        Tijuana, Baja California
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
                      <Link 
                        href="/sesiones-educativas"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-sesiones-educativas"
                      >
                        Sesiones Educativas
                      </Link>
                      <Link 
                        href="/posters-cientificos"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-posters"
                      >
                        Pósters Científicos
                      </Link>
                      <Link 
                        href="/voluntarios"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-voluntarios"
                      >
                        Voluntarios
                      </Link>
                      <Link 
                        href="/comite-evaluador"
                        className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/20 transition-colors text-sm"
                        data-testid="nav-dropdown-comite"
                      >
                        Comité Evaluador
                      </Link>
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

                {/* Construcción Comunitaria - Direct Link */}
                <Link 
                  href="/construccion-comunitaria"
                  className="relative overflow-hidden text-white hover:text-[#d0dd15] px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 rounded-md whitespace-nowrap"
                  style={{fontFamily: 'Montserrat, sans-serif'}}
                  data-testid="nav-construccion-comunitaria"
                >
                  <span className="relative z-10">Comunidad</span>
                </Link>
              </div>
            </div>
            
            {/* Right Side: CTA Button + Mobile Menu */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Desktop CTA Button - Disabled */}
              <button
                disabled
                className="hidden lg:flex items-center gap-2 bg-white/20 text-white/50 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-[13px] xl:text-sm font-semibold cursor-not-allowed opacity-60 border border-white/20"
                style={{fontFamily: 'Montserrat, sans-serif'}}
                data-testid="btn-adquirir-entradas"
                title="Próximamente disponible"
              >
                <Ticket className="w-4 h-4" />
                <span>Adquirir entradas</span>
              </button>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
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
            <div className="lg:hidden pb-3" id="mobile-menu" data-testid="mobile-menu">
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
                        href="/preguntas-frecuentes"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-faq"
                      >
                        Preguntas Frecuentes
                      </Link>
                      <Link 
                        href="/preparate"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-preparate"
                      >
                        Prepárate
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
                    <span>Sede</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSedeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileSedeOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      <Link 
                        href="/sede"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-sede"
                      >
                        Tijuana, Baja California
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
                      <Link 
                        href="/sesiones-educativas"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-sesiones-educativas"
                      >
                        Sesiones Educativas
                      </Link>
                      <Link 
                        href="/posters-cientificos"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-posters"
                      >
                        Pósters Científicos
                      </Link>
                      <Link 
                        href="/voluntarios"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-voluntarios"
                      >
                        Voluntarios
                      </Link>
                      <Link 
                        href="/comite-evaluador"
                        className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="mobile-nav-comite"
                      >
                        Comité Evaluador
                      </Link>
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

                {/* Mobile Construcción Comunitaria - Direct Link */}
                <Link 
                  href="/construccion-comunitaria"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 text-base font-medium rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-nav-construccion-comunitaria"
                >
                  Construcción Comunitaria
                </Link>

                {/* Mobile CTA Button - Disabled */}
                <div className="pt-3 mt-2 border-t border-white/20">
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full bg-white/20 text-white/50 px-4 py-2.5 rounded-full text-sm font-semibold cursor-not-allowed opacity-60 border border-white/20"
                    style={{fontFamily: 'Montserrat, sans-serif'}}
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

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center hero-bg-new pt-20 sm:pt-24 md:pt-36 lg:pt-40 pb-20 sm:pb-24 md:pb-28 overflow-hidden">
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
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white hero-icon" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold hero-date-text" style={{ fontFamily: 'Antonio, sans-serif' }}>13-15 DE MAYO, 2026</p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white hero-icon" />
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold hero-location-text" style={{ fontFamily: 'Antonio, sans-serif' }}>TIJUANA, BAJA CALIFORNIA</p>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight px-4 hero-title-animate hero-main-title" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="hero-title">
              IX Congreso Internacional<br />de Parques Urbanos
            </h1>

            {/* Countdown Timer */}
            <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8 hero-countdown-animate px-4" data-testid="countdown-timer">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-3xl mx-auto">
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
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 hero-countdown-circle">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-button-animate px-4">
              <button 
                onClick={() => scrollToSection('convocatorias')} 
                className="hero-cta-button px-6 py-3 sm:px-7 md:px-8 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold transform hover:scale-105 transition-all text-white rounded-lg border-0 hero-cta-responsive"
                data-testid="hero-cta"
              >
                Conoce nuestras Convocatorias
              </button>
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
      <section id="info" className="py-20 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="text-left">
                {/* Main Title */}
                <h2 className="mb-8" data-testid="info-title">
                  <span className="title-conoce">CONOCE</span>
                  <span className="title-congreso">EL CONGRESO PARQUES</span>
                </h2>
                
                {/* Subtitle */}
                <h3 className="subtitle-section" data-testid="info-subtitle">¿Por qué asistir?</h3>
                
                {/* Description */}
                <p className="text-description" data-testid="info-description">
                  Un evento internacional de capacitación, intercambio y experiencias inmersivas, dirigido a quienes gestionan, diseñan y promueven los parques urbanos y los espacios públicos. Reunimos presencialmente a profesionales, sociedad civil, funcionarios públicos, académicos y empresas de la industria para generar conocimiento, crear redes y transformar ciudades.
                </p>
              </div>

              {/* Right Column - Icons aligned with subtitle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 lg:mt-0 stagger-children" data-testid="info-value-proposition">
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
                  <div className="keyword-text">Conecta</div>
                  <div className="description-text">Con líderes y profesionales del sector</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Descubre</div>
                  <div className="description-text">Tendencias globales y soluciones innovadoras</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Aprende</div>
                  <div className="description-text">De expertos nacionales e internacionales</div>
                </div>
                <div className="text-center">
                  <div className="icon-container-gradient mb-6">
                    <PartyPopper className="w-8 h-8" />
                  </div>
                  <div className="keyword-text">Vive</div>
                  <div className="description-text">Una experiencia única de capacitación, inspiración y networking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiencias" className="py-16" style={{ backgroundColor: '#35219b' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-12" data-testid="experiences-title">
              <span className="experience-title-experiencias">EXPERIENCIAS</span>
              <span className="experience-title-evento">DEL EVENTO</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiencias.map((experiencia, index) => (
                <div 
                  key={index} 
                  className="experience-card animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`experience-${index}`}
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
                    <CardContent className="p-4 flex flex-col h-48">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.title}</h3>
                        <p className="text-gray-600 mb-3 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>{experiencia.description}</p>
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
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToSection('convocatorias');
                          }}
                          className="bg-black/20 hover:bg-black/30 text-white text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                          MÁS INFO →
                        </button>
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

      {/* Convocatorias Section */}
      <section id="convocatorias" className="py-16 section-animate animate-fadeInLeft relative overflow-hidden" style={{ backgroundColor: '#35219b' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 text-white uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }} data-testid="calls-title">Convocatorias 2026</h2>
            
            {/* Wrapper para grid y hojas */}
            <div className="relative">
              {/* Imagen decorativa hojas izquierda */}
              <div 
                className="absolute pointer-events-none hidden lg:block hojas-decorativas-izq" 
                style={{ 
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: '-80px',
                  width: '150px',
                  height: '180px',
                  zIndex: 1
                }}
              >
                <img 
                  src={hojasIzquierdaImg} 
                  alt="Decoración natural hojas verdes - Congreso Parques Urbanos Tijuana 2026"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              
              {/* Imagen decorativa hojas derecha */}
              <div 
                className="absolute pointer-events-none hidden lg:block hojas-decorativas-der" 
                style={{ 
                  top: '50%',
                  transform: 'translateY(-50%)',
                  right: '-80px',
                  width: '150px',
                  height: '180px',
                  zIndex: 1
                }}
              >
                <img 
                  src={hojasDerechaImg} 
                  alt="Elementos vegetales áreas verdes - Congreso Espacio Público México 2026"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-12 stagger-children relative z-10">
              {/* Convocatoria Sesiones Educativas */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-educational">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)', height: '84px' }}>
                  <h3 className="text-2xl font-bold text-white uppercase flex items-center justify-center h-full" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-between" style={{ minHeight: '500px' }}>
                  <div>
                    {/* Título */}
                    <div style={{ height: '60px' }} className="flex items-center justify-center">
                      <h4 className="text-xl font-bold text-center uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        SESIONES EDUCATIVAS
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div style={{ height: '120px' }} className="flex items-center justify-center mb-8">
                      <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Invitamos a profesionales, académicos y expertos a proponer sesiones educativas que compartan conocimientos innovadores y casos de estudio exitosos en el ámbito de parques y espacios públicos.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-3 mb-8" style={{ height: '80px' }}>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón */}
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('https://congresoparques.com/registro_sesiones.php', '_blank')}
                      className="convocatoria-btn px-10 py-4 rounded-lg font-bold text-white uppercase transition-all duration-300"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-educational"
                    >
                      REGÍSTRATE
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Convocatoria Poster Científico */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="call-poster">
                {/* Header con "CONVOCATORIA" */}
                <div className="text-center py-6" style={{ background: 'linear-gradient(to right, #d0dd15, #f71cdd)', height: '84px' }}>
                  <h3 className="text-2xl font-bold text-white uppercase flex items-center justify-center h-full" style={{ fontFamily: 'Antonio, sans-serif' }}>
                    CONVOCATORIA
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-between" style={{ minHeight: '500px' }}>
                  <div>
                    {/* Título */}
                    <div style={{ height: '60px' }} className="flex items-center justify-center">
                      <h4 className="text-xl font-bold text-center uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        POSTER CIENTÍFICO
                      </h4>
                    </div>
                    
                    {/* Descripción */}
                    <div style={{ height: '120px' }} className="flex items-center justify-center mb-8">
                      <p className="text-gray-600 text-center leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Presenta tu investigación, proyecto o innovación a través de un póster científico que contribuya al conocimiento del sector de espacios públicos y sostenibilidad urbana.
                      </p>
                    </div>
                    
                    {/* Fechas */}
                    <div className="space-y-3 mb-8" style={{ height: '80px' }}>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Apertura:</strong> 26 de septiembre, 2025</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <Calendar className="w-4 h-4" />
                        <span><strong>Cierre:</strong> 15 de enero, 2026</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Botón */}
                  <div className="text-center">
                    <button 
                      onClick={() => window.open('https://congresoparques.com/registro_posters.php', '_blank')}
                      className="convocatoria-btn px-10 py-4 rounded-lg font-bold text-white uppercase transition-all duration-300"
                      style={{ 
                        backgroundColor: '#35219b',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      data-testid="cta-poster"
                    >
                      REGÍSTRATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legado" className="py-16 section-animate animate-scaleIn" style={{ backgroundColor: '#6847f6' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12 uppercase text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }} data-testid="legacy-title">NUESTRO LEGADO</h2>
            
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
              {videosLegado.map((video, index) => (
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
          </div>
        </div>
      </section>

      {/* Trust Elements / Partners */}
      <section id="aliados" className="py-16 bg-white section-animate animate-fadeInUp">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-center mb-12 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }} data-testid="partners-title">ALIADOS ESTRATÉGICOS Y PATROCINADORES</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Organiza */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Organiza:</h3>
                  <div className="bg-white rounded-lg shadow-md p-3 w-60 h-36 flex items-center justify-center">
                    <a 
                      href="https://anpr.org.mx/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <img 
                        src={logoANPRUrl} 
                        alt="ANPR - Asociación Nacional de Parques y Recreación México - Organizadores Congreso Parques Urbanos 2026" 
                        className="max-h-28 max-w-full object-contain hover:scale-105 transition-transform"
                        data-testid="logo-anpr"
                      />
                    </a>
                  </div>
                </div>

                {/* Presenta */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#0e0477', fontFamily: 'Montserrat, sans-serif' }}>Proyecto apoyado con recursos del FIDEM:</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="bg-white rounded-lg shadow-md p-3 w-60 h-36 flex items-center justify-center">
                      <img 
                        src={logoFIDEMUrl} 
                        alt="FIDEM - Fideicomiso Empresarial Baja California - Patrocinador Congreso Espacio Público Tijuana" 
                        className="max-h-28 max-w-full object-contain hover:scale-105 transition-transform"
                        data-testid="logo-fidem"
                      />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-3 w-60 h-36 flex items-center justify-center">
                      <a 
                        href="https://cdt.org.mx/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full"
                      >
                        <img 
                          src={logoCDTUrl} 
                          alt="CDT - Centro de Desarrollo Tijuana - Aliado Congreso Parques Urbanos México 2026" 
                          className="max-h-28 max-w-full object-contain hover:scale-105 transition-transform"
                          data-testid="logo-cdt"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Mejores Marcas Presentes - Infinite Marquee */}
      <section id="marcas" className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-center mb-12 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }} data-testid="brands-title">
              Las Mejores Marcas Presentes
            </h2>
          </div>
        </div>
        
        {/* Infinite Marquee Container */}
        <div className="relative w-full">
          <div 
            className="flex animate-marquee"
            style={{ width: 'max-content' }}
          >
            {/* First set of shuffled brands */}
            {shuffledBrands.map((brand, index) => (
              <a
                key={`brand-1-${index}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-3 md:mx-6 group"
                data-testid={`brand-logo-${brand.id}`}
              >
                <div className="bg-white rounded-lg shadow-md p-2 md:p-3 w-36 h-22 md:w-52 md:h-32 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-16 md:max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 opacity-80 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
            {/* Duplicate set for seamless loop */}
            {shuffledBrands.map((brand, index) => (
              <a
                key={`brand-2-${index}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-3 md:mx-6 group"
                aria-hidden="true"
              >
                <div className="bg-white rounded-lg shadow-md p-2 md:p-3 w-36 h-22 md:w-52 md:h-32 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-16 md:max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 opacity-80 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
              <a 
                href="https://expoespaciopublico.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="expo-logo-link block transition-transform duration-300 hover:scale-105"
                data-testid="expo-logo-link"
              >
                <img 
                  src={logoExpoEspacioPublicoUrl} 
                  alt="Expo Espacio Público 2026 - Exposición Productos y Servicios Parques Urbanos México" 
                  className="w-full max-w-[160px] lg:max-w-[200px] h-auto object-contain"
                  loading="lazy"
                />
              </a>
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
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ea952] text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  data-testid="whatsapp-contact-button"
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="text-sm sm:text-base lg:text-lg">SOLICITAR INFORMES</span>
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
            <h2 className="text-3xl md:text-4xl text-center mb-12 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }} data-testid="location-title">Ubicación del Evento</h2>
            
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
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 w-full justify-center"
                          style={{ backgroundColor: '#6847f6', fontFamily: 'Montserrat, sans-serif' }}
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
      <footer id="footer" className="py-12" style={{ backgroundColor: '#0e0477', color: 'white' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <a href="https://anpr.org.mx/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={logoANPRWhiteUrl} 
                      alt="ANPR México - Organizadores IX Congreso Internacional Parques Urbanos Espacio Público Tijuana 2026" 
                      className="h-16 object-contain hover:scale-105 transition-transform"
                      data-testid="footer-logo-anpr"
                    />
                  </a>
                </div>
                <p className="text-white/80 mb-4">
                  Asociación Nacional de Parques y Recreación de México - Transformando espacios públicos para un futuro sostenible.
                </p>
                <div className="text-2xl font-bold" style={{ color: '#BCCE16' }} data-testid="footer-hashtag">#CongresoParques2026</div>
              </div>
              
              {/* Links */}
              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-white/80">
                  <li><a href="https://anpr.org.mx/privacidad" className="hover:opacity-80 transition-colors" data-testid="footer-privacy">Políticas de privacidad</a></li>
                  <li><a href="https://anpr.org.mx/terminos" className="hover:opacity-80 transition-colors" data-testid="footer-terms">Términos y condiciones</a></li>
                  <li><a href="https://anpr.org.mx/faq" className="hover:opacity-80 transition-colors" data-testid="footer-faq">Preguntas frecuentes</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@congresoparques.com" className="hover:opacity-80 transition-colors" data-testid="footer-email">info@congresoparques.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="https://wa.me/529993530691" className="hover:opacity-80 transition-colors" data-testid="footer-whatsapp">+52 999 353 0691</a>
                  </li>
                </ul>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-4">
                  <a href="https://www.facebook.com/ANPRMexico" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 transition-colors" aria-label="Facebook" data-testid="social-facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/anprmexico/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 transition-colors" aria-label="Instagram" data-testid="social-instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/ANPRMexico" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 transition-colors" aria-label="X (Twitter)" data-testid="social-twitter">
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@anprmexico" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:opacity-80 transition-colors" aria-label="YouTube" data-testid="social-youtube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2026 Asociación Nacional de Parques y Recreación de México. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

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
