// Datos de la empresa. TODO sale del sitio actual (ticketiando.com, políticas y contacto).
// No inventar: si un dato falta, se deja fuera y se anota en docs/PENDIENTES.md.

export const EMPRESA = {
  marca: 'Ticketiando',
  lema: 'Tu boleto a la mano',
  razonSocial: 'TICKETIANDO COLOMBIA S.A.S.',
  nit: '901.609.136-7',
  domicilio: 'Medellín',
  direccion: 'Calle 49 Sur # 45A-300, Ed. S48 Tower, oficina 2213',
};

export const CONTACTO = {
  telefonoFijo: { texto: '(604) 475 0867', href: 'tel:+576044750867' },
  whatsapp: {
    texto: '322 386 7112',
    numero: '573223867112',
    href: 'https://wa.me/573223867112',
  },
  correo: { texto: 'ticketiando@gmail.com', href: 'mailto:ticketiando@gmail.com' },
  instagram: { texto: '@ticketiando', href: 'https://www.instagram.com/ticketiando/' },
};

export const VENTAS_URL = 'https://ventas.ticketiando.com/';

/** Canales oficiales: base de la sección anti-estafa. */
export const CANALES_OFICIALES = [
  { canal: 'Sitio web', valor: 'ticketiando.com', href: '/' },
  { canal: 'Plataforma de compra', valor: 'ventas.ticketiando.com', href: VENTAS_URL },
  { canal: 'Instagram', valor: '@ticketiando', href: CONTACTO.instagram.href },
  { canal: 'WhatsApp y servicio al cliente', valor: CONTACTO.whatsapp.texto, href: CONTACTO.whatsapp.href },
];

/** Señales de estafa: tomadas del aviso «No se deje estafar» publicado en la portada actual. */
export const SENALES_ESTAFA = [
  {
    titulo: 'Precios «milagrosos»',
    texto: 'Si el concierto está agotado y alguien tiene boletas baratas, es una estafa.',
  },
  {
    titulo: 'Pagos sospechosos',
    texto: 'Si te piden pagar por Nequi o por transferencia directa a una persona, no tienes garantía de devolución.',
  },
  {
    titulo: 'Enlaces y cuentas que imitan el nombre',
    texto: 'Revisa bien el link: los estafadores usan nombres como «ticketiando_» o logos generados con IA.',
  },
  {
    titulo: 'Venta antes de la fecha oficial',
    texto: 'Nadie puede tener boletas legales antes de que salgan a la venta en la boletería autorizada.',
  },
];

export const MEDIOS_PAGO = ['PSE', 'Visa', 'Mastercard', 'Mercado Pago'] as const;

export const NAV = [
  { texto: 'Eventos', href: '/eventos/' },
  { texto: 'Compra segura', href: '/ayuda/#compra-segura' },
  { texto: 'Ayuda', href: '/ayuda/' },
];

export const LEGAL = [
  { texto: 'Términos y condiciones', href: '/politicas-y-condiciones/' },
  { texto: 'Tratamiento de datos', href: '/manual-de-tratamiento-de-datos/' },
  { texto: 'Devoluciones y retracto', href: '/devoluciones/' },
  { texto: 'Cambios por pérdida o daño', href: '/cambios-por-perdida-o-danos/' },
  { texto: 'Superintendencia de Industria y Comercio', href: 'https://www.sic.gov.co/', externo: true },
];

/** Preguntas frecuentes: respuestas resumidas de las políticas publicadas (no agregar promesas nuevas). */
export const FAQ = [
  {
    p: '¿Dónde compro boletas oficiales?',
    r: 'Solo en ticketiando.com y en la plataforma ventas.ticketiando.com, o por los canales oficiales que aparecen en esta página. Cualquier otra cuenta o enlace que use el nombre Ticketiando no es nuestro.',
  },
  {
    p: '¿Con qué medios puedo pagar?',
    r: 'En línea con PSE y tarjetas Visa o Mastercard, a través de la pasarela de Mercado Pago. Desconfía de quien te pida pagar por Nequi o por transferencia a una persona.',
  },
  {
    p: '¿Puedo arrepentirme de una compra?',
    r: 'Si compraste en línea, la Ley 1480 de 2011 (artículo 47) te da 5 días hábiles desde la compra para ejercer el derecho de retracto, siempre que no hayas usado la boleta.',
  },
  {
    p: '¿Qué pasa si cancelan el evento?',
    r: 'Si el evento se cancela por completo, registra tu caso con servicio al cliente (322 386 7112 o ticketiando@gmail.com). Se devuelve el valor de cada boleta, sin el cargo por servicio ni el envío a domicilio, al mismo medio de pago, en un plazo de 20 a 30 días hábiles.',
  },
  {
    p: '¿Y si pierdo o se daña mi boleta?',
    r: 'Las boletas son responsabilidad de quien las compra. Si se dañan, puedes pedir la reimpresión pagando el valor del servicio. Las extraviadas solo se estudian en eventos con silletería numerada.',
  },
  {
    p: '¿Los menores pagan entrada?',
    r: 'Depende de cada evento: en la ficha verás la edad mínima y desde qué edad se paga boleta. Por ejemplo, en musicales infantiles los niños desde 3 años pagan y ocupan puesto.',
  },
];
