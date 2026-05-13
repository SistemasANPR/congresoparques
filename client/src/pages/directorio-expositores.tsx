import { useState, useMemo, useEffect } from "react";
import { Search, X, Globe, Facebook, Instagram, Phone, Smartphone, FileText, ExternalLink, Printer, Loader2, ArrowUpDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import SupportSection from "@/components/SupportSection";
import { pdf } from '@react-pdf/renderer';
import { CatalogoPDF } from "@/components/CatalogoPDF";
import expoLogoUrl from "@assets/LOGO EXPO ESPACIO PUBLICO 2026 NEGATIVO_1762801531047.png";
import cdtAdImageUrl from "@assets/WhatsApp_Image_2026-05-08_at_12.31.20_PM_1778548455199.jpeg";

import logoJumbo from "@assets/Productos_Jumbo_1777482668292.png";
import logoBKT from "@assets/BKT_1776810194158.png";
import logoBoden from "@assets/Boden_1777482668293.png";
import logoVermeer from "@assets/Vermeer_1776810194158.png";
import logoDyce from "@assets/dyce_1776810194157.png";
import logoPlayclub from "@assets/Play_Club_1777482668293.png";
import logoHunter from "@assets/Hunter_1776810194157.png";
import logoParquesMx from "@assets/Parques_de_Mexico_1776810194158.png";
import logoBugy from "@assets/Bugy_1776810194159.png";
import logoDeportan from "@assets/Deportan_1776810194159.png";
import logoTourMate from "@assets/Tour_Mate_1776810194157.png";
import logoParkSys from "@assets/ParkSys_1776810194159.png";
import logoJimumex from "@assets/Jimumex_1776810194159.png";
import logoProludic from "@assets/Proludic_1776810194159.png";
import logoGamboa from "@assets/Fundicion_Gamboa_1777482668293.png";
import logoRainBird from "@assets/Rain_Bird_1776810194156.png";
import logoMusco from "@assets/Musco_1776810194159.png";
import logoConVidaParque from "@assets/Con_Vida_tu_Parque_1777481331114.png";
import logoDeacero from "@assets/DEACERO_1777481340896.png";
import logoParquesAlegres from "@assets/Parques_Alegres_1766080172845.png";
import logoCDT from "@assets/logo_nuevo_cdt_1778616098687.png";
import logoCODEEN from "@assets/CODEEN_1778274356981.png";
import logoProyectoFronterizo from "@assets/PROYECTO_FRONTERIZO_1778274356981.png";
import logoBioverde from "@assets/BIOVERDE_1778274356981.png";
import logoCCDER from "@assets/CCDER_1778274356976.png";

interface Expositor {
  id: number;
  nombre: string;
  contacto: string;
  telefono: string;
  celular: string;
  facebook: string;
  instagram: string;
  web: string;
  descripcion: string;
  logo: string;
  pdfId: string;
}

const expositores: Expositor[] = [
  {
    id: 1,
    nombre: "Productos Jumbo",
    contacto: "Gerardo Minchaca",
    telefono: "222 374 1878",
    celular: "554 890 7773",
    facebook: "https://www.facebook.com/productosjumbo",
    instagram: "https://www.instagram.com/productosjumbo",
    web: "https://www.productosjumbo.com",
    descripcion: "En Productos Jumbo nos encargamos a la fabricación e instalación de equipamiento para parques y espacios privados. Dentro de nuestro catálogo contamos con una amplia variedad de juegos infantiles, mobiliario urbano y aparatos de gimnasios destacándonos por ser equipo durable y diseño inclusivo alineados a las normas de seguridad y la certificación ISO 9001:2015.",
    logo: logoJumbo,
    pdfId: "1EHdNUSR-kMCMwQdU9vJbV1fUl-jc3VjY",
  },
  {
    id: 2,
    nombre: "BKT Mobiliario Urbano",
    contacto: "",
    telefono: "331 207 4094",
    celular: "331 207 4094",
    facebook: "https://www.facebook.com/BKTmobiliario",
    instagram: "https://www.instagram.com/bkt_mobiliario.urbano/",
    web: "https://www.bktmobiliario.com/",
    descripcion: "Empresa de mobiliario urbano que ofrece calidad y durabilidad. Hacemos de afuera adentro, con soluciones integrales para el espacio público.",
    logo: logoBKT,
    pdfId: "1LAevBsTGH9R6t3EJcsuR5cJ_fZksJ0og",
  },
  {
    id: 3,
    nombre: "BODEN",
    contacto: "",
    telefono: "477 641 4699",
    celular: "477 641 4699",
    facebook: "https://www.facebook.com/BodenEco/",
    instagram: "https://www.instagram.com/bodeneco/",
    web: "https://www.bodeneco.com/",
    descripcion: "En BODEN transmutamos llantas recicladas en soluciones de caucho de alto desempeño para pisos, muros y superficies de alto impacto. Sostenibilidad aplicada al espacio público.",
    logo: logoBoden,
    pdfId: "1z7Sd7vTpShC_7IhMYHOFu3cnhljtpwBk",
  },
  {
    id: 4,
    nombre: "Vermeer México",
    contacto: "",
    telefono: "333 903 6654",
    celular: "333 903 6654",
    facebook: "https://www.facebook.com/vermeermexico",
    instagram: "https://www.instagram.com/vermeer.mexico/",
    web: "https://www.vermeermexico.com",
    descripcion: "Vermeer México cuenta con servicio de renta y venta de maquinaria nueva y usada, para trabajos de construcción, paisajismo y mantenimiento de espacios públicos y privados.",
    logo: logoVermeer,
    pdfId: "1LNWwR2_wRCXFAkrQ1meTGldA580wOTmk",
  },
  {
    id: 5,
    nombre: "DYCE",
    contacto: "",
    telefono: "818 232 8015",
    celular: "812 657 9737",
    facebook: "https://www.facebook.com/dycemexico",
    instagram: "https://www.instagram.com/dycemexico",
    web: "https://www.dyce.mx",
    descripcion: "DYCE es una empresa mexicana fundada en 2014, con sede en San Pedro Garza García, N.L. Especializada en diseño, fabricación e instalación de juegos infantiles y mobiliario urbano de alta calidad.",
    logo: logoDyce,
    pdfId: "1OquDnbN1r7GTmLWbFlS0C9fFAXIZheok",
  },
  {
    id: 6,
    nombre: "Playclub",
    contacto: "",
    telefono: "800 504 1916",
    celular: "477 252 3321",
    facebook: "https://www.facebook.com/playclubmex",
    instagram: "https://www.instagram.com/playclub_oficial/",
    web: "https://www.playclub.com.mx/",
    descripcion: "Playclub es una empresa especializada en el diseño, fabricación e instalación de juegos infantiles y espacios recreativos. Combinamos creatividad, seguridad y funcionalidad para transformar espacios públicos.",
    logo: logoPlayclub,
    pdfId: "1LTSbfToMzmm4aaOdaSjgYJyk36ZfiVEK",
  },
  {
    id: 7,
    nombre: "Hunter Industries",
    contacto: "",
    telefono: "442 613 8610",
    celular: "442 613 8610",
    facebook: "https://www.facebook.com/HunterIndustriesLA",
    instagram: "https://www.instagram.com/hunterindlatam/",
    web: "https://www.hunterirrigation.com/es",
    descripcion: "Hunter Industries es una empresa global que proporciona soluciones eficaces y duraderas para sistemas de riego. Su tecnología permite optimizar el uso del agua en parques, jardines y espacios públicos.",
    logo: logoHunter,
    pdfId: "1sEiK2_B4steXm94U9keJ0XqxwDWsDYO3",
  },
  {
    id: 8,
    nombre: "Parques de México",
    contacto: "",
    telefono: "999 757 0503",
    celular: "999 133 4813",
    facebook: "https://www.facebook.com/Parquesdemexico",
    instagram: "https://www.instagram.com/parquesdemexico/",
    web: "https://parquesdemexico.org/",
    descripcion: "Parques de México es una consultora especializada en el proceso de planear, diseñar, gestionar y evaluar parques urbanos y espacios públicos con visión integral y sostenible.",
    logo: logoParquesMx,
    pdfId: "12apc-LbH8l1zc0aA08DFsaaGjPF0TyV_",
  },
  {
    id: 9,
    nombre: "Grupo Bugy",
    contacto: "",
    telefono: "331 264 6254",
    celular: "331 803 8313",
    facebook: "https://www.facebook.com/bugy.mx",
    instagram: "https://www.instagram.com/grupobugy/",
    web: "https://www.bugy.mx",
    descripcion: "Somos una empresa con más de 18 años de experiencia en el mercado de juegos infantiles y mobiliario urbano. Ofrecemos soluciones innovadoras, seguras y de alta calidad para parques y espacios recreativos.",
    logo: logoBugy,
    pdfId: "1bxnzpiUMdWp-oF_PvxUNjTNt1KKA3p4_",
  },
  {
    id: 10,
    nombre: "DEPORTAN Soluciones Deportivas",
    contacto: "",
    telefono: "(52) 55 5587 9108",
    celular: "52 (55) 3026 5847",
    facebook: "https://www.facebook.com/deportanmexico",
    instagram: "https://www.instagram.com/deportanpetra/",
    web: "https://deportan.com.mx/",
    descripcion: "En DEPORTAN somos una empresa mexicana con más de 30 años de experiencia, pioneros en ofrecer soluciones integrales para el deporte, la recreación y el espacio público, con equipamiento deportivo de alta calidad.",
    logo: logoDeportan,
    pdfId: "1QRuYuuwdKehji764FqZWtX0SSWsC7PXM",
  },
  {
    id: 11,
    nombre: "TourMate Latinoamérica",
    contacto: "",
    telefono: "998 213 4110",
    celular: "998 213 4110",
    facebook: "https://www.facebook.com/tourmatesystems/",
    instagram: "https://www.instagram.com/tourmatesystems/",
    web: "https://tourmate.com/",
    descripcion: "Desde 1988, Tour-Mate Systems ofrece experiencias interpretativas atractivas, enriquecedoras y accesibles para visitantes de parques, museos, zoológicos, sitios históricos y atracciones de turismo cultural.",
    logo: logoTourMate,
    pdfId: "1FrKSA1UCoXisyFsogg_rni7xn5yk5ViT",
  },
  {
    id: 12,
    nombre: "ParkSys",
    contacto: "",
    telefono: "999 757 0503",
    celular: "999 453 3347",
    facebook: "https://www.facebook.com/parksyslatam/",
    instagram: "https://www.instagram.com/park_sys/",
    web: "https://park-sys.com/",
    descripcion: "ParkSys es una plataforma de gestión integral para parques urbanos. Integra en una sola solución la administración de usuarios, eventos, mantenimiento e indicadores de desempeño.",
    logo: logoParkSys,
    pdfId: "",
  },
  {
    id: 13,
    nombre: "JIMUMEX",
    contacto: "",
    telefono: "223 102 0659",
    celular: "223 103 6953",
    facebook: "https://www.facebook.com/Jimumex/",
    instagram: "https://www.instagram.com/jimumex_oficial/",
    web: "https://jimumex.com.mx/",
    descripcion: "Con más de tres décadas de trayectoria, en Jimumex nos hemos consolidado como líderes en la fabricación, suministro e instalación de equipos y juegos para parques infantiles, con presencia en todo México.",
    logo: logoJimumex,
    pdfId: "1E0nUQ5xBTR9kKhJ4gH3F8h1ehsWuU8Mw",
  },
  {
    id: 14,
    nombre: "Proludic",
    contacto: "",
    telefono: "331 264 6254",
    celular: "331 803 8313",
    facebook: "https://www.facebook.com/proludic.argentina",
    instagram: "https://www.instagram.com/proludic.argentina",
    web: "https://www.proludic.es",
    descripcion: "Proludic diseña y crea, desde hace más de 35 años, áreas de juegos y de deporte para todos. Sus instalaciones innovadoras y de calidad equipan espacios públicos en todo el mundo.",
    logo: logoProludic,
    pdfId: "",
  },
  {
    id: 15,
    nombre: "Fundición Gamboa",
    contacto: "",
    telefono: "664 689 1235",
    celular: "664 178 7269",
    facebook: "https://www.facebook.com/FundicionGamboa",
    instagram: "https://www.instagram.com/fundiciongamboa",
    web: "https://www.fundiciongamboa.com",
    descripcion: "Fundición de metales: fierro, aluminio, hierro dúctil. Manufactura de productos para parques públicos, mobiliario urbano y equipamiento metálico de alta durabilidad.",
    logo: logoGamboa,
    pdfId: "1PpSU1iiuz1Ey0FKXQ46UGvcjUojjyPip",
  },
  {
    id: 16,
    nombre: "RAIN BIRD",
    contacto: "",
    telefono: "331 367 4978",
    celular: "331 367 4978",
    facebook: "https://www.facebook.com/RainBirdLatam",
    instagram: "https://www.instagram.com/rainbirdlatam",
    web: "https://www.rainbird.com/",
    descripcion: "Rain Bird es una empresa global líder en soluciones de riego fundada en 1933 y cuenta con una amplia cartera de productos y servicios para el sector residencial, comercial, agrícola y de campos deportivos.",
    logo: logoRainBird,
    pdfId: "1FtDeID4Dsz2Y-SYKRRDjXAc2HY2WV4Fg",
  },
  {
    id: 17,
    nombre: "MUSCO Lighting",
    contacto: "",
    telefono: "812 620 4935",
    celular: "812 620 4935",
    facebook: "https://www.facebook.com/muscolighting",
    instagram: "https://www.instagram.com/muscosportslighting",
    web: "https://www.musco.com",
    descripcion: "Fabricantes y expertos en proyectos de iluminación deportiva para todos los niveles y tipos de instalaciones. MUSCO ofrece sistemas de iluminación de alto rendimiento con tecnología LED para parques y canchas.",
    logo: logoMusco,
    pdfId: "16LKeH86jtokcE8i1Ycr8m4E7JIjtreAd",
  },
  {
    id: 19,
    nombre: "Consejo de Desarrollo Económico de Tecate",
    contacto: "German Ramirez Sanchez",
    telefono: "6656545910",
    celular: "6651192945",
    facebook: "https://www.facebook.com/profile.php?id=61565271878965",
    instagram: "",
    web: "",
    descripcion: "Promover una cultura del disfrute, buen uso y cuidado de los espacios públicos, mediante la participación activa de todos los sectores de la comunidad.",
    logo: logoConVidaParque,
    pdfId: "1dLZs9zeAEm3YXNDPwI_I-1KlzztT_UCk",
  },
  {
    id: 20,
    nombre: "DEACERO",
    contacto: "Benito Martinez",
    telefono: "8110508778",
    celular: "",
    facebook: "https://www.facebook.com/grupodeacero/",
    instagram: "https://www.instagram.com/grupodeacero/?hl=es-la",
    web: "https://www.deacero.com/",
    descripcion: "Líder mundial en producción de alambres. Líder en México en producción de aceros largos y aceros de refuerzo. Mayor reciclador de México.",
    logo: logoDeacero,
    pdfId: "1BwsABC-H6a8TcRftIqnXxqaqGPW2SN_W",
  },
  {
    id: 21,
    nombre: "CODEEN",
    contacto: "Alejandro Flores",
    telefono: "6461417479",
    celular: "6461417479",
    facebook: "https://www.facebook.com/CodeenMx",
    instagram: "https://www.instagram.com/codeen_mx/",
    web: "https://www.codeen.com.mx/",
    descripcion: "El Consejo de Desarrollo Económico de Ensenada (CODEEN) es un organismo empresarial con 28 años de experiencia que tiene como propósito impulsar acciones que fortalezcan el desarrollo económico de forma integral, estratégica, sustentable y sostenible de los Municipios de Ensenada y San Quintín.",
    logo: logoCODEEN,
    pdfId: "",
  },
  {
    id: 22,
    nombre: "Proyecto Fronterizo de Educación Ambiental, A.C.",
    contacto: "Frank Adrián Sauz Barragán",
    telefono: "6646300590",
    celular: "6643570363",
    facebook: "https://www.facebook.com/pfea.org/?locale=es_LA",
    instagram: "https://www.instagram.com/proyectofronterizo/?hl=es",
    web: "https://pfea.org/",
    descripcion: "Organización Civil Ambiental Tijuanense que durante más de 30 años ha promovido y protegido el entorno de la región fronteriza a través de la ciencia y la participación ciudadana; así como el manejo y conservación del Parque de Conservación Los Sauces, espacio vital para la biodiversidad de la región.",
    logo: logoProyectoFronterizo,
    pdfId: "",
  },
  {
    id: 23,
    nombre: "BIOVERDE",
    contacto: "JESUS PELAYO",
    telefono: "6642241071",
    celular: "6643570363",
    facebook: "",
    instagram: "",
    web: "https://www.bioverde.com.mx/",
    descripcion: "Servicios integrales en áreas verdes y jardines.",
    logo: logoBioverde,
    pdfId: "1bKJLYeAm7rI_3_F45tEeWU2Xq5lmCypJ",
  },
  {
    id: 24,
    nombre: "Consejo de Desarrollo Económico de Tijuana",
    contacto: "Aaron Victorio Escalante",
    telefono: "+52 1 661 110 9785",
    celular: "+52 1 661 110 9785",
    facebook: "https://www.facebook.com/CDTijuana?locale=es_LA",
    instagram: "",
    web: "https://cdt.org.mx/",
    descripcion: "CDT es una institución privada sin fines de lucro en la que se conjugan las voluntades del Gobierno del Estado, Municipio de Tijuana y la Iniciativa Privada, en un esfuerzo de planeación y ejecución de proyectos de largo plazo para elevar el desarrollo económico y social de Tijuana.",
    logo: logoCDT,
    pdfId: "",
  },
  {
    id: 25,
    nombre: "Consejo Consultivo de Desarrollo Económico de Playas de Rosarito",
    contacto: "Martha Mendoza Montes",
    telefono: "6611127581",
    celular: "6611127581",
    facebook: "https://www.facebook.com/ccderinfo/",
    instagram: "https://www.instagram.com/ccderrosarito/",
    web: "https://online.fliphtml5.com/SeaOfOpportunities/znkx/#p=1",
    descripcion: "El Consejo Consultivo de Desarrollo Económico de Playas de Rosarito (CCDER) es un organismo ciudadano que impulsa el crecimiento económico del municipio mediante la participación de empresarios, académicos y líderes comunitarios. Analiza, evalúa y propone proyectos estratégicos que fortalezcan la competitividad local y mejoren las condiciones para la inversión.",
    logo: logoCCDER,
    pdfId: "",
  },
  {
    id: 26,
    nombre: "Parques Alegres",
    contacto: "Carolina López Cruz",
    telefono: "6674774978",
    celular: "6674774978",
    facebook: "https://www.facebook.com/parquesalegres",
    instagram: "",
    web: "https://parquesalegres.org/",
    descripcion: "Parques Alegres impulsa la creación, mejoramiento y mantenimiento de parques y espacios recreativos comunitarios en México, generando bienestar y transformación social desde el espacio público.",
    logo: logoParquesAlegres,
    pdfId: "1CPnhtm8e_jLIR926tnw0DiEAZlLh25tG",
  },
];

function normalizeUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

function pdfViewUrl(id: string): string {
  return `https://drive.google.com/file/d/${id}/view`;
}

function IconButton({
  href,
  title,
  children,
  color,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-75"
      style={{ backgroundColor: color ?? "#6847f6" }}
    >
      {children}
    </a>
  );
}

function ExpositorCard({ exp }: { exp: Expositor }) {
  const fb = normalizeUrl(exp.facebook);
  const ig = normalizeUrl(exp.instagram);
  const web = normalizeUrl(exp.web);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 h-[390px]">
      {/* Logo */}
      <div className="bg-white border-b border-gray-100 flex items-center justify-center p-5 h-32 shrink-0">
        <img
          src={exp.logo}
          alt={`Logo ${exp.nombre}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 min-h-0">
        <h3
          className="text-sm font-black text-[#0e0477] mb-2 leading-tight shrink-0"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {exp.nombre}
        </h3>

        <p
          className="text-xs text-gray-600 leading-relaxed mb-3 flex-1 overflow-y-auto pr-1"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {exp.descripcion}
        </p>

        {/* Phone / celular — only when data exists */}
        {(exp.telefono || exp.celular) && (
          <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
            {exp.telefono && (
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 shrink-0" />
                {exp.telefono}
              </span>
            )}
            {exp.celular && (
              <span className="flex items-center gap-1">
                <Smartphone className="w-3 h-3 shrink-0" />
                {exp.celular}
              </span>
            )}
          </div>
        )}

        {/* Row: social icons + PDF icon */}
        <div className="flex items-center gap-2 flex-wrap">
          {web && (
            <IconButton href={web} title="Sitio web">
              <Globe className="w-4 h-4" />
            </IconButton>
          )}
          {fb && (
            <IconButton href={fb} title="Facebook" color="#1877f2">
              <Facebook className="w-4 h-4" />
            </IconButton>
          )}
          {ig && (
            <IconButton
              href={ig}
              title="Instagram"
              color="#c13584"
            >
              <Instagram className="w-4 h-4" />
            </IconButton>
          )}

          {/* spacer */}
          {exp.pdfId && <span className="flex-1" />}

          {exp.pdfId && (
            <a
              href={pdfViewUrl(exp.pdfId)}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver material"
              aria-label="Ver material"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#0e0477] border-2 border-[#BCCE16] bg-[#BCCE16] hover:bg-[#d4e620] transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Print catalog (hidden on screen, visible when printing) ─────────── */
function PrintCatalog({ items }: { items: Expositor[] }) {
  return (
    <div id="print-catalog" className="hidden print:block">
      {/* Cover */}
      <div
        className="flex flex-col items-center justify-center min-h-[60mm] mb-8 py-8 rounded-xl"
        style={{
          background: "linear-gradient(135deg,#0e0477,#35219b,#6847f6)",
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        <img src={expoLogoUrl} alt="Expo Espacio Público 2026" className="h-16 object-contain mb-3" />
        <h1
          className="text-white text-2xl font-black uppercase text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Directorio de Expositores
        </h1>
        <p className="text-white/70 text-xs mt-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Tijuana · 13–15 de mayo 2026 · {items.length} expositores
        </p>
      </div>

      {/* Cards */}
      {items.map((exp) => {
        const fb = normalizeUrl(exp.facebook);
        const ig = normalizeUrl(exp.instagram);
        const web = normalizeUrl(exp.web);
        return (
          <div
            key={exp.id}
            className="flex gap-4 border border-gray-200 rounded-xl mb-4 overflow-hidden"
            style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
          >
            {/* Logo col */}
            <div className="w-28 shrink-0 bg-white flex items-center justify-center p-3 border-r border-gray-100">
              <img
                src={exp.logo}
                alt={`Logo ${exp.nombre}`}
                className="max-w-full max-h-20 object-contain"
              />
            </div>
            {/* Content col */}
            <div className="py-3 pr-3 flex flex-col flex-1">
              <h2
                className="text-sm font-black text-[#0e0477] mb-1 leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif", WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
              >
                {exp.nombre}
              </h2>
              <p
                className="text-xs text-gray-600 leading-relaxed mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {exp.descripcion}
              </p>
              <div className="flex items-center flex-wrap gap-2 mt-auto pt-1">
                {web && (
                  <a href={web} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#6847f6", color: "#fff", textDecoration: "none" }}>
                    <Globe style={{ width: 14, height: 14 }} />
                  </a>
                )}
                {fb && (
                  <a href={fb} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#1877f2", color: "#fff", textDecoration: "none" }}>
                    <Facebook style={{ width: 14, height: 14 }} />
                  </a>
                )}
                {ig && (
                  <a href={ig} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#c13584", color: "#fff", textDecoration: "none" }}>
                    <Instagram style={{ width: 14, height: 14 }} />
                  </a>
                )}
                {exp.pdfId && (
                  <a href={pdfViewUrl(exp.pdfId)} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", backgroundColor: "#BCCE16", color: "#0e0477", textDecoration: "none" }}>
                    <FileText style={{ width: 14, height: 14 }} />
                  </a>
                )}
                {(exp.telefono || exp.celular) && (
                  <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginLeft: 4 }}>
                    {exp.telefono && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "#374151", fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                        <Phone style={{ width: 11, height: 11, color: "#6847f6", flexShrink: 0 }} />
                        {exp.telefono}
                      </span>
                    )}
                    {exp.celular && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "#374151", fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
                        <Smartphone style={{ width: 11, height: 11, color: "#BCCE16", flexShrink: 0 }} />
                        {exp.celular}
                      </span>
                    )}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DirectorioExpositores() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const styleId = "hide-newsletter-directorio";
    const style = document.createElement("style");
    style.id = styleId;
    // Hide ActiveCampaign form bar and any fixed-bottom overlay on this page.
    // Using broad selectors to catch dynamically injected elements on iOS Safari.
    style.textContent = `
      ._form_15_, ._form_15_ *,
      [class*="_form_15"],
      [id*="_form_15"],
      ._ac_newsletter_,
      [class*="fixed"][class*="bottom-0"] { display: none !important; visibility: hidden !important; }
    `;
    document.head.appendChild(style);

    // MutationObserver fallback for iOS Safari where the script may inject after React mounts
    const observer = new MutationObserver(() => {
      const el = document.querySelector('._form_15_') as HTMLElement | null;
      if (el) el.style.setProperty('display', 'none', 'important');
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.getElementById(styleId)?.remove();
      observer.disconnect();
    };
  }, []);

  const [sortOrder, setSortOrder] = useState<'none' | 'az' | 'za'>('none');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? expositores.filter(
          (e) =>
            e.nombre.toLowerCase().includes(q) ||
            e.descripcion.toLowerCase().includes(q),
        )
      : expositores;

    if (sortOrder === 'az') {
      return [...base].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    }
    if (sortOrder === 'za') {
      return [...base].sort((a, b) => b.nombre.localeCompare(a.nombre, 'es'));
    }
    return base;
  }, [query, sortOrder]);

  const [isGenerating, setIsGenerating] = useState(false);

  // Render all pages of a PDF file to PNG data URLs via PDF.js
  const renderPdfToPng = async (
    pdfjsLib: any,
    url: string,
    scale = 2,
  ): Promise<string[]> => {
    const doc = await pdfjsLib.getDocument(url).promise;
    const pages = await Promise.all(
      Array.from({ length: doc.numPages }, (_, i) =>
        doc.getPage(i + 1).then(async (page: any) => {
          const vp = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = vp.width;
          canvas.height = vp.height;
          await page.render({ canvasContext: canvas.getContext('2d')!, viewport: vp }).promise;
          return { index: i, dataUrl: canvas.toDataURL('image/jpeg', 0.82) };
        }),
      ),
    );
    return pages.sort((a, b) => a.index - b.index).map(r => r.dataUrl);
  };

  const handleDownloadPDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      // 1. Load PDF.js once (cached on window after first use)
      if (!(window as any).pdfjsLib) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('PDF.js load failed'));
          document.head.appendChild(script);
        });
        (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
      }
      const pdfjsLib = (window as any).pdfjsLib;

      // 2. Render all PDF assets in parallel (scale 2 — sharp yet fast)
      const [coverUrls, publicidadUrls, bioverdeUrls, parquesAlegresUrls] = await Promise.all([
        renderPdfToPng(pdfjsLib, '/portada-catalogo-expo.pdf', 2),
        renderPdfToPng(pdfjsLib, '/publicidades-expo.pdf', 1.5),
        renderPdfToPng(pdfjsLib, '/bioverde-flyer.pdf', 1.5),
        renderPdfToPng(pdfjsLib, '/parques-alegres-flyer.pdf', 1.5),
      ]);

      // 3. Build the @react-pdf Document and generate blob
      //    PDF always uses alphabetical order, regardless of web sort selection
      const pdfExpositores = [...expositores].sort((a, b) =>
        a.nombre.localeCompare(b.nombre, 'es'),
      );
      const blob = await pdf(
        <CatalogoPDF
          expositores={pdfExpositores}
          coverUrls={coverUrls}
          publicidadUrls={publicidadUrls}
          cdtAdUrl={cdtAdImageUrl}
          bioverdeUrls={bioverdeUrls}
          parquesAlegresUrls={parquesAlegresUrls}
        />
      ).toBlob();

      // 4. Trigger download
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = 'Catalogo-Expo-Espacio-Publico-2026.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @media print {
          /* Ocultar todos los elementos no destinados al PDF */
          .no-print { display: none !important; }

          /* Preservar colores exactos */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

          /* Eliminar padding/margin residual del contenedor principal */
          main { padding: 0 !important; margin: 0 !important; }
          .min-h-screen { min-height: 0 !important; }
          body { margin: 0 !important; padding: 0 !important; }

          /* Ocultar newsletter de ActiveCampaign y cualquier modal/elemento fijo inyectado */
          ._form_15_, [class*="_form_"], ._modal_, [class*="_modal_"],
          [id*="newsletter"], [class*="newsletter"],
          [id*="NewsletterBar"], [class*="NewsletterBar"],
          .fixed, [style*="position: fixed"], [style*="position:fixed"] {
            display: none !important;
            height: 0 !important;
            overflow: hidden !important;
          }
        }

        /* Configuración de página */
        @page {
          size: A4;
          margin: 14mm 10mm 14mm 10mm;
        }
        /* Sin márgenes en la primera página (portada) */
        @page :first {
          margin: 0;
        }

        /* Ocultar fecha/hora (top-left) y URL (bottom-left), conservar número de página */
        @page { @top-left { content: ""; } }
        @page { @top-center { content: ""; } }
        @page { @bottom-left { content: ""; } }

        /* iOS Safari: -webkit-sticky fallback for sticky search bar */
        .search-controls-bar {
          position: -webkit-sticky;
          position: sticky;
        }

        /* iOS Safari: prevent rubber-band scroll glitch on card grid */
        .card-grid-scroll {
          -webkit-overflow-scrolling: touch;
        }

        /* iOS Safari: prevent tap highlight on icon buttons */
        a, button {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        /* Cada publicidad ocupa exactamente una página completa */
        @media print {
          .ads-page {
            page-break-before: always !important;
            break-before: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            height: 269mm !important;
            max-height: 269mm !important;
            overflow: hidden !important;
          }
          .ads-page img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            display: block !important;
          }
        }
      `}</style>

      {/* Screen-only UI */}
      <div className="no-print">
        <AnnouncementBanner
          messages={[
            { id: "miembros", text: "20% DE DESCUENTO PARA MIEMBROS ANPR" },
            { id: "estudiantes", text: "PRECIO ESPECIAL PARA ESTUDIANTES" },
          ]}
          speed="normal"
        />
        <Navigation />
      </div>

      <main>
        <div className="no-print pt-[100px] md:pt-[116px] lg:pt-[132px]">
          <SupportSection />
        </div>

        {/* Hero */}
        <div
          className="no-print py-10 md:py-14"
          style={{
            background:
              "linear-gradient(135deg, #0e0477 0%, #35219b 60%, #6847f6 100%)",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <img
              src={expoLogoUrl}
              alt="Expo Espacio Público 2026"
              className="h-16 md:h-20 mx-auto mb-5 object-contain"
            />
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Directorio de Expositores
            </h1>
            <p
              className="text-white/80 text-base md:text-lg max-w-xl mx-auto"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Conoce las marcas, productos y servicios presentes en Expo Espacio
              Público 2026.
            </p>
            <p
              className="text-[#BCCE16] font-bold text-sm mt-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {expositores.length} expositores · Tijuana, 13–15 de mayo 2026
            </p>
          </div>
        </div>

        {/* Sticky controls — top offset matches the fixed header height at each breakpoint */}
        <div className="no-print bg-white border-b border-gray-200 search-controls-bar top-[100px] md:top-[116px] lg:top-[132px] z-40 shadow-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6847f6]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar expositor..."
                className="w-full pl-9 pr-9 py-2.5 rounded-xl border-2 border-[#6847f6]/30 focus:border-[#6847f6] focus:outline-none text-sm"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#0e0477",
                  /* iOS Safari: font-size ≥ 16px prevents auto-zoom on focus */
                  fontSize: '16px',
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-gray-600" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-end">
              <span
                className="text-sm text-gray-400 mr-1 hidden sm:inline"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {filtered.length}{" "}
                {filtered.length === 1 ? "expositor" : "expositores"}
              </span>

              {/* Sort controls */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setSortOrder(sortOrder === 'az' ? 'none' : 'az')}
                  title="Ordenar A → Z"
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 ${
                    sortOrder === 'az'
                      ? 'bg-[#6847f6] text-white shadow-sm'
                      : 'text-gray-500 hover:text-[#6847f6] hover:bg-white'
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <ArrowUpDown className="w-3 h-3" />
                  A–Z
                </button>
                <button
                  onClick={() => setSortOrder(sortOrder === 'za' ? 'none' : 'za')}
                  title="Ordenar Z → A"
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 ${
                    sortOrder === 'za'
                      ? 'bg-[#6847f6] text-white shadow-sm'
                      : 'text-gray-500 hover:text-[#6847f6] hover:bg-white'
                  }`}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <ArrowUpDown className="w-3 h-3 rotate-180" />
                  Z–A
                </button>
              </div>

              <button
                onClick={handleDownloadPDF}
                disabled={isGenerating}
                title={isGenerating ? "Generando PDF…" : "Descargar directorio en PDF"}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-bold transition-colors ${
                  isGenerating
                    ? "bg-[#35219b] cursor-not-allowed opacity-80"
                    : "bg-[#0e0477] hover:bg-[#35219b]"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif", minWidth: "max-content" }}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">Generando PDF…</span>
                    <span className="sm:hidden">…</span>
                  </>
                ) : (
                  <>
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Descargar Directorio PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="no-print py-8 md:py-12">
          <div className="container mx-auto px-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p
                  className="text-gray-500 text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  No se encontraron expositores para{" "}
                  <strong>"{query}"</strong>
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-3 text-[#6847f6] font-semibold text-sm hover:underline"
                >
                  Ver todos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((exp) => (
                  <ExpositorCard key={exp.id} exp={exp} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <div
          className="no-print py-10 text-center"
          style={{ background: "linear-gradient(135deg, #0e0477, #35219b)" }}
        >
          <p
            className="text-white/80 text-sm mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ¿Tu empresa quiere participar como expositora?
          </p>
          <a
            href="mailto:info@anpr.org.mx"
            className="inline-flex items-center gap-2 bg-[#BCCE16] text-[#0e0477] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#d4e620] transition-colors"
            style={{ fontFamily: "Antonio, sans-serif" }}
          >
            <ExternalLink className="w-4 h-4" /> info@anpr.org.mx
          </a>
        </div>
      </main>

      <div className="no-print">
        <Footer />
      </div>

      {/* Print-only catalog — rendered for ALL expositores regardless of search filter */}
      <PrintCatalog items={expositores} />
    </div>
  );
}
