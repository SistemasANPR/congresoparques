import { useState, useEffect } from "react";
import { Mic, Loader2, X, User } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

interface Conferencista {
  id: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  cargo: string;
  empresa: string;
  pais: string;
  ciudad: string;
  biografia: string;
  foto_url: string | null;
  id_ponencia: string;
  ponencia: string;
  categoria: string;
}

interface TemaGroup {
  id_tema: string;
  tema: string;
  ponentes: Conferencista[];
}

interface ConferencistasResponse {
  success: boolean;
  total_magistrales: number;
  total_sesiones: number;
  magistrales: TemaGroup[];
  sesiones: TemaGroup[];
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
}

interface TalleristasResponse {
  success: boolean;
  total: number;
  data: Tallerista[];
}

interface BiografiaModal {
  nombre: string;
  cargo: string;
  empresa: string;
  biografia: string;
  fotoUrl: string | null;
  ponencia: string;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase"
        style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
      >
        {title}
      </h2>
      <div className="w-24 h-1 bg-[#6847f6] mx-auto mt-4"></div>
    </div>
  );
}

function SpeakerCard({
  nombre,
  cargo,
  empresa,
  ubicacion,
  ponencia,
  fotoUrl,
  onOpen,
  delay,
}: {
  nombre: string;
  cargo: string;
  empresa: string;
  ubicacion?: string;
  ponencia: string | string[];
  fotoUrl: string | null;
  onOpen: () => void;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const imgSrc = fotoUrl && !imgError
    ? `/api/image-proxy?url=${encodeURIComponent(fotoUrl)}`
    : null;

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
      }}
      onClick={onOpen}
    >
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-4 bg-gray-100 flex-shrink-0 border-4 border-[#6847f6]/20">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={nombre}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6847f6]/10 to-[#0e0477]/10">
            <User className="w-16 h-16 text-[#6847f6]/40" />
          </div>
        )}
      </div>
      <h3
        className="text-lg font-bold mb-1"
        style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
      >
        {nombre}
      </h3>
      {(cargo || empresa) && (
        <p className="text-sm text-gray-600 mb-1">
          {cargo}{cargo && empresa ? ' · ' : ''}{empresa}
        </p>
      )}
      {ubicacion && (
        <p className="text-xs text-gray-400 mb-2">{ubicacion}</p>
      )}
      {ponencia && (
        <div className="mt-auto pt-2">
          <p className="text-sm italic text-[#6847f6]">
            {Array.isArray(ponencia) ? ponencia.join(' | ') : ponencia}
          </p>
        </div>
      )}
    </div>
  );
}

