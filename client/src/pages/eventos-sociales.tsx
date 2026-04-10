import { useState, useEffect } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import eventosIconUrl from "@assets/Eventos_Sociales_1769038571198.png";
import almuerzoImg from "@assets/Eventos_sociales-Almuerzo_1769206192057.png";
import beerMixImg from "@assets/Eventos_sociales-Beer_and_Mix_Party_1769205643427.jpg";
import cenaConsejoImg from "@assets/Eventos_sociales-Cena_de_Consejo_1769205643429.jpg";
import clausuraImg from "@assets/Eventos_sociales-Evento_de_Clausura_1769205643430.jpg";
import SupportSection from "@/components/SupportSection";

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
  data: ProgramaItem[];
}

function formatTime(timeStr: string): string {
  if (!timeStr) return "";
  const [hours, minutes] = timeStr.split(":");
  const h = parseInt(hours, 10);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${h12}:${minutes} ${suffix}`;
}

function useEventosSocialesHorarios() {
  const [horarios, setHorarios] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("https://congresoparques.com/cpanel/api/programa.php")
      .then((r) => r.json())
      .then((data: ProgramaResponse) => {
        if (!data.success || !data.data) return;
        const sociales = data.data.filter((item) => item.tipo === "Evento Social");
        const map: Record<string, string> = {};
        sociales.forEach((item) => {
          const hora = item.inicio && item.fin
            ? `${formatTime(item.inicio)} – ${formatTime(item.fin)}`
            : item.inicio
            ? formatTime(item.inicio)
            : "";
          const titulo = item.titulo.toLowerCase();
          if (titulo.includes("beer") || titulo.includes("mix")) {
            map["beer"] = hora;
          } else if (titulo.includes("clausura") || titulo.includes("cierre")) {
            map["clausura"] = hora;
          } else if (titulo.includes("cena") || titulo.includes("consejo")) {
            map["cena"] = hora;
          }
        });
        setHorarios(map);
      })
      .catch(() => {});
  }, []);

  return horarios;
}

export default function EventosSociales() {
  const horarios = useEventosSocialesHorarios();

  const horaDisplay = (key: string) =>
    horarios[key] || "Por confirmar";

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
          title="Eventos Sociales"
          subtitle="¡Llegó la hora de convivir, relajarte y hacer nuevos contactos!"
          icon={eventosIconUrl}
          iconAlt="Icono Eventos Sociales"
        />

        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg md:text-xl max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'white' }}>
              Únete a los tres eventos sociales del Congreso Parques —<strong className="text-[#BCCE16]">Cena de Consejo, Beer and Mix Party y Evento de Clausura</strong>—, un evento especial por día, cuidadosamente organizado para brindarte un espacio único donde podrás ampliar tu red en un ambiente casual, relajado y divertido.
            </p>
          </div>
        </section>

        {/* Almuerzo */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${almuerzoImg})` }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="hidden md:block"></div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="p-8 md:p-10" style={{ backgroundColor: '#35219b' }}>
                  <h2 className="text-2xl md:text-3xl text-white mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    Almuerzo (jueves y viernes)
                  </h2>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                    Disfruta del almuerzo incluido en tu boleto, una experiencia integrada al programa del Congreso Parques para que recargues energía sin salir del recinto, conozcas a más participantes y continúes el networking en un ambiente cómodo y ágil. Servido en la Expo Espacio Público ambos días, solo presenta tu gafete.
                  </p>
                </div>
                <div className="p-6" style={{ backgroundColor: '#6847f6' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Fechas:</span>
                      </div>
                      <p className="text-white/90">14 y 15 de mayo</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Lugar:</span>
                      </div>
                      <p className="text-white/90">Expo Espacio Público</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cena de Consejo */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${cenaConsejoImg})` }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-xl relative">
                <div
                  className="absolute top-0 right-0 z-20 overflow-hidden"
                  style={{ width: '120px', height: '120px', pointerEvents: 'none' }}
                >
                  <div
                    className="text-center font-bold text-xs tracking-wider"
                    style={{
                      position: 'absolute',
                      top: '22px',
                      right: '-30px',
                      width: '170px',
                      transform: 'rotate(45deg)',
                      backgroundColor: '#d0dd15',
                      color: '#1a1a1a',
                      padding: '6px 0',
                      fontFamily: 'Montserrat, sans-serif',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    EXCLUSIVO
                  </div>
                </div>
                <div className="p-8 md:p-10" style={{ backgroundColor: '#35219b' }}>
                  <h2 className="text-2xl md:text-3xl text-white mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    Cena de Consejo
                  </h2>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                    Participa y conecta en la exclusiva Cena de Consejo, donde podrás conocer de cerca a los ponentes magistrales y a los miembros del Consejo de la ANPR tras el primer gran día del congreso. ¡El ambiente perfecto para relajarte, descubrir al panel y generar nuevas conexiones!
                  </p>
                </div>
                <div className="p-6" style={{ backgroundColor: '#6847f6' }}>
                  <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">Fecha:</span>
                  </div>
                  <p className="text-white/90">13 de mayo</p>
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>

        {/* Beer and Mix Party */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${beerMixImg})` }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="hidden md:block"></div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="p-8 md:p-10" style={{ backgroundColor: '#35219b' }}>
                  <h2 className="text-2xl md:text-3xl text-white mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    Beer and Mix Party
                  </h2>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                    Asiste a la Beer and Mix Party, un evento integrado al programa del Congreso Parques y creado para ofrecerte una experiencia auténtica: disfrutar de la cerveza artesanal de Tijuana mientras conoces a los expositores y fortaleces tu red de contactos en un ambiente social y agradable.
                  </p>
                </div>
                <div className="p-6" style={{ backgroundColor: '#6847f6' }}>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Fecha:</span>
                      </div>
                      <p className="text-white/90">14 de mayo</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">Hora:</span>
                      </div>
                      <p className="text-white/90">{horaDisplay("beer")}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Lugar:</span>
                      </div>
                      <p className="text-white/90">Expo Espacio Público</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evento de Clausura */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${clausuraImg})` }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="p-8 md:p-10" style={{ backgroundColor: '#35219b' }}>
                  <h2 className="text-2xl md:text-3xl text-white mb-2 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                    Evento de Clausura
                  </h2>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                    Tras días de aprendizaje y nuevas experiencias, el Evento de Clausura se convierte en el momento ideal para celebrar lo vivido, seguir conectando y compartir contactos. Todo esto en un ambiente especial que hará de este cierre una experiencia memorable.
                  </p>

                  {/* Aviso transporte */}
                  <div
                    className="mt-4 flex items-start gap-3 rounded-lg px-4 py-3"
                    style={{ backgroundColor: 'rgba(188,206,22,0.15)', borderLeft: '4px solid #BCCE16' }}
                  >
                    <span className="text-[#BCCE16] text-lg mt-0.5 shrink-0">🚌</span>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#BCCE16', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      <span className="uppercase tracking-wide">Nota importante:</span>{" "}
                      <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                        Habrá camión disponible desde el Centro de Convenciones hasta el Parque Esperanto.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: '#6847f6' }}>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">Fecha:</span>
                      </div>
                      <p className="text-white/90">15 de mayo</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">Hora:</span>
                      </div>
                      <p className="text-white/90">{horaDisplay("clausura")}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-semibold">Lugar:</span>
                      </div>
                      <p className="text-white/90">Parque Esperanto</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
