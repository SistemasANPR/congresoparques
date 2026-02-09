import { Link } from "wouter";
import { Users, Calendar, FileText, Award, ClipboardList, Send, Clock, CheckCircle, Target, BookOpen, GraduationCap } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import sesionesIconUrl from "@assets/Sesiones_Educativas_1769038571198.png";
import conferenciaImg from "@assets/Conferencias Magistrales_1758578569495.png";
import talleresImg from "@assets/Talleres Vivenciales_1758578569495.png";
import sesionesImg from "@assets/Sesiones Educativas_1758578569496.png";
import expoImg from "@assets/Expo Espacio Publico_1758580313612.png";
import masterImg from "@assets/Master Classes_1758578569492.png";
import eventosImg from "@assets/Eventos Sociales_1758578569496.png";

export default function SesionesEducativas() {
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
        <PageHeader 
          title="Convocatoria Sesiones Educativas"
          subtitle="Comparte tus proyectos y experiencias con profesionales de toda Latinoamérica"
          icon={sesionesIconUrl}
        />
        
        <section className="py-6 text-center" style={{ backgroundColor: '#35219B' }}>
          <a href="#" className="inline-block bg-[#BCCE16] text-[#0e0477] font-bold px-8 py-3 rounded-lg hover:bg-[#d4e52a] transition-colors">
            VER RESULTADOS
          </a>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0e0477] mb-4">¡Bienvenidos a Tijuana para el Congreso Parques 2026!</h3>
              <p className="text-gray-700 text-lg">
                La convocatoria de sesiones educativas tiene como objetivo recibir información sobre proyectos de todo el mundo que quieran ser presentados en el Congreso Parques. Las propuestas recibidas con mayor probabilidad de ser aceptadas para formar parte del programa son aquellas que se apegan a nuestro tema y sus respectivos ejes.
              </p>
            </div>
          </div>
        </section>

        {/* Perfil del Presentador */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" /> Perfil del Presentador
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Arquitectos, urbanistas, paisajistas, diseñadores de hábitat.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Sociólogos, antropólogos, mercadólogos, economistas y administradores.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Funcionarios públicos de los tres niveles de gobierno.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Ambientalistas, asociaciones y organizaciones sin fines de lucro.
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#6847f6] rounded-full mt-2 flex-shrink-0"></span>
                      Cualquier otra persona interesada en compartir sus conocimientos y proyectos sobre el espacio público con los asistentes.
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl md:text-6xl">👩‍💼</span>
                  </div>
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-[#6847f6]/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl md:text-6xl">👨‍💼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fechas Importantes */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6" /> Fechas Importantes
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Convocatoria</h4>
                  <p className="text-gray-700">Abril - 15 de Julio</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Revisión de propuestas</h4>
                  <p className="text-gray-700">16 de Julio - 11 de Agosto</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-[#6847f6] font-semibold mb-2">Resultados</h4>
                  <p className="text-gray-700">15 de Agosto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificaciones */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6" /> Especificaciones de la Convocatoria
              </h3>
              <ol className="space-y-4 list-decimal list-inside text-gray-700">
                <li>Si la propuesta es aceptada, cuando se indique, el ponente deberá firmar los acuerdos de privacidad, términos y condiciones, compartir su presentación (material de apoyo visual), ya que este material se hará público en la plataforma web de la Asociación Nacional de Parques y Recreación de México después de las fechas del congreso.</li>
                <li>La Asociación Nacional de Parques y Recreación de México se reserva el derecho de designar el tiempo de intervención de las propuestas seleccionadas.</li>
                <li>Alentamos la distribución de esta convocatoria de sesiones educativas.</li>
                <li>El Comité de Contenido del Congreso se reserva el derecho de hacer selecciones de presentaciones finales, editar descripciones y biografías de los presentadores.</li>
                <li>Al presentar una propuesta para su consideración, se entiende que usted se compromete a estar presente y participar presencialmente según lo propuesto, si es aceptado.</li>
                <li>Se enviará información adicional sobre la logística de la presentación y los detalles de la conferencia a todos los presentadores seleccionados.</li>
                <li>El propósito de las preguntas sobre el tipo de sesión, el tamaño, el formato y la selección de la audiencia es para garantizar una diversidad de temas y estilos de sesión.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gradient-to-r from-[#0e0477] to-[#6847f6] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-3 gap-4">
                  <img src={conferenciaImg} alt="Conferencias Magistrales" className="w-full rounded-lg" />
                  <img src={expoImg} alt="Expo" className="w-full rounded-lg" />
                  <img src={sesionesImg} alt="Sesiones" className="w-full rounded-lg" />
                  <img src={talleresImg} alt="Talleres" className="w-full rounded-lg" />
                  <img src={masterImg} alt="Master Classes" className="w-full rounded-lg" />
                  <img src={eventosImg} alt="Eventos" className="w-full rounded-lg" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6" /> Beneficios
                  </h3>
                  <p className="mb-4">A los ponentes seleccionados se les otorgará una entrada de cortesía para los días del congreso. La entrada de cortesía incluye:</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Diploma de participación como ponente.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Todas las sesiones educativas y conferencias magistrales.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Acceso a la exposición comercial de la industria.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Acceso a un taller vivencial o una master class.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#BCCE16] flex-shrink-0 mt-0.5" />
                      Eventos sociales.
                    </li>
                  </ul>
                  <p className="text-white/80 text-sm">
                    <strong className="text-[#BCCE16]">Nota:</strong> Los gastos relacionados con la inscripción a los talleres, el transporte, el alojamiento, las comidas y los honorarios no están incluidos en el boleto de cortesía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instrucciones */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-8 text-center flex items-center justify-center gap-2">
                <ClipboardList className="w-6 h-6" /> Instrucciones
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-[#6847f6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-[#0e0477] mb-2">Llena el Formulario</h4>
                  <p className="text-gray-600 text-sm">Si tu propuesta incluye otro ponente, es importante registrar a todas las personas.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-[#6847f6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-[#0e0477] mb-2">Envía tu propuesta</h4>
                  <p className="text-gray-600 text-sm">El envío de la propuesta no garantiza tu aceptación, ni tu registro como asistente del congreso.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-16 h-16 bg-[#6847f6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-[#0e0477] mb-2">Espera los resultados</h4>
                  <p className="text-gray-600 text-sm">Recibirás los resultados de la convocatoria en las fechas establecidas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre los ponentes */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0e0477] mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" /> Sobre los ponentes
              </h3>
              <p className="text-gray-700">
                Puedes hacer una propuesta personal o junto con otros participantes. Estos pueden ser colaboradores de la misma organización, pero no limitados a ella. Es importante contar con los datos personales de todos los ponentes que intervienen en la propuesta con un máximo de 2 personas. Esto será considerado para la duración de cada sesión. Completa cada uno de los campos para que podamos considerarlos, si la propuesta es seleccionada esta información se utilizará para la sección de ponentes. Te recomendamos escribir con cuidado tu correo y número para que podamos contactarte. De igual manera, la foto que elijas subir debe ser de alta calidad, a color y de cara y hombros.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre la sesión */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0e0477] mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" /> Sobre la sesión educativa:
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-bold text-[#0e0477]">Título de la sesión:</dt>
                      <dd className="text-gray-700">Debes crear un título que refleje la esencia de tu sesión y debe tener máximo 12 palabras o menos.</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#0e0477]">Eje temático:</dt>
                      <dd className="text-gray-700">Elige el eje temático que más se alinee a tu proyecto y propuesta.
                        <Link href="/congreso-parques" className="block text-[#6847f6] font-semibold hover:underline mt-1">
                          Consultar Ejes Temáticos
                        </Link>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#0e0477]">Descripción:</dt>
                      <dd className="text-gray-700">Describe tu sesión de forma clara y concisa; esto debe ser de 200 palabras o menos. Si tu sesión es seleccionada, la descripción aparecerá en nuestro sitio web, asegúrate que sea atractiva e invite a los asistentes a unirse a la misma.</dd>
                    </div>
                  </dl>
                </div>
                <div className="mt-8 md:mt-12">
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-bold text-[#0e0477] flex items-center gap-2">
                        <Target className="w-5 h-5" /> Justificación:
                      </dt>
                      <dd className="text-gray-700">Justifica la importancia de tu propuesta, identificando cómo tu proyecto/iniciativa/investigación resuelve un problema relacionado con el espacio público y cómo se relaciona con los temas del congreso. No hay límite en el número de palabras.</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-[#0e0477]">Objetivos:</dt>
                      <dd className="text-gray-700">La sesión debe tener objetivos de aprendizaje claros y medibles de lo que los asistentes aprenderán. Es importante que enumeres al menos 3.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-50 text-center">
          <a href="#" className="inline-block bg-[#6847f6] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#5a3dd6] transition-colors">
            VER RESULTADOS
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
