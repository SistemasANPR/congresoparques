import { useState, useEffect } from "react";
import { CalendarDays, Clock, Loader2, Tag, ChevronDown, ChevronUp, MapPin, Users, ClipboardCheck, Mic2, Store, PartyPopper, Wrench, GraduationCap, Coffee, Sparkles, Award } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

interface Ponente {
  id: string;
  nombre: string;
  cargo?: string;
  empresa?: string;
  foto_url?: string;
}

interface ContenidoItem {
  id: string;
  titulo: string;
  subtitulo?: string;
  descripcion?: string;
  hora_inicio: string;
  hora_fin: string;
  capacidad?: string;
  disponible?: string;
  ubicacion?: string;
  ponentes?: Ponente[];
}

interface ProgramaItem {
  id: string;
  fecha: string;
  inicio: string;
  fin: string;
  titulo: string;
  tipo: string;
  contenido?: ContenidoItem[];
}

interface ProgramaResponse {
  success: boolean;
  evento: string;
  total: number;
  fechas_disponibles: string[];
  data: ProgramaItem[];
}

const tipoColors: Record<string, { bg: string; text: string }> = {
  "Registro": { bg: "bg-gray-400", text: "text-white" },
  "Talleres": { bg: "bg-[#BCCE16]", text: "text-[#0e0477]" },
  "Conferencia Magistral": { bg: "bg-[#46ddac]", text: "text-[#0e0477]" },
  "Magistral": { bg: "bg-[#46ddac]", text: "text-[#0e0477]" },
  "Conferencias": { bg: "bg-[#00deff]", text: "text-[#0e0477]" },
  "Sesión Educativa": { bg: "bg-[#00deff]", text: "text-[#0e0477]" },
  "Master Class": { bg: "bg-[#35219b]", text: "text-white" },
  "Networking": { bg: "bg-teal-500", text: "text-white" },
  "Receso": { bg: "bg-gray-400", text: "text-white" },
  "Expo": { bg: "bg-[#d0dd15]", text: "text-[#0e0477]" },
  "Evento Social": { bg: "bg-[#f71cdd]", text: "text-white" },
  "default": { bg: "bg-gray-500", text: "text-white" }
};

const tipoIcons: Record<string, typeof Tag> = {
  "Registro": ClipboardCheck,
  "Talleres": Wrench,
  "Conferencia Magistral": Award,
  "Magistral": Award,
  "Conferencias": GraduationCap,
  "Sesión Educativa": GraduationCap,
  "Master Class": Sparkles,
  "Networking": Users,
  "Receso": Coffee,
  "Expo": Store,
  "Evento Social": PartyPopper,
  "default": Tag
};

