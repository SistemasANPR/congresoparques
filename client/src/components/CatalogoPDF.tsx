import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const PAGE_W = 298;
const PAGE_H = 496;
const PAD = 9;
const COL_GAP = 5;
const COL_W = (PAGE_W - PAD * 2 - COL_GAP) / 2; // ≈ 137.5 pt per column

export interface ExpositorPDF {
  id: number;
  nombre: string;
  telefono: string;
  celular: string;
  facebook: string;
  instagram: string;
  web: string;
  descripcion: string;
  logo: string;
}

interface CatalogoPDFProps {
  expositores: ExpositorPDF[];
  coverUrls: string[];
  publicidadUrls: string[];
  cdtAdUrl: string;
  bioverdeUrls: string[];
}

function normalizeUrl(u: string) {
  if (!u) return '';
  if (u.startsWith('http')) return u;
  return `https://${u}`;
}

const s = StyleSheet.create({
  /* ── Cover / Ads ─────────────────────────────────── */
  coverPage: { padding: 0, backgroundColor: '#000' },
  coverImg: { width: PAGE_W, height: PAGE_H },

  adPage: {
    padding: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adImg: {
    width: PAGE_W,
    height: PAGE_H,
    objectFit: 'contain',
  },

  /* ── Content page ────────────────────────────────── */
  contentPage: {
    padding: PAD,
    backgroundColor: '#eef2f7',
  },

  /* ── Row: two cards side-by-side ─────────────────── */
  row: {
    flexDirection: 'row',
    gap: COL_GAP,
    marginBottom: 5,
  },

  /* ── Card ────────────────────────────────────────── */
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    border: '1pt solid #dde3ef',
    padding: 7,
  },
  cardEmpty: {
    flex: 1,
  },

  /* ── Logo ────────────────────────────────────────── */
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    marginBottom: 5,
  },
  logo: {
    maxHeight: 40,
    maxWidth: COL_W - 14,
    objectFit: 'contain',
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 5,
  },

  /* ── Typography ──────────────────────────────────── */
  nombre: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 7.5,
    color: '#0e0477',
    marginBottom: 3,
  },
  descripcion: {
    fontFamily: 'Helvetica',
    fontSize: 6.5,
    color: '#4b5563',
    lineHeight: 1.4,
    marginBottom: 4,
  },
  contactText: {
    fontFamily: 'Helvetica',
    fontSize: 6,
    color: '#6b7280',
    marginBottom: 1,
  },
  urlText: {
    fontFamily: 'Helvetica',
    fontSize: 6,
    color: '#6847f6',
    marginTop: 2,
  },

  /* ── Page footer ─────────────────────────────────── */
  pageFooter: {
    position: 'absolute',
    bottom: 5,
    left: PAD,
    right: PAD,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Helvetica',
    fontSize: 5.5,
    color: '#9ca3af',
  },
});

function CardCell({ exp }: { exp: ExpositorPDF }) {
  const web = normalizeUrl(exp.web);
  const uniqueCel = exp.celular && exp.celular !== exp.telefono;

  return (
    <View style={s.card}>
      <View style={s.logoBox}>
        <Image src={exp.logo} style={s.logo} />
      </View>

      <View style={s.divider} />

      <Text style={s.nombre}>{exp.nombre}</Text>

      {exp.descripcion ? (
        <Text style={s.descripcion}>{exp.descripcion}</Text>
      ) : null}

      {exp.telefono ? (
        <Text style={s.contactText}>Tel: {exp.telefono}</Text>
      ) : null}
      {uniqueCel ? (
        <Text style={s.contactText}>Cel: {exp.celular}</Text>
      ) : null}

      {web ? <Text style={s.urlText}>{web}</Text> : null}
    </View>
  );
}

export function CatalogoPDF({
  expositores,
  coverUrls,
  publicidadUrls,
  cdtAdUrl,
  bioverdeUrls,
}: CatalogoPDFProps) {
  // Group cards into pairs for the 2-column grid
  const rows: ExpositorPDF[][] = [];
  for (let i = 0; i < expositores.length; i += 2) {
    rows.push(expositores.slice(i, i + 2));
  }

  return (
    <Document
      title="Catálogo Expo Espacio Público 2026"
      author="ANPR México"
      subject="Directorio de Expositores · Tijuana, 13–15 de mayo 2026"
    >
      {/* ── Cover ──────────────────────────────────── */}
      {coverUrls.map((url, i) => (
        <Page key={`cover-${i}`} size={[PAGE_W, PAGE_H]} style={s.coverPage}>
          <Image src={url} style={s.coverImg} />
        </Page>
      ))}

      {/* ── Content: 2-column grid, auto-paginated ── */}
      <Page size={[PAGE_W, PAGE_H]} style={s.contentPage}>
        {rows.map((pair, i) => (
          <View key={i} style={s.row} wrap={false}>
            <CardCell exp={pair[0]} />
            {pair[1] ? <CardCell exp={pair[1]} /> : <View style={s.cardEmpty} />}
          </View>
        ))}
      </Page>

      {/* ── Publicidades ───────────────────────────── */}
      {publicidadUrls.map((url, i) => (
        <Page key={`pub-${i}`} size={[PAGE_W, PAGE_H]} style={s.adPage}>
          <Image src={url} style={s.adImg} />
        </Page>
      ))}

      {/* ── CDT ad ─────────────────────────────────── */}
      <Page size={[PAGE_W, PAGE_H]} style={s.adPage}>
        <Image src={cdtAdUrl} style={s.adImg} />
      </Page>

      {/* ── BIOVERDE flyer ─────────────────────────── */}
      {bioverdeUrls.map((url, i) => (
        <Page key={`bioverde-${i}`} size={[PAGE_W, PAGE_H]} style={s.adPage}>
          <Image src={url} style={s.adImg} />
        </Page>
      ))}
    </Document>
  );
}
