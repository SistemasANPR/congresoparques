import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Wrench, Calendar, Clock, Users, Tag, Loader2, MapPin, Sun, Moon, Sparkles, User } from "lucide-react";

const categoriaColors: Record<string, { bg: string; text: string }> = {
  "Vivencial": { bg: "bg-[#46ddac]", text: "text-[#0e0477]" },
  "Master Class": { bg: "bg-[#35219b]", text: "text-white" },
  "Masterclass": { bg: "bg-[#35219b]", text: "text-white" },
  "default": { bg: "bg-[#6847f6]", text: "text-white" }
};

const categoriaIcons: Record<string, typeof Tag> = {
  "Vivencial": MapPin,
  "Master Class": Sparkles,
  "Masterclass": Sparkles,
  "default": Tag
};

const getCategoriaColor = (categoria: string) => {
  // Try exact match first, then partial match
  if (categoriaColors[categoria]) return categoriaColors[categoria];
  const lower = categoria.toLowerCase();
  if (lower.includes('vivencial')) return categoriaColors["Vivencial"];
  if (lower.includes('master class') || lower.includes('masterclass')) return categoriaColors["Master Class"];
  return categoriaColors["default"];
};

const getCategoriaIcon = (categoria: string) => {
  if (categoriaIcons[categoria]) return categoriaIcons[categoria];
  const lower = categoria.toLowerCase();
  if (lower.includes('vivencial')) return categoriaIcons["Vivencial"];
  if (lower.includes('master class') || lower.includes('masterclass')) return categoriaIcons["Master Class"];
  return categoriaIcons["default"];
};
import Autoplay from "embla-carousel-autoplay";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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

interface TallerAPI {
  id_taller: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  fecha: string;
  inicio: string;
  fin: string;
  capacidad: string;
  categoria: string;
  foto: string;
  foto_url: string;
  disponible: string;
  turno?: string;
  ubicacion?: string;
}

interface TalleresResponse {
  success: boolean;
  evento: string;
  total: number;
  data: TallerAPI[];
}

interface Tallerista {
  id_tallerista: number;
  nombre: string;
  apellidos: string;
  cargo: string;
  empresa: string;
  fotografia: string;
  foto_url: string | null;
  biografia: string;
  id_taller: number;
  taller: string;
  talleres?: { id_taller: string; titulo: string }[];
}

interface TalleristasResponse {
  success: boolean;
  total: number;
  data: Tallerista[];
}

interface TallerCardProps {
  taller: TallerAPI;
  talleristas: Tallerista[];
  formatDate: (dateStr: string) => string;
  formatTime: (timeStr: string) => string;
}

