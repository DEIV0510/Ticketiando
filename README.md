# Ticketiando · Rediseño

Propuesta de rediseño completo de [ticketiando.com](https://ticketiando.com), la boletería oficial de Ticketiando Colombia S.A.S.

- **Marca intacta:** el logo registrado se usa tal cual (blanco sobre azul noche `#000A32`) con el naranja de marca `#FF5100`. No se redibujó ni se recoloreó nada.
- **Referentes:** TuBoleta, Ticket Express y La Tiquetera (confianza, cartelera clara, aviso anti-estafa, puntos de contacto visibles).
- **Datos reales:** todo el contenido (eventos, precios, PULEP, políticas, contacto) sale del sitio actual. Lo que falta está en `docs/PENDIENTES.md`; no se inventa nada.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `/` | Portada: carrusel de eventos destacados con cuenta regresiva, cartelera en forma de boleta, compra segura, cómo comprar, trayectoria, vende tu evento, preguntas |
| `/eventos/` | Cartelera con buscador y filtros por tipo y ciudad, más eventos ya realizados |
| `/eventos/<slug>/` | Ficha del evento: precios por localidad y etapa, información importante, mapa, preguntas, PULEP, compra fija en móvil |
| `/vende-tu-evento/` | Página para organizadores con formulario que llega por WhatsApp |
| `/nosotros/`, `/ayuda/`, `/contacto/` | Empresa, centro de ayuda y contacto |
| `/politicas-y-condiciones/` y demás | Textos legales vigentes (mismas URL de hoy) |

La compra se sigue haciendo en `ventas.ticketiando.com` (cada evento enlaza a su `idEvento`).

## Cómo agregar o cambiar un evento

Todo vive en `src/data/eventos.ts`. Copia un bloque, cambia los datos y pon el arte en `src/assets/eventos/`:

- `banner`: arte horizontal 16:9 (héroe, tarjeta, redes).
- `poster`: afiche vertical o cuadrado (sección «Afiche oficial»).
- `etapas`: fechas de cada etapa de precios. El precio «Desde» y la etapa vigente cambian solos según la fecha, sin volver a publicar.
- Si un dato no se conoce, se deja en `null` y no aparece.

Después de agregar un evento corre `node scripts/marca.mjs` (genera el fondo difuminado del héroe; agrega el slug en el script).

## Comandos

```bash
npm install
npm run dev       # http://localhost:5480
npm run build     # sitio estático en dist/
npm run preview   # sirve dist/ en http://localhost:5481
npm run check     # revisión de tipos
node scripts/legal.mjs   # vuelve a traer los textos legales de ticketiando.com
```

`SITE_URL` define el dominio de las URL canónicas y de las imágenes para redes (por defecto `https://ticketiando.com`).

## Calidad (10 de octubre de 2026)

- Lighthouse móvil: rendimiento 95–100, accesibilidad 100, buenas prácticas 100, SEO 100. Escritorio: 100 en las cuatro.
- CLS ≈ 0 (fuentes de respaldo medidas contra Archivo), sin desbordes horizontales de 320 a 1920 px.
- 32 pruebas de interacción en navegador real: menú, buscador, filtros, carrusel (avance, pausa, movimiento reducido), etapa de precio vigente, formulario y datos estructurados.

Capturas de antes y después en .
