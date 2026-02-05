import { Download, FileText, CreditCard, Link2, BookOpen, Lightbulb } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function Preparate() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner
        messages={[
          {
            id: "miembros",
            text: "30% DE DESCUENTO PARA MIEMBROS ANPR",
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
          title="Prepárate Para El Congreso"
          subtitle="Todo lo que necesitas saber para aprovechar al máximo tu experiencia"
          lucideIcon={Lightbulb}
        />

        {/* Sección 1: Conoce acerca del congreso */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                  1. Conoce acerca del congreso
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Antes de discutir con tu jefe la posibilidad de asistir al Congreso, es importante <strong className="text-[#0e0477]">conocer a fondo su estructura</strong>, fechas, horarios, logística, tipos de conferencias, ponentes y precios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Al revisar toda esta información, <strong className="text-[#0e0477]">establece metas</strong> a corto y largo plazo que te <strong className="text-[#0e0477]">ayuden a mejorar tu desempeño profesional.</strong> Estas metas deben estar acompañadas de la intención de asistir al evento.</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-[#6847f6] mb-4">Kit de asistente:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Información general</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm">Instrucciones para registro</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm">Datos bancarios</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-[#0e0477] hover:text-[#6847f6] transition-colors">
                      <Link2 className="w-4 h-4" />
                      <span className="text-sm">Enlaces importantes</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#6847f6]/20 to-[#BCCE16]/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📋</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Organiza tu agenda */}
        <section className="py-16" style={{ backgroundColor: '#35219B' }}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl text-white mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                  2. Organiza tu agenda de conferencias
                </h2>
                <ul className="space-y-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Alinea tus objetivos laborales y los de tu organización con los temas de las conferencias y talleres que te gustaría tomar. La mejor forma de justificar tu asistencia es demostrar que lo que aprenderás contribuye directamente a tu trabajo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Establece también una agenda de contactos y considera acercarte a algún conferencista con quien tu organización pudiera estar interesada en colaborar.</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📅</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Lista de razones */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, color: '#0e0477' }}>
                  3. Conoce la lista de razones
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Aprender de los mejores conferencistas y talleristas del mundo sobre parques y espacios públicos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Ampliar tus contactos y generar valiosas relaciones profesionales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Conocer a los proveedores más importantes de la industria en Latinoamérica y descubrir tendencias, nuevos productos, calidades y oportunidades.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Aprender de historias de éxito sobre parques y espacios públicos en la región.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Llevar a tu organización nuevas ideas para desarrollar proyectos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Descargar todo el material de las conferencias al finalizar el Congreso.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Visitar los parques y espacios públicos más emblemáticos de la ciudad sede.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Formar parte de la comunidad mexicana dedicada al cuidado, mantenimiento, administración y gestión de parques urbanos.</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#6847f6]/20 to-[#BCCE16]/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">✅</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Carta para justificar */}
        <section className="py-16" style={{ backgroundColor: '#6847F6' }}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl text-white mb-6 uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                  4. Carta para justificar tu asistencia
                </h2>
                <ul className="space-y-4 mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Descarga las cartas para presentar a tu jefe o institución.</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://docs.google.com/document/d/1yrYyA94zhhCIbENY-JctGt3lpOSw6vC0/edit?usp=sharing&ouid=102768518971014749797&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] px-8 py-4 rounded-lg hover:bg-[#d4e620] transition-colors uppercase tracking-wide" style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}>
                    <Download className="w-5 h-5" />
                    Descargar Carta Invitación
                  </a>
                  <a href="https://docs.google.com/document/d/1G19wuAHa9j7VzFc8Ba9uAAqX3daxYcKTlbqP1srapg0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] px-8 py-4 rounded-lg hover:bg-[#d4e620] transition-colors uppercase tracking-wide" style={{ fontFamily: 'Antonio, sans-serif', fontWeight: 700 }}>
                    <Download className="w-5 h-5" />
                    Descargar Carta Molde
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-6xl">📄</span>
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
