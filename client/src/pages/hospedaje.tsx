import { Hotel, Mail, Bed, Phone, MapPin, Tag, Info, Globe, CreditCard, CalendarDays } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ruladLogoUrl from "@assets/Rulad_1770394433292.png";
import realInnLogoUrl from "@assets/Real_Inn_1770394433300.png";
import grandHotelLogoUrl from "@assets/Grand_Hotel_1770394433295.webp";
import lucernaLogoUrl from "@assets/logoLucerna_1770394433297.png";

interface Tarifa {
  tipo: string;
  precio: string;
  desayuno?: string;
}

interface HotelData {
  nombre: string;
  logo?: string;
  logoBg: string;
  codigo: string;
  evento?: string;
  fechasHospedaje?: string;
  tarifas: Tarifa[];
  showDesayunoColumn?: boolean;
  notasTarifas: string[];
  infoAdicional: string[];
  contacto: {
    emails?: string[];
    telefonos?: { label?: string; numero: string }[];
    direccion?: string;
    web?: string;
  };
}

const hoteles: HotelData[] = [
  {
    nombre: "Hotel Real Inn Tijuana",
    logo: realInnLogoUrl,
    logoBg: "#f97316",
    codigo: "PARQUE",
    evento: "Congreso Parques",
    fechasHospedaje: "13 al 15 de mayo de 2026",
    showDesayunoColumn: true,
    tarifas: [
      { tipo: "Habitación de Lujo Sencilla", precio: "$2,150.00 MXN", desayuno: "1 desayuno buffet" },
      { tipo: "Habitación de Lujo Doble", precio: "$2,397.00 MXN", desayuno: "2 desayunos buffet" },
      { tipo: "Habitación de Lujo Superior Sencilla", precio: "$2,440.00 MXN", desayuno: "1 desayuno buffet" },
      { tipo: "Habitación de Lujo Superior Doble", precio: "$2,687.00 MXN", desayuno: "2 desayunos buffet" },
      { tipo: "Habitación Ejecutiva Sencilla", precio: "$3,115.00 MXN", desayuno: "1 desayuno buffet" },
      { tipo: "Habitación Ejecutiva Doble", precio: "$3,362.00 MXN", desayuno: "2 desayunos buffet" },
    ],
    notasTarifas: [
      "Tarifas por habitación, por noche, en ocupación sencilla o doble",
      "Tarifas cotizadas en pesos mexicanos (MXN)",
      "Precios no incluyen impuestos: IVA 8% e ISH 5%",
      "Se requiere tarjeta únicamente como garantía de llegada",
    ],
    infoAdicional: [
      "Desayuno buffet incluido según tipo de habitación",
    ],
    contacto: {
      telefonos: [
        { label: "Tel", numero: "(664) 633 40 00 ext. 4430" },
        { label: "Lada sin costo", numero: "01 800 732 5466" },
      ],
      emails: ["reservaciones@caminoreal.com", "valmeida@hotelesrealinn.com"],
    },
  },
  {
    nombre: "Hotel Lucerna Tijuana",
    logo: lucernaLogoUrl,
    logoBg: "#0047ab",
    codigo: "PARQUE",
    evento: "Congreso Parques",
    fechasHospedaje: "13 al 15 de mayo de 2026",
    showDesayunoColumn: false,
    tarifas: [
      { tipo: "Habitación Deluxe Sencilla o Doble", precio: "$3,000.00 MXN" },
      { tipo: "Habitación Select Sencilla o Doble", precio: "$4,000.00 MXN" },
      { tipo: "Habitación Premium Sencilla o Doble", precio: "$4,400.00 MXN" },
      { tipo: "Loft", precio: "$8,700.00 MXN" },
    ],
    notasTarifas: [
      "Tarifas por habitación, por noche",
      "Ocupación sencilla o doble",
      "Tarifas cotizadas en pesos mexicanos (MXN)",
      "Tarifas incluyen IVA 8% e ISH 5%",
      "Habitaciones sujetas a disponibilidad",
    ],
    infoAdicional: [
      "Tarifas sujetas a disponibilidad",
      "Tarifas válidas para ocupación mayor al 60%",
      "Precio por habitación por noche",
    ],
    contacto: {
      telefonos: [
        { label: "Central de reservas México", numero: "800 026 63 00" },
        { label: "Central de reservas USA", numero: "800 582 37 62" },
      ],
    },
  },
  {
    nombre: "K Tower Tijuana",
    logoBg: "#1a1a2e",
    codigo: "PARQUE",
    evento: "Congreso Parques",
    fechasHospedaje: "13 al 15 de mayo de 2026",
    showDesayunoColumn: false,
    tarifas: [],
    notasTarifas: [
      "Tarifas por habitación, por noche",
      "Tarifas cotizadas en pesos mexicanos (MXN)",
      "Habitaciones sujetas a disponibilidad",
      "Código válido únicamente vía reservaciones directas",
    ],
    infoAdicional: [
      "Información de tarifas disponible próximamente",
    ],
    contacto: {
      telefonos: [
        { label: "Central de reservas", numero: "664 900 9049" },
      ],
    },
  },
  {
    nombre: "RULAD Hotelera",
    logo: ruladLogoUrl,
    logoBg: "#1a2744",
    codigo: "ABIERTO",
    tarifas: [
      { tipo: "Sencilla (1 persona) — Sin desayuno", precio: "$2,100 MXN", desayuno: "No" },
      { tipo: "Sencilla (1 persona) — Con desayuno", precio: "$2,213 MXN", desayuno: "Americano" },
      { tipo: "Doble (2 personas) — Sin desayuno", precio: "$2,300 MXN", desayuno: "No" },
      { tipo: "Doble (2 personas) — Con desayuno", precio: "$2,411 MXN", desayuno: "Americano" },
    ],
    showDesayunoColumn: true,
    notasTarifas: [
      "Tarifas en MXN · Impuestos incluidos",
    ],
    infoAdicional: [
      "Desayuno tipo americano (chilaquiles, huevo, frijoles y café)",
      "Persona extra: $600 MXN por noche",
      "Reservaciones únicamente a través del área de ventas de RULAD",
    ],
    contacto: {
      emails: ["ventas@rulad.mx"],
      telefonos: [{ numero: "+52 663 112 4689" }],
    },
  },
  {
    nombre: "Grand Hotel Casino + Resort Tijuana",
    logo: grandHotelLogoUrl,
    logoBg: "#1b4d3e",
    codigo: "PRÓXIMAMENTE",
    tarifas: [],
    showDesayunoColumn: false,
    notasTarifas: [],
    infoAdicional: [
      "Información de tarifas y reservaciones disponible próximamente",
    ],
    contacto: {},
  },
];

