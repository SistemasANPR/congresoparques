import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

import ricardoBonillaImg from "@assets/Ricardo_Eugenio_Bonilla_1768852622373.jpg";
import adrianaRomeroImg from "@assets/Adirana_Romero,_Especialista_de_Comunicaciones_1768852622374.jpg";
import barbaraApodacaImg from "@assets/Barbara_Apodaca,_Dir_de_la_Sociedad_Botánica_y_Zoológica_de_Si_1768852622375.jpg";
import davidMontanezImg from "@assets/David_Montañez_1768852622375.jpg";
import edwinRiveraImg from "@assets/Edwin_J._Rivera_Guzman,_CPRP_1768852622376.png";
import edwinMooImg from "@assets/Edwin_Moo_1768852622377.jpeg";
import franciscoRamirezImg from "@assets/Francisco_Ramirez_Salazar_1768852622377.jpg";
import jesusAlexandroImg from "@assets/Jesús_Alexandro_Félix_Gastélum__1768852622378.jpg";
import jorgeSanchezImg from "@assets/Jorge_Sanchez_1768852622378.jpg";
import karinaAguilarImg from "@assets/Karina_Aguilar_Vizcaino_(2)_1768852622379.png";
import lazaroLopezImg from "@assets/Lázaro_López_Rodríguez_1768852622379.jpg";
import leticiaLozanoImg from "@assets/Leticia_Lozano_2_1768852622380.jpg";
import liliaHauaImg from "@assets/Lilia_Haua_Miguel_1768852622381.jpg";
import lorenaBarreraImg from "@assets/Lorena_Barrera_(2)_1768852622381.jpg";
import lorenaVazquezImg from "@assets/Lorena_Vazque_Ordaz_1768852622381.jpg";
import mariaIsabelImg from "@assets/María_Isabel_Velázquez_1768852622382.png";
import mariaLeticiaImg from "@assets/Maria_Leticia_Roche_Cano_1768852622382.jpg";
import marianaProneImg from "@assets/Mariana_Prone_(2)_1768852622383.jpg";
import matiasHonourImg from "@assets/Matias_Honour_1768852622383.jpg";
import miguelCalderonImg from "@assets/Miguel_Calderón_(1)_1768852622384.jpg";
import alejandroRomeroImg from "@assets/Alejandro_Romero_1768929344694.jpeg";
import clearkVillatoroImg from "@assets/Cleark_Villatoro_1768929344699.jpeg";
import gerardoIbarraImg from "@assets/Gerardo-Ibarra.jpeg_1768929344701.jpg";
import luisRomahnImg from "@assets/Luis_Romahn_1768929344702.jpeg";
import taniaJaimeImg from "@assets/Tania_Jaime_de_la_Torre_1768929344703.png";
import victorSantillanImg from "@assets/Victor_Santillan_1768929344704.jpg";

interface MemberCardProps {
  name: string;
  title: string;
  organization: string;
  country: string;
  image?: string;
  imagePosition?: string;
}

