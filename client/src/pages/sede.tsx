import { useState, useEffect, useCallback } from "react";
import { ExternalLink, MapPin, Palette, Sun, Compass, UtensilsCrossed, Building2, Award, Users, LayoutGrid, Zap, Hotel, Route, Waves, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import bccImage from "@assets/BCC_1769466700758.jpg";
import avenidaRevolucionImg from "@assets/avenida_revolucion_1769469682700.jpg";
import cecutImg from "@assets/CECUT_Centro_Cultural_Tijuana_1769469682700.jpg";
import plazaPeninsulaImg from "@assets/Plaza_Peninsula_1769469682699.jpg";
import cerveceraImg from "@assets/_escena_cervecera_artesanal_1769469682699.jpg";
import gastronomiaImg from "@assets/maxresdefault-8_1769469682699.jpg";
import deportivaImg from "@assets/Xoloitzcuintles_Toros_y_Zonkeys_de_Tijuana_1769469682699.jpg";
import playasImg from "@assets/Playas_de_Tijuana_1769469682699.jpg";
import muroImg from "@assets/Muro_fronterizo_1769469682698.jpg";
import arteUrbanoImg from "@assets/Arte_urbano_y_distritos_creativos_1769469682698.jpg";
import trompoImg from "@assets/Museo_del_Trompo_1769469682698.jpg";
import tacoImg from "@assets/Museo_del_Taco_1769469682698.jpg";
import luchaLibreImg from "@assets/Museo_de_la_Lucha_Libre_Mexican_1769469682698.jpg";
import coleccionistaImg from "@assets/Museo_del_Coleccionista_de_Tijuana_1769469682697.jpg";
import aeropuertoTijuanaImg from "@assets/Aeropuerto_Internacional_de_Tijuana_1769471161925.jpg";
import crossBorderXpressImg from "@assets/Cross_Border_Xpress_1769471161925.jpg";
import fondoRestaurantesImg from "@assets/Fondo_restaurantes_tijuana_1769527606636.jpg";
import playasRosaritoImg from "@assets/Playas_de_Rosarito_1769531625160.png";
import rutaVinoImg from "@assets/Ruta_del_Vino_en_el_Valle_de_Guadalupe_1769531625160.png";
import tecateImg from "@assets/Tecate_1769531625160.png";
import corredorCosteroImg from "@assets/Corredor_Costero_Escenico_1769531625160.png";
import SupportSection from "@/components/SupportSection";

const attractionsData = [
  {
    id: 1,
    title: "Avenida Revolución",
    description: "El corazón histórico y cultural de la ciudad, con arte urbano, tiendas locales, bares, cafés y ambiente fronterizo.",
    image: avenidaRevolucionImg
  },
  {
    id: 2,
    title: "Centro Cultural Tijuana (CECUT)",
    description: "Uno de los recintos culturales más importantes del norte del país, con museos, galerías y su icónica esfera.",
    image: cecutImg
  },
  {
    id: 3,
    title: "Plaza Península",
    description: "Destino de compras, gastronomía y estilo de vida al aire libre.",
    image: plazaPeninsulaImg
  },
  {
    id: 4,
    title: "Cervecería Artesanal",
    description: "Oasis de la cerveza artesanal con más de 30 cervecerías y rutas reconocidas internacionalmente.",
    image: cerveceraImg
  },
  {
    id: 5,
    title: "Gastronomía Única",
    description: "Tacos estilo Tijuana, cocina Baja Med y escena culinaria internacional.",
    image: gastronomiaImg
  },
  {
    id: 6,
    title: "Escena Deportiva",
    description: "Xolos, Toros y Zonkeys: la única ciudad fronteriza con 3 equipos profesionales.",
    image: deportivaImg
  },
  {
    id: 7,
    title: "Playas de Tijuana",
    description: "Malecón, océano Pacífico y atardeceres costeros.",
    image: playasImg
  },
  {
    id: 8,
    title: "Muro Fronterizo",
    description: "Murales, identidad cultural y expresión artística fronteriza.",
    image: muroImg
  },
  {
    id: 9,
    title: "Arte Urbano y Distritos Creativos",
    description: "Galerías, murales y comunidad artística vibrante.",
    image: arteUrbanoImg
  },
  {
    id: 10,
    title: "Museo El Trompo",
    description: "Espacio interactivo de ciencia y tecnología para todas las edades.",
    image: trompoImg
  },
  {
    id: 11,
    title: "Museo del Taco",
    description: "Experiencia inmersiva desde la tortilla hasta la cultura del taco.",
    image: tacoImg
  },
  {
    id: 12,
    title: "Museo de la Lucha Libre Mexicana",
    description: "Colección de máscaras, campeonatos, historia y cultura luchística.",
    image: luchaLibreImg
  },
  {
    id: 13,
    title: "Museo del Coleccionista de Tijuana",
    description: "Colecciones de objetos históricos y culturales que evocan la memoria colectiva.",
    image: coleccionistaImg
  }
];

function TijuanaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % attractionsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + attractionsData.length) % attractionsData.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
          Descubre Tijuana, Baja California
        </h2>
        <p className="text-lg md:text-xl text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#6847f6' }}>
          Imperdibles que no puedes dejar pasar
        </p>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[16/9]">
              <img
                src={attractionsData[currentIndex].image}
                alt={attractionsData[currentIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                  {attractionsData[currentIndex].title}
                </h3>
                <p className="text-white/90 text-base md:text-lg max-w-2xl" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                  {attractionsData[currentIndex].description}
                </p>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {attractionsData.length}
            </div>
          </div>

          <div className="mt-6 overflow-x-auto pb-2">
            <div className="flex gap-3 justify-start md:justify-center min-w-max md:min-w-0">
              {attractionsData.map((attraction, index) => (
                <button
                  key={attraction.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex 
                      ? 'ring-3 ring-[#BCCE16] scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 border-2 border-[#BCCE16] rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            *Recomendamos verificar horarios de cada lugar para planear su visita.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Sede() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "miembros",
            text: "20% DE DESCUENTO PARA MIEMBROS ANPR",
          },
          {
            id: "estudiantes",
            text: "PRECIO ESPECIAL PARA ESTUDIANTES",
          },
        ]}
        speed="normal"
      />
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        <SupportSection />
        <PageHeader 
          title="Tijuana, Baja California"
          subtitle="Ciudad sede del IX Congreso Internacional de Parques Urbanos"
          lucideIcon={MapPin}
        />

        {/* Tijuana, ciudad vibrante */}
        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-[#BCCE16] text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                Tijuana, ciudad vibrante
              </h3>
              <p className="text-lg md:text-xl mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
                Una ciudad fronteriza, creativa y multicultural que combina modernidad, arte urbano y una destacada oferta gastronómica, convirtiéndose en un destino dinámico y lleno de energía.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xk0WWaBImgA"
                  title="Tijuana Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Descubre Tijuana - highlights */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-center mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                Anímate a descubrir esta ciudad única
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-[#6847f6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e0477] mb-1">Esencia multicultural</h4>
                      <p className="text-gray-700">Arte urbano, historia fronteriza y una vibrante vida cultural que refleja la identidad única de la ciudad.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sun className="w-6 h-6 text-[#6847f6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e0477] mb-1">Clima templado</h4>
                      <p className="text-gray-700">Ideal para recorrer la ciudad y sus alrededores durante gran parte del año.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Compass className="w-6 h-6 text-[#6847f6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e0477] mb-1">Experiencias únicas</h4>
                      <p className="text-gray-700">Avenida Revolución, el icónico CECUT, cervecerías artesanales y escapadas a la costa del Pacífico.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <UtensilsCrossed className="w-6 h-6 text-[#6847f6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e0477] mb-1">Gastronomía de primer nivel</h4>
                      <p className="text-gray-700">Desde los famosos tacos estilo Tijuana hasta propuestas culinarias innovadoras del movimiento Baja Med.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#6847f6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0e0477] mb-1">Ciudad moderna y dinámica</h4>
                      <p className="text-gray-700">Una oferta turística preparada para recibirte con comodidad, entretenimiento y hospitalidad.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Baja California Center */}
        <section className="py-16" style={{ backgroundColor: '#6847F6' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-white text-center mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Baja California Center <span className="text-[#BCCE16]">BCC</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
              Centro de convenciones moderno y de clase internacional, ubicado en la zona costa entre Tijuana y Rosarito.
            </p>
            {/* Bloque: ¿Por qué aquí? */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-[#BCCE16]" />
                  <h3 className="text-xl md:text-2xl text-[#BCCE16] uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                    ¿Por qué aquí?
                  </h3>
                </div>
                <p className="text-lg md:text-xl text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Uno de los recintos más importantes del noroeste de México
                </p>
              </div>
            </div>

            {/* Imagen del BCC */}
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src={bccImage} 
                alt="Baja California Center" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Grid de características y ubicación */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Características del recinto */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#BCCE16] rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#6847F6]" />
                  </div>
                  <h4 className="text-lg md:text-xl text-white uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Características del recinto
                  </h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Capacidad para hasta <strong className="text-[#BCCE16]">10,000 asistentes</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LayoutGrid className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Salones amplios, áreas modulares y espacios versátiles
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Tecnología de vanguardia y servicios especializados
                    </span>
                  </li>
                </ul>
              </div>

              {/* Ubicación estratégica */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#BCCE16] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#6847F6]" />
                  </div>
                  <h4 className="text-lg md:text-xl text-white uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    Ubicación estratégica
                  </h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Hotel className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      A minutos de la franja hotelera
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Route className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Accesos directos desde Tijuana y Rosarito
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Waves className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Vistas al océano Pacífico
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Utensils className="w-5 h-5 text-[#BCCE16]" />
                    </div>
                    <span className="text-white/90 pt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      Cercano a hoteles, gastronomía y atractivos turísticos
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Botón Ver en Google Maps */}
            <div className="text-center mt-10">
              <a
                href="https://maps.app.goo.gl/kkYY5pVgpbwgrik49"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
              >
                <MapPin className="w-5 h-5" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Descubre Tijuana - Carrusel Interactivo */}
        <TijuanaCarousel />

        {/* Bares y Restaurantes */}
        <section className="py-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center md:bg-fixed"
            style={{ 
              backgroundImage: `url(${fondoRestaurantesImg})`,
              backgroundAttachment: 'scroll'
            }}
          >
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(53, 33, 155, 0.85)' }}></div>
          </div>
          <style>
            {`@media (min-width: 768px) { .parallax-bg { background-attachment: fixed !important; } }`}
          </style>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl text-white text-center mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Bares y Restaurantes en Tijuana: <span className="text-[#BCCE16]">Una Noche para Recordar</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Telefonica Gastro Park</h3>
                <p className="text-white/90">Un espacio culinario al aire libre con food trucks, cocina creativa, cerveza artesanal y un ambiente relajado.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Caesar's Restaurant</h3>
                <p className="text-white/90">Cuna de la mundialmente famosa Ensalada César, este restaurante icónico ofrece tradición, historia y sabor en pleno centro de Tijuana.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Baja Med Cocina</h3>
                <p className="text-white/90">Explora propuestas culinarias innovadoras basadas en el movimiento Baja Med, donde se fusionan ingredientes locales con técnicas internacionales.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Cervecerías artesanales locales</h3>
                <p className="text-white/90">Tasting rooms como Border Psycho, Insurgente, Norte, Mexica, Mamut Brewery o Rámuri son puntos imperdibles para quienes buscan descubrir los sabores de la región.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm md:col-span-2 lg:col-span-2">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Bares speakeasy</h3>
                <p className="text-white/90">Conoce las propuestas de bares como Lladró, Nórtico y Tinieblo, mismos que son espacios secretos en la ciudad a los que podrás ingresar solo por accesos exclusivos, y en los cuales tendrás la oportunidad de probar las mejores propuestas de cócteles y bebidas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sitios y Experiencias Cercanas */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-center mb-8 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
              Sitios y Experiencias Cercanas: <span style={{ color: '#6847f6' }}>A un Paso de Tijuana</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img src={playasRosaritoImg} alt="Playas de Rosarito" className="w-full h-40 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-center border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-[#BCCE16]">
                  <h3 className="text-[#0e0477] font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Playas de Rosarito</h3>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>A menos de 30 minutos, disfruta de su malecón, restaurantes frente al mar y actividades acuáticas. Disfruta de la mundialmente famosa Langosta estilo Puerto Nuevo.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img src={rutaVinoImg} alt="Ruta del Vino" className="w-full h-40 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-center border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-[#BCCE16]">
                  <h3 className="text-[#0e0477] font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ruta del Vino en el Valle de Guadalupe</h3>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>A una hora de Tijuana, vive una experiencia inolvidable en la Capital del vino mexicano, con viñedos, degustaciones y gastronomía de clase mundial.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img src={tecateImg} alt="Tecate" className="w-full h-40 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-center border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-[#BCCE16]">
                  <h3 className="text-[#0e0477] font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tecate</h3>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>A 30 minutos de Tijuana, se encuentra el pueblo mágico de Tecate, reconocido por su Cervecería, paisajes campiranos y pan dulce artesanal.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <img src={corredorCosteroImg} alt="Corredor Costero Escénico" className="w-full h-40 md:h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col justify-center border-l-0 md:border-l-4 border-t-4 md:border-t-0 border-[#BCCE16]">
                  <h3 className="text-[#0e0477] font-bold text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Corredor Costero Escénico</h3>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Con alrededor de 98 km, es un recorrido imperdible entre Tijuana y Ensenada que ofrece vistas panorámicas del Pacífico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Aérea */}
        <section className="py-16" style={{ backgroundColor: '#6847F6' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-white text-center mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Conectividad Aérea
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={aeropuertoTijuanaImg} 
                    alt="Aeropuerto Internacional de Tijuana" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#35219b' }}>
                    Aeropuerto Internacional de Tijuana
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    Con <strong style={{ color: '#6847f6' }}>36 vuelos nacionales</strong>, es el segundo aeropuerto con mejor conectividad a nivel nacional, además cuenta con <strong style={{ color: '#6847f6' }}>2 vuelos internacionales</strong> a Estados Unidos y China.
                  </p>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#35219b' }}>
                    <p className="text-white text-sm text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      La ciudad registró de enero a noviembre 2026 un flujo de <span className="text-[#BCCE16] font-bold">11,543,800 pasajeros</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={crossBorderXpressImg} 
                    alt="Cross Border Xpress (CBX)" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#35219b' }}>
                    Cross Border Xpress (CBX)
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                    Disfruta del puente binacional que une a dos países y que ha demostrado ser un referente en materia de conectividad y facilitación fronteriza para los viajeros.
                  </p>
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#35219b' }}>
                    <p className="text-white text-sm text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      El puente acumuló <span className="text-[#BCCE16] font-bold">3,635,100 usuarios</span> durante enero a noviembre 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
