# Pendientes por confirmar con Ticketiando

Nada de esto se inventó: donde falta el dato, el sitio simplemente no lo muestra.

## Urgentes (afectan ventas hoy)

- [ ] **Festival de Cerveza:** `ventas.ticketiando.com/…?idEvento=77` dice «El evento no está disponible para la venta». ¿Cuál es el enlace de compra correcto?
- [ ] **La Máquina del Tiempo:** la tabla de precios del sitio actual enlaza a `idEvento=72` (no disponible). El rediseño usa `idEvento=74`, que sí funciona. Confirmar.
- [ ] **Hackeo del WordPress actual:** 41 bloques ocultos con enlaces a casinos (ver `ANALISIS-SITIO-ACTUAL.md`, punto 1). Hay que limpiarlo aunque el sitio nuevo lo reemplace.

## Datos de eventos

- [ ] Festival de Cerveza: confirmar fechas de las etapas. Se usó el afiche más reciente: etapa 1 hasta el 9 de octubre y etapa 2 desde el 10 de octubre (el afiche dice «al 10 de octubre» y «del 10 de octubre», se solapan un día).
- [ ] Festival de Cerveza: edad mínima, apertura de puertas y acomodación (no están publicados).
- [ ] La Máquina del Tiempo: ¿para cuántas personas es el «Palco Patrocinador» completo? En el sitio aparece «( px)». Por precio parece de 10 personas (10 × $250.000); se dejó como «Palco completo».
- [ ] La Máquina del Tiempo: hora de cierre y precios después del 25 de octubre (la etapa de lanzamiento termina ese día; después el sitio dice «consulta el valor vigente»).
- [ ] Berika Fest Cartagena Vol. 1: confirmar el año (el afiche dice 15 de agosto; se subió al sitio en agosto de 2026).
- [ ] Afiches de Capibara, Intensamente y Frank El Flaco: en el servidor actual dan error 404. Si los tienen, se agregan a «Eventos que ya vendimos».
- [ ] ¿Más eventos próximos? La cartelera se adapta sola a 1, 2 o 20 eventos.

## Empresa y contacto

- [ ] Correo oficial: `ticketiando@gmail.com` o `info@ticketiando.com` (el sitio actual usa los dos). Se usó el de Gmail, que es el que aparece en las políticas.
- [ ] Facebook: el sitio actual tiene el ícono pero sin enlace. Si hay página, pasar la URL.
- [ ] Ciudad de la oficina (Calle 49 Sur # 45A-300, Ed. S48 Tower, of. 2213) y horario de atención.
- [ ] ¿Cómo recibe el comprador la boleta (correo, código QR, física a domicilio)? Las políticas mencionan boletería física y envío a domicilio. Con eso se completa el paso 4 de «Cómo comprar».
- [ ] Puntos de venta físicos, si los hay (TuBoleta y Ticket Express los muestran y suma confianza).

## Técnico

- [ ] Dominio y hosting: el rediseño es un sitio estático listo para Vercel (o cualquier hosting). Publicarlo en ticketiando.com reemplaza al WordPress; `ventas.ticketiando.com` no cambia.
- [ ] Formularios: hoy envían el mensaje por WhatsApp al 322 386 7112. Si prefieren correo, se conecta a un servicio de formularios.
