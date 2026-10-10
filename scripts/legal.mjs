// Trae los textos legales y "Nosotros" del WordPress actual y los deja limpios en src/content/legal.
// Uso: node scripts/legal.mjs  (solo hace falta volver a correrlo si cambian los textos en ticketiando.com)
import fs from 'node:fs';

const PAGINAS = [
  { id: 4794, archivo: 'politicas-y-condiciones' },
  { id: 4785, archivo: 'manual-de-tratamiento-de-datos' },
  { id: 4777, archivo: 'devoluciones' },
  { id: 4764, archivo: 'cambios-por-perdida-o-danos' },
];

const PERMITIDAS = new Set(['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'b', 'em', 'i', 'a', 'br']);

function limpiar(html) {
  // Spam inyectado (bloques ocultos con left:-7566px) y el pie de página que Elementor metió dentro del contenido
  html = html.replace(/<div style="position: ?absolute; ?left: ?-\d+px;?">[\s\S]*?<\/div>/g, '');
  const corte = html.indexOf('Conoce mas');
  if (corte > -1) html = html.slice(0, html.lastIndexOf('<section', corte));
  html = html.replace(/<(script|style|figure)[\s\S]*?<\/\1>/g, '').replace(/<!--[\s\S]*?-->/g, '');
  // Títulos de nivel 5-6 → h4; el h2 del título de la página se omite (la plantilla pone el suyo)
  html = html.replace(/<(\/?)h[56]\b/g, '<$1h4');
  html = html.replace(/<\/?([a-z0-9]+)([^>]*)>/gi, (m, tag, attrs) => {
    const t = tag.toLowerCase();
    if (!PERMITIDAS.has(t)) return '';
    const cierre = m.startsWith('</');
    if (cierre) return `</${t === 'b' ? 'strong' : t}>`;
    if (t === 'a') {
      const href = attrs.match(/href="([^"]+)"/)?.[1] ?? '';
      if (!href || /casino|bet|spin/i.test(href)) return '<a>';
      const externo = !/^https?:\/\/(www\.)?ticketiando\.com/.test(href) && /^https?:/.test(href);
      const local = href.replace(/^https?:\/\/(www\.)?ticketiando\.com/, '') || '/';
      return externo ? `<a href="${href}" target="_blank" rel="noopener">` : `<a href="${local}">`;
    }
    return `<${t === 'b' ? 'strong' : t}>`;
  });
  html = html
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/<(p|li|h[234]|strong)>\s*<\/\1>/g, '')
    .replace(/<p>\s*(<br>\s*)*<\/p>/g, '')
    .trim();
  // Quita el primer h2 (título de la página)
  html = html.replace(/^\s*<h2>[\s\S]*?<\/h2>/, '');
  return html.trim() + '\n';
}

for (const p of PAGINAS) {
  const r = await fetch(`https://ticketiando.com/wp-json/wp/v2/pages/${p.id}?_fields=title,content`);
  const j = await r.json();
  const html = limpiar(j.content.rendered);
  fs.writeFileSync(`src/content/legal/${p.archivo}.html`, html);
  console.log(p.archivo, html.length, 'caracteres');
}
