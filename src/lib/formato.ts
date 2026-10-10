import type { Evento } from '../data/eventos';

const TZ = 'America/Bogota';

export const pesos = (n: number) =>
  '$' + new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(n);

const fmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('es-CO', { timeZone: TZ, ...o });

export const fechaLarga = (iso: string) => fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
export const fechaMedia = (iso: string) => fmt({ weekday: 'long', day: 'numeric', month: 'long' }).format(new Date(iso));
export const diaSemanaCorto = (iso: string) => fmt({ weekday: 'short' }).format(new Date(iso)).replace('.', '');
export const diaNum = (iso: string) => fmt({ day: 'numeric' }).format(new Date(iso));
export const mesCorto = (iso: string) => fmt({ month: 'short' }).format(new Date(iso)).replace('.', '');
export const mesLargo = (iso: string) => fmt({ month: 'long' }).format(new Date(iso));

const MS_HORA = 3_600_000;

/** Momento a partir del cual el evento deja de mostrarse como próximo. */
export const finEfectivo = (e: Evento) => (e.fin ? new Date(e.fin) : new Date(new Date(e.inicio).getTime() + 12 * MS_HORA));

export const esProximo = (e: Evento, ahora = new Date()) => finEfectivo(e) > ahora;

/** Límites de una etapa en milisegundos (días completos en hora de Colombia). */
export const limitesEtapa = (desde: string, hasta: string) => ({
  desde: new Date(`${desde}T00:00:00-05:00`).getTime(),
  hasta: new Date(`${hasta}T23:59:59-05:00`).getTime(),
});

/** Índice de la etapa vigente, o -1 si ninguna lo está (antes de la primera o después de la última). */
export function etapaVigente(e: Evento, ahora = new Date()) {
  const t = ahora.getTime();
  return e.etapas.findIndex((et) => {
    const l = limitesEtapa(et.desde, et.hasta);
    return t >= l.desde && t <= l.hasta;
  });
}

/** Precio total más bajo de una etapa. */
export function desdeEnEtapa(e: Evento, i: number) {
  const totales = e.localidades.map((l) => l.precios[i]?.total).filter((n): n is number => typeof n === 'number');
  return totales.length ? Math.min(...totales) : null;
}

export const ordenarPorFecha = <T extends { inicio: string }>(lista: T[]) =>
  [...lista].sort((a, b) => +new Date(a.inicio) - +new Date(b.inicio));

/** Enlace de Google Maps para «Cómo llegar». */
export const mapsUrl = (e: Evento) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${e.lugar}, ${e.ciudad}, Colombia`);

/** Fecha en formato de calendario (UTC) para .ics y Google Calendar. */
export const fechaCal = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export function googleCalendarUrl(e: Evento, url: string) {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.titulo,
    dates: `${fechaCal(new Date(e.inicio))}/${fechaCal(finEfectivo(e))}`,
    location: `${e.lugar}, ${e.ciudad}`,
    details: `Boletas oficiales: ${url}`,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}
