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

export default function EventosSociales() {
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
                      <p className="text-white/90">(por definir)</p>
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
                      <p className="text-white/90">(por definir)</p>
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
