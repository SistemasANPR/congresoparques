import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { CalendarDays, Clock, Loader2, Tag, ChevronDown, ChevronUp, MapPin, Users, ClipboardCheck, Mic2, Store, PartyPopper, Wrench, GraduationCap, Coffee, Sparkles, Award, Search, X, Mic, BookOpen, Bus } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import SupportSection from "@/components/SupportSection";

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

interface SearchResult {
  type: 'session' | 'speaker' | 'company';
  label: string;
  sublabel: string;
  fecha: string;
  itemId: string;
  contenidoId?: string;
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
  "Transporte": { bg: "bg-[#6847f6]", text: "text-white" },
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
  "Transporte": Bus,
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

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const t = tipo.trim();
    if (tipoColors[t]) return tipoColors[t];
    const key = Object.keys(tipoColors).find(k => k.toLowerCase() === t.toLowerCase());
    return key ? tipoColors[key] : tipoColors["default"];
  };

  const getTipoIcon = (tipo: string) => {
    const t = tipo.trim();
    if (tipoIcons[t]) return tipoIcons[t];
    const key = Object.keys(tipoIcons).find(k => k.toLowerCase() === t.toLowerCase());
    return key ? tipoIcons[key] : tipoIcons["default"];
  };

  // Helper para identificar si es un bloque de Talleres Matutinos
  const isTalleresMatutinos = (titulo: string) => {
    return titulo.toLowerCase().includes('talleres matutinos');
  };

  // Debounce: actualiza debouncedQuery 300ms después de que el usuario deja de escribir
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => setDebouncedQuery(value), 300);
  }, []);

  // Construir índice de búsqueda a partir de los datos del programa
  const searchIndex = useMemo((): SearchResult[] => {
    const results: SearchResult[] = [];
    const seen = new Set<string>();

    programa.forEach((item) => {
      // Indexar sesión principal
      const sessionKey = `session-${item.id}`;
      if (!seen.has(sessionKey)) {
        seen.add(sessionKey);
        results.push({
          type: 'session',
          label: item.titulo,
          sublabel: `${formatDate(item.fecha)} · ${formatTime(item.inicio)}`,
          fecha: item.fecha,
          itemId: item.id,
        });
      }

      // Indexar contenido (sub-sesiones), ponentes y empresas
      item.contenido?.forEach((c) => {
        // Sub-sesión
        const cKey = `contenido-${c.id}`;
        if (!seen.has(cKey)) {
          seen.add(cKey);
          results.push({
            type: 'session',
            label: c.titulo,
            sublabel: `${item.titulo} · ${formatDate(item.fecha)}`,
            fecha: item.fecha,
            itemId: item.id,
            contenidoId: c.id,
          });
        }

        // Ponentes
        c.ponentes?.forEach((p) => {
          const speakerKey = `speaker-${p.id}-${item.id}`;
          if (!seen.has(speakerKey)) {
            seen.add(speakerKey);
            results.push({
              type: 'speaker',
              label: p.nombre,
              sublabel: [p.cargo, p.empresa].filter(Boolean).join(' · ') || c.titulo,
              fecha: item.fecha,
              itemId: item.id,
              contenidoId: c.id,
            });
          }

          // Empresa
          if (p.empresa) {
            const companyKey = `company-${p.empresa.toLowerCase()}-${item.id}-${c.id}`;
            if (!seen.has(companyKey)) {
              seen.add(companyKey);
              results.push({
                type: 'company',
                label: p.empresa,
                sublabel: `${c.titulo} · ${formatDate(item.fecha)}`,
                fecha: item.fecha,
                itemId: item.id,
                contenidoId: c.id,
              });
            }
          }
        });
      });
    });

    return results;
  }, [programa]);

  // Filtrar resultados según el query con debounce
  useEffect(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (q.length < 1) {
      setSearchResults([]);
      return;
    }
    const filtered = searchIndex
      .filter(r =>
        r.label.toLowerCase().includes(q) ||
        r.sublabel.toLowerCase().includes(q)
      )
      .slice(0, 8);
    setSearchResults(filtered);
  }, [debouncedQuery, searchIndex]);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navegar a un resultado: cambiar fecha, expandir item, scroll
  const navigateToResult = useCallback((result: SearchResult) => {
    setSearchOpen(false);
    setSearchQuery("");
    setDebouncedQuery("");
    setSearchResults([]);

    // 1. Cambiar a la fecha correcta
    setFechaSeleccionada(result.fecha);

    // 2. Expandir el bloque principal
    setExpandedItems(prev => {
      const next = new Set(prev);
      next.add(result.itemId);
      return next;
    });

    // 3. Scroll al elemento (esperamos un tick para que React renderice)
    setTimeout(() => {
      const el = document.getElementById(`programa-item-${result.itemId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight visual temporal
        el.style.transition = 'box-shadow 0.3s';
        el.style.boxShadow = '0 0 0 3px #6847f6';
        setTimeout(() => { el.style.boxShadow = ''; }, 2000);
      }
    }, 150);
  }, []);

  const typeIcon = (type: SearchResult['type']) => {
    if (type === 'speaker') return <Mic className="w-3.5 h-3.5 text-[#6847f6] flex-shrink-0" />;
    if (type === 'company') return <Store className="w-3.5 h-3.5 text-[#BCCE16] flex-shrink-0" />;
    return <BookOpen className="w-3.5 h-3.5 text-[#0e0477] flex-shrink-0" />;
  };

  const typeLabel = (type: SearchResult['type']) => {
    if (type === 'speaker') return 'Ponente';
    if (type === 'company') return 'Empresa';
    return 'Sesión';
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
            id: "abril",
            text: "10% DE DESCUENTO DURANTE ABRIL",
          },
          {
            id: "estudiantes",
            text: "PRECIO ESPECIAL PARA ESTUDIANTES",
          },
        ]}
        speed="normal"
      />
      <Navigation />

      <main className="pt-[100px] md:pt-[116px] lg:pt-[132px]">
        <SupportSection />
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
                  {/* Buscador dinámico */}
                  <div ref={searchRef} className="relative mb-8 max-w-2xl mx-auto">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6847f6]" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        onFocus={() => setSearchOpen(true)}
                        placeholder="Buscar ponente, sesión o empresa..."
                        className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-[#6847f6]/30 focus:border-[#6847f6] focus:outline-none text-base shadow-md transition-all duration-200"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
                      />
                      {searchQuery && (
                        <button
                          onClick={() => { setSearchQuery(""); setDebouncedQuery(""); setSearchResults([]); setSearchOpen(false); }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                        >
                          <X className="w-3.5 h-3.5 text-gray-600" />
                        </button>
                      )}
                    </div>

                    {/* Dropdown de resultados */}
                    {searchOpen && searchQuery.trim().length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                        {searchResults.length > 0 ? (
                          <>
                            <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                            {searchResults.map((result, idx) => (
                              <button
                                key={`${result.itemId}-${result.contenidoId ?? ''}-${idx}`}
                                onClick={() => navigateToResult(result)}
                                className="w-full flex items-start gap-3 px-4 py-3 hover:bg-[#6847f6]/5 transition-colors text-left border-b border-gray-50 last:border-0"
                              >
                                <div className="w-7 h-7 rounded-full bg-[#6847f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  {typeIcon(result.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-[#0e0477] truncate" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {result.label}
                                  </p>
                                  <p className="text-xs text-gray-500 truncate" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {result.sublabel}
                                  </p>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-1" style={{
                                  backgroundColor: result.type === 'speaker' ? '#6847f6' : result.type === 'company' ? '#BCCE16' : '#0e0477',
                                  color: result.type === 'company' ? '#0e0477' : 'white',
                                  fontFamily: 'Montserrat, sans-serif',
                                }}>
                                  {typeLabel(result.type)}
                                </span>
                              </button>
                            ))}
                          </>
                        ) : (
                          <div className="px-4 py-8 text-center">
                            <Search className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              No se encontraron resultados para <strong>"{searchQuery}"</strong>
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

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
                            id={`programa-item-${item.id}`}
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
