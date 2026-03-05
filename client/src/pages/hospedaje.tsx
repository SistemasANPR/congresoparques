import { Hotel, Mail, Bed, Phone, MapPin, Tag, Info, Globe, CreditCard, CalendarDays, ExternalLink } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ruladLogoUrl from "@assets/Rulad_1770419617112.png";
import realInnLogoUrl from "@assets/Real_Inn_1770394433300.png";
import grandHotelLogoUrl from "@assets/Grand_Hotel_1770394433295.webp";
import lucernaLogoUrl from "@assets/logoLucerna_1770394433297.png";
import kTowerLogoUrl from "@assets/1631370969955_1770419614682.jpg";

interface Tarifa {
  tipo: string;
  precio: string;
  desayuno?: string;
}

interface TarifaDual {
  tipo: string;
  precioSencilla: string;
  precioDoble: string;
}

interface HotelData {
  nombre: string;
  logo?: string;
  logoBg: string;
  codigo: string;
  codigoNombre?: string;
  evento?: string;
  fechasHospedaje?: string;
  fechasEvento?: string;
  codigoNota?: string;
  propiedadCompartida?: string;
  tarifas: Tarifa[];
  tarifasDual?: TarifaDual[];
  tarifasDualHeaders?: { col1: string; col2: string; col3: string };
  showDesayunoColumn?: boolean;
  notasTarifas: string[];
  infoAdicional: string[];
  reservaUrl?: string;
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
    fechasHospedaje: "10 al 17 de mayo de 2026",
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
      "Tarifa cotizada en Moneda Nacional (no incluye impuestos)",
      "Tarifa cotizada única y exclusivamente para las fechas indicadas y de acuerdo al número de habitaciones solicitadas",
      "Tarifa aplica con un mínimo de 10 habitaciones",
      "1 habitación por una noche en cortesía después de 30 habitaciones reservadas",
    ],
    infoAdicional: [
      "Fecha límite (CUT OFF) para reservar: 9 de mayo de 2026, sujeto a disponibilidad",
      "El servicio de internet está incluido en todas las áreas del hotel",
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
    codigoNombre: "Código Abierto / Congreso Parques",
    evento: "Congreso Parques",
    fechasHospedaje: "11 al 17 de mayo de 2026",
    fechasEvento: "13 al 15 de mayo de 2026",
    propiedadCompartida: "Hotel Lucerna Tijuana y K Tower Hotel Boutique Tijuana forman parte de la misma propiedad y comparten tarifas y condiciones.",
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
      "Tarifas sujetas a disponibilidad",
      "Se solicita tarjeta de crédito únicamente como garantía de llegada",
    ],
    infoAdicional: [
      "Código abierto válido del 11 al 17 de mayo de 2026",
      "Permite llegar antes o extender estancia después del evento",
      "Fecha límite para reservar (Cut Off): 9 de mayo de 2026",
      "Check-in: 3:00 p.m. · Check-out: 12:00 p.m.",
      "Internet incluido",
      "Habitaciones sujetas a disponibilidad",
    ],
    contacto: {
      telefonos: [
        { label: "Central de reservaciones", numero: "664 900 9049" },
      ],
    },
  },
  {
    nombre: "K Tower Hotel Boutique Tijuana",
    logo: kTowerLogoUrl,
    logoBg: "#1a1a2e",
    codigo: "PARQUE",
    codigoNombre: "Código Abierto / Congreso Parques",
    evento: "Congreso Parques",
    fechasHospedaje: "11 al 17 de mayo de 2026",
    fechasEvento: "13 al 15 de mayo de 2026",
    propiedadCompartida: "K Tower Hotel Boutique Tijuana y Hotel Lucerna Tijuana forman parte de la misma propiedad y comparten tarifas y condiciones.",
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
      "Tarifas sujetas a disponibilidad",
      "Se solicita tarjeta de crédito únicamente como garantía de llegada",
    ],
    infoAdicional: [
      "Código abierto válido del 11 al 17 de mayo de 2026",
      "Permite llegar antes o extender estancia después del evento",
      "Fecha límite para reservar (Cut Off): 9 de mayo de 2026",
      "Check-in: 3:00 p.m. · Check-out: 12:00 p.m.",
      "Internet incluido",
      "Habitaciones sujetas a disponibilidad",
    ],
    contacto: {
      telefonos: [
        { label: "Central de reservaciones", numero: "664 900 9049" },
      ],
    },
  },
  {
    nombre: "RULAD Hotelera",
    logo: ruladLogoUrl,
    logoBg: "#1a2744",
    codigo: "ABIERTO",
    tarifas: [],
    tarifasDual: [
      { tipo: "Sencilla (1 persona)", precioSencilla: "$2,100 MXN", precioDoble: "$2,213 MXN" },
      { tipo: "Doble (2 personas)", precioSencilla: "$2,300 MXN", precioDoble: "$2,411 MXN" },
    ],
    tarifasDualHeaders: { col1: "Tipo de habitación", col2: "Sin desayuno", col3: "Con desayuno" },
    showDesayunoColumn: false,
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
    nombre: "Fairfield by Marriott Inn & Suites Tijuana",
    logo: "/assets/fairfield-marriott-logo.png",
    logoBg: "#2a6496",
    codigo: "CONGRESO PARQUES TIJUANA",
    evento: "Congreso Parques",
    fechasHospedaje: "13 al 15 de mayo de 2026",
    codigoNota: "Fecha límite de reserva: 13 de mayo de 2026.",
    reservaUrl: "https://app.marriott.com/reslink?id=1772644267962&key=GRP&app=resvlink",
    showDesayunoColumn: false,
    tarifas: [
      { tipo: "Room – Sencilla o Doble", precio: "$2,500.00 MXN" },
    ],
    notasTarifas: [
      "Tarifa por habitación por noche, no incluye impuestos estatales ni federales",
      "IVA 8% ($200.00) + ISH 5% ($125.00) = Total con impuestos: $2,825.00 MXN",
      "Tarifa especial no comisionable",
      "1 habitación de cortesía por cada 30 noches reservadas",
    ],
    infoAdicional: [
      "Check-in: 3:00 PM · Check-out: 12:00 PM",
      "Desayuno Buffet tipo americano incluido para 1 o 2 personas",
      "WiFi incluido por habitación",
      "Estacionamiento con costo adicional: $50 MXN por noche",
      "Early Check-in y Late Check-out sujeto a disponibilidad",
      "Servicio de lavandería con costo dentro y fuera del hotel",
      "Acceso a áreas comunes incluido",
    ],
    contacto: {},
  },
  {
    nombre: "Grand Hotel Tijuana",
    logo: grandHotelLogoUrl,
    logoBg: "#1b4d3e",
    codigo: "PARQUES",
    evento: "Congreso Parques",
    fechasHospedaje: "13 al 15 de mayo de 2026",
    codigoNota: "El código se menciona al reservar vía teléfono o correo. Disponible a partir del 30 de enero de 2026.",
    showDesayunoColumn: false,
    tarifas: [],
    tarifasDual: [
      { tipo: "Estándar sin desayuno", precioSencilla: "$2,373.00 MXN", precioDoble: "$2,373.00 MXN" },
      { tipo: "Estándar con desayuno buffet", precioSencilla: "$2,751.00 MXN", precioDoble: "$3,129.00 MXN" },
      { tipo: "Grand Club sin desayuno buffet", precioSencilla: "$3,152.70 MXN", precioDoble: "$3,152.70 MXN" },
      { tipo: "Grand Club con desayuno buffet", precioSencilla: "$3,530.70 MXN", precioDoble: "$3,908.70 MXN" },
    ],
    notasTarifas: [
      "Tarifas por habitación, por noche",
      "Ocupación sencilla (1 persona) o doble (2 personas)",
      "Tarifas expresadas en pesos mexicanos (MXN)",
      "Las tarifas incluyen IVA 8% e ISH 5%",
      "Habitaciones sujetas a disponibilidad",
      "Se solicita tarjeta de crédito únicamente como garantía de llegada",
    ],
    infoAdicional: [
      "Precio por habitación por noche",
      "No incluye propinas de camaristas ni bellboys",
      "Persona extra tiene costo adicional",
      "Check-in: 3:00 PM",
      "Check-out: 12:00 PM",
      "Habitaciones Grand Club incluyen desayuno continental y canapés por la tarde",
    ],
    contacto: {
      telefonos: [
        { label: "Teléfono", numero: "(664) 681 7000 ext. 4184 o 4170" },
        { label: "Lada sin costo México", numero: "800 026 60 07" },
        { label: "Toll free USA", numero: "1 866 472 6385" },
      ],
      emails: ["reservaciones@grandhoteltj.com", "reservaciones1@grandhoteltj.com"],
    },
  },
];