function TallerCard({ taller, talleristas, formatDate, formatTime }: TallerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  // Handle expand/collapse
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (descriptionRef.current && !descriptionRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className="relative h-full">
      {/* Main Card */}
      <div className="rounded-xl shadow-lg overflow-hidden border border-gray-100 bg-white h-full flex flex-col">
        <div className="h-48 relative overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src={`/api/image-proxy?url=${encodeURIComponent(taller.foto_url || `https://congresoparques.com/imagenes/talleres/${taller.foto}`)}`}
            alt={taller.titulo}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
            }}
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {(() => {
              const turno = taller.turno || (parseInt(taller.inicio.split(':')[0]) < 12 ? 'Matutino' : 'Vespertino');
              const isMatutino = turno.toLowerCase() === 'matutino';
              return (
                <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                  isMatutino
                    ? 'bg-amber-400 text-amber-900'
                    : 'bg-blue-600 text-white'
                }`}>
                  {isMatutino ? (
                    <Sun className="w-3 h-3" />
                  ) : (
                    <Moon className="w-3 h-3" />
                  )}
                  {turno}
                </div>
              );
            })()}
          </div>
          {(() => {
            const catColor = getCategoriaColor(taller.categoria);
            const CatIcon = getCategoriaIcon(taller.categoria);
            return (
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${catColor.bg} ${catColor.text}`}>
                <CatIcon className="w-3 h-3" />
                {taller.categoria}
              </div>
            );
          })()}
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4 text-[#BCCE16] flex-shrink-0" />
            <span>{formatDate(taller.fecha)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Clock className="w-4 h-4 text-[#BCCE16] flex-shrink-0" />
            <span>{formatTime(taller.inicio)} - {formatTime(taller.fin)}</span>
          </div>
          {taller.ubicacion && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <MapPin className="w-4 h-4 text-[#6847f6] flex-shrink-0" />
              <span className="line-clamp-1">{taller.ubicacion}</span>
            </div>
          )}
          <h3 className="text-lg font-bold mb-1 line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}>
            {taller.titulo}
          </h3>
          {taller.subtitulo && (
            <p className="text-sm text-gray-600 line-clamp-1 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {taller.subtitulo}
            </p>
          )}

          {/* Description Preview & Toggle */}
          <div className="mb-3 flex-1">
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {taller.descripcion || 'Descripción no disponible.'}
            </p>
            {taller.descripcion && taller.descripcion.length > 100 && (
              <button
                onClick={handleToggle}
                className="text-[#6847f6] text-sm font-semibold mt-2 hover:text-[#35219B] transition-colors flex items-center gap-1"
              >
                Ver más
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Capacidad siempre al fondo */}
          <div className="flex items-center gap-2 pt-3 border-t border-gray-100 mt-auto">
            <Users className="w-4 h-4 text-[#6847f6] flex-shrink-0" />
            <span className="text-sm text-gray-500">Capacidad: {taller.capacidad}</span>
          </div>
        </div>
      </div>

      {/* Expanded Description Modal Overlay */}
      {isExpanded && taller.descripcion && taller.descripcion.length > 100 && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div
            ref={descriptionRef}
            className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6" style={{ background: 'linear-gradient(135deg, #6847f6 0%, #35219B 100%)' }}>
              {(() => {
                const ModalCatIcon = getCategoriaIcon(taller.categoria);
                return (
                  <div className="flex items-center gap-2 mb-2">
                    <ModalCatIcon className="w-4 h-4 text-[#BCCE16]" />
                    <span className="text-[#BCCE16] text-sm font-semibold">{taller.categoria}</span>
                  </div>
                );
              })()}
              <h3 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {taller.titulo}
              </h3>
              {taller.subtitulo && (
                <p className="text-[#BCCE16]/90 text-sm mt-1 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {taller.subtitulo}
                </p>
              )}
            </div>
            <div className="p-6 overflow-y-auto max-h-[50vh] custom-scrollbar-light">
              <p className="text-gray-700 text-base leading-relaxed">
                {taller.descripcion}
              </p>

              {talleristas.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Talleristas</p>
                  <div className="flex flex-wrap gap-5 justify-center">
                    {talleristas.map((t) => (
                      <div key={t.id_tallerista} className="flex flex-col items-center text-center" style={{ width: '90px' }}>
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#6847f6]/20 bg-gray-100 flex-shrink-0 mb-2">
                          {t.foto_url || t.fotografia ? (
                            <img
                              src={`/api/image-proxy?url=${encodeURIComponent(t.foto_url || `https://congresoparques.com/imagenes/talleristas/${t.fotografia}`)}`}
                              alt={`${t.nombre} ${t.apellidos}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6847f6]/10 to-[#0e0477]/10">
                              <User className="w-7 h-7 text-[#6847f6]/40" />
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-[#0e0477] leading-tight">
                          {t.nombre} {t.apellidos}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#BCCE16]" />
                  {formatDate(taller.fecha)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#BCCE16]" />
                  {formatTime(taller.inicio)} - {formatTime(taller.fin)}
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="px-4 py-2 bg-[#6847f6] text-white rounded-lg text-sm font-semibold hover:bg-[#35219B] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface TalleresGridProps {
  talleres: TallerAPI[];
  talleristas: Tallerista[];
  loading: boolean;
  error: string | null;
  formatDate: (dateStr: string) => string;
  formatTime: (timeStr: string) => string;
  emptyMessage: string;
}

function TalleresGrid({ talleres, talleristas, loading, error, formatDate, formatTime, emptyMessage }: TalleresGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-10 h-10 text-[#6847f6] animate-spin" />
        <span className="ml-3 text-lg text-gray-600">Cargando talleres...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (talleres.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {talleres.map((taller) => (
        <TallerCard
          key={taller.id_taller}
          taller={taller}
          talleristas={(() => {
            const matched = talleristas.filter(t => 
              t.talleres?.some(tw => String(tw.id_taller) === String(taller.id_taller)) || 
              String(t.id_taller) === String(taller.id_taller)
            );
            const seen = new Set<string>();
            return matched.filter(t => {
              const key = `${t.nombre} ${t.apellidos}`.trim();
              if (seen.has(key)) return false;
              seen.add(key);
              return true;
            });
          })()}
          formatDate={formatDate}
          formatTime={formatTime}
        />
      ))}
    </div>
  );
}

export default function Talleres() {
  const [talleresAPI, setTalleresAPI] = useState<TallerAPI[]>([]);
  const [talleristasAPI, setTalleristasAPI] = useState<Tallerista[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [talleresRes, talleristasRes] = await Promise.all([
          fetch('https://congresoparques.com/cpanel/api/talleres.php'),
          fetch('https://congresoparques.com/cpanel/api/talleristas.php'),
        ]);
        if (!talleresRes.ok) {
          throw new Error('Error al cargar los talleres');
        }
        const talleresData: TalleresResponse = await talleresRes.json();
        if (talleresData.success && talleresData.data) {
          setTalleresAPI(talleresData.data.filter(t => t.disponible === "1"));
        } else {
          setTalleresAPI([]);
        }
        if (talleristasRes.ok) {
          const talleristasData: TalleristasResponse = await talleristasRes.json();
          if (talleristasData.success && talleristasData.data) {
            setTalleristasAPI(talleristasData.data);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (timeStr: string) => {
    return timeStr.substring(0, 5);
  };

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

  // Filtrar talleres por categoría
  const talleresVivenciales = talleresAPI.filter(t =>
    t.categoria.toLowerCase() === 'vivencial' ||
    t.categoria.toLowerCase().includes('vivencial')
  );

  const talleresMasterClass = talleresAPI.filter(t =>
    t.categoria.toLowerCase() === 'master class' ||
    t.categoria.toLowerCase().includes('master class') ||
    t.categoria.toLowerCase() === 'masterclass'
  );

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
        <PageHeader
          title="Talleres"
          subtitle="Aprende haciendo, colaborando y resolviendo retos reales"
          lucideIcon={Wrench}
          iconAlt="Icono Talleres"
        />

        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
              <strong className="text-[#BCCE16]">Los Talleres</strong> se celebrarán el día miércoles <span className="text-white font-semibold">antes de las sesiones educativas y magistrales</span> y la Expo Espacio Público.
            </p>
          </div>
        </section>

        {/* Pricing Info Block */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#6847f6] to-[#35219B] px-6 py-5 md:px-8 md:py-6 text-center">
                <p className="text-[#BCCE16] text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Precio único para los 8 talleres
                </p>
                <p className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $986 <span className="text-lg md:text-xl font-medium text-white/80">MXN IVA incluido</span>
                </p>
                <p className="text-white/70 text-sm mt-1">Aplica para Talleres Vivenciales y Master Classes</p>
              </div>
              {/* Details */}
              <div className="bg-gray-50 px-6 py-6 md:px-8 md:py-7">
                <div className="grid sm:grid-cols-3 gap-4 md:gap-6 text-center">
                  {/* Plata / Expo */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6847f6]/10">
                      <Tag className="w-5 h-5 text-[#6847f6]" />
                    </span>
                    <p className="text-sm font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entrada Plata</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Agrega cualquier taller por $986 MXN</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6847f6]/10">
                      <Tag className="w-5 h-5 text-[#6847f6]" />
                    </span>
                    <p className="text-sm font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entrada Expo Parques</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Agrega cualquier taller por $986 MXN</p>
                  </div>
                  {/* Oro */}
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#BCCE16]/10 shadow-sm border border-[#BCCE16]/30">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#BCCE16]/20">
                      <Sparkles className="w-5 h-5 text-[#6847f6]" />
                    </span>
                    <p className="text-sm font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Entrada Oro</p>
                    <p className="text-xs text-gray-500 leading-relaxed">Ya incluye 1 taller. ¿Quieres otro? Agrégalo por $986 MXN</p>
                  </div>
                </div>
              </div>
            </div>
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
            <TalleresGrid
              talleres={talleresVivenciales}
              talleristas={talleristasAPI}
              loading={loading}
              error={error}
              formatDate={formatDate}
              formatTime={formatTime}
              emptyMessage="No hay talleres vivenciales disponibles en este momento."
            />
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
            <TalleresGrid
              talleres={talleresMasterClass}
              talleristas={talleristasAPI}
              loading={loading}
              error={error}
              formatDate={formatDate}
              formatTime={formatTime}
              emptyMessage="No hay master classes disponibles en este momento."
            />
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
