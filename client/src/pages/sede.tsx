import { ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export default function Sede() {
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
              Tijuana, Baja California
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Bienvenida */}
        <section className="bg-gradient-to-r from-[#0e0477] to-[#6847f6] py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-lg md:text-xl max-w-4xl mx-auto">
              Tijuana, una de las ciudades más vibrantes de México, te invita a explorar su esencia fronteriza, creativa y multicultural. Reconocida como <strong className="text-[#BCCE16]">la frontera más visitada del mundo</strong>, combina modernidad, arte urbano y una destacada oferta gastronómica, convirtiéndose en un destino dinámico y lleno de energía para todos sus visitantes.
            </p>
          </div>
        </section>

        {/* Video y descripción */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xk0WWaBImgA"
                  title="Tijuana Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div>
                <p className="text-gray-700 mb-4 text-lg">
                  Tijuana es un destino que te sorprenderá con su energía, diversidad y creatividad.
                </p>
                <p className="text-[#0e0477] font-semibold mb-4">Anímate a descubrir esta ciudad única en la frontera norte de México.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Explora su esencia multicultural:</strong> Arte urbano, historia fronteriza y una vibrante vida cultural.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Disfruta su clima templado:</strong> Ideal para recorrer la ciudad y sus alrededores durante gran parte del año.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Vive experiencias únicas:</strong> Avenida Revolución, el icónico CECUT, cervecerías artesanales y escapadas a la costa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Degusta su gastronomía:</strong> Desde los famosos tacos estilo Tijuana hasta propuestas culinarias innovadoras.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span><strong className="text-[#0e0477]">Descansa y disfruta:</strong> Una ciudad moderna, dinámica y con una oferta turística preparada para recibirte.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Baja California Center */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Baja California Center <span className="text-[#BCCE16]">BCC</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
              <div className="text-white/90 text-justify space-y-4">
                <p>
                  Lugar sede de nuestro Congreso Internacional de Parques Urbanos "Congreso Parques". Este moderno centro de convenciones, considerado <strong className="text-[#BCCE16]">uno de los recintos más importantes del noroeste de México</strong>, está ubicado en la zona costa entre Tijuana y Rosarito, a pocos minutos de la franja hotelera y con accesos directos desde ambos destinos. Aquí disfrutarás de una experiencia cómoda, profesional y perfectamente equipada para un evento internacional, además cuenta con la capacidad de recibir hasta <strong className="text-[#BCCE16]">10,000 visitantes</strong>.
                </p>
                <p>
                  El Baja California Center cuenta con amplios salones, áreas modulares y espacios versátiles diseñados para congresos, exposiciones y encuentros de gran escala. Su arquitectura contemporánea, tecnología de vanguardia y servicios especializados lo convierten en el escenario ideal para reunir a expertos y profesionales del sector de parques y recreación.
                </p>
                <p>
                  Además, su ubicación estratégica ofrece vistas al océano Pacífico, fácil conectividad terrestre y proximidad a hoteles, gastronomía y atractivos turísticos, garantizando una estancia agradable y accesible para todos los asistentes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🏛️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descubre Tijuana */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Descubre Tijuana, Baja California: Imperdibles que no puedes dejar pasar
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Recorre la Avenida Revolución:</strong> El corazón histórico y cultural de la ciudad. Aquí encontrarás arte urbano, tiendas locales, bares, cafés y una muestra del ambiente fronterizo que caracteriza a Tijuana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Explora el CECUT – Centro Cultural Tijuana:</strong> Visita uno de los recintos culturales más importantes del norte del país. Su icónico edificio Esfera, museos, galerías y funciones de cine lo convierten en una parada obligada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Visita Plaza Península:</strong> Date la oportunidad de conocer el destino favorito de compras, gastronomía y estilo de vida en Tijuana. Explora una selección única de tiendas, restaurantes y entretenimiento en un ambiente familiar, al aire libre lleno de estilo y energía.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Vive la escena cervecera artesanal:</strong> Tijuana denominada como el Oasis de la Cerveza Artesanal, es uno de los epicentros de este movimiento en México, la ciudad cuenta con aproximadamente 30 cervecerías artesanales. Descubre tap rooms, cervecerías locales y rutas cerveceras reconocidas internacionalmente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Disfruta su gastronomía única:</strong> La ciudad es famosa por los tacos estilo Tijuana contando con más de 200 taquerías, la mezcla culinaria fronteriza, la cocina de autor y el movimiento culinario Baja Med, que combina ingredientes frescos del mar y la región.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Vive la escena deportiva:</strong> Atrévete a vivir la experiencia deportiva en la única ciudad fronteriza con 3 equipos deportivos a nivel profesional, Xoloitzcuintles, Toros y Zonkeys de Tijuana. <strong className="text-[#0e0477]">Playas de Tijuana:</strong> A solo minutos de la zona urbana, camina por su malecón y contempla un atardecer frente al océano Pacífico.</span>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Muro fronterizo:</strong> Admira los murales en el muro fronterizo de Playas de Tijuana y sé testigo del talento local y lo que representa el movimiento cultural y migratorio en la ciudad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Arte urbano y distritos creativos:</strong> Descubre galerías independientes, murales, centros culturales alternativos y una vibrante comunidad artística que le da carácter a la ciudad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Museo del Trompo:</strong> Inaugurado en 2008, es un espacio interactivo perfecto para familias y visitantes interesados en ciencia y tecnología. <strong className="text-[#0e0477]">Museo del Taco:</strong> Aquí se celebra al taco, la carne y la tortilla. Vive la aventura que va desde el carbón y la creación de tu propia tortilla hasta el final épico en la alberca de pelotas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Museo de la Lucha Libre Mexicana:</strong> Atrévete y conoce la más grande colección de máscaras, cabelleras, campeonatos, revistas, juguetes, equipos, arte y todo de Lucha Libre.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#BCCE16] mt-1">•</span>
                  <span><strong className="text-[#0e0477]">Museo del Coleccionista de Tijuana:</strong> Admira colecciones de Tarjetas telefónicas, cerillos, boletos de lucha libre, billetes, tazos, juguetes, revistas, entre muchos otros artículos que harán salir los recuerdos de tu memoria.</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              *Recomendamos verificar horarios de cada lugar para planear su visita.
            </p>
          </div>
        </section>

        {/* Bares y Restaurantes */}
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Bares y Restaurantes en Tijuana: <span className="text-[#BCCE16]">Una Noche para Recordar</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Telefonica Gastro Park</h3>
                <p className="text-white/90">Un espacio culinario al aire libre con food trucks, cocina creativa, cerveza artesanal y un ambiente relajado.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Caesar's Restaurant</h3>
                <p className="text-white/90">Cuna de la mundialmente famosa Ensalada César, este restaurante icónico ofrece tradición, historia y sabor en pleno centro de Tijuana.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Baja Med Cocina</h3>
                <p className="text-white/90">Explora propuestas culinarias innovadoras basadas en el movimiento Baja Med, donde se fusionan ingredientes locales con técnicas internacionales.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Cervecerías artesanales locales</h3>
                <p className="text-white/90">Tasting rooms como Border Psycho, Insurgente, Norte, Mexica, Mamut Brewery o Rámuri son puntos imperdibles para quienes buscan descubrir los sabores de la región.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm md:col-span-2 lg:col-span-2">
                <h3 className="text-[#BCCE16] font-bold text-lg mb-2">Bares speakeasy</h3>
                <p className="text-white/90">Conoce las propuestas de bares como Lladró, Nórtico y Tinieblo, mismos que son espacios secretos en la ciudad a los que podrás ingresar solo por accesos exclusivos, y en los cuales tendrás la oportunidad de probar las mejores propuestas de cócteles y bebidas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sitios y Experiencias Cercanas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Sitios y Experiencias Cercanas: <span className="text-[#6847f6]">A un Paso de Tijuana</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#BCCE16]">
                <h3 className="text-[#0e0477] font-bold text-lg mb-3">Playas de Rosarito</h3>
                <p className="text-gray-700">A menos de 30 minutos, disfruta de su malecón, restaurantes frente al mar y actividades acuáticas y eco turísticas, ideal para una escapada rápida. Disfruta de su excelente cocina y la mundialmente famosa Langosta estilo Puerto Nuevo.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#BCCE16]">
                <h3 className="text-[#0e0477] font-bold text-lg mb-3">Ruta del Vino en el Valle de Guadalupe</h3>
                <p className="text-gray-700">A una hora de Tijuana, vive una experiencia inolvidable en la denominada Capital del vino mexicano, conformada por siete valles vinícolas, se vuelve en una de las regiones vinícolas más importantes del continente, con viñedos, degustaciones y gastronomía de clase mundial.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#BCCE16]">
                <h3 className="text-[#0e0477] font-bold text-lg mb-3">Tecate</h3>
                <p className="text-gray-700">A 30 minutos de Tijuana, se encuentra el pueblo mágico de Tecate, reconocido por ser casa de la Cervecería Tecate, sus paisajes campiranos, pan dulce artesanal y ser la puerta al norte para iniciar el recorrido en la Ruta del Vino de Baja California.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#BCCE16]">
                <h3 className="text-[#0e0477] font-bold text-lg mb-3">Corredor Costero Escénico</h3>
                <p className="text-gray-700">Con alrededor de 98 km, se convierte en un recorrido imperdible entre Tijuana y Ensenada que ofrece vistas panorámicas del Pacífico.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conectividad Aérea */}
        <section className="py-16 bg-gradient-to-r from-[#0e0477] to-[#6847f6]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Conectividad Aérea
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
                <div className="text-5xl mb-4">✈️</div>
                <h3 className="text-[#BCCE16] font-bold text-xl mb-4">Aeropuerto Internacional de Tijuana</h3>
                <p className="text-white/90 mb-4">
                  Con <strong className="text-[#BCCE16]">36 vuelos nacionales</strong>, es el segundo aeropuerto con mejor conectividad a nivel nacional, además cuenta con <strong className="text-[#BCCE16]">2 vuelos internacionales</strong> a Estados Unidos y China.
                </p>
                <p className="text-white/80 text-sm">
                  La ciudad registró de enero a noviembre 2025 un flujo de <strong className="text-[#BCCE16]">11,543,800 pasajeros</strong>.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
                <div className="text-5xl mb-4">🌉</div>
                <h3 className="text-[#BCCE16] font-bold text-xl mb-4">Cross Border Xpress (CBX)</h3>
                <p className="text-white/90 mb-4">
                  Disfruta del puente binacional que une a dos países y que ha demostrado ser un referente en materia de conectividad y facilitación fronteriza para los viajeros.
                </p>
                <p className="text-white/80 text-sm">
                  El puente acumuló <strong className="text-[#BCCE16]">3,635,100 usuarios</strong> durante enero a noviembre 2025.
                </p>
              </div>
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
