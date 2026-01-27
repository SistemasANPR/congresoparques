import { Calendar, MapPin, LayoutGrid, Store, Phone, Mail, Clock, Users, Eye, Building2, CheckCircle, Download, MessageCircle } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import expoOfficialLogoUrl from "@assets/Recurso_17_1769556427973.png";

export default function ExpoEspacioPublico() {
  const beneficios = [
    "Explora el mercado.",
    "Conoce a los proveedores.",
    "Intercambia experiencias.",
    "Conoce las tendencias y los productos innovadores.",
    "Compara calidad, precios y prestaciones."
  ];

  const industrias = [
    "Consultores",
    "Oficinas de Arquitectura",
    "Obras Públicas y Servicios Públicos Municipales",
    "Museos y Centros Culturales",
    "Espacios Recreativos",
    "Parques Nacionales",
    "Parques de Aventura",
    "Administradores de Parques Urbanos",
    "Clubes deportivos",
    "Grupos inmobiliarios o de construcción",
    "Restaurantes y Hoteles"
  ];

  const tiposExpositores = [
    "Equipo de mantenimiento",
    "Sistemas de riego / equipos hidráulicos",
    "Viveros y jardines",
    "Árboles de gran tamaño",
    "Productos recreativos",
    "Juegos infantiles",
    "Juegos acuáticos",
    "Equipo deportivo",
    "Mobiliario para parques caninos",
    "Muebles para monopatines y bicicletas",
    "Superficies",
    "Sombras y velarías",
    "Luminarias",
    "Pinturas y recubrimientos",
    "Señalética y equipamiento vial",
    "Señalética inclusiva",
    "Accesos automatizados",
    "Instalaciones e infraestructura deportiva",
    "Maquinaria de jardinería y mantenimiento",
    "Sistemas de tratamiento de agua",
    "Servicios de mantenimiento de áreas verdes"
  ];

  const descargables = [
    { name: "Convocatoria", icon: Download },
    { name: "Kit del Expositor", icon: Download },
    { name: "Manual del Expositor", icon: Download },
    { name: "Catálogo de Expositores", icon: Download }
  ];

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

      <main className="pt-24 md:pt-28">
        {/* Hero Section - Expo Espacio Público */}
        <section 
          id="hero-expo"
          className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center py-16 md:py-24 lg:py-32"
          style={{ backgroundColor: '#0e0477' }}
        >
          {/* Background gradient overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{ 
              background: 'radial-gradient(ellipse at center, #6847f6 0%, transparent 70%)'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo oficial de Expo Espacio Público */}
              <div className="mb-8 md:mb-10">
                <img 
                  src={expoOfficialLogoUrl}
                  alt="Logo Expo Espacio Público 2026"
                  className="w-48 h-auto md:w-64 lg:w-80 mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Título */}
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}
              >
                Expo Espacio Público 2026
              </h1>
              
              {/* Subtítulo */}
              <p 
                className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 max-w-3xl mx-auto"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#BCCE16' }}
              >
                La exhibición especializada del Congreso Parques 2026 para el sector de parques y espacios públicos en América Latina.
              </p>
              
              {/* Texto descriptivo */}
              <p 
                className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Soluciones innovadoras para el diseño, construcción y gestión de espacios públicos que elevan la calidad de vida urbana.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="#seccion-visitante"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('seccion-visitante')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0e0477] px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  <Eye className="w-5 h-5" />
                  Participa como visitante
                </a>
                <a
                  href="#seccion-expositor"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('seccion-expositor')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#BCCE16] text-[#BCCE16] hover:bg-[#BCCE16] hover:text-[#0e0477] px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}
                >
                  <Building2 className="w-5 h-5" />
                  Participa como expositor
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#374151' }}>
                <strong className="text-[#0e0477]">Expo Espacio Público 2026</strong> es la exhibición especializada integrada al Congreso Parques 2026, donde convergen los principales proveedores del sector. Aquí se presentan soluciones para el <strong>diseño, planeación, construcción, operación y mantenimiento</strong> de áreas verdes y espacios de convivencia en desarrollos residenciales, parques, plazas, ciclovías, andadores y otros entornos urbanos.
              </p>
              <p className="text-lg mt-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, color: '#6847f6' }}>
                El objetivo es promover espacios públicos mejor diseñados y gestionados, capaces de elevar la calidad de vida en nuestras ciudades.
              </p>
            </div>
          </div>
        </section>

        {/* Event Info Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center text-[#0e0477] mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Acerca del Evento
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Clock className="w-10 h-10 text-[#6847f6] mx-auto mb-3" />
                <p className="text-3xl font-black text-[#0e0477]">2</p>
                <p className="text-gray-600">Días</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <MapPin className="w-10 h-10 text-[#6847f6] mx-auto mb-3" />
                <p className="text-sm font-bold text-[#0e0477]">Tijuana</p>
                <p className="text-gray-600 text-sm">Baja California, México</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Calendar className="w-10 h-10 text-[#6847f6] mx-auto mb-3" />
                <p className="text-lg font-bold text-[#0e0477]">14 y 15</p>
                <p className="text-gray-600 text-sm">de mayo 2026</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <LayoutGrid className="w-10 h-10 text-[#6847f6] mx-auto mb-3" />
                <p className="text-2xl font-black text-[#0e0477]">2,300</p>
                <p className="text-gray-600 text-sm">m² de exhibición</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center col-span-2 md:col-span-1">
                <Store className="w-10 h-10 text-[#6847f6] mx-auto mb-3" />
                <p className="text-3xl font-black text-[#0e0477]">59</p>
                <p className="text-gray-600">Stands</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expositor & Visitante */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Expositor */}
              <div id="seccion-expositor" className="rounded-2xl p-8 text-white scroll-mt-32" style={{ backgroundColor: '#35219B' }}>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-12 h-12 text-[#BCCE16]" />
                  <h3 className="text-2xl md:text-3xl uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>Expositor</h3>
                </div>
                <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                  Únete como expositor a la <strong>única feria especializada en el sector de parques y espacios públicos en América Latina</strong>. Presenta tus productos, promueve tus servicios y conecta con cientos de compradores interesados en nuevas soluciones.
                </p>
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white px-8 py-4 rounded-lg cursor-not-allowed opacity-70 uppercase tracking-wide"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                  data-testid="btn-registro-expositor"
                >
                  Registro próximamente
                </button>
                <p className="text-white/70 text-sm mt-3">El registro de expositores estará disponible próximamente</p>
              </div>

              {/* Visitante */}
              <div id="seccion-visitante" className="bg-gray-100 rounded-2xl p-8 scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-12 h-12 text-[#6847f6]" />
                  <h3 className="text-2xl md:text-3xl uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>Visitante</h3>
                </div>
                <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, color: '#374151' }}>
                  Asiste como visitante a la <strong>única exposición especializada en parques y espacios públicos en América Latina</strong>. Descubre tendencias, equipamientos, materiales y mobiliario urbano para tus proyectos. Es el espacio ideal para arquitectos paisajistas, urbanistas, desarrolladores inmobiliarios, áreas de obra pública y desarrollo urbano, direcciones de planeación y profesionales de la construcción.
                </p>
                <button
                  disabled
                  className="inline-block bg-gray-400 text-white px-8 py-4 rounded-lg cursor-not-allowed opacity-70 uppercase tracking-wide"
                  style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                  data-testid="btn-entrada-visitante"
                >
                  Comprar Entrada próximamente
                </button>
                <p className="text-gray-500 text-sm mt-3">La venta de entradas estará disponible próximamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Descargables */}
        <section className="py-12" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-center text-white mb-8 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Descargables
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {descargables.map((item, index) => (
                <button 
                  key={index}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg p-4 text-white text-center transition-colors"
                  data-testid={`btn-download-${index}`}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[#BCCE16]" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-white/70 mt-4 text-sm">*Plano interactivo de la expo próximamente</p>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-black text-center text-[#0e0477] mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Beneficios de Participar
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industrias */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-center text-[#0e0477] mb-4 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Encuentra toda la industria de espacio público
            </h2>
            <p className="text-center text-gray-600 mb-10">Proveedores de:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {industrias.map((industria, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-700 text-sm">{industria}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registro Expositor */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#6847F6' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                ¡Participa como Expositor!
              </h2>
              <p className="text-xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>Aparta tu lugar con un <strong className="text-[#BCCE16]">30% de anticipo</strong></p>
              <p className="mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>*Precios en Pesos Mexicanos más IVA (Tasa de IVA 16%)</p>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 md:p-8 mb-8">
                <p className="text-white/90 leading-relaxed">
                  En ediciones pasadas de Expo Espacio Público, los expositores pudieron conectar con <strong>clientes potenciales</strong>, establecer contacto con <strong>funcionarios públicos</strong> y acercarse a <strong>desarrolladores inmobiliarios</strong> a nivel regional y nacional, fortaleciendo así nuevas alianzas estratégicas.
                </p>
              </div>

              <button
                disabled
                className="inline-block bg-gray-400 text-white px-10 py-5 rounded-lg text-lg cursor-not-allowed opacity-70 uppercase tracking-wide"
                style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                data-testid="btn-registro-expositor-main"
              >
                Registro próximamente
              </button>
              <p className="text-white/70 text-sm mt-4">El registro de expositores estará disponible próximamente</p>
            </div>
          </div>
        </section>

        {/* Tipos de Expositores */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-center text-[#0e0477] mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Tipo de Expositores
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {tiposExpositores.map((tipo, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 border-l-4 border-[#6847f6] p-3 rounded-r-lg">
                  <span className="text-gray-700 text-sm">{tipo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitantes CTA */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Users className="w-16 h-16 text-[#6847f6] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ¿Te interesa la transformación de las ciudades?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ¿Quieres descubrir cómo construir espacios públicos más sostenibles, inclusivos y llenos de vida? 
                <br /><br />
                Entonces <strong className="text-[#6847f6]">no puedes faltar a la Expo Espacio Público</strong>, el evento que te acerca a las últimas tendencias y soluciones innovadoras que están moldeando el futuro urbano.
              </p>
              <button
                disabled
                className="inline-block bg-gray-400 text-white px-10 py-5 rounded-lg text-lg cursor-not-allowed opacity-70 uppercase tracking-wide"
                style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}
                data-testid="btn-comprar-entrada"
              >
                Comprar Entrada próximamente
              </button>
              <p className="text-gray-500 text-sm mt-4">La venta de entradas estará disponible próximamente</p>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl text-center text-white mb-10 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              Contacto
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-white/90 mb-8">
                Para más información sobre patrocinios o venta de stands:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-[#BCCE16] mb-4">Horario de Atención</h3>
                  <div className="space-y-2 text-white/90">
                    <p className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#BCCE16]" />
                      De miércoles a viernes
                    </p>
                    <p className="text-white/70 ml-7">9:00 am - 6:00 pm (GMT-6)</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-[#BCCE16] mb-4">Información de Contacto</h3>
                  <div className="space-y-3 text-white/90">
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#BCCE16]" />
                      01 999 944 4060
                    </p>
                    <p className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#BCCE16]" />
                      +52 999 960 0765
                    </p>
                    <a href="mailto:vinculacion@anpr.org.mx" className="flex items-center gap-2 hover:text-white transition-colors">
                      <Mail className="w-5 h-5 text-[#BCCE16]" />
                      vinculacion@anpr.org.mx
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
