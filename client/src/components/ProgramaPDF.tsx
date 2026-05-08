import { Document, Page, View, Text, Image, StyleSheet, Font, Svg, Path, Circle, G } from '@react-pdf/renderer';

// Register Antonio Bold for day headers
Font.register({
  family: 'Antonio',
  src: '/fonts/Antonio-Bold.ttf',
  fontWeight: 'bold',
});

interface Ponente {
  id: string;
  nombre: string;
  cargo?: string;
  empresa?: string;
}

interface ContenidoItem {
  id: string;
  titulo: string;
  subtitulo?: string;
  hora_inicio: string;
  hora_fin: string;
  capacidad?: string;
  ubicacion?: string;
  ponentes?: Ponente[];
}

interface ProgramaItem {
  id: string;
  fecha: string;
  inicio: string;
  fin: string;
  titulo: string;
  tipo: string;
  contenido?: ContenidoItem[];
}

interface ProgramaPDFProps {
  portadaDataUrl: string;
  programa: ProgramaItem[];
  fechasDisponibles: string[];
}

const TIPO_COLORS: Record<string, { bg: string; fg: string }> = {
  "Registro":              { bg: "#9ca3af", fg: "#fff" },
  "Talleres":              { bg: "#BCCE16", fg: "#0e0477" },
  "Conferencia Magistral": { bg: "#46ddac", fg: "#0e0477" },
  "Magistral":             { bg: "#46ddac", fg: "#0e0477" },
  "Conferencias":          { bg: "#00deff", fg: "#0e0477" },
  "Sesión Educativa":      { bg: "#00deff", fg: "#0e0477" },
  "Master Class":          { bg: "#35219b", fg: "#fff" },
  "Networking":            { bg: "#14b8a6", fg: "#fff" },
  "Receso":                { bg: "#9ca3af", fg: "#fff" },
  "Expo":                  { bg: "#d0dd15", fg: "#0e0477" },
  "Evento Social":         { bg: "#f71cdd", fg: "#fff" },
  "Transporte":            { bg: "#6847f6", fg: "#fff" },
  "default":               { bg: "#6b7280", fg: "#fff" },
};

function getTipoColor(tipo: string) {
  const t = tipo.trim();
  if (TIPO_COLORS[t]) return TIPO_COLORS[t];
  const key = Object.keys(TIPO_COLORS).find(k => k.toLowerCase() === t.toLowerCase());
  return key ? TIPO_COLORS[key] : TIPO_COLORS["default"];
}

function formatTime(timeStr: string): string {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const h12 = hour % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('es-MX', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}

const TALLERES_FIJO_KEYWORDS = [
  'forraje hidrop',
  'movilidad con perspectiva',
  'operación integral',
  'operacion integral',
  'parque como aula viva',
];

const TALLERES_HORARIOS: Record<string, string> = {
  'parque como aula viva': '8:00 AM – 1:00 PM',
};

const TALLERES_DEFAULT_HORARIO = '9:00 AM – 1:00 PM';

function getTallerHorario(titulo: string): string | null {
  const lower = titulo.toLowerCase();
  const match = Object.keys(TALLERES_HORARIOS).find(k => lower.includes(k));
  if (match) return TALLERES_HORARIOS[match];
  return TALLERES_FIJO_KEYWORDS.some(k => lower.includes(k)) ? TALLERES_DEFAULT_HORARIO : null;
}

// Minimalist person icon (speaker) — 10×10 viewBox
function PersonIcon() {
  return (
    <Svg viewBox="0 0 10 10" style={{ width: 8, height: 8, marginRight: 2, marginTop: 0.5 }}>
      <Circle cx="5" cy="3" r="2" fill="#6847f6" />
      <Path d="M1 9.5 C1 7 2.8 6 5 6 C7.2 6 9 7 9 9.5" fill="#6847f6" />
    </Svg>
  );
}

// Minimalist map-pin icon (location) — 10×12 viewBox
function PinIcon() {
  return (
    <Svg viewBox="0 0 10 13" style={{ width: 7, height: 9, marginRight: 2, marginTop: 0.5 }}>
      <Path
        d="M5 0.5 C2.5 0.5 0.5 2.5 0.5 5 C0.5 8 5 12.5 5 12.5 C5 12.5 9.5 8 9.5 5 C9.5 2.5 7.5 0.5 5 0.5Z"
        fill="#9ca3af"
      />
      <Circle cx="5" cy="5" r="1.8" fill="#ffffff" />
    </Svg>
  );
}

const PAGE_SIZE: [number, number] = [298, 496];

const S = StyleSheet.create({
  coverPage: {
    padding: 0,
    backgroundColor: '#012787',
  },
  coverImage: {
    width: 298,
    height: 496,
  },
  contentPage: {
    paddingTop: 14,
    paddingBottom: 24,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  dayHeader: {
    backgroundColor: '#0e0477',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#BCCE16',
    marginRight: 7,
  },
  dayText: {
    color: '#ffffff',
    fontSize: 11,
    fontFamily: 'Antonio',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  sessionCard: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
    borderLeftWidth: 4,
    borderRadius: 5,
    marginBottom: 4,
    backgroundColor: '#ffffff',
  },
  sessionHeader: {
    paddingTop: 5,
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    flexWrap: 'wrap',
  },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
  },
  sessionTime: {
    color: '#6847f6',
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
  },
  sessionTitle: {
    color: '#0e0477',
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
  },
  subZone: {
    backgroundColor: '#f5f3ff',
    paddingTop: 3,
    paddingHorizontal: 6,
    paddingBottom: 4,
  },
  subCard: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ede9fe',
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginBottom: 3,
  },
  subHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  subTitle: {
    color: '#1e1b4b',
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
    flex: 1,
  },
  subTime: {
    color: '#9ca3af',
    fontSize: 7,
    paddingLeft: 4,
    flexShrink: 0,
  },
  subSubtitle: {
    color: '#6847f6',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    marginTop: 1,
    lineHeight: 1.3,
  },
  speakersRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 2,
  },
  speakersText: {
    color: '#4b5563',
    fontSize: 8,
    lineHeight: 1.4,
    flex: 1,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 1,
  },
  locationText: {
    color: '#9ca3af',
    fontSize: 7,
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#e5e7eb',
    paddingTop: 4,
    marginTop: 5,
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 7,
    textAlign: 'center',
  },
});

