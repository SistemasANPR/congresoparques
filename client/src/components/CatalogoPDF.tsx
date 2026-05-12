import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const PAGE_W = 298;
const PAGE_H = 496;
const PAD = 10;

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
  coverPage: { padding: 0, backgroundColor: '#000' },
  coverImg: { width: PAGE_W, height: PAGE_H },

  contentPage: {
    padding: PAD,
    paddingTop: PAD,
    backgroundColor: '#f1f5f9',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    border: '1pt solid #e2e8f0',
    padding: 9,
    marginBottom: 7,
  },

  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    marginBottom: 7,
  },
  logo: {
    maxHeight: 50,
    maxWidth: 200,
    objectFit: 'contain',
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginBottom: 7,
  },

  nombre: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    color: '#0e0477',
    marginBottom: 4,
  },

  descripcion: {
    fontFamily: 'Helvetica',
    fontSize: 7,
    color: '#4b5563',
    lineHeight: 1.45,
    marginBottom: 5,
  },

  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 3,
  },
  contactText: {
    fontFamily: 'Helvetica',
    fontSize: 6.5,
    color: '#6b7280',
  },

  urlRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 2,
  },
  urlText: {
    fontFamily: 'Helvetica',
    fontSize: 6.5,
    color: '#6847f6',
  },

  adPage: {
    padding: 0,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adImg: {
    width: PAGE_W,
    height: PAGE_H,
    objectFit: 'contain',
  },
});

function ExpositorCard({ exp }: { exp: ExpositorPDF }) {
  const web = normalizeUrl(exp.web);
  const hasTel = !!(exp.telefono || exp.celular);
  const uniqueCel = exp.celular && exp.celular !== exp.telefono;

  return (
    <View style={s.card} wrap={false}>
      <View style={s.logoBox}>
        <Image src={exp.logo} style={s.logo} />
      </View>

      <View style={s.divider} />

      <Text style={s.nombre}>{exp.nombre}</Text>

      {exp.descripcion ? (
        <Text style={s.descripcion}>{exp.descripcion}</Text>
      ) : null}

      {hasTel && (
        <View style={s.contactRow}>
          {exp.telefono ? (
            <Text style={s.contactText}>Tel: {exp.telefono}</Text>
          ) : null}
          {uniqueCel ? (
            <Text style={s.contactText}>Cel: {exp.celular}</Text>
          ) : null}
        </View>
      )}

      {web ? (
        <View style={s.urlRow}>
          <Text style={s.urlText}>{web}</Text>
        </View>
      ) : null}
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
  return (
    <Document
      title="Catálogo Expo Espacio Público 2026"
      author="ANPR México"
      subject="Directorio de Expositores · Tijuana, 13–15 de mayo 2026"
    >
      {coverUrls.map((url, i) => (
        <Page key={`cover-${i}`} size={[PAGE_W, PAGE_H]} style={s.coverPage}>
          <Image src={url} style={s.coverImg} />
        </Page>
      ))}

      <Page size={[PAGE_W, PAGE_H]} style={s.contentPage}>
        {expositores.map((exp) => (
          <ExpositorCard key={exp.id} exp={exp} />
        ))}
      </Page>

      {publicidadUrls.map((url, i) => (
        <Page key={`pub-${i}`} size={[PAGE_W, PAGE_H]} style={s.adPage}>
          <Image src={url} style={s.adImg} />
        </Page>
      ))}

      <Page size={[PAGE_W, PAGE_H]} style={s.adPage}>
        <Image src={cdtAdUrl} style={s.adImg} />
      </Page>

      {bioverdeUrls.map((url, i) => (
        <Page key={`bioverde-${i}`} size={[PAGE_W, PAGE_H]} style={s.adPage}>
          <Image src={url} style={s.adImg} />
        </Page>
      ))}
    </Document>
  );
}
