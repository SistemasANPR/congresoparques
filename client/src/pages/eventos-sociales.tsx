import { Clock, MapPin, Calendar } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import eventosSocialesImg from "@assets/Eventos Sociales_1758578349366.jpg";

export default function EventosSociales() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement Banner */}
      <AnnouncementBanner
        messages={[
          { id: "convocatorias", text: "REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO" },
          { id: "boletos", text: "BOLETOS A LA VENTA A PARTIR DEL 2 DE FEBRERO" },
        ]}
        speed="normal"
      />
      {/* Header Navigation */}
      <Navigation />

      <main className="pt-28 md:pt-36 lg:pt-40">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Eventos Sociales
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-white/90 text-lg">¡Llegó la hora de convivir, relajarte y hacer nuevos contactos!</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg md:text-xl max-w-4xl mx-auto">
              Únete a los tres eventos sociales del Congreso Parques —<strong className="text-[#BCCE16]">Cena de Consejo, Beer and Mix Party y Evento de Clausura</strong>—, un evento especial por día, cuidadosamente organizado para brindarte un espacio único donde podrás ampliar tu red en un ambiente casual, relajado y divertido.
            </p>
          </div>
        </section>

        {/* Cena de Consejo */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${eventosSocialesImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0477]/95 via-[#0e0477]/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e0477]/80 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Cena de Consejo
                </h2>
                <p className="text-white/90 mb-6">
                  Participa y conecta en la exclusiva Cena de Consejo, donde podrás conocer de cerca a los ponentes magistrales y a los miembros del Consejo de la ANPR tras el primer gran día del congreso. ¡El ambiente perfecto para relajarte, descubrir al panel y generar nuevas conexiones!
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">Fecha:</span>
                    </div>
                    <p className="text-white/90">13 de mayo</p>
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
                    <p className="text-white/90">(por definir)</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        {/* Beer and Mix Party */}
        <section className="relative min-h-[500px] flex items-center bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-l from-[#0e0477]/95 via-[#0e0477]/80 to-[#6847f6]/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div></div>
              <div className="bg-[#0e0477]/80 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Beer and Mix Party
                </h2>
                <p className="text-white/90 mb-6">
                  Asiste a la Beer and Mix Party, un evento integrado al programa del Congreso Parques y creado para ofrecerte una experiencia auténtica: disfrutar de la cerveza artesanal de Tijuana mientras conoces a los expositores y fortaleces tu red de contactos en un ambiente social y agradable.
                </p>
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
        </section>

        {/* Evento de Clausura */}
        <section className="relative min-h-[500px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${eventosSocialesImg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#0e0477]/95 via-[#0e0477]/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0e0477]/80 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Evento de Clausura
                </h2>
                <p className="text-white/90 mb-6">
                  Tras días de aprendizaje y nuevas experiencias, el Evento de Clausura se convierte en el momento ideal para celebrar lo vivido, seguir conectando y compartir contactos. Todo esto en un ambiente especial que hará de este cierre una experiencia memorable.
                </p>
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
                    <p className="text-white/90">(por definir)</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        {/* Recomendaciones */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#0e0477] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Recomendaciones:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span>Las fiestas no cuentan con un código de vestimenta estricto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span>Al momento del registro se te proporcionarán los tickets correspondientes a los alimentos y bebidas de cada fiesta. Estos tickets tienen que ser entregados en los eventos por lo que es indispensable llevarlos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span>Si los tickets anteriormente mencionados no son presentados en la fiesta, las personas encargadas de las áreas de alimentos y bebidas no podrán entregar ninguno de estos servicios.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
