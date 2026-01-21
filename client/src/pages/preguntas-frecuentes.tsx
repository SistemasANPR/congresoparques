import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

interface FAQItem {
  pregunta: string;
  respuesta: string | string[];
}

interface FAQSection {
  titulo: string;
  preguntas: FAQItem[];
}

function AccordionItem({ pregunta, respuesta, isOpen, onClick }: { pregunta: string; respuesta: string | string[]; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-[#0e0477]">{pregunta}</span>
        <ChevronDown className={`w-5 h-5 text-[#0e0477] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-white">
          {Array.isArray(respuesta) ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {respuesta.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{respuesta}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function PreguntasFrecuentes() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true, "1-0": true, "2-0": true, "3-0": true, "4-0": true, "5-0": true, "6-0": true, "7-0": true, "8-0": true, "9-0": true });

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqSections: FAQSection[] = [
    {
      titulo: "Preguntas sobre el Congreso",
      preguntas: [
        {
          pregunta: "¿Qué es el evento?",
          respuesta: "El Congreso Parques es un evento presencial que se realiza anualmente y que tiene como objetivo reunir y capacitar a profesionales, funcionarios públicos, técnicos, tomadores de decisiones, académicos, estudiantes, sociedad civil y proveedores relacionados al espacio público en un mismo lugar, para impulsar la industria de los parques urbanos y la recreación. Es un espacio de tres días de capacitación, conferencias, talleres y una muestra comercial con proveedores de México y el mundo."
        },
        {
          pregunta: "¿Dónde y cuándo será el evento?",
          respuesta: "El Congreso Parques se llevará a cabo del 13 al 15 de mayo en Tijuana, Baja California, México."
        },
        {
          pregunta: "¿Por qué debo asistir?",
          respuesta: [
            "Amplía tu red de contactos.",
            "Aprende como mejorar las condiciones de los parques de tu comunidad.",
            "Capacítate y certifícate como profesional en parques urbanos.",
            "Comparte tus experiencias con profesionales de México y el mundo.",
            "Aprende historias y casos de éxito de México y el mundo.",
            "Se parte de la comunidad técnica y educativa con mayor crecimiento en México."
          ]
        },
        {
          pregunta: "¿Qué actividades sucederán en el congreso?",
          respuesta: [
            "Conferencias Magistrales.",
            "Sesiones Educativas.",
            "Expo Espacio Público.",
            "Talleres Vivenciales y Master Class."
          ]
        },
        {
          pregunta: "¿Cómo se dividen las actividades?",
          respuesta: [
            "Talleres Vivenciales y Master classes: Miércoles 13 de mayo",
            "Conferencias Magistrales: 14 y 15 de mayo",
            "Sesiones Educativas: 14 y 15 de mayo",
            "Expo Parques: 14 y 15 de mayo",
            "Evento social: Del 13 al 15 de mayo"
          ]
        },
        {
          pregunta: "¿Quiénes asistirán?",
          respuesta: "El congreso reunirá a más de 500 líderes entre los que se encuentran: arquitectos, paisajistas, sociólogos, administradores, ingenieros, planeadores urbanos, funcionarios públicos, técnicos, tomadores de decisiones, académicos, estudiantes, sociedad civil y proveedores de equipamiento de México y el mundo."
        },
        {
          pregunta: "¿Quién lo organiza?",
          respuesta: "La Asociación Nacional de Parques y Recreación de México (ANPR)"
        },
        {
          pregunta: "¿Debo de ser un especialista de parques?",
          respuesta: "No tienes por qué ser un especialista de parques, solo debes tener la pasión y motivación de querer aprender y llevar a cabo buenas prácticas en la industria de espacios públicos."
        }
      ]
    },
    {
      titulo: "Preguntas sobre el Programa",
      preguntas: [
        {
          pregunta: "¿Dónde puedo ver el programa?",
          respuesta: "Puedes revisar el programa visitando la sección de 'programa' en el sitio oficial."
        },
        {
          pregunta: "¿Dónde puedo descargar el programa?",
          respuesta: "Pronto podrás descargar el programa en la sección de programa del sitio web oficial."
        },
        {
          pregunta: "¿Cuáles son los ejes temáticos del congreso?",
          respuesta: "El Congreso Parques 2026 es un evento especializado con contenido educativo y experiencial dirigido a un público cuyo trabajo repercute en los parques urbanos y recreación. Este contenido se divide en 6 ejes temáticos que puedes consultar en la página principal."
        },
        {
          pregunta: "¿Qué pasa si pierdo la conferencia?",
          respuesta: "Luego del congreso, podrás ver las grabaciones de todas las conferencias y descargar el material."
        },
        {
          pregunta: "¿Puedo ver alguna sesión a la cual no pude ingresar?",
          respuesta: "Por supuesto, todas las conferencias serán grabadas y podrás disfrutar de ellas al finalizar el evento."
        },
        {
          pregunta: "¿Qué se llevará a cabo cada día?",
          respuesta: [
            "Talleres Vivenciales y Master classes: Miércoles 13 de mayo",
            "Conferencias Magistrales: 14 y 15 de mayo",
            "Sesiones Educativas: 14 y 15 de mayo",
            "Expo Parques: 14 y 15 de mayo",
            "Evento social: Del 13 al 15 de mayo"
          ]
        }
      ]
    },
    {
      titulo: "Preguntas sobre Registro",
      preguntas: [
        {
          pregunta: "¿Es necesario registrarse a los 3 días?",
          respuesta: "Al comprar tu entrada al congreso, las conferencias magistrales, las sesiones educativas, la Expo Espacio Público y las actividades sociales ya están incluidas. Los talleres vivenciales y master classes se llevarán a cabo el día 13 de mayo y se adquieren adicionalmente. No es necesario asistir a los 3 días del Congreso, pero te recomendamos que participes en todas las actividades para maximizar tu experiencia. *Aplican restricciones"
        },
        {
          pregunta: "¿Hay algún precio preferencial si soy miembro de la ANPR México?",
          respuesta: "Si eres miembro de la ANPR México tienes un descuento preferencial, puedes consultarlo en la sección de precios."
        },
        {
          pregunta: "¿Cuáles son los descuentos?",
          respuesta: "Contamos con diferentes descuentos, ayudas y promociones. Puedes solicitar información en info@congresoparques.com"
        },
        {
          pregunta: "¿Dónde me puedo registrar?",
          respuesta: "Puedes registrarte para el congreso desde nuestra página web en la sección de registro."
        },
        {
          pregunta: "¿Puedo registrarme el propio día del evento?",
          respuesta: "Te recomendamos que realices tu inscripción con antelación para asegurar tu participación en el congreso, aprovechar los descuentos por inscripción anticipada y planificar a qué actividades asistir para sacar el máximo partido al evento. No obstante, habrá módulos de inscripción durante los días del congreso. No olvides que el cupo es limitado."
        },
        {
          pregunta: "¿Existen promociones para grupos?",
          respuesta: "Tenemos diferentes descuentos y promociones para grupos como estudiantes, profesionales, etc. Puedes solicitar información en info@congresoparques.com"
        },
        {
          pregunta: "¿Cuándo puedo registrarme?",
          respuesta: "A partir de Diciembre de 2025 podrás inscribirte en el congreso desde nuestro sitio web, simplemente tienes que hacer click en el botón 'Participar' y seguir las instrucciones."
        },
        {
          pregunta: "¿Qué incluye mi registro?",
          respuesta: [
            "Conferencias magistrales",
            "Sesiones educativas",
            "Expo Espacio Público",
            "Eventos sociales**",
            "**Los actos sociales de apertura y clausura no están incluidos en la entrada de la categoría de estudiantes."
          ]
        },
        {
          pregunta: "¿Están incluidos la comida, el transporte y el alojamiento?",
          respuesta: "El transporte desde su ciudad a Tijuana, los traslados internos dentro de la ciudad y el alojamiento NO ESTÁN INCLUIDOS en el costo del congreso. Esto significa que esos gastos deberán ser contabilizados en tu presupuesto de viaje. Cada participante es responsable de los gastos de alimentación y hospedaje."
        },
        {
          pregunta: "¿Puedo solicitar una carta de invitación?",
          respuesta: "Si tu trabajo o tu organización requiere una carta de invitación, puedes solicitarla enviando un correo electrónico a asistente@congresoparques.com o contenido@congresoparques.com"
        },
        {
          pregunta: "¿Hay reembolsos?",
          respuesta: "Si necesita alguna aclaración, puede escribir a info@congresoparques.com para solicitar más información."
        },
        {
          pregunta: "¿Cuál es el proceso de registro?",
          respuesta: "Podrás registrarte desde la sección de boletaje y seguir los pasos que se muestran ahí."
        },
        {
          pregunta: "¿Puedo compartir mi gafete?",
          respuesta: "No, compartir gafetes con otros participantes no está permitido."
        }
      ]
    },
    {
      titulo: "Preguntas sobre Talleres",
      preguntas: [
        {
          pregunta: "¿Qué es un taller vivencial y master class?",
          respuesta: "Talleres Vivenciales: Son experiencias prácticas hands-on para aplicar conocimientos en tiempo real, impartidas por expertos. Master Classes: Son sesiones intensivas de capacitación impartidas por maestros reconocidos internacionalmente."
        },
        {
          pregunta: "¿Dónde son los talleres?",
          respuesta: "Los talleres vivenciales tomarán lugar en diferentes parques y espacios públicos de la ciudad donde se llevará a cabo el congreso. Las master classes se llevarán a cabo dentro de un salón."
        },
        {
          pregunta: "¿Cuándo son los talleres vivenciales y master class?",
          respuesta: "Talleres Vivenciales y Master classes se llevarán a cabo el día Miércoles 13 de mayo."
        },
        {
          pregunta: "¿Recibiré un diploma del taller?",
          respuesta: "Así es, al finalizar los talleres vivenciales y las master classes se enviará a tu correo electrónico un certificado de participación con valor curricular."
        },
        {
          pregunta: "¿Qué incluyen los talleres vivenciales y master classes?",
          respuesta: "Los talleres vivenciales y master classes incluyen transporte, refrigerio y materiales."
        }
      ]
    },
    {
      titulo: "Preguntas sobre Pagos",
      preguntas: [
        {
          pregunta: "¿De cuánto es el precio de mi entrada para el congreso?",
          respuesta: "Existen diferentes modalidades y perfiles de admisión al congreso, puedes revisarlos todos entrando en la sección de participación."
        },
        {
          pregunta: "¿Qué métodos de pago existen?",
          respuesta: "El pago para el registro del congreso puede realizarse por medio de tarjeta de crédito, débito y PayPal. También contamos con otras opciones de pago que se muestran en la forma de registro."
        },
        {
          pregunta: "¿En qué tipo de moneda puedo pagar?",
          respuesta: "El Congreso Parques se muestra en pesos mexicanos. Si requieres otra moneda, podrás pagar con tarjeta."
        },
        {
          pregunta: "¿Puedo facturar?",
          respuesta: "Por supuesto, para solicitar tu factura puedes escribir al correo: info@congresoparques.com"
        },
        {
          pregunta: "¿A quién puedo contactar para verificar mi pago?",
          respuesta: "Automáticamente recibirás un correo de confirmación, pero también puedes contactarnos enviándonos un correo a info@congresoparques.com"
        }
      ]
    },
    {
      titulo: "Preguntas sobre Diploma",
      preguntas: [
        {
          pregunta: "¿Recibiré un diploma al finalizar el congreso?",
          respuesta: "Sí, cuando finalice el congreso, recibirás un certificado de participación por correo dentro de los próximos 15 días posteriores al evento."
        },
        {
          pregunta: "¿Recibiré un diploma por el taller que tome al finalizar el congreso?",
          respuesta: "Sí, al finalizar el taller vivencial y master class recibirás un certificado de participación con valor curricular vía correo electrónico."
        },
        {
          pregunta: "¿Qué avala mi diploma?",
          respuesta: "Los diplomas están avalados por la Asociación Nacional de Parques y Recreación de México."
        },
        {
          pregunta: "¿Cuándo y cómo recibiré mi diploma?",
          respuesta: "Recibirás tu diploma en las dos semanas siguientes a la finalización del Congreso Parques. Este diploma te llegará al correo electrónico que proporciones al hacer la inscripción."
        },
        {
          pregunta: "¿De cuánto tiempo dispongo para solicitar mi diploma?",
          respuesta: "Dispondrás de dos meses desde que termine el congreso para descargar tu diploma, después de la fecha prevista, ya no estarán disponibles para su descarga o entrega."
        }
      ]
    },
    {
      titulo: "Preguntas sobre Lugar",
      preguntas: [
        {
          pregunta: "¿Dónde es el evento?",
          respuesta: "El Congreso Parques se llevará a cabo del 13 al 15 de mayo de 2026 en Tijuana, Baja California, México. Te estaremos esperando en el Centro de Convenciones de Tijuana."
        },
        {
          pregunta: "¿Cómo llegar a la ciudad anfitrión?",
          respuesta: "Podrás encontrar información de cómo llegar dentro de la sección de conectividad en nuestra página web."
        },
        {
          pregunta: "¿Cómo llegar al lugar donde será el congreso?",
          respuesta: "El Baja California Center (BCC), sede del Congreso Parques 2026, está ubicado en Tijuana. Puedes consultar la ubicación exacta en Google Maps."
        }
      ]
    },
    {
      titulo: "Preguntas sobre Alojamiento y Alimentación",
      preguntas: [
        {
          pregunta: "¿Está la alimentación, el transporte y el hospedaje incluidos?",
          respuesta: "El transporte desde su ciudad a Tijuana, los traslados internos dentro de la ciudad y el alojamiento NO ESTÁN INCLUIDOS en el costo del congreso. Esto significa que esos gastos deberán ser contabilizados en tu presupuesto de viaje. Cada participante es responsable de los gastos de alimentación y hospedaje."
        },
        {
          pregunta: "¿Dónde puedo quedarme?",
          respuesta: "Hay varios hoteles que tienen precios preferentes y descuentos para los participantes del congreso, te recomendamos que consultes la sección de alojamiento para ver cada uno de ellos."
        },
        {
          pregunta: "¿Hay lugares cerca donde ir a comer?",
          respuesta: "Sí, dentro del centro de convenciones hay diversos establecimientos de comida y bebidas."
        }
      ]
    },
    {
      titulo: "Preguntas sobre Convocatoria de Propuestas",
      preguntas: [
        {
          pregunta: "¿Cómo puedo ser un ponente?",
          respuesta: "Si tú eres líder de algún grupo, parque o espacio público y estás interesado en ser ponente, puedes contactarnos al siguiente correo: asistente@congresoparques.com o contenido@congresoparques.com"
        },
        {
          pregunta: "¿Cómo puedo participar en un taller?",
          respuesta: "Si tú eres líder de algún grupo, parque o espacio público y estás interesado en participar, puedes contactarnos al siguiente correo: asistente@congresoparques.com o contenido@congresoparques.com"
        },
        {
          pregunta: "¿Cómo puedo ser voluntario?",
          respuesta: [
            "El periodo de registro para ser voluntario estará habilitado a partir de enero 2026. Esto es lo que necesitas para ser voluntario:",
            "Inscribirte en el programa de voluntariado dentro del plazo establecido.",
            "Completar el formulario de voluntariado.",
            "Estar disponible como voluntario al menos un día del Congreso.",
            "Asistir a la capacitación en línea. (Este paso es esencial)",
            "Cumplir con los horarios y turnos de las actividades del Congreso.",
            "Puedes revisar la información completa en la sección de voluntarios de nuestro sitio web oficial."
          ]
        },
        {
          pregunta: "¿Cómo puedo presentar mi Póster Científico?",
          respuesta: "Podrás registrar tu póster científico tan pronto como se abran las convocatorias en nuestro sitio web, simplemente tienes que hacer click en el botón 'Participar' y seguir las instrucciones."
        },
        {
          pregunta: "¿Dónde puedo conseguir más información sobre las convocatorias?",
          respuesta: "Puedes contactarnos al correo asistente@congresoparques.com o contenido@congresoparques.com"
        },
        {
          pregunta: "¿Cómo puedo ser expositor en Expo Espacio Público?",
          respuesta: "Para más información sobre patrocinios o venta de stands, puedes ponerte en contacto con nosotros de lunes a viernes de 9:00 am a 6:00 pm. Teléfono: 01 999 944 353 0691. Email: vinculacion@anpr.org.mx"
        }
      ]
    },
    {
      titulo: "Preguntas sobre Expo Espacio Público",
      preguntas: [
        {
          pregunta: "¿Dónde y cuándo se celebra Expo Espacio Público?",
          respuesta: "Expo Espacio Público tiene lugar del 14 al 15 de mayo y tendrá lugar en Tijuana, Baja California, México, dentro del Baja California Center (BCC), sede del Congreso Parques 2026."
        },
        {
          pregunta: "¿Puedo asistir únicamente a la Expo Espacio Público?",
          respuesta: "Sí, puedes registrarte directamente en el congreso."
        },
        {
          pregunta: "¿Qué tipo de empresas asistirán?",
          respuesta: [
            "A Expo Espacio Público asisten diversos tipos de expositores, entre ellos:",
            "Equipo de mantenimiento",
            "Sistemas de riego / equipo hidráulicos",
            "Viveros y jardines",
            "Árboles de gran tamaño",
            "Productos recreativos",
            "Juegos para niños",
            "Juegos acuáticos",
            "Equipo deportivo",
            "Mobiliario para parques caninos",
            "Muebles para monopatines y bicicletas",
            "Barras",
            "Superficies",
            "Sombras y velarias",
            "Luminarias"
          ]
        }
      ]
    },
    {
      titulo: "Preguntas sobre Eventos Sociales",
      preguntas: [
        {
          pregunta: "¿Qué eventos sociales habrá?",
          respuesta: [
            "Habrán 3 eventos sociales en el Congreso Parques:",
            "Cena de Consejo el 13 de mayo",
            "Beer & Mix Party el 14 de mayo",
            "Evento de Clausura el 15 de mayo"
          ]
        },
        {
          pregunta: "¿Los eventos sociales están incluidos en mi ticket?",
          respuesta: "El Evento de Clausura está incluido en su entrada al congreso* La Beer & Mix Party está incluida para todos los que asistan al congreso. El Evento de Cena de Consejo es la única que no está incluida en ninguna entrada y tiene un costo adicional. *Excepto al adquirir una entrada de estudiante."
        },
        {
          pregunta: "¿Están incluidos los alimentos y bebidas?",
          respuesta: "En todos los Eventos Sociales están incluidos los alimentos y las bebidas para los que asistan."
        },
        {
          pregunta: "¿Cuál es el código de vestimenta para los Eventos Sociales?",
          respuesta: "La vestimenta para todos los Eventos Sociales es casual, ven cómodo para disfrutar más de la experiencia."
        },
        {
          pregunta: "¿Puedo llevar a un acompañante?",
          respuesta: "Adquiriendo la entrada de acompañante dentro de la sección de 'entradas precios' podrás ir acompañado de otra persona."
        },
        {
          pregunta: "¿Pueden asistir menores de edad a los Eventos Sociales?",
          respuesta: "La entrada a menores de edad no está permitida en los Eventos Sociales."
        }
      ]
    },
    {
      titulo: "Preguntas Generales",
      preguntas: [
        {
          pregunta: "¿Cuál es el código de vestimenta?",
          respuesta: "El código de vestimenta es casual. Algunas experiencias del Congreso Parques tienen lugar en espacios al aire libre, como los talleres vivenciales y master classes, por lo que te recomendamos utilizar ropa cómoda. No obstante, el centro de convenciones dispone de aire acondicionado permanente."
        },
        {
          pregunta: "¿A quién puedo contactar si necesito más información?",
          respuesta: "Puedes escribirnos un correo a asistente@congresoparques.com o contenido@congresoparques.com o contactarnos al teléfono +52 999 944 40 60 o por WhatsApp al +52 1999 353 0691"
        },
        {
          pregunta: "¿Puedo solicitar una carta de invitación?",
          respuesta: "Si tu organización o lugar de trabajo requiere una carta de invitación, puedes solicitarla enviando un correo a asistente@congresoparques.com o contenido@congresoparques.com"
        }
      ]
    }
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
              Preguntas Frecuentes
            </h1>
            <div className="w-32 h-1 bg-[#BCCE16] mx-auto"></div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqSections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-12">
                  <h2 className="text-2xl font-bold text-[#0e0477] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {section.titulo}
                  </h2>
                  <div>
                    {section.preguntas.map((faq, faqIdx) => (
                      <AccordionItem
                        key={faqIdx}
                        pregunta={faq.pregunta}
                        respuesta={faq.respuesta}
                        isOpen={openItems[`${sectionIdx}-${faqIdx}`] || false}
                        onClick={() => toggleItem(`${sectionIdx}-${faqIdx}`)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