function Modal({ data, onClose }: { data: BiografiaModal; onClose: () => void }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const imgSrc = data.fotoUrl && !imgError
    ? `/api/image-proxy?url=${encodeURIComponent(data.fotoUrl)}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-4 border-4 border-[#6847f6]/20 bg-gray-100">
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={data.nombre}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6847f6]/10 to-[#0e0477]/10">
                  <User className="w-12 h-12 text-[#6847f6]/40" />
                </div>
              )}
            </div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#0e0477' }}
            >
              {data.nombre}
            </h3>
            {(data.cargo || data.empresa) && (
              <p className="text-sm text-gray-600 mt-1">
                {data.cargo}{data.cargo && data.empresa ? ' · ' : ''}{data.empresa}
              </p>
            )}
            {data.ponencia && (
              <p className="text-sm italic text-[#6847f6] mt-2">{data.ponencia}</p>
            )}
          </div>
          {data.biografia ? (
            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {data.biografia}
              </p>
            </div>
          ) : (
            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-400 text-sm text-center italic">
                Biografía no disponible.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Ponentes() {
  const [magistrales, setMagistrales] = useState<TemaGroup[]>([]);
  const [sesiones, setSesiones] = useState<TemaGroup[]>([]);
  const [talleristas, setTalleristas] = useState<Tallerista[]>([]);
  const [loadingConf, setLoadingConf] = useState(true);
  const [loadingTall, setLoadingTall] = useState(true);
  const [errorConf, setErrorConf] = useState<string | null>(null);
  const [errorTall, setErrorTall] = useState<string | null>(null);
  const [modalData, setModalData] = useState<BiografiaModal | null>(null);

  // Función para ordenar temas: "Tecnología e Innovación Urbana" primero, "Ciudad, Movilidad y Gobernanza" último
  const sortTemas = (temas: TemaGroup[]): TemaGroup[] => {
    return [...temas].sort((a, b) => {
      const temaA = a.tema.toLowerCase();
      const temaB = b.tema.toLowerCase();

      // "Tecnología e Innovación Urbana" va primero
      if (temaA.includes('tecnología') && temaA.includes('innovación')) return -1;
      if (temaB.includes('tecnología') && temaB.includes('innovación')) return 1;

      // "Ciudad, Movilidad y Gobernanza" va último
      if (temaA.includes('ciudad') && temaA.includes('movilidad')) return 1;
      if (temaB.includes('ciudad') && temaB.includes('movilidad')) return -1;

      return 0;
    });
  };

  useEffect(() => {
    const fetchConferencistas = async () => {
      try {
        const response = await fetch('https://congresoparques.com/cpanel/api/conferencistas.php');
        if (!response.ok) throw new Error('Error al cargar los conferencistas');
        const data: ConferencistasResponse = await response.json();
        if (data.success) {
          setMagistrales(sortTemas(data.magistrales || []));
          setSesiones(sortTemas(data.sesiones || []));
        }
      } catch (err) {
        setErrorConf(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoadingConf(false);
      }
    };

    const fetchTalleristas = async () => {
      try {
        const response = await fetch('https://congresoparques.com/cpanel/api/talleristas.php');
        if (!response.ok) throw new Error('Error al cargar los talleristas');
        const data: TalleristasResponse = await response.json();
        if (data.success && data.data) {
          setTalleristas(data.data);
        }
      } catch (err) {
        setErrorTall(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoadingTall(false);
      }
    };

    fetchConferencistas();
    fetchTalleristas();
  }, []);

  const openConferencistaModal = (c: Conferencista) => {
    setModalData({
      nombre: `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim(),
      cargo: c.cargo,
      empresa: c.empresa,
      biografia: c.biografia,
      fotoUrl: c.foto_url,
      ponencia: c.ponencia,
    });
  };

  const openTalleristaModal = (t: Tallerista, talleres?: string[]) => {
    setModalData({
      nombre: `${t.nombre} ${t.apellidos}`,
      cargo: t.cargo,
      empresa: t.empresa,
      biografia: t.biografia,
      fotoUrl: t.foto_url,
      ponencia: talleres && talleres.length > 1 ? talleres.join(' · ') : t.taller,
    });
  };

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
          title="Ponentes"
          subtitle="Conoce a los expertos que construirán el programa más innovador"
          lucideIcon={Mic}
        />

        {/* Ponentes Magistrales */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Ponentes Magistrales" />

            {loadingConf && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-10 h-10 text-[#6847f6] animate-spin" />
                <span className="ml-3 text-lg text-gray-600">Cargando ponentes...</span>
              </div>
            )}

            {errorConf && (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">{errorConf}</p>
              </div>
            )}

            {!loadingConf && !errorConf && magistrales.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg italic">Próximamente</p>
              </div>
            )}

            {!loadingConf && !errorConf && magistrales.length > 0 && (
              <div className="max-w-6xl mx-auto">
                {magistrales.map((tema) => {
                  const seen = new Set<string>();
                  const uniquePonentes = tema.ponentes.filter(c => {
                    const name = `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim();
                    if (seen.has(name)) return false;
                    seen.add(name);
                    return true;
                  });
                  return (
                  <div key={tema.id_tema} className="mb-12 last:mb-0">
                    <h3
                      className="text-lg md:text-xl font-semibold text-center mb-6 text-[#6847f6]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tema.tema}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {uniquePonentes.map((c, i) => (
                        <SpeakerCard
                          key={c.id}
                          nombre={`${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim()}
                          cargo={c.cargo}
                          empresa={c.empresa}
                          ubicacion={[c.ciudad, c.pais].filter(Boolean).join(', ')}
                          ponencia={c.ponencia}
                          fotoUrl={c.foto_url}
                          onOpen={() => openConferencistaModal(c)}
                          delay={i * 100}
                        />
                      ))}
                    </div>
                  </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Sesiones Educativas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Sesiones Educativas" />

            {loadingConf && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-10 h-10 text-[#6847f6] animate-spin" />
                <span className="ml-3 text-lg text-gray-600">Cargando ponentes...</span>
              </div>
            )}

            {errorConf && (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">{errorConf}</p>
              </div>
            )}

            {!loadingConf && !errorConf && sesiones.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg italic">Próximamente</p>
              </div>
            )}

            {!loadingConf && !errorConf && sesiones.length > 0 && (
              <div className="max-w-6xl mx-auto">
                {sesiones.map((tema) => {
                  const seen = new Set<string>();
                  const uniquePonentes = tema.ponentes.filter(c => {
                    const name = `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim();
                    if (seen.has(name)) return false;
                    seen.add(name);
                    return true;
                  });
                  return (
                  <div key={tema.id_tema} className="mb-12 last:mb-0">
                    <h3
                      className="text-lg md:text-xl font-semibold text-center mb-6 text-[#6847f6]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tema.tema}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {uniquePonentes.map((c, i) => (
                        <SpeakerCard
                          key={c.id}
                          nombre={`${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim()}
                          cargo={c.cargo}
                          empresa={c.empresa}
                          ubicacion={[c.ciudad, c.pais].filter(Boolean).join(', ')}
                          ponencia={c.ponencia}
                          fotoUrl={c.foto_url}
                          onOpen={() => openConferencistaModal(c)}
                          delay={i * 100}
                        />
                      ))}
                    </div>
                  </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Talleristas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Talleristas" />

            {loadingTall && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-10 h-10 text-[#6847f6] animate-spin" />
                <span className="ml-3 text-lg text-gray-600">Cargando talleristas...</span>
              </div>
            )}

            {errorTall && (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">{errorTall}</p>
              </div>
            )}

            {!loadingTall && !errorTall && talleristas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg italic">Próximamente</p>
              </div>
            )}

            {!loadingTall && !errorTall && talleristas.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {(() => {
                  const grouped = new Map<string, { base: Tallerista; talleres: string[] }>();
                  talleristas.forEach(t => {
                    const name = `${t.nombre} ${t.apellidos}`.trim();
                    if (grouped.has(name)) {
                      const existing = grouped.get(name)!;
                      if (t.taller && !existing.talleres.includes(t.taller)) {
                        existing.talleres.push(t.taller);
                      }
                    } else {
                      grouped.set(name, { base: t, talleres: t.taller ? [t.taller] : [] });
                    }
                  });
                  return Array.from(grouped.values());
                })().map(({ base: t, talleres }, i) => (
                  <SpeakerCard
                    key={t.id_tallerista}
                    nombre={`${t.nombre} ${t.apellidos}`}
                    cargo={t.cargo}
                    empresa={t.empresa}
                    ponencia={talleres.length > 1 ? talleres : talleres[0] || ''}
                    fotoUrl={t.foto_url}
                    onOpen={() => openTalleristaModal(t, talleres)}
                    delay={i * 100}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {modalData && <Modal data={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
}