export default function Programa() {
  const [programa, setPrograma] = useState<ProgramaItem[]>([]);
  const [fechasDisponibles, setFechasDisponibles] = useState<string[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleDescription = (id: string) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchPrograma = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://congresoparques.com/cpanel/api/programa.php');
        if (!response.ok) {
          throw new Error('Error al cargar el programa');
        }
        const data: ProgramaResponse = await response.json();
        if (data.success && data.data) {
          setPrograma(data.data);
          setFechasDisponibles(data.fechas_disponibles || []);
          if (data.fechas_disponibles && data.fechas_disponibles.length > 0) {
            setFechaSeleccionada(data.fechas_disponibles[0]);
          }
        } else {
          setPrograma([]);
          setFechasDisponibles([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    fetchPrograma();
  }, []);

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  const getTipoColor = (tipo: string) => {
    return tipoColors[tipo] || tipoColors["default"];
  };

  const getTipoIcon = (tipo: string) => {
    return tipoIcons[tipo] || tipoIcons["default"];
  };

  // Helper para identificar si es un bloque de Talleres Matutinos
  const isTalleresMatutinos = (titulo: string) => {
    return titulo.toLowerCase().includes('talleres matutinos');
  };

  const programaFiltrado = programa
    .filter(item => item.fecha === fechaSeleccionada)
    .sort((a, b) => a.inicio.localeCompare(b.inicio));

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
          title="Programa"
          subtitle="Descubre todas las actividades del congreso"
          lucideIcon={CalendarDays}
        />
        
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              
              {loading && (
                <div className="flex justify-center items-center py-16">
                  <Loader2 className="w-10 h-10 text-[#6847f6] animate-spin" />
                  <span className="ml-3 text-lg text-gray-600">Cargando programa...</span>
                </div>
              )}

              {error && (
                <div className="text-center py-16">
                  <p className="text-red-500 text-lg">{error}</p>
                </div>
              )}

              {!loading && !error && programa.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No hay actividades programadas en este momento.</p>
                </div>
              )}

              {!loading && !error && programa.length > 0 && (
                <>
                  {/* Pestañas de fechas */}
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {fechasDisponibles.map((fecha) => (
                      <button
                        key={fecha}
                        onClick={() => setFechaSeleccionada(fecha)}
                        className={`px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 ${
                          fechaSeleccionada === fecha
                            ? 'bg-[#6847f6] text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <CalendarDays className="w-4 h-4 inline-block mr-2" />
                        {formatDate(fecha)}
                      </button>
                    ))}
                  </div>

                  {/* Timeline del programa */}
                  <div className="relative">
                    {/* Línea vertical del timeline */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6847f6] via-[#BCCE16] to-[#0e0477]"></div>

                    <div className="space-y-4">
                      {programaFiltrado.map((item, index) => {
                        const colorConfig = getTipoColor(item.tipo);
                        const TipoIcon = getTipoIcon(item.tipo);
                        const hasContenido = item.contenido && item.contenido.length > 0;
                        const isExpanded = expandedItems.has(item.id);

                        return (
                          <div
                            key={item.id}
                            className="relative pl-12 md:pl-20"
                          >
                            {/* Círculo del timeline */}
                            <div className={`absolute left-2 md:left-6 w-5 h-5 rounded-full border-4 border-white shadow-md ${colorConfig.bg}`}></div>

                            {/* Tarjeta del evento */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                              <div
                                className={`p-4 md:p-6 ${hasContenido ? 'cursor-pointer' : ''}`}
                                onClick={() => hasContenido && toggleExpanded(item.id)}
                              >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                                  {/* Horario */}
                                  <div className="flex items-center gap-2 text-[#0e0477]">
                                    <Clock className="w-5 h-5 text-[#BCCE16]" />
                                    <span className="font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                      {formatTime(item.inicio)} - {formatTime(item.fin)}
                                    </span>
                                  </div>

                                  {/* Badge del tipo */}
                                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold ${colorConfig.bg} ${colorConfig.text}`}>
                                    <TipoIcon className="w-3.5 h-3.5" />
                                    {item.tipo}
                                  </div>
                                </div>

                                {/* Título y botón de expandir */}
                                <div className="flex items-center justify-between gap-4">
                                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}>
                                    {item.titulo}
                                  </h3>
                                  {hasContenido && (
                                    <button
                                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                      aria-label={isExpanded ? "Contraer" : "Expandir"}
                                    >
                                      {isExpanded ? (
                                        <ChevronUp className="w-5 h-5 text-[#6847f6]" />
                                      ) : (
                                        <ChevronDown className="w-5 h-5 text-[#6847f6]" />
                                      )}
                                    </button>
                                  )}
                                </div>

                                {hasContenido && !isExpanded && (
                                  <p className="text-sm text-gray-500 mt-2">
                                    {item.contenido!.length} {item.contenido!.length === 1 ? 'actividad' : 'actividades'} · Clic para ver detalles
                                  </p>
                                )}
                              </div>

                              {/* Contenido desplegable */}
                              {hasContenido && isExpanded && (
                                <div className="border-t border-gray-100 bg-gray-50">
                                  <div className="p-4 md:p-6 space-y-4">
                                    {item.contenido!.map((contenido, idx) => {
                                      const isDescExpanded = expandedDescriptions.has(contenido.id);
                                      const hasDescription = contenido.descripcion && contenido.descripcion.trim().length > 0;
                                      const hasPonentes = contenido.ponentes && contenido.ponentes.length > 0;

                                      return (
                                        <div
                                          key={contenido.id}
                                          className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                                        >
                                          <div className="p-4">
                                            {/* Layout con badge a la derecha para "El Parque como Aula Viva" */}
                                            <div className={`flex flex-col ${contenido.titulo.toLowerCase().includes('parque como aula viva') ? 'md:flex-row md:gap-4' : ''}`}>
                                              {/* Contenido principal */}
                                              <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                                                  <div className="flex-1">
                                                    <h4
                                                      className="text-lg font-bold text-[#0e0477]"
                                                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                                                    >
                                                      {contenido.titulo}
                                                    </h4>
                                                    {contenido.subtitulo && (
                                                      <p className="text-sm text-[#6847f6] font-medium">{contenido.subtitulo}</p>
                                                    )}
                                                  </div>
                                                  {/* Horario individual (oculto en Talleres Matutinos) */}
                                                  {!isTalleresMatutinos(item.titulo) && (
                                                    <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0">
                                                      <Clock className="w-4 h-4 text-[#BCCE16]" />
                                                      <span>{formatTime(contenido.hora_inicio)} - {formatTime(contenido.hora_fin)}</span>
                                                    </div>
                                                  )}
                                                </div>

                                            {/* Ponentes */}
                                            {hasPonentes && (
                                              <div className="flex flex-wrap gap-3 mb-3">
                                                {contenido.ponentes!.map((ponente) => (
                                                  <div key={ponente.id} className="flex items-center gap-2 bg-gray-50 rounded-full pl-1 pr-3 py-1">
                                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                                      {ponente.foto_url ? (
                                                        <img
                                                          src={`/api/image-proxy?url=${encodeURIComponent(ponente.foto_url)}`}
                                                          alt={ponente.nombre}
                                                          className="w-full h-full object-cover"
                                                          onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                          }}
                                                        />
                                                      ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-[#6847f6]/10">
                                                          <Users className="w-4 h-4 text-[#6847f6]/40" />
                                                        </div>
                                                      )}
                                                    </div>
                                                    <div className="text-xs">
                                                      <p className="font-semibold text-[#0e0477]">{ponente.nombre}</p>
                                                      {(ponente.cargo || ponente.empresa) && (
                                                        <p className="text-gray-500">
                                                          {ponente.cargo}{ponente.cargo && ponente.empresa ? ' · ' : ''}{ponente.empresa}
                                                        </p>
                                                      )}
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}

                                            {/* Info adicional */}
                                            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                              {contenido.ubicacion && (
                                                <div className="flex items-center gap-1">
                                                  <MapPin className="w-3.5 h-3.5 text-[#6847f6]" />
                                                  <span>{contenido.ubicacion}</span>
                                                </div>
                                              )}
                                              {contenido.capacidad && (
                                                <div className="flex items-center gap-1">
                                                  <Users className="w-3.5 h-3.5 text-[#6847f6]" />
                                                  <span>Capacidad: {contenido.capacidad}</span>
                                                  {/* Ocultar disponibles en Talleres Matutinos */}
                                                  {contenido.disponible && !isTalleresMatutinos(item.titulo) && (
                                                    <span className="text-green-600 font-medium">
                                                      ({contenido.disponible} disponibles)
                                                    </span>
                                                  )}
                                                </div>
                                              )}
                                            </div>

                                            {/* Botón para ver descripción */}
                                            {hasDescription && (
                                              <button
                                                onClick={(e) => { e.stopPropagation(); toggleDescription(contenido.id); }}
                                                className="mt-3 flex items-center gap-1 text-sm text-[#6847f6] hover:text-[#5538d4] font-medium transition-colors cursor-pointer"
                                              >
                                                {isDescExpanded ? (
                                                  <>
                                                    <ChevronUp className="w-4 h-4" />
                                                    Ocultar descripción
                                                  </>
                                                ) : (
                                                  <>
                                                    <ChevronDown className="w-4 h-4" />
                                                    Ver descripción
                                                  </>
                                                )}
                                              </button>
                                            )}
                                              </div>
                                              {/* Badge "Inicia 8:00 AM" solo para "El Parque como Aula Viva" */}
                                              {contenido.titulo.toLowerCase().includes('parque como aula viva') && (
                                                <div className="flex-shrink-0 mt-3 md:mt-0 md:self-center">
                                                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#BCCE16]/15 text-[#0e0477] border border-[#BCCE16]/30">
                                                    <Clock className="w-3.5 h-3.5 text-[#BCCE16]" />
                                                    Inicia 8:00 AM
                                                  </span>
                                                </div>
                                              )}
                                            </div>
                                          </div>

                                          {/* Descripción desplegable */}
                                          {hasDescription && isDescExpanded && (
                                            <div className="px-4 pb-4">
                                              <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-[#6847f6]">
                                                <p className="text-sm text-gray-600 whitespace-pre-line">{contenido.descripcion}</p>
                                              </div>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {programaFiltrado.length === 0 && (
                      <div className="text-center py-12 pl-12 md:pl-20">
                        <p className="text-gray-500 text-lg">No hay actividades para esta fecha.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
