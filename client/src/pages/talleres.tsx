import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Wrench } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { PageHeader } from "@/components/PageHeader";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import talleresVivencialesIconUrl from "@assets/Talleres_Vivenciales_1769038571197.png";
import masterClassesIconUrl from "@assets/Master_Classes_1769038571193.png";
import tallerVivencial1 from "@assets/taller_vivencial_1_1769123164370.jpg";
import tallerVivencial2 from "@assets/taller_vivencial_2_1769123164369.jpg";
import tallerVivencial3 from "@assets/taller_vivencial_3_1769123164369.jpg";
import tallerVivencial4 from "@assets/taller_vivencial_4_1769123164367.jpg";
import masterClass1 from "@assets/Master_class_1_1769123164371.jpg";
import masterClass2 from "@assets/Master_class_2_1769123164370.jpg";
import masterClass3 from "@assets/Master_class_3_1769123164370.jpg";
import masterClass4 from "@assets/Master_class_4_1769123164370.jpg";
import parquesUrbanosImg from "@assets/Parques_Urbanos_de_Tijuana_1769196136967.jpg";
import espaciosCulturalesImg from "@assets/Espacios_Públicos_Culturales_1769196136966.jpg";
import maleconImg from "@assets/Malecón_y_Zonas_Costeras_1769196136966.jpg";

interface WorkshopCarouselProps {
  images: string[];
  title: string;
  subtitle?: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
}

function WorkshopCarousel({ images, title, subtitle, description, iconUrl, iconAlt }: WorkshopCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

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

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true }}
        plugins={[autoplayPlugin.current]}
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                <img
                  src={img}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-[30%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-[30%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <div className="relative bg-[#6847F6] p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={iconUrl}
            alt={iconAlt}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-1 md:mb-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {title}
              </h3>
              {subtitle && (
                <span className="text-[#BCCE16] text-xs sm:text-sm md:text-base font-medium">
                  {subtitle}
                </span>
              )}
            </div>
            <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-3 md:mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-[#BCCE16]' : 'bg-white/40'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Talleres() {
  const talleresVivencialesImages = [
    tallerVivencial1,
    tallerVivencial2,
    tallerVivencial3,
    tallerVivencial4,
  ];

  const masterClassesImages = [
    masterClass1,
    masterClass2,
    masterClass3,
    masterClass4,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          { id: "convocatorias", text: "REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO" },
          { id: "boletos", text: "BOLETOS A LA VENTA A PARTIR DEL 2 DE FEBRERO" },
        ]}
        speed="normal"
      />
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader
          title="Talleres"
          subtitle="Aprende haciendo, colaborando y resolviendo retos reales"
          lucideIcon={Wrench}
          iconAlt="Icono Talleres"
        />

        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
              <strong className="text-[#BCCE16]">Los más de 10 talleres</strong> se celebrarán el día miércoles <span className="text-white font-semibold">antes de las sesiones educativas y magistrales</span> y la Expo Espacio Público.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <WorkshopCarousel
              images={talleresVivencialesImages}
              title="Talleres Vivenciales"
              subtitle="¡Visita los parques más emblemáticos de la ciudad!"
              description="¡Conoce Tijuana y aprende al mismo tiempo! En los talleres vivenciales conocerás atractivos turísticos y proyectos ciudadanos relacionados con el espacio público; habrá expertos en el tema y colaboradores de la ciudad anfitriona que compartirán durante 4 horas sus experiencias en la administración de estos espacios, los retos que han enfrentado y las actividades que han implementado."
              iconUrl={talleresVivencialesIconUrl}
              iconAlt="Icono Talleres Vivenciales"
            />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={parquesUrbanosImg} 
                    alt="Parques Urbanos de Tijuana" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Parques Urbanos de Tijuana</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Recorrido por los espacios verdes más emblemáticos de la ciudad fronteriza.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={espaciosCulturalesImg} 
                    alt="Espacios Públicos Culturales" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Espacios Públicos Culturales</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Visita a plazas y centros culturales que definen la identidad de la ciudad.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={maleconImg} 
                    alt="Malecón y Zonas Costeras" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Malecón y Zonas Costeras</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Experiencia única en los espacios públicos junto al Océano Pacífico.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <WorkshopCarousel
              images={masterClassesImages}
              title="Master Classes"
              subtitle="Conocimientos técnicos especializados"
              description="Obtén conocimientos técnicos sobre un tema especializado. Las master classes cuentan con la orientación de un especialista que te ayudará a ampliar tus conocimientos y a aprender técnicas sobre diversos temas del espacio público."
              iconUrl={masterClassesIconUrl}
              iconAlt="Icono Master Classes"
            />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#35219B' }}>
                  <span className="text-5xl">🎨</span>
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Diseño de Espacios Verdes</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Técnicas avanzadas de diseño paisajístico y planificación urbana.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#6847F6' }}>
                  <span className="text-5xl">📊</span>
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Gestión y Administración</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Estrategias para la administración eficiente de parques urbanos.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#BCCE16' }}>
                  <span className="text-5xl">🌱</span>
                </div>
                <div className="p-6">
                  <h4 className="mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#0e0477' }}>Sustentabilidad Urbana</h4>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#4B5563' }}>Prácticas sostenibles para el desarrollo de espacios públicos.</p>
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
