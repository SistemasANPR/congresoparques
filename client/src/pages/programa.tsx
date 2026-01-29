import { useState, useEffect } from "react";
import { CalendarDays, Clock, Loader2, Tag } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

interface ProgramaItem {
  id: string;
  fecha: string;
  inicio: string;
  fin: string;
  titulo: string;
  tipo: string;
}

interface ProgramaResponse {
  success: boolean;
  evento: string;
  total: number;
  fechas_disponibles: string[];
  data: ProgramaItem[];
}

const tipoColors: Record<string, { bg: string; text: string }> = {
  "Talleres": { bg: "bg-[#BCCE16]", text: "text-[#0e0477]" },
  "Conferencia Magistral": { bg: "bg-[#6847f6]", text: "text-white" },
  "Sesión Educativa": { bg: "bg-[#0e0477]", text: "text-white" },
  "Master Class": { bg: "bg-[#35219b]", text: "text-white" },
  "Networking": { bg: "bg-teal-500", text: "text-white" },
  "Receso": { bg: "bg-gray-400", text: "text-white" },
  "Expo": { bg: "bg-orange-500", text: "text-white" },
  "Evento Social": { bg: "bg-pink-500", text: "text-white" },
  "default": { bg: "bg-gray-500", text: "text-white" }
};

export default function Programa() {
  const [programa, setPrograma] = useState<ProgramaItem[]>([]);
  const [fechasDisponibles, setFechasDisponibles] = useState<string[]>([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    const date = new Date(dateStr + 'T00:00:00');
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

  const programaFiltrado = programa
    .filter(item => item.fecha === fechaSeleccionada)
    .sort((a, b) => a.inicio.localeCompare(b.inicio));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "boletos",
            text: "BOLETOS A LA VENTA A PARTIR DEL 2 DE FEBRERO",
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
                        return (
                          <div 
                            key={item.id} 
                            className="relative pl-12 md:pl-20"
                          >
                            {/* Círculo del timeline */}
                            <div className={`absolute left-2 md:left-6 w-5 h-5 rounded-full border-4 border-white shadow-md ${colorConfig.bg}`}></div>
                            
                            {/* Tarjeta del evento */}
                            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                              <div className="p-4 md:p-6">
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
                                    <Tag className="w-3.5 h-3.5" />
                                    {item.tipo}
                                  </div>
                                </div>
                                
                                {/* Título */}
                                <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}>
                                  {item.titulo}
                                </h3>
                              </div>
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
