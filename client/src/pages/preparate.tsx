import { Download, FileText, CreditCard, Link2, BookOpen } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export default function Preparate() {
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
              Prepárate Para<br />El Congreso
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* Sección 1: Conoce acerca del congreso */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  2. Organiza tu agenda de conferencias
                </h2>
                <ul className="space-y-4 text-white/90">
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
        <section className="py-16 bg-[#0e0477]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  4. Carta para justificar tu asistencia
                </h2>
                <ul className="space-y-4 text-white/90 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BCCE16] mt-1">•</span>
                    <span>Descarga las cartas para presentar a tu jefe o institución.</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://docs.google.com/document/d/1yrYyA94zhhCIbENY-JctGt3lpOSw6vC0/edit?usp=sharing&ouid=102768518971014749797&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors">
                    <Download className="w-5 h-5" />
                    Descargar Carta Invitación
                  </a>
                  <a href="https://docs.google.com/document/d/1G19wuAHa9j7VzFc8Ba9uAAqX3daxYcKTlbqP1srapg0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#BCCE16] text-[#0e0477] font-bold px-6 py-3 rounded-lg hover:bg-[#d4e620] transition-colors">
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
