import { Hotel, Mail, Bed, Phone, MapPin, Tag, Info } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

interface Tarifa {
  tipo: string;
  precio: string;
  desayuno: boolean;
}

interface HotelData {
  nombre: string;
  logo?: string;
  codigo: string;
  tarifas: Tarifa[];
  notasTarifas?: string;
  infoAdicional: string[];
  contacto: {
    email?: string;
    telefono?: string;
    direccion?: string;
  };
}

const hoteles: HotelData[] = [
  {
    nombre: "RULAD Hotelera",
    codigo: "ABIERTO",
    tarifas: [
      { tipo: "Sencilla (1 persona) — Sin desayuno", precio: "$2,100 MXN", desayuno: false },
      { tipo: "Sencilla (1 persona) — Con desayuno", precio: "$2,213 MXN", desayuno: true },
      { tipo: "Doble (2 personas) — Sin desayuno", precio: "$2,300 MXN", desayuno: false },
      { tipo: "Doble (2 personas) — Con desayuno", precio: "$2,411 MXN", desayuno: true },
    ],
    notasTarifas: "Tarifas en MXN · Impuestos incluidos",
    infoAdicional: [
      "Desayuno tipo americano (chilaquiles, huevo, frijoles y café)",
      "Persona extra: $600 MXN por noche",
      "Reservaciones únicamente a través del área de ventas de RULAD",
    ],
    contacto: {
      email: "ventas@rulad.mx",
      telefono: "+52 663 112 4689",
    },
  },
  {
    nombre: "Real Inn Tijuana",
    codigo: "ABIERTO",
    tarifas: [
      { tipo: "Lujo Sencilla (1 desayuno)", precio: "$2,150 MXN", desayuno: true },
      { tipo: "Lujo Doble (2 desayunos)", precio: "$2,397 MXN", desayuno: true },
      { tipo: "Lujo Superior Sencilla (1 desayuno)", precio: "$2,440 MXN", desayuno: true },
      { tipo: "Lujo Superior Doble (2 desayunos)", precio: "$2,687 MXN", desayuno: true },
      { tipo: "Ejecutiva Sencilla (1 desayuno)", precio: "$3,115 MXN", desayuno: true },
      { tipo: "Ejecutiva Doble (2 desayunos)", precio: "$3,362 MXN", desayuno: true },
    ],
    notasTarifas: "Tarifas en MXN · No incluyen impuestos",
    infoAdicional: [
      "Mínimo 10 habitaciones por reservación",
      "1 habitación gratis por cada 30 habitaciones reservadas",
    ],
    contacto: {
      direccion: "Paseo de los Héroes 9902, Zona Urbana Río, Tijuana",
      telefono: "(664) 630 4000",
    },
  },
];

function HotelCard({ hotel }: { hotel: HotelData }) {
  return (
    <div>
      {/* ════════ FICHA PRINCIPAL ════════ */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row">

          {/* ── COL IZQUIERDA ~40%: Logo grande ── */}
          <div className="md:w-[38%] flex-shrink-0 bg-[#0e0477] flex items-center justify-center p-10 md:p-12 min-h-[220px]">
            {hotel.logo ? (
              <img
                src={hotel.logo}
                alt={`Logo ${hotel.nombre}`}
                className="max-w-[200px] max-h-[200px] w-full h-auto object-contain drop-shadow-lg"
              />
            ) : (
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/[0.07] border-2 border-dashed border-white/25 flex items-center justify-center">
                <Hotel className="w-20 h-20 text-[#BCCE16]" strokeWidth={1.2} />
              </div>
            )}
          </div>

          {/* ── COL DERECHA ~60%: Contenido apilado ── */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* 1) NOMBRE */}
            <div className="px-6 pt-5 pb-3">
              <h3
                className="text-2xl md:text-[1.65rem] lg:text-3xl font-black text-[#0e0477] leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {hotel.nombre}
              </h3>
            </div>

            {/* 2) CONTACTO */}
            <div className="px-6 pb-4 flex flex-col gap-1.5">
              {hotel.contacto.telefono && (
                <a
                  href={`tel:${hotel.contacto.telefono.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#6847f6] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Phone className="w-3.5 h-3.5 text-[#6847f6]" />
                  {hotel.contacto.telefono}
                </a>
              )}
              {hotel.contacto.email && (
                <a
                  href={`mailto:${hotel.contacto.email}`}
                  className="inline-flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#6847f6] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <Mail className="w-3.5 h-3.5 text-[#6847f6]" />
                  {hotel.contacto.email}
                </a>
              )}
              {hotel.contacto.direccion && (
                <span
                  className="inline-flex items-start gap-2 text-[13px] text-gray-600"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#6847f6] mt-0.5 flex-shrink-0" />
                  {hotel.contacto.direccion}
                </span>
              )}
            </div>

            {/* 3) CÓDIGO DE DESCUENTO */}
            <div className="px-6 pb-4">
              <span
                className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] text-sm font-bold px-4 py-1.5 rounded-full"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Tag className="w-4 h-4" />
                Código: {hotel.codigo}
              </span>
            </div>

            {/* 4) TABLA DE TARIFAS */}
            <div className="px-6 pb-5 flex-1">
              {hotel.notasTarifas && (
                <p
                  className="text-[11px] font-semibold text-[#6847f6] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {hotel.notasTarifas}
                </p>
              )}
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden min-w-[400px]"
                  style={{ fontFamily: "Montserrat, sans-serif", borderCollapse: "separate", borderSpacing: 0 }}
                >
                  <thead>
                    <tr className="bg-[#0e0477] text-white">
                      <th className="text-left py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider">
                        Tipo de habitación
                      </th>
                      <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider">
                        Precio / noche
                      </th>
                      <th className="text-center py-2.5 px-3 font-semibold text-[11px] uppercase tracking-wider">
                        Desayuno
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotel.tarifas.map((tarifa, i) => (
                      <tr
                        key={i}
                        className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
                      >
                        <td className="py-2 px-3 text-gray-700 font-medium text-[13px]">
                          {tarifa.tipo}
                        </td>
                        <td className="py-2 px-3 text-center font-bold text-[#0e0477] text-[13px]">
                          {tarifa.precio}
                        </td>
                        <td className="py-2 px-3 text-center">
                          {tarifa.desayuno ? (
                            <span className="text-[12px] font-bold text-[#0e0477]">Sí</span>
                          ) : (
                            <span className="text-[12px] text-gray-400">No</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════ INFORMACIÓN ADICIONAL (debajo de la ficha) ════════ */}
      {hotel.infoAdicional.length > 0 && (
        <div className="mt-3 bg-[#f7f5ff] border border-[#e0daf7] rounded-xl px-6 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-[#6847f6]" />
            <h4
              className="text-[11px] font-bold text-[#0e0477] uppercase tracking-widest"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Información adicional — {hotel.nombre}
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
    </div>
  );
}

export default function Hospedaje() {
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
          title="Alojamiento"
          subtitle="¡Elige tu hospedaje!"
          lucideIcon={Bed}
        />

        {/* Intro */}
        <section className="py-12" style={{ backgroundColor: "#35219B" }}>
          <div className="container mx-auto px-4 text-center">
            <p
              className="text-lg max-w-4xl mx-auto mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, color: "white" }}
            >
              Tijuana ofrece una variada y sólida infraestructura hotelera. En esta sección podrás consultar opciones de alojamiento con tarifas preferenciales para los asistentes del congreso.
            </p>
          </div>
        </section>

        {/* Hotel Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
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
