# Análisis de ticketiando.com (10 de octubre de 2026)

Revisión completa del sitio actual en escritorio (1440 px) y móvil (390 px), su código y su plataforma de compra.

**Tecnología:** WordPress 7.1 con el tema Astra, Elementor 4.3 y WooCommerce 10.4 (sin productos: la venta ocurre en `ventas.ticketiando.com`, una plataforma aparte).

## 1. Crítico: el sitio está hackeado (spam de casinos)

- El HTML de **todas las páginas** trae **41 bloques ocultos** (`position:absolute; left:-7566px`) con **37 enlaces a casinos, apuestas y una farmacia** (pin-up, 1xbet, zeus casino, winaura…), en checo, finés, turco, ruso y español.
- Están metidos dentro de un ítem del menú (`menu-item-12118`), así que salen en el menú de escritorio y en el de móvil.
- El visitante no los ve, pero **Google sí**: es «SEO spam» y puede llevar a que Google marque el sitio como peligroso o lo saque de los resultados. A una boletería eso le destruye la confianza.
- Qué hacer (requiere acceso al WordPress):
  1. Borrar el ítem de menú 12118 y revisar Apariencia → Menús.
  2. Cambiar contraseñas de todos los administradores, del hosting y de la base de datos.
  3. Actualizar WordPress, el tema y los plugins; quitar los que no se usen (hay restos de plantillas: ZipWP, Spectra, CartFlows, un «elementor-mcp-composer» con puntos de API públicos).
  4. Pasar un escáner (Wordfence o Sucuri) y pedir revisión en Google Search Console.

## 2. La portada no vende

- **No muestra ningún evento en venta.** Los dos eventos activos (Festival de Cerveza Artesanal del Caribe, 24 de octubre, y La Máquina del Tiempo, 31 de octubre) solo se encuentran si alguien tiene el enlace directo.
- Lo único que hay es un aviso «No se deje estafar» y una galería de eventos de 2023.
- El título de la página es «Ticketiando – Ticketiando» y el H1 dice «Home». No hay meta descripción ni imagen para redes en ninguna página: al compartir un enlace por WhatsApp no sale vista previa.

## 3. Compras que no funcionan

- **Festival de Cerveza:** los botones de compra llevan a `idEvento=77`, que hoy responde «El evento no está disponible para la venta», a 14 días del evento.
- **La Máquina del Tiempo:** el botón principal (`idEvento=74`) funciona, pero los enlaces de la tabla de precios van a `idEvento=72`, que tampoco está disponible.
- La raíz de `ventas.ticketiando.com` redirige directo a La Máquina del Tiempo y su pie dice «© TICKETIANDO 2022».

## 4. Móvil

- El encabezado mide unos 290 px de alto, es blanco y **no muestra el logo** (es blanco sobre blanco); solo se ve el botón de menú.
- La página se desliza de lado: el carrusel de la galería ensancha la página a 736 px en la portada y a 1165 px en el festival.
- Las tablas de precios quedan diminutas y los afiches con texto pequeño no se leen.

## 5. Contenido desactualizado o roto

- Siguen publicadas páginas de plantilla en inglés y con texto de relleno: `/sample-page/`, `/projects/`, `/services/` («Water Sports», «Lorem ipsum»). Están en el sitemap.
- Eventos pasados sin marcar como realizados: Intensamente (2024), Frank El Flaco (2023), Capibara (marzo y mayo de 2026).
- **Imágenes rotas (404):** los afiches de Capibara, Intensamente y Frank El Flaco ya no existen en el servidor.
- La página de Frank El Flaco no tiene título.

## 6. Datos inconsistentes

- **Correo:** `ticketiando@gmail.com` en casi todo el sitio, `info@ticketiando.com` en algunas páginas.
- **Enlaces legales cruzados:** en varias fichas «Política y condiciones» lleva al manual de tratamiento de datos, y «Política de devoluciones» no tiene enlace.
- **Instagram:** en la portada el ícono apunta a una publicación, no al perfil. **Facebook** apunta a `#` (no lleva a ningún lado).
- **Festival de Cerveza:** las fechas de las etapas no coinciden. La ficha dice «etapa 1 del 10 al 20 de septiembre, etapa 2 del 21 de septiembre al 23 de octubre»; el afiche nuevo de tipos de entrada dice «etapa 1 del 10 de septiembre al 10 de octubre, etapa 2 del 10 al 23 de octubre».
- **La Máquina del Tiempo:** «Palco Patrocinador ( px)» no dice para cuántas personas es.

## 7. Rendimiento y SEO

- La portada tardó 6,9 s en cargar en la prueba de escritorio; carga unas 40 hojas de estilo y scripts de plugins.
- Sin datos estructurados de eventos (Google no puede mostrar fecha, lugar ni precio en los resultados).
- No tiene favicon.

## 8. Lo que sí funciona y se conservó

- Logo registrado, colores de marca (azul noche `#000A32` y naranja `#FF5100`) y lema «tu boleto a la mano».
- Fichas de evento con PULEP, responsable, NIT y datos útiles (edad mínima, acomodación, venta de licor, movilidad reducida).
- Aviso anti-estafa: es una buena idea y se convirtió en una sección completa.
- Políticas legales completas (términos, datos personales, devoluciones, cambios).

## Cómo lo resuelve el rediseño

| Problema | Solución en el rediseño |
| --- | --- |
| Portada sin eventos | Carrusel de eventos en venta con precio «Desde», cuenta regresiva y botón de compra, más la cartelera completa debajo |
| Poca confianza | Aviso de canales oficiales en todo el sitio, franja de confianza (PULEP, pagos, atención, derechos), sección «Compra segura» con señales de estafa, NIT y razón social visibles |
| Móvil roto | Diseño pensado primero para móvil, sin desbordes, con logo visible y barra fija de compra en cada evento |
| Precios ilegibles | Precios como texto real (no imagen), por localidad y por etapa, con la etapa vigente marcada sola según la fecha |
| Eventos pasados | Se ocultan solos al terminar y pasan a «Eventos que ya vendimos» |
| Sin vista previa en redes | Título, descripción e imagen por página; datos estructurados de evento para Google |
| URL viejas | Redirecciones de las fichas actuales a las nuevas (`vercel.json`) |
| Spam | El sitio nuevo es estático (sin WordPress ni plugins que hackear) |
