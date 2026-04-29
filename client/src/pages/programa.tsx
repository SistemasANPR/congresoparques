import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { CalendarDays, Clock, Loader2, Tag, ChevronDown, ChevronUp, MapPin, Users, ClipboardCheck, Mic2, Store, PartyPopper, Wrench, GraduationCap, Coffee, Sparkles, Award, Search, X, Mic, BookOpen, Bus, Printer } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
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

const tipoPrintColors: Record<string, { bg: string; color: string }> = {
  "Registro": { bg: "#9ca3af", color: "#fff" },
  "Talleres": { bg: "#BCCE16", color: "#0e0477" },
  "Conferencia Magistral": { bg: "#46ddac", color: "#0e0477" },
  "Magistral": { bg: "#46ddac", color: "#0e0477" },
  "Conferencias": { bg: "#00deff", color: "#0e0477" },
  "Sesión Educativa": { bg: "#00deff", color: "#0e0477" },
  "Master Class": { bg: "#35219b", color: "#fff" },
  "Networking": { bg: "#14b8a6", color: "#fff" },
  "Receso": { bg: "#9ca3af", color: "#fff" },
  "Expo": { bg: "#d0dd15", color: "#0e0477" },
  "Evento Social": { bg: "#f71cdd", color: "#fff" },
  "Transporte": { bg: "#6847f6", color: "#fff" },
  "default": { bg: "#6b7280", color: "#fff" },
};