function HotelCard({ hotel }: { hotel: HotelData }) {
  const hasRates = hotel.tarifas.length > 0 || (hotel.tarifasDual && hotel.tarifasDual.length > 0);
  const hasContact = hotel.contacto.emails?.length || hotel.contacto.telefonos?.length || hotel.contacto.direccion;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* ── HEADER: Logo + Name + Código + Evento/Fechas ── */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[200px] lg:w-[240px] flex-shrink-0 flex items-center justify-center p-10 sm:p-8 bg-white border-b sm:border-b-0 sm:border-r border-gray-100">
            {hotel.logo ? (
              <img
                src={hotel.logo}
                alt={`Logo ${hotel.nombre}`}
                className="max-w-[160px] max-h-[90px] w-full h-auto object-contain"
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center">
                <Hotel className="w-12 h-12 text-[#6847f6]" strokeWidth={1.2} />
              </div>
            )}
          </div>

          <div className="flex-1 p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
            <h3
              className="text-2xl md:text-[1.7rem] lg:text-3xl font-black text-[#0e0477] leading-tight tracking-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {hotel.nombre}
            </h3>

            <div className="flex flex-wrap gap-2.5 items-center mt-4">
              <span
                className="inline-flex items-center gap-1.5 bg-[#BCCE16]/90 text-[#0e0477] text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Tag className="w-3 h-3" />
                Código: {hotel.codigo}
              </span>
            </div>

            {hotel.fechasHospedaje && (
              <div className="flex items-center gap-2 mt-3 text-[13px] text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <CalendarDays className="w-4 h-4 text-[#6847f6]/60" />
                <span>Hospedaje: <span className="font-semibold text-gray-600">{hotel.fechasHospedaje}</span></span>
              </div>
            )}
            {hotel.fechasEvento && (
              <div className="flex items-center gap-2 mt-1.5 text-[13px] text-gray-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <CalendarDays className="w-4 h-4 text-[#BCCE16]" />
                <span>Evento: <span className="font-semibold text-gray-600">{hotel.fechasEvento}</span></span>
              </div>
            )}
            {hotel.codigoNota && (
              <p className="mt-2 text-[11px] text-gray-400 italic leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {hotel.codigoNota}
              </p>
            )}
            {hotel.propiedadCompartida && (
              <div className="mt-3 flex items-start gap-2 bg-[#f0eef9] border border-[#ddd6f7] rounded-lg px-3 py-2">
                <Bed className="w-4 h-4 text-[#6847f6] mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-[#35219b] leading-relaxed font-medium" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {hotel.propiedadCompartida}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 sm:px-7 lg:px-8 py-6">

        {/* Información general */}
        {hotel.notasTarifas.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2.5">
              <Info className="w-4 h-4 text-[#6847f6]/70" />
              <h4
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Información general
              </h4>
            </div>
            <ul className="space-y-1 pl-6">
              {hotel.notasTarifas.map((nota, i) => (
                <li
                  key={i}
                  className="text-[13px] text-gray-500 list-disc"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {nota}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasRates && <hr className="border-gray-100 my-5" />}

        {/* Tabla de tarifas estándar */}
        {hotel.tarifas.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-[#6847f6]/70" />
              <h4
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest"
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

        {/* Tabla de tarifas dual (Sencilla / Doble) */}
        {hotel.tarifasDual && hotel.tarifasDual.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard className="w-4 h-4 text-[#6847f6]/70" />
              <h4
                className="text-[11px] font-bold text-gray-400 uppercase tracking-widest"
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
                      {hotel.tarifasDualHeaders?.col1 || "Tipo de habitación"}
                    </th>
                    <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider whitespace-nowrap">
                      {hotel.tarifasDualHeaders?.col2 || "Sencilla (1 persona)"}
                    </th>
                    <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider whitespace-nowrap">
                      {hotel.tarifasDualHeaders?.col3 || "Doble (2 personas)"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hotel.tarifasDual.map((tarifa, i) => (
                    <tr
                      key={i}
                      className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                    >
                      <td className="py-2.5 px-3 text-gray-700 font-medium text-[13px]">
                        {tarifa.tipo}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-[#0e0477] text-[13px] whitespace-nowrap">
                        {tarifa.precioSencilla}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-[#0e0477] text-[13px] whitespace-nowrap">
                        {tarifa.precioDoble}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {hotel.reservaUrl && (
          <div className="mt-4 mb-1">
            <a
              href={hotel.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm uppercase tracking-wide transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: "#35219B", fontFamily: "Montserrat, sans-serif" }}
            >
              <ExternalLink className="w-4 h-4" />
              Reservar ahora
            </a>
          </div>
        )}

        {(hasContact || hotel.infoAdicional.length > 0) && hasRates && (
          <hr className="border-gray-100 my-5" />
        )}

        {/* Info adicional + Contacto en grid */}
        <div className={`grid gap-4 ${hasContact && hotel.infoAdicional.length > 0 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {hotel.infoAdicional.length > 0 && (
            <div className="bg-[#f9f8fd] border border-[#ebe8f5] rounded-xl px-4 py-4">
              <div className="flex items-center gap-2 mb-2.5">
                <Info className="w-3.5 h-3.5 text-[#6847f6]/60" />
                <h4
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Notas
                </h4>
              </div>
              <ul className="space-y-1.5">
                {hotel.infoAdicional.map((nota, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] text-gray-500"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#6847f6]/40 mt-[7px] flex-shrink-0" />
                    {nota}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasContact && (
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4">
              <div className="flex items-center gap-2 mb-2.5">
                <Phone className="w-3.5 h-3.5 text-[#6847f6]/60" />
                <h4
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest"
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