function HotelCard({ hotel }: { hotel: HotelData }) {
  const hasRates = hotel.tarifas.length > 0;
  const hasContact = hotel.contacto.emails?.length || hotel.contacto.telefonos?.length || hotel.contacto.direccion;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* ── HEADER: Logo + Name + Código + Evento/Fechas ── */}
      <div className="flex flex-col sm:flex-row">
        <div
          className="sm:w-[200px] lg:w-[240px] flex-shrink-0 flex items-center justify-center p-8 sm:p-6"
          style={{ backgroundColor: hotel.logoBg }}
        >
          {hotel.logo ? (
            <img
              src={hotel.logo}
              alt={`Logo ${hotel.nombre}`}
              className="max-w-[160px] max-h-[100px] w-full h-auto object-contain drop-shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 rounded-2xl bg-white/[0.07] border-2 border-dashed border-white/25 flex items-center justify-center">
              <Hotel className="w-14 h-14 text-[#BCCE16]" strokeWidth={1.2} />
            </div>
          )}
        </div>

        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
          <h3
            className="text-xl md:text-2xl font-black text-[#0e0477] leading-tight mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {hotel.nombre}
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            <span
              className="inline-flex items-center gap-1.5 bg-[#BCCE16] text-[#0e0477] text-xs font-bold px-3 py-1.5 rounded-full"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <Tag className="w-3.5 h-3.5" />
              Código: {hotel.codigo}
            </span>
            {hotel.evento && (
              <span
                className="inline-flex items-center gap-1.5 bg-[#0e0477] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {hotel.evento}
              </span>
            )}
          </div>
          {hotel.fechasHospedaje && (
            <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <CalendarDays className="w-3.5 h-3.5 text-[#6847f6]" />
              Hospedaje: {hotel.fechasHospedaje}
            </div>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 sm:px-6 pb-6">

        {/* Información general */}
        {hotel.notasTarifas.length > 0 && (
          <div className="mt-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-[#6847f6]" />
              <h4
                className="text-xs font-bold text-[#0e0477] uppercase tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Información general
              </h4>
            </div>
            <ul className="space-y-1 pl-6">
              {hotel.notasTarifas.map((nota, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-600 list-disc"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {nota}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasRates && <hr className="border-gray-100 my-4" />}

        {/* Tabla de tarifas */}
        {hasRates && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-[#6847f6]" />
              <h4
                className="text-xs font-bold text-[#0e0477] uppercase tracking-wider"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Tarifas
              </h4>
            </div>
            <div className="overflow-x-auto -mx-2 px-2">
              <table
                className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"
                style={{ fontFamily: "Montserrat, sans-serif", borderCollapse: "separate", borderSpacing: 0 }}
              >
                <thead>
                  <tr className="bg-[#0e0477] text-white">
                    <th className="text-left py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider">
                      Tipo de habitación
                    </th>
                    <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider whitespace-nowrap">
                      Precio / noche
                    </th>
                    {hotel.showDesayunoColumn && (
                      <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider">
                        Desayuno
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {hotel.tarifas.map((tarifa, i) => (
                    <tr
                      key={i}
                      className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                    >
                      <td className="py-2.5 px-3 text-gray-700 font-medium text-[13px]">
                        {tarifa.tipo}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-[#0e0477] text-[13px] whitespace-nowrap">
                        {tarifa.precio}
                      </td>
                      {hotel.showDesayunoColumn && (
                        <td className="py-2.5 px-3 text-center text-[12px]">
                          {tarifa.desayuno === "No" ? (
                            <span className="text-gray-400">No</span>
                          ) : (
                            <span className="font-semibold text-[#0e0477]">{tarifa.desayuno}</span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(hasContact || hotel.infoAdicional.length > 0) && hasRates && (
          <hr className="border-gray-100 my-4" />
        )}

        {/* Info adicional + Contacto en grid */}
        <div className={`grid gap-4 ${hasContact && hotel.infoAdicional.length > 0 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {hotel.infoAdicional.length > 0 && (
            <div className="bg-[#f7f5ff] border border-[#e0daf7] rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-3.5 h-3.5 text-[#6847f6]" />
                <h4
                  className="text-[11px] font-bold text-[#0e0477] uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Notas
                </h4>
              </div>
              <ul className="space-y-1">
                {hotel.infoAdicional.map((nota, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6847f6] mt-[7px] flex-shrink-0" />
                    {nota}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContact && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-3.5 h-3.5 text-[#6847f6]" />
                <h4
                  className="text-[11px] font-bold text-[#0e0477] uppercase tracking-wider"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Contacto y Reservas
                </h4>
              </div>
              <div className="space-y-1.5">
                {hotel.contacto.telefonos?.map((tel, i) => (
                  <a
                    key={i}
                    href={`tel:${tel.numero.replace(/[\s()]/g, "")}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6847f6] transition-colors"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#6847f6] flex-shrink-0" />
                    {tel.label ? `${tel.label}: ${tel.numero}` : tel.numero}
                  </a>
                ))}
                {hotel.contacto.emails?.map((email, i) => (
                  <a
                    key={i}
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6847f6] transition-colors break-all"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#6847f6] flex-shrink-0" />
                    {email}
                  </a>
                ))}
                {hotel.contacto.direccion && (
                  <div
                    className="flex items-start gap-2 text-sm text-gray-600"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#6847f6] mt-0.5 flex-shrink-0" />
                    {hotel.contacto.direccion}
                  </div>
                )}
                {hotel.contacto.web && (
                  <a
                    href={hotel.contacto.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#6847f6] transition-colors"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <Globe className="w-3.5 h-3.5 text-[#6847f6] flex-shrink-0" />
                    {hotel.contacto.web}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Hospedaje() {
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
          title="Alojamiento"
          subtitle="¡Elige tu hospedaje!"
          lucideIcon={Bed}
        />

        {/* Intro */}
        <section className="py-12" style={{ backgroundColor: "#35219B" }}>
          <div className="container mx-auto px-4 text-center">
            <p
              className="text-lg max-w-4xl mx-auto mb-4"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, color: "white" }}
            >
              Tijuana ofrece una variada y sólida infraestructura hotelera. En esta sección podrás consultar opciones de alojamiento con tarifas preferenciales para los asistentes del congreso.
            </p>
            <p
              className="text-base max-w-3xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#BCCE16" }}
            >
              Para utilizar tu clave de reservación, comunícate de manera telefónica al hotel seleccionado.
            </p>
          </div>
        </section>

        {/* Hotel Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-10">
              {hoteles.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
              ))}
            </div>

            {/* CTA para hoteles interesados */}
            <div className="max-w-5xl mx-auto mt-16">
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-[#6847f6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hotel className="w-8 h-8 text-[#6847f6]" />
                </div>
                <h3
                  className="text-xl md:text-2xl mb-3 uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, color: "#0e0477" }}
                >
                  ¿Tu hotel desea participar?
                </h3>
                <p
                  className="text-gray-600 mb-6 max-w-xl mx-auto"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
                >
                  Si tu hotel está interesado en integrarse como opción oficial para los participantes, contáctanos:
                </p>
                <a
                  href="mailto:info@congresoparques.com"
                  className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] px-8 py-4 rounded-lg hover:bg-[#d4e620] transition-colors uppercase tracking-wide"
                  style={{ fontFamily: "Antonio, sans-serif", fontWeight: 700 }}
                >
                  <Mail className="w-5 h-5" />
                  info@congresoparques.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