const getTipoPrintColor = (tipo: string) => {
  const t = tipo.trim();
  if (tipoPrintColors[t]) return tipoPrintColors[t];
  const key = Object.keys(tipoPrintColors).find(k => k.toLowerCase() === t.toLowerCase());
  return key ? tipoPrintColors[key] : tipoPrintColors["default"];
};

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

  // PDF cover state
  const [coverPageUrl, setCoverPageUrl] = useState<string | null>(null);
  const [shouldPrint, setShouldPrint] = useState(false);
  const originalTitleRef = useRef(document.title);

  // Trigger print after cover image is injected into the DOM
  useEffect(() => {
    if (shouldPrint && coverPageUrl) {
      const timer = setTimeout(() => {
        window.print();
        setShouldPrint(false);
        setTimeout(() => {
          document.title = originalTitleRef.current;
        }, 1500);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [shouldPrint, coverPageUrl]);

  // Render cover PDF via PDF.js and trigger print
  const handleDownloadPDF = async () => {
    document.title = 'PROGRAMA CONGRESO PARQUES 2026';

    if (coverPageUrl) {
      // Already rendered — just print
      setShouldPrint(true);
      return;
    }

    try {
      // Dynamically load PDF.js from CDN
      if (!(window as any).pdfjsLib) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('PDF.js load failed'));
          document.head.appendChild(script);
        });
        (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
      }

      const pdfjsLib = (window as any).pdfjsLib;
      const pdf = await pdfjsLib.getDocument('/portada-programa.pdf').promise;
      const page = await pdf.getPage(1);

      // Render at 3× scale for crisp quality on mobile
      const viewport = page.getViewport({ scale: 3 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d')!;
      await page.render({ canvasContext: ctx, viewport }).promise;

      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      setCoverPageUrl(dataUrl);
      setShouldPrint(true);
    } catch (err) {
      console.error('Cover render failed, printing without cover:', err);
      setShouldPrint(true);
    }
  };

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

  // Talleres con horario fijo 9:00 AM – 1:00 PM
  const TALLERES_HORARIO_FIJO = [
    'forraje hidropónico',
    'forraje hidroponico',
    'movilidad con perspectiva de género',
    'movilidad con perspectiva de genero',
    'operación integral del parque esperanto',
    'operacion integral del parque esperanto',
  ];
  const getTallerHorarioFijo = (titulo: string): string | null => {
    const lower = titulo.toLowerCase().trim();
    return TALLERES_HORARIO_FIJO.some(t => lower.includes(t) || t.includes(lower))
      ? '9:00 AM – 1:00 PM'
      : null;
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
      <style>{`
        @media print {
          /* Ocultar todos los elementos no destinados al PDF */
          .no-print { display: none !important; }

          /* Preservar colores exactos */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          /* Eliminar padding/margin residual del contenedor principal */
          main { padding: 0 !important; margin: 0 !important; }
          .min-h-screen { min-height: 0 !important; }
          body { margin: 0 !important; padding: 0 !important; }

          /* Ocultar newsletter de ActiveCampaign y cualquier modal inyectado */
          ._form_15_, [class*="_form_"], ._modal_, [class*="_modal_"],
          [id*="newsletter"], [class*="newsletter"],
          [id*="NewsletterBar"], [class*="NewsletterBar"],
          .fixed, [style*="position: fixed"], [style*="position:fixed"] {
            display: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
        }

        /* Página angosta tipo móvil */
        @page {
          size: 105mm 175mm;
          margin: 7mm 5mm 8mm 5mm;
        }
        /* Sin márgenes en la primera página (portada externa) */
        @page :first {
          margin: 0;
        }

        /* Ocultar fecha/hora (top-left) y URL (bottom-left), conservar número de página */
        @page { @top-left { content: ""; } }
        @page { @top-center { content: ""; } }
        @page { @bottom-left { content: ""; } }
      `}</style>
      <div className="no-print">
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
      </div>

      <main className="pt-[100px] md:pt-[116px] lg:pt-[132px]">
        <div className="no-print"><SupportSection /></div>
        <div className="no-print">
          <PageHeader 
            title="Programa"
            subtitle="Descubre todas las actividades del congreso"
            lucideIcon={CalendarDays}
          />
        </div>

        {/* Botón descargar PDF */}
        <div className="no-print bg-white py-4 text-center border-b border-gray-100 shadow-sm">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 bg-[#0e0477] hover:bg-[#35219b] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-colors shadow-md"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Printer className="w-5 h-5" />
            Descargar Programa en PDF
          </button>
        </div>
        
        <section className="no-print py-12 md:py-16 bg-white">
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
                                    {(() => {
                                      const hasLunch = item.titulo.toLowerCase().includes('lunch');
                                      const base = item.titulo.endsWith('*') ? item.titulo.slice(0, -1) : item.titulo;
                                      return hasLunch || item.titulo.endsWith('*')
                                        ? <>{base}<span className="text-red-500">*</span></>
                                        : item.titulo;
                                    })()}
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

                                {/* Nota especial para Expo Lunch */}
                                {item.titulo.toLowerCase().includes('lunch') && (
                                  <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    <span className="text-red-500 font-bold">*</span>
                                    El lunch está incluido solo para asistentes con gafete que hayan adquirido entrada oro o plata
                                    <span className="text-red-500 font-bold"> *</span>
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
                                                      {contenido.titulo.endsWith('*')
                                                        ? <>{contenido.titulo.slice(0, -1)}<span className="text-red-500">*</span></>
                                                        : contenido.titulo}
                                                    </h4>
                                                    {contenido.subtitulo && (
                                                      <p className="text-sm text-[#6847f6] font-medium">{contenido.subtitulo}</p>
                                                    )}
                                                  </div>
                                                  {/* Horario individual */}
                                                  {!isTalleresMatutinos(item.titulo) && (
                                                    <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0">
                                                      <Clock className="w-4 h-4 text-[#BCCE16]" />
                                                      <span>{formatTime(contenido.hora_inicio)} - {formatTime(contenido.hora_fin)}</span>
                                                    </div>
                                                  )}
                                                  {isTalleresMatutinos(item.titulo) && getTallerHorarioFijo(contenido.titulo) && (
                                                    <div className="flex items-center gap-1 text-sm text-gray-600 flex-shrink-0">
                                                      <Clock className="w-4 h-4 text-[#BCCE16]" />
                                                      <span>{getTallerHorarioFijo(contenido.titulo)}</span>
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

      <div className="no-print"><Footer /></div>

      {/* ═══════════════════════════════════════════════════
          CATÁLOGO PARA IMPRESIÓN — solo visible al imprimir
          ═══════════════════════════════════════════════════ */}
      {!loading && programa.length > 0 && (
        <div
          className="hidden print:block"
          style={{ fontFamily: 'Montserrat, sans-serif', background: '#fff' }}
        >
          {/* Portada externa — imagen del PDF adjunto, página completa */}
          {coverPageUrl && (
            <div
              style={{
                pageBreakAfter: 'always',
                pageBreakInside: 'avoid',
                lineHeight: 0,
              }}
            >
              <img
                src={coverPageUrl}
                alt="Portada Programa Congreso Parques 2026"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          {/* Portada interna del programa — fluye hacia el primer día sin salto */}
          <div
            style={{
              background: 'linear-gradient(135deg,#0e0477 0%,#35219b 50%,#6847f6 100%)',
              borderRadius: 10,
              padding: '11px 14px',
              marginBottom: 8,
              textAlign: 'center',
              pageBreakInside: 'avoid',
              pageBreakAfter: 'avoid',
            }}
          >
            <img
              src={logoUrl}
              alt="Congreso Parques 2026"
              style={{ height: 34, margin: '0 auto 6px', display: 'block' }}
            />
            <h1 style={{ color: '#fff', fontSize: 16, fontWeight: 900, textTransform: 'uppercase', margin: '0 0 3px', letterSpacing: 0.8, lineHeight: 1.2 }}>
              Programa del Congreso
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 9, margin: '0 0 4px' }}>
              IX Congreso Internacional de Parques Urbanos y Espacio Público
            </p>
            <p style={{ color: '#BCCE16', fontSize: 10, fontWeight: 700, margin: 0 }}>
              13 · 14 · 15 Mayo 2026 · Tijuana, México
            </p>
          </div>

          {/* Días — cada uno inicia en nueva página; contenido interno fluye sin huecos */}
          {fechasDisponibles.map((fecha, diaIdx) => {
            const items = programa
              .filter(item => item.fecha === fecha)
              .sort((a, b) => a.inicio.localeCompare(b.inicio));
            if (items.length === 0) return null;
            return (
              <div
                key={fecha}
                style={{
                  marginBottom: 8,
                  pageBreakBefore: diaIdx > 0 ? 'always' : 'auto',
                }}
              >
                {/* ── Encabezado del día ── */}
                <div
                  style={{
                    background: 'linear-gradient(90deg,#0e0477 0%,#35219b 100%)',
                    borderRadius: 7,
                    padding: '6px 12px',
                    marginBottom: 5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    pageBreakAfter: 'avoid',
                  }}
                >
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#BCCE16', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CalendarDays style={{ width: 11, height: 11, color: '#0e0477' }} />
                  </div>
                  <h2 style={{ color: '#fff', fontSize: 14, fontWeight: 900, margin: 0, textTransform: 'capitalize', letterSpacing: 0.3 }}>
                    {formatDate(fecha)}
                  </h2>
                </div>

                {/* ── Ítems del día ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {items.map((item) => {
                    const pc = getTipoPrintColor(item.tipo);
                    const hasContenido = item.contenido && item.contenido.length > 0;
                    return (
                      /* Tarjeta de sesión — Nivel 2 */
                      <div
                        key={item.id}
                        style={{
                          border: '1.5px solid #e5e7eb',
                          borderLeft: `4px solid ${pc.bg}`,
                          borderRadius: '0 7px 7px 0',
                          background: '#fff',
                          overflow: 'hidden',
                        }}
                      >
                        {/* Cabecera de la sesión */}
                        <div
                          style={{
                            padding: '5px 10px 4px',
                            pageBreakAfter: 'avoid',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2, flexWrap: 'wrap' }}>
                            <span
                              style={{
                                background: pc.bg,
                                color: pc.color,
                                fontSize: 8,
                                fontWeight: 700,
                                padding: '1px 7px',
                                borderRadius: 10,
                                textTransform: 'uppercase',
                                letterSpacing: 0.5,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {item.tipo}
                            </span>
                            <span style={{ color: '#6847f6', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>
                              {formatTime(item.inicio)} – {formatTime(item.fin)}
                            </span>
                          </div>
                          <h3 style={{ color: '#0e0477', fontSize: 13, fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
                            {item.titulo}
                          </h3>
                        </div>

                        {/* Zona de sub-ítems — Nivel 3: fondo diferenciado */}
                        {hasContenido && (
                          <div
                            style={{
                              background: '#f5f3ff',
                              padding: '4px 8px 5px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 3,
                            }}
                          >
                            {item.contenido!.map((contenido) => {
                              const isTalleresMat = item.titulo.toLowerCase().includes('talleres matutinos');
                              const horarioFijo = isTalleresMat ? getTallerHorarioFijo(contenido.titulo) : null;
                              const hasPonentes = contenido.ponentes && contenido.ponentes.length > 0;
                              return (
                                /* Sub-tarjeta individual — Nivel 3 interno */
                                <div
                                  key={contenido.id}
                                  style={{
                                    background: '#fff',
                                    borderRadius: 5,
                                    padding: '5px 7px',
                                    border: '1px solid #ede9fe',
                                  }}
                                >
                                  {/* Título + horario */}
                                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                                    <h4
                                      style={{
                                        color: '#1e1b4b',
                                        fontSize: 12,
                                        fontWeight: 700,
                                        margin: 0,
                                        lineHeight: 1.35,
                                        flex: 1,
                                      }}
                                    >
                                      {contenido.titulo.endsWith('*')
                                        ? <>{contenido.titulo.slice(0, -1)}<span style={{ color: '#ef4444' }}>*</span></>
                                        : contenido.titulo}
                                    </h4>
                                    {!isTalleresMat && contenido.hora_inicio && (
                                      <span style={{ color: '#9ca3af', fontSize: 9, whiteSpace: 'nowrap', flexShrink: 0, paddingTop: 1 }}>
                                        {formatTime(contenido.hora_inicio)}–{formatTime(contenido.hora_fin)}
                                      </span>
                                    )}
                                    {horarioFijo && (
                                      <span style={{ color: '#9ca3af', fontSize: 9, whiteSpace: 'nowrap', flexShrink: 0, paddingTop: 1 }}>
                                        {horarioFijo}
                                      </span>
                                    )}
                                  </div>

                                  {/* Subtítulo */}
                                  {contenido.subtitulo && (
                                    <p style={{ color: '#6847f6', fontSize: 10, fontWeight: 600, margin: '1px 0 0', lineHeight: 1.3 }}>
                                      {contenido.subtitulo}
                                    </p>
                                  )}

                                  {/* Ponentes — texto inline, sin fotos */}
                                  {hasPonentes && (
                                    <p style={{ fontSize: 9.5, color: '#4b5563', margin: '2px 0 0', lineHeight: 1.4 }}>
                                      {contenido.ponentes!.map((p, i) => (
                                        <span key={p.id}>
                                          {i > 0 && <span style={{ color: '#d1d5db' }}> · </span>}
                                          <span style={{ fontWeight: 700, color: '#35219b' }}>{p.nombre}</span>
                                          {(p.cargo || p.empresa) && (
                                            <span style={{ color: '#6b7280' }}> ({[p.cargo, p.empresa].filter(Boolean).join(', ')})</span>
                                          )}
                                        </span>
                                      ))}
                                    </p>
                                  )}

                                  {/* Ubicación / capacidad */}
                                  {(contenido.ubicacion || contenido.capacidad) && (
                                    <p style={{ fontSize: 9, color: '#9ca3af', margin: '1px 0 0' }}>
                                      {contenido.ubicacion && <span>📍 {contenido.ubicacion}</span>}
                                      {contenido.ubicacion && contenido.capacidad && <span> · </span>}
                                      {contenido.capacidad && <span>👥 {contenido.capacidad}</span>}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Pie del PDF */}
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 5, marginTop: 4, textAlign: 'center' }}>
            <p style={{ fontSize: 8, color: '#9ca3af', margin: 0 }}>
              congresoparques.com · IX Congreso Internacional · Tijuana 2026
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
