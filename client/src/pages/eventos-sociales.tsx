import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";
import eventosSocialesImg from "@assets/Eventos Sociales_1758578349366.jpg";

export default function EventosSociales() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0e0477] h-5 flex items-center justify-center">
        <p className="text-white text-[10px] sm:text-xs font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <span className="text-[#d0dd15]">★</span> REGISTRO A CONVOCATORIAS ABIERTO HASTA EL 25 DE ENERO <span className="text-[#d0dd15]">★</span>
        </p>
      </div>
      <header className="fixed top-5 left-0 right-0 z-50 bg-[#6847f6] shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <img src={logoUrl} alt="IX Congreso Internacional de Parques Urbanos y Espacio Público" className="h-12 sm:h-14 md:h-16 w-auto" data-testid="header-logo" />
              <div className="bg-[#0e0477] px-2.5 py-1 rounded-sm">
                <span className="text-[#d2dd0a] font-black text-xs md:text-sm tracking-wide" style={{fontFamily: 'Montserrat, sans-serif'}}>TIJUANA <span className="text-[#1edede]">2026</span></span>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors" data-testid="back-to-home">
              <ArrowLeft className="w-5 h-5" /><span className="hidden sm:inline">Volver al inicio</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 md:pt-24">
        {/* Hero Header */}
        <section className="bg-gradient-to-b from-[#0e0477] to-[#6847f6] py-16 md:py-24 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }} data-testid="page-title">
              Eventos Sociales
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
            <p className="text-white/90 text-lg">¡Ha llegado el momento de intercambiar tarjetas y divertirse!</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg md:text-xl max-w-4xl mx-auto">
              Expande tus horizontes profesionales y sumérgete en una experiencia única con los eventos sociales exclusivos que hemos organizado especialmente para ti; donde la diversión se mezcla con la innovación y el networking, en un ambiente relajado y lleno de posibilidades; <strong className="text-[#BCCE16]">disfruta, conecta y forja relaciones</strong> que impulsarán el futuro de los parques y espacios públicos.
            </p>
          </div>
        </section>

        {/* Beer and Mix Party */}
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
                  Beer and Mix Party
                </h2>
                <h3 className="text-[#BCCE16] text-lg mb-4">Octubre 2026</h3>
                <p className="text-white/90 mb-6">
                  Únete a nosotros en la Beer and Mix Party, un evento social vibrante y lleno de sabor que se celebra en el corazón del Congreso Parques. Disfruta de una noche única en la que la cerveza artesanal, la música y el buen ambiente se combinan para ofrecerte una experiencia inolvidable. ¡No te pierdas esta oportunidad de brindar por el futuro de nuestros espacios públicos!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">Hora:</span>
                    </div>
                    <p className="text-white/90">5:30 p.m. - 8:00 p.m.</p>
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
              <div></div>
            </div>
          </div>
        </section>

        {/* Evento de Clausura */}
        <section className="relative min-h-[500px] flex items-center bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-l from-[#0e0477]/95 via-[#0e0477]/80 to-[#6847f6]/60"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div></div>
              <div className="bg-[#0e0477]/80 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Evento de Clausura
                </h2>
                <h3 className="text-[#BCCE16] text-lg mb-4">Octubre 2026</h3>
                <p className="text-white/90 mb-6">
                  Después de aprender de los expertos y adquirir nuevas experiencias, ¡es hora de celebrar en el Evento de Clausura! Participa en el ambiente vibrante de una de las cantinas más típicas de Tijuana, donde te esperan antojitos regionales, música, baile y un ambiente único. Disfruta de la deliciosa comida local y la buena compañía, mientras brindas por los logros compartidos durante el Congreso Parques.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">Hora:</span>
                    </div>
                    <p className="text-white/90">6:30 p.m. - 10 p.m.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[#BCCE16] mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">Lugar:</span>
                    </div>
                    <p className="text-white/90">Por confirmar</p>
                  </div>
                </div>
              </div>
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