function DayContent({ fecha, items }: { fecha: string; items: ProgramaItem[] }) {
  return (
    <>
      <View style={S.dayHeader} wrap={false}>
        <View style={S.dayDot} />
        <Text style={S.dayText}>{formatDate(fecha).toUpperCase()}</Text>
      </View>

      {items.map((item) => {
        const pc = getTipoColor(item.tipo);
        const hasContenido = !!(item.contenido && item.contenido.length > 0);

        return (
          <View key={item.id} style={[S.sessionCard, { borderLeftColor: pc.bg }]} wrap={!hasContenido}>
            <View style={S.sessionHeader}>
              <View style={S.badgeRow}>
                <View style={[S.badge, { backgroundColor: pc.bg }]}>
                  <Text style={[S.badgeText, { color: pc.fg }]}>
                    {item.tipo.toUpperCase()}
                  </Text>
                </View>
                <Text style={S.sessionTime}>
                  {formatTime(item.inicio)} – {formatTime(item.fin)}
                </Text>
              </View>
              <Text style={S.sessionTitle}>
                {item.titulo.replace(/\*$/, '')}
              </Text>
            </View>

            {hasContenido && (
              <View style={S.subZone}>
                {item.contenido!.map((c) => {
                  const isTalleresMat = item.titulo.toLowerCase().includes('talleres matutinos');
                  const horarioFijo = isTalleresMat ? getTallerHorario(c.titulo) : null;
                  const hasPonentes = !!(c.ponentes && c.ponentes.length > 0);

                  const speakerStr = hasPonentes
                    ? c.ponentes!.map((p, i) => {
                        const info = [p.cargo, p.empresa].filter(Boolean).join(', ');
                        return `${i > 0 ? ' · ' : ''}${p.nombre}${info ? ` (${info})` : ''}`;
                      }).join('')
                    : '';

                  const locationStr = [
                    c.ubicacion ? c.ubicacion : null,
                    c.capacidad ? `Cap. ${c.capacidad}` : null,
                  ].filter(Boolean).join(' · ');

                  return (
                    <View key={c.id} style={S.subCard} wrap={false}>
                      <View style={S.subHeaderRow}>
                        <Text style={S.subTitle}>{c.titulo.replace(/\*$/, '')}</Text>
                        {!isTalleresMat && c.hora_inicio ? (
                          <Text style={S.subTime}>
                            {formatTime(c.hora_inicio)}–{formatTime(c.hora_fin)}
                          </Text>
                        ) : horarioFijo ? (
                          <Text style={S.subTime}>{horarioFijo}</Text>
                        ) : null}
                      </View>
                      {c.subtitulo ? (
                        <Text style={S.subSubtitle}>{c.subtitulo}</Text>
                      ) : null}
                      {speakerStr ? (
                        <View style={S.speakersRow}>
                          <PersonIcon />
                          <Text style={S.speakersText}>{speakerStr}</Text>
                        </View>
                      ) : null}
                      {locationStr ? (
                        <View style={S.locationRow}>
                          <PinIcon />
                          <Text style={S.locationText}>{locationStr}</Text>
                        </View>
                      ) : null}
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </>
  );
}

function PageFooter() {
  return (
    <View style={S.footer} fixed>
      <Text
        style={S.footerText}
        render={({ pageNumber, totalPages }) =>
          `congresoparques.com · IX Congreso Internacional · Tijuana 2026  ·  ${pageNumber}/${totalPages}`
        }
      />
    </View>
  );
}

export function ProgramaPDF({ portadaDataUrl, programa, fechasDisponibles }: ProgramaPDFProps) {
  const days = fechasDisponibles
    .map(fecha => ({
      fecha,
      items: programa
        .filter(item => item.fecha === fecha)
        .sort((a, b) => a.inicio.localeCompare(b.inicio)),
    }))
    .filter(d => d.items.length > 0);

  return (
    <Document>
      {/* Portada */}
      <Page size={PAGE_SIZE} style={S.coverPage}>
        <Image src={portadaDataUrl} style={S.coverImage} />
      </Page>

      {/* Día 1 */}
      {days.length > 0 && (
        <Page size={PAGE_SIZE} style={S.contentPage}>
          <DayContent fecha={days[0].fecha} items={days[0].items} />
          <PageFooter />
        </Page>
      )}

      {/* Días 2 y 3: cada uno en su propia página */}
      {days.slice(1).map(({ fecha, items }) => (
        <Page key={fecha} size={PAGE_SIZE} style={S.contentPage}>
          <DayContent fecha={fecha} items={items} />
          <PageFooter />
        </Page>
      ))}
    </Document>
  );
}
