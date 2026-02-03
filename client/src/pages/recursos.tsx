import { FileText, Download, BookOpen, FolderOpen, CreditCard } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function Recursos() {
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

      <main className="pt-28 md:pt-36 lg:pt-40">
        <PageHeader 
          title="Recursos"
          subtitle="Materiales y documentos del IX Congreso Internacional de Parques Urbanos"
          lucideIcon={FolderOpen}
        />

        {/* Resources Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Documentos Disponibles
                </h2>
                <FileText className="w-8 h-8 text-[#6847f6]" />
              </div>
              <p className="text-gray-700 mb-8 max-w-4xl">
                Descarga los materiales oficiales del congreso, incluyendo programas, guías y documentos informativos.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-[#6847f6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0e0477] mb-2">Programa del Congreso</h3>
                  <p className="text-gray-600 text-sm mb-4">Consulta el programa completo de actividades del congreso.</p>
                  <span className="text-[#6847f6] text-sm font-medium">Proximamente disponible</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-[#6847f6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0e0477] mb-2">Guia del Participante</h3>
                  <p className="text-gray-600 text-sm mb-4">Toda la informacion que necesitas para aprovechar al maximo tu experiencia.</p>
                  <span className="text-[#6847f6] text-sm font-medium">Proximamente disponible</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#6847f6]/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#6847f6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0e0477] mb-2">Material Informativo</h3>
                  <p className="text-gray-600 text-sm mb-4">Documentos y presentaciones sobre parques urbanos y espacio publico.</p>
                  <span className="text-[#6847f6] text-sm font-medium">Proximamente disponible</span>
                </div>

                {/* Tarjeta de Información Bancaria */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#BCCE16]/20 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-[#6847f6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0e0477] mb-2">Información Bancaria</h3>
                  <p className="text-gray-600 text-sm mb-4">Datos bancarios de ANPR para realizar pagos por transferencia.</p>
                  <a
                    href="/assets/Cuenta_Bancaria_Congreso_1770154765232.pdf"
                    download="Informacion_Bancaria_ANPR.pdf"
                    className="inline-flex items-center gap-2 bg-[#6847f6] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#5438d5] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Descargar PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Mas recursos proximamente
              </h2>
              <p className="text-gray-700">
                Estamos preparando materiales adicionales que estaran disponibles conforme se acerque la fecha del congreso. Vuelve pronto para encontrar nuevos recursos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
