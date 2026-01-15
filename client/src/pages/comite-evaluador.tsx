import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import logoUrl from "@assets/LOGO Congreso Parques_1758315663051.png";

interface MemberCardProps {
  name: string;
  title: string;
  organization: string;
  country: string;
}

function MemberCard({ name, title, organization, country }: MemberCardProps) {
  return (
    <div className="text-center p-4">
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#6847f6] to-[#0e0477] rounded-full flex items-center justify-center">
        <span className="text-4xl text-white">{name.charAt(0)}</span>
      </div>
      <h3 className="font-bold text-[#0e0477] text-lg mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <hr className="w-16 mx-auto border-[#BCCE16] border-2 mb-2" />
      <p className="text-gray-700 text-sm font-medium">{organization}</p>
      <p className="text-[#6847f6] text-sm">{country}</p>
    </div>
  );
}

export default function ComiteEvaluador() {
  const members: MemberCardProps[] = [
    { name: "María Isabel Velázquez", title: "Directora", organization: "Parques de México", country: "México" },
    { name: "Leticia Lozano", title: "Directora", organization: "MACIA Estudio", country: "México" },
    { name: "Eric Fajardo", title: "Coordinador de Diseño Participativo", organization: "IMPLAN", country: "México" },
    { name: "Lilia Haua", title: "Directora", organization: "Fideicomiso Pro Bosque de Chapultepec", country: "México" },
    { name: "Mayu Ferrufino", title: "Directora", organization: "Fundación Parque Cuscatlán", country: "El Salvador" },
    { name: "Germán Enriquez", title: "Director", organization: "San Pedro Parques", country: "México" },
    { name: "Leticia Roche", title: "Subdirectora de Infraestructura Verde", organization: "Unidad de Desarrollo Sustentable", country: "México" },
    { name: "Eugenia Correa", title: "Directora", organization: "Consultora Ambiente Sustentable", country: "México" },
    { name: "Karina Aguilar", title: "Gerencia de Conservación y Mejoramiento al Ecosistema", organization: "Agencia Metropolitana de Bosques Urbanos del AMG", country: "México" },
    { name: "Jorge Villaseñor", title: "Director", organization: "Agencia Metropolitana de Bosques Urbanos del AMG", country: "México" },
    { name: "Gladys Arana", title: "Coordinadora de Maestría en Diseño Urbano", organization: "UADY", country: "México" },
    { name: "Nayla Campos", title: "Supervisora y Operadora Área de Mariposario", organization: "Parque Agua Azul / AMBU Guadalajara", country: "México" },
    { name: "Mariana Prone", title: "Directora", organization: "Parques de Argentina", country: "Argentina" },
    { name: "Lorena Vázquez Órdaz", title: "Directora", organization: "Parque Chipinque", country: "México" },
    { name: "Edwin Moo", title: "Coordinador de Proyectos", organization: "Parques de México", country: "México" },
    { name: "David Montañez", title: "Director", organization: "MetropoliMID", country: "México" },
    { name: "Matias Honour", title: "Director de Proyectos", organization: "Fundación Mi Parque", country: "Chile" },
    { name: "Alejandra Aragón", title: "Encargada de Presupuesto Participativo", organization: "Secretaría de Participación Ciudadana", country: "México" },
    { name: "Bárbara Apodaca", title: "Directora", organization: "Sociedad Botanica y Zoológica de Sinaloa", country: "México" },
    { name: "Cleark Villatoro", title: "Administradora", organization: "Fundación Parque Cuscatlán", country: "El Salvador" },
    { name: "Luis Romahn", title: "Director", organization: "World Urban Parks", country: "México" },
    { name: "Belem May", title: "Jefa de Proyectos", organization: "Subdirección de Obra Pública", country: "México" },
    { name: "Guillermo Espinosa", title: "Director", organization: "Parques Alegres", country: "México" },
    { name: "Gerardo Ibarra", title: "Director", organization: "Centro de Ciencias Explora", country: "México" },
  ];

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
              Consejo Evaluador
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0e0477] mb-4">¡Descubre quiénes forman parte de nuestro consejo consultivo!</h2>
              <p className="text-gray-700 mb-4">
                El Consejo Evaluador del Congreso Parques 2026 está formado por expertos en desarrollo y conservación de espacios públicos en Latinoamérica. Este grupo de profesionales destacados es fundamental para garantizar la calidad y relevancia de las propuestas seleccionadas para el evento.
              </p>
              <p className="text-[#6847f6] font-semibold">¡Conoce a todos los integrantes!</p>
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

      <footer className="py-8 bg-[#0e0477] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-white/80 text-sm">© 2026 IX Congreso Internacional de Parques Urbanos y Espacio Público. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