function MemberCard({ name, title, organization, image, imagePosition }: MemberCardProps) {
  return (
    <div className="text-center p-4">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#6847f6] to-[#0e0477] flex items-center justify-center">
            <span className="text-4xl text-white">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className="font-bold text-[#0e0477] text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <hr className="w-16 mx-auto border-[#BCCE16] border-2 mb-2" />
      <p className="text-gray-700 text-sm font-medium">{organization}</p>
    </div>
  );
}

export default function ComiteEvaluador() {
  const members: MemberCardProps[] = [
    { name: "Adriana Romero", title: "Especialista en Comunicaciones", organization: "Glasswing International", country: "", image: adrianaRomeroImg },
    { name: "Alejandro Romero", title: "Director de Conservación", organization: "San Pedro + Parques", country: "", image: alejandroRomeroImg, imagePosition: "top" },
    { name: "Bárbara Apodaca", title: "Directora", organization: "Sociedad Botánica y Zoológica de Sinaloa", country: "", image: barbaraApodacaImg },
    { name: "Cleark Espinoza Villatoro", title: "Administradora", organization: "Parque Cuscatlán y Parque Bicentenario", country: "", image: clearkVillatoroImg },
    { name: "David Montañez", title: "Director", organization: "MetropoliMID", country: "", image: davidMontanezImg },
    { name: "Edwin J. Rivera Guzmán", title: "Presidente / Guardabosques", organization: "Hispanic Professionals in Parks and Recreation (HPPR) / US National Park Service", country: "", image: edwinRiveraImg },
    { name: "Edwin Moo", title: "Coordinador de Proyectos", organization: "Parques de México", country: "", image: edwinMooImg },
    { name: "Francisco Ramírez Salazar", title: "Director de Administración y Soporte", organization: "San Pedro + Parques", country: "", image: franciscoRamirezImg },
    { name: "Gerardo Ibarra", title: "Director", organization: "Centro de Ciencias Explora", country: "", image: gerardoIbarraImg },
    { name: "Jesús Alexandro Félix Gastélum", title: "Administrador General", organization: "AMBU", country: "", image: jesusAlexandroImg },
    { name: "Jorge Sánchez", title: "Subdirector de Control de Obra e Imagen Urbana", organization: "SUPRATERRA", country: "", image: jorgeSanchezImg },
    { name: "Karina Aguilar Vizcaíno", title: "Gerencia de Conservación y Mejoramiento al Ecosistema", organization: "Agencia Metropolitana de Bosques Urbanos del AMG", country: "", image: karinaAguilarImg },
    { name: "Lázaro López", title: "Jefe de Conservación", organization: "Parque Central de Ciudad Juárez", country: "", image: lazaroLopezImg },
    { name: "Leticia Lozano", title: "Directora", organization: "MACIA Estudio", country: "", image: leticiaLozanoImg },
    { name: "Lilia Haua Miguel", title: "Directora", organization: "Fideicomiso Pro Bosque de Chapultepec", country: "", image: liliaHauaImg },
    { name: "Lorena Barrera González", title: "Vicepresidenta", organization: "Foro Urbano A.C", country: "", image: lorenaBarreraImg },
    { name: "Lorena Vázquez-Ordaz", title: "Directora", organization: "Reserva Natural Chipinque", country: "", image: lorenaVazquezImg },
    { name: "Luis Romahn", title: "Director", organization: "World Urban Parks", country: "", image: luisRomahnImg },
    { name: "María Isabel Velázquez", title: "Directora", organization: "Parques de México", country: "", image: mariaIsabelImg },
    { name: "María Leticia Roche Cano", title: "Subdirectora de Infraestructura Verde", organization: "Unidad de Medio Ambiente y Bienestar Animal", country: "", image: mariaLeticiaImg },
    { name: "Mariana Prone", title: "Directora", organization: "Parques de Argentina", country: "", image: marianaProneImg },
    { name: "Matías Honour", title: "Director de Proyectos", organization: "Fundación Mi Parque", country: "", image: matiasHonourImg },
    { name: "Miguel Enrique Calderón Quevedo", title: "Presidente", organization: "Parques Alegres", country: "", image: miguelCalderonImg },
    { name: "Ricardo Eugenio Bonilla López", title: "Director General", organization: "San Pedro + Parques", country: "", image: ricardoBonillaImg },
    { name: "Tania Jaime de la Torre", title: "Directora de Recreación", organization: "San Pedro + Parques", country: "", image: taniaJaimeImg },
    { name: "Víctor Santillán", title: "Administración", organization: "Parque La Mexicana", country: "", image: victorSantillanImg },
  ];

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
              Consejo Evaluador
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 text-lg mb-4">
                El Consejo Evaluador del Congreso Parques 2026 está integrado por profesionales con amplia experiencia en el desarrollo, gestión y conservación de espacios públicos en Latinoamérica. Su labor es clave para asegurar la calidad, pertinencia y solidez de las propuestas que formarán parte del programa del evento.
              </p>
              <p className="text-[#0e0477] font-semibold text-xl">Descubre a quienes integran este equipo de expertos:</p>
            </div>
          </div>
        </section>

        {/* Talleres y Sesiones Educativas */}
        <section className="py-12 bg-gradient-to-r from-[#0e0477] to-[#6847f6]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Talleres */}
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="bg-white/10 p-8 h-full transition-all duration-300 group-hover:bg-black/40">
                  <h3 className="text-2xl font-bold text-[#BCCE16] mb-4">Talleres</h3>
                  <p className="text-white/90 mb-6">
                    Aprende haciendo, colaborando y resolviendo retos reales.
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-2 rounded-lg">
                      Conoce talleres
                    </span>
                  </div>
                </div>
              </div>
              {/* Sesiones Educativas */}
              <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                <div className="bg-white/10 p-8 h-full transition-all duration-300 group-hover:bg-black/40">
                  <h3 className="text-2xl font-bold text-[#BCCE16] mb-4">Sesiones Educativas</h3>
                  <p className="text-white/90 mb-6">
                    Escucha, analiza y profundiza en experiencias de expertos.
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-2 rounded-lg">
                      Conoce sesiones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Members Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <MemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
