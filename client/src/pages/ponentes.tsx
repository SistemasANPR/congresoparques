import { useState, useEffect } from "react";
import { Mic, Loader2, X } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { HexagonPhoto } from "@/components/HexagonPhoto";
import type { SpeakerCategory } from "@/components/HexagonPhoto";
import iconoMagistrales from "@assets/Conferencias_Magistrales_1769038571197.png";
import iconoSesiones from "@assets/Sesiones_Educativas_1769038571198.png";
import iconoTalleres from "@assets/Talleres_Vivenciales_1769038571197.png";
import SupportSection from "@/components/SupportSection";

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
  talleres?: { id_taller: string; titulo: string }[];
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
  subtitulo?: string;
  category: SpeakerCategory;
}

function SectionTitle({ title, icon }: { title: string; icon?: string }) {
  return (
    <div className="text-center mb-12">
      {icon && (
        <div className="flex justify-center mb-4">
          <img
            src={icon}
            alt={`Icono ${title}`}
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
          />
        </div>
      )}
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide"
        style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, color: '#0e0477' }}
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
  subtitulo,
  fotoUrl,
  onOpen,
  delay,
  category,
}: {
  nombre: string;
  cargo: string;
  empresa: string;
  ubicacion?: string;
  ponencia: string | string[];
  subtitulo?: string;
  fotoUrl: string | null;
  onOpen: () => void;
  delay: number;
  category: SpeakerCategory;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-100 h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease',
      }}
      onClick={onOpen}
    >
      <div className="mb-4">
        <HexagonPhoto src={fotoUrl} alt={nombre} category={category} />
      </div>

      <div
        className="w-full rounded-md px-4 py-2 mb-3"
        style={{ backgroundColor: '#35219b' }}
      >
        <h3
          className="text-lg font-bold"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}
        >
          {nombre}
        </h3>
      </div>
      {cargo && (
        <p
          className="text-sm font-semibold text-gray-700 leading-snug mb-0.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {cargo}
        </p>
      )}
      {empresa && (
        <p
          className="text-sm text-[#6847f6] font-medium leading-snug mb-1"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {empresa}
        </p>
      )}
      {ubicacion && (
        <p className="text-xs text-gray-400 mb-2">{ubicacion}</p>
      )}
      {ponencia && (
        <div className="mt-auto pt-2">
          <p className="text-sm italic text-[#6847f6] font-medium">
            {Array.isArray(ponencia) ? ponencia.join(' | ') : ponencia}
          </p>
          {subtitulo && (
            <p className="text-xs mt-1 italic" style={{ color: '#422c6D' }}>
              {subtitulo}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function Modal({ data, onClose }: { data: BiografiaModal; onClose: () => void }) {
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
          className="absolute top-1 right-1 z-10 w-14 h-14 flex items-center justify-center group"
          aria-label="Cerrar"
        >
          <span className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-gray-600" />
          </span>
        </button>
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="mb-4">
              <HexagonPhoto
                src={data.fotoUrl}
                alt={data.nombre}
                category={data.category}
                width={130}
                height={146}
                showTriangles={true}
                hoverTriangles={false}
                iconSize="w-12 h-12"
              />
            </div>
            <div
              className="rounded-md px-5 py-2.5"
              style={{ backgroundColor: '#35219b' }}
            >
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}
              >
                {data.nombre}
              </h3>
            </div>
            {data.cargo && (
              <p className="text-sm font-semibold text-gray-700 mt-2 leading-snug" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {data.cargo}
              </p>
            )}
            {data.empresa && (
              <p className="text-sm text-[#6847f6] font-medium leading-snug mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {data.empresa}
              </p>
            )}
            {data.ponencia && (
              <p className="text-sm italic text-[#6847f6] font-medium mt-2">{data.ponencia}</p>
            )}
            {data.subtitulo && (
              <p className="text-xs italic mt-1" style={{ color: '#422c6D' }}>{data.subtitulo}</p>
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
  const [subtituloMap, setSubtituloMap] = useState<Map<string, string>>(new Map());

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

    const fetchSubtitulos = async () => {
      try {
        const response = await fetch('https://congresoparques.com/cpanel/api/programa.php');
        if (!response.ok) return;
        const data = await response.json();
        const map = new Map<string, string>();
        if (data.data && Array.isArray(data.data)) {
          data.data.forEach((bloque: { contenido?: { subtitulo?: string; ponentes?: { id: string }[] }[] }) => {
            if (!bloque.contenido) return;
            bloque.contenido.forEach((item) => {
              const sub = item.subtitulo?.trim();
              if (!sub) return;
              (item.ponentes || []).forEach((p) => {
                if (p.id) map.set(String(p.id), sub);
              });
            });
          });
        }
        setSubtituloMap(map);
      } catch {
        // silencioso: subtítulos son opcionales
      }
    };

    fetchConferencistas();
    fetchTalleristas();
    fetchSubtitulos();
  }, []);

  const openConferencistaModal = (c: Conferencista, category: SpeakerCategory) => {
    setModalData({
      nombre: `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim(),
      cargo: c.cargo,
      empresa: c.empresa,
      biografia: c.biografia,
      fotoUrl: c.foto_url,
      ponencia: c.ponencia,
      subtitulo: subtituloMap.get(String(c.id)),
      category,
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
      subtitulo: subtituloMap.get(String(t.id_tallerista)),
      category: 'taller',
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
          title="Ponentes"
          subtitle="Conoce a los expertos que construirán el programa más innovador"
          lucideIcon={Mic}
        />

        {/* Conferencistas Magistrales */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Conferencistas Magistrales" icon={iconoMagistrales} />

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
              <div className="max-w-6xl mx-auto space-y-16">
                {magistrales.map((tema, temaIdx) => {
                  const seen = new Set<string>();
                  const uniquePonentes = tema.ponentes.filter(c => {
                    const name = `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim();
                    if (seen.has(name)) return false;
                    seen.add(name);
                    return true;
                  });
                  return (
                  <div key={tema.id_tema} className="relative">
                    {temaIdx > 0 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#6847f6]/30 to-transparent" />
                    )}
                    <div className="bg-[#6847f6]/5 rounded-2xl px-4 py-3 md:px-8 md:py-4 mb-8 text-center">
                      <h3
                        className="text-lg md:text-xl font-bold text-[#0e0477]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {tema.tema}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                      {uniquePonentes.map((c, i) => (
                        <div key={c.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                        <SpeakerCard
                          nombre={`${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim()}
                          cargo={c.cargo}
                          empresa={c.empresa}
                          ubicacion={[c.ciudad, c.pais].filter(Boolean).join(', ')}
                          ponencia={c.ponencia}
                          subtitulo={subtituloMap.get(String(c.id))}
                          fotoUrl={c.foto_url}
                          onOpen={() => openConferencistaModal(c, 'magistral')}
                          delay={i * 100}
                          category="magistral"
                        />
                        </div>
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
            <SectionTitle title="Sesiones Educativas" icon={iconoSesiones} />

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
              <div className="max-w-6xl mx-auto space-y-16">
                {sesiones.map((tema, temaIdx) => {
                  const seen = new Set<string>();
                  const uniquePonentes = tema.ponentes.filter(c => {
                    const name = `${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim();
                    if (seen.has(name)) return false;
                    seen.add(name);
                    return true;
                  });
                  return (
                  <div key={tema.id_tema} className="relative">
                    {temaIdx > 0 && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#6847f6]/30 to-transparent" />
                    )}
                    <div className="bg-[#6847f6]/5 rounded-2xl px-4 py-3 md:px-8 md:py-4 mb-8 text-center">
                      <h3
                        className="text-lg md:text-xl font-bold text-[#0e0477]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {tema.tema}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                      {uniquePonentes.map((c, i) => (
                        <div key={c.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                        <SpeakerCard
                          nombre={`${c.nombres} ${c.apellido_paterno} ${c.apellido_materno}`.trim()}
                          cargo={c.cargo}
                          empresa={c.empresa}
                          ubicacion={[c.ciudad, c.pais].filter(Boolean).join(', ')}
                          ponencia={c.ponencia}
                          subtitulo={subtituloMap.get(String(c.id))}
                          fotoUrl={c.foto_url}
                          onOpen={() => openConferencistaModal(c, 'sesion')}
                          delay={i * 100}
                          category="sesion"
                        />
                        </div>
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
            <SectionTitle title="Talleristas" icon={iconoTalleres} />

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
              <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
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
                      const apiTalleres = t.talleres && t.talleres.length > 0
                        ? t.talleres.map(tw => tw.titulo).filter(Boolean)
                        : (t.taller ? [t.taller] : []);
                      grouped.set(name, { base: t, talleres: apiTalleres });
                    }
                  });
                  return Array.from(grouped.values());
                })().map(({ base: t, talleres }, i) => (
                  <div key={t.id_tallerista} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                  <SpeakerCard
                    nombre={`${t.nombre} ${t.apellidos}`}
                    cargo={t.cargo}
                    empresa={t.empresa}
                    ponencia={talleres.length > 1 ? talleres : talleres[0] || ''}
                    subtitulo={subtituloMap.get(String(t.id_tallerista))}
                    fotoUrl={t.foto_url}
                    onOpen={() => openTalleristaModal(t, talleres)}
                    delay={i * 100}
                    category="taller"
                  />
                  </div>
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
