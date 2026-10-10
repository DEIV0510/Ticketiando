// Única fuente de los eventos. Todo lo de aquí está publicado hoy en ticketiando.com
// (fichas, afiches y tablas de precios). Para agregar un evento: copiar un bloque y llenar
// solo con datos confirmados por el organizador; lo que no se sepa va en null.
import type { ImageMetadata } from 'astro';
import festivalBanner from '../assets/eventos/festival-banner.jpg';
import festivalEntradas from '../assets/eventos/festival-entradas.png';
import festivalMapa from '../assets/eventos/festival-mapa.jpg';
import maquinaPoster from '../assets/eventos/maquina-poster.jpg';
import maquinaBanner from '../assets/eventos/maquina-banner.jpg';
import disneyJunior from '../assets/eventos/disney-junior.jpg';
import frankElFlaco from '../assets/eventos/frank-el-flaco.jpg';
import santiagoCruz from '../assets/eventos/santiago-cruz.png';
import fiestaVelitas from '../assets/eventos/fiesta-de-velitas.png';
import berikaFest from '../assets/eventos/berika-fest.jpg';

export type Categoria = 'Festivales' | 'Fiestas' | 'Conciertos' | 'Familiar' | 'Stand-up';

export interface Etapa {
  nombre: string;
  /** Fechas ISO (inclusive) en hora de Colombia. */
  desde: string;
  hasta: string;
}

export interface Localidad {
  nombre: string;
  detalle?: string;
  /** Una fila por etapa, en el mismo orden de `etapas`. null = esa localidad no tiene precio en esa etapa. */
  precios: ({ precio: number; servicio: number | null; total: number } | null)[];
  incluye?: string[];
  color?: string;
}

export interface Evento {
  slug: string;
  titulo: string;
  bajada: string;
  categoria: Categoria;
  ciudad: string;
  lugar: string;
  /** Inicio y fin en ISO con zona -05:00. */
  inicio: string;
  /** null = no publicado; se da por terminado 12 h después del inicio. */
  fin: string | null;
  horario: string;
  apertura: string | null;
  edadMinima: string | null;
  acomodacion: string | null;
  ventaComida: string | null;
  ventaLicor: string | null;
  movilidadReducida: string | null;
  gestantes: string | null;
  descripcion: string[];
  destacados?: string[];
  artistas?: string[];
  compraUrl: string;
  etapas: Etapa[];
  /** Cómo se muestran los precios: con servicio desglosado o «servicio incluido». */
  precioModo: 'desglosado' | 'servicio-incluido';
  localidades: Localidad[];
  preguntas?: { p: string; r: string }[];
  responsable: { nombre: string; nit: string };
  pulep: string;
  organiza?: string;
  sitioOficial?: { texto: string; href: string };
  imagenes: {
    /** Arte horizontal 16:9: héroe y redes. */
    banner: ImageMetadata;
    bannerAlt: string;
    /** Afiche vertical o cuadrado para la tarjeta. */
    poster: ImageMetadata;
    posterAlt: string;
    mapa?: ImageMetadata;
    mapaAlt?: string;
  };
}

export const EVENTOS: Evento[] = [
  {
    slug: 'festival-cerveza-artesanal-del-caribe',
    titulo: 'Festival de Cerveza Artesanal del Caribe',
    bajada: 'Cervecerías artesanales, música en vivo y gastronomía frente a la bahía de Cartagena.',
    categoria: 'Festivales',
    ciudad: 'Cartagena',
    lugar: 'Parque Reducto – Centro de Convenciones',
    inicio: '2026-10-24T12:00:00-05:00',
    fin: '2026-10-25T02:00:00-05:00',
    horario: '12:00 m. a 2:00 a. m.',
    apertura: null,
    edadMinima: null,
    acomodacion: null,
    ventaComida: 'Sí',
    ventaLicor: 'Sí',
    movilidadReducida: null,
    gestantes: null,
    descripcion: [
      'Más de 15 cervecerías, 12 horas de música en vivo y gastronomía en el Parque Reducto, junto al Centro de Convenciones de Cartagena de Indias.',
      'Con tu entrada participas en el Pasaporte Cervecero y sus dinámicas, y votas por la mejor cerveza del festival.',
    ],
    destacados: ['+15 cervecerías', '12 horas de música en vivo', 'Gastronomía'],
    compraUrl: 'https://ventas.ticketiando.com/tickets/es/comprarEvento?idEvento=77',
    etapas: [
      { nombre: 'Etapa 1 · Lanzamiento', desde: '2026-09-10', hasta: '2026-10-09' },
      { nombre: 'Etapa 2 · Precio full', desde: '2026-10-10', hasta: '2026-10-23' },
    ],
    precioModo: 'servicio-incluido',
    localidades: [
      {
        nombre: 'De Una',
        detalle: 'Tu entrada al festival',
        color: '#C8102E',
        precios: [
          { precio: 69000, servicio: null, total: 69000 },
          { precio: 73000, servicio: null, total: 73000 },
        ],
        incluye: [
          'Acceso al festival y programación general',
          'Participación en el Pasaporte Cervecero y sus dinámicas',
          'Votación a la mejor cerveza del festival',
        ],
      },
      {
        nombre: 'Cervecero en Pila',
        detalle: 'Con degustación',
        color: '#2F7D4F',
        precios: [
          { precio: 87000, servicio: null, total: 87000 },
          { precio: 90000, servicio: null, total: 90000 },
        ],
        incluye: [
          'Todo lo incluido en «De Una»',
          'Vaso oficial edición 2026',
          'Manilla de degustación',
          'Sampling de cervezas',
        ],
      },
    ],
    preguntas: [
      {
        p: '¿Cómo funciona el sampling?',
        r: 'Con la entrada Cervecero en Pila te acercas a las cervecerías participantes (serán 3 o 4) y presentas tu manilla para acceder a las degustaciones de la dinámica. No significa consumo ilimitado ni degustaciones en todos los stands; la organización comunicará qué cervecerías participan y sus condiciones.',
      },
      {
        p: '¿El Pasaporte Cervecero y la Manilla Ruta Cervecera son lo mismo?',
        r: 'No. El Pasaporte Cervecero está disponible para De Una y Cervecero en Pila y funciona con compras y sellos digitales. La Manilla Ruta Cervecera es exclusiva de Cervecero en Pila e identifica a quienes tienen acceso al sampling.',
      },
      {
        p: 'Tengo entrada De Una, ¿puedo hacer el pasaporte?',
        r: 'Sí: completas tu Pasaporte Cervecero comprando en diferentes cervecerías, pero no tendrás acceso al sampling reservado para Cervecero en Pila.',
      },
    ],
    responsable: { nombre: 'Joana Milena Serna', nit: '1143325661-4' },
    pulep: 'SCK713',
    sitioOficial: { texto: 'festcaribe.com', href: 'https://www.festcaribe.com/' },
    imagenes: {
      banner: festivalBanner,
      bannerAlt: 'Afiche del Festival de Cerveza Artesanal del Caribe: barco pirata sobre el mar, 24 de octubre en el Parque Reducto de Cartagena',
      poster: festivalEntradas,
      posterAlt: 'Tipos de entrada del Festival de Cerveza Artesanal del Caribe: De Una y Cervecero en Pila, con sus precios por etapa',
      mapa: festivalMapa,
      mapaAlt: 'Mapa del festival: zonas de cervecerías, restaurantes, economía creativa, tarima, pista de baile, baños, entrada y salida',
    },
  },
  {
    slug: 'la-maquina-del-tiempo',
    titulo: 'La Máquina del Tiempo',
    bajada: 'Una fiesta retro por las décadas más increíbles de la música.',
    categoria: 'Fiestas',
    ciudad: 'Cartagena',
    lugar: 'Centro de eventos La Fantástica – frente a Las Botas Viejas',
    inicio: '2026-10-31T19:00:00-05:00',
    fin: null,
    horario: '7:00 p. m.',
    apertura: '6:00 p. m.',
    edadMinima: '18 años',
    acomodacion: 'Palcos y zona VIP con silletería no numerada',
    ventaComida: 'Sí',
    ventaLicor: 'Sí',
    movilidadReducida: 'Ingresa con acompañante, cada uno con su respectiva boleta',
    gestantes: 'Entran bajo su responsabilidad',
    descripcion: [
      'Este 31 de octubre, prepárate para viajar a una época donde la música era inolvidable, los looks eran legendarios y la fiesta… ¡no tenía fecha de vencimiento!',
      'Llega La Máquina del Tiempo: una fiesta retro que te llevará por las décadas más increíbles de la música.',
    ],
    artistas: ['Grupo BIP', 'DJ Jaro', 'Capitán Kirk', 'DJ Tico', 'Luffy DJ'],
    compraUrl: 'https://ventas.ticketiando.com/tickets/es/comprarEvento?idEvento=74',
    etapas: [{ nombre: 'Precio lanzamiento', desde: '2026-09-07', hasta: '2026-10-25' }],
    precioModo: 'desglosado',
    localidades: [
      { nombre: 'VIP', detalle: 'Silletería no numerada', precios: [{ precio: 80000, servicio: 12000, total: 92000 }] },
      { nombre: 'Palco Calimenio', detalle: 'Individual', precios: [{ precio: 150000, servicio: 22500, total: 172500 }] },
      { nombre: 'Palco Calimenio', detalle: 'Palco de 10 personas', precios: [{ precio: 1500000, servicio: 225000, total: 1725000 }] },
      { nombre: 'Palco Patrocinador', detalle: 'Individual', precios: [{ precio: 250000, servicio: 42500, total: 292500 }] },
      { nombre: 'Palco Patrocinador', detalle: 'Palco completo', precios: [{ precio: 2500000, servicio: 425000, total: 2925000 }] },
    ],
    responsable: { nombre: 'Live Concerts Latam S.A.S.', nit: '901977186-2' },
    pulep: 'BWK566',
    organiza: 'Live Concerts',
    imagenes: {
      banner: maquinaBanner,
      bannerAlt: 'Afiche de La Máquina del Tiempo: sábado 31 de octubre, 7:00 p. m., Centro de eventos La Fantástica, Cartagena, con DJ Jaro, DJ Tico, Luffy DJ y Kirk',
      poster: maquinaPoster,
      posterAlt: 'Afiche vertical de La Máquina del Tiempo con el Grupo BIP, sábado 31 de octubre en Cartagena',
    },
  },
];

/** Eventos que Ticketiando ya vendió (trayectoria). Solo los que tienen afiche real disponible. */
export const REALIZADOS: {
  titulo: string;
  categoria: Categoria;
  ciudad: string;
  lugar: string;
  fecha: string;
  imagen: ImageMetadata;
  alt: string;
}[] = [
  { titulo: 'Berika Fest Cartagena Vol. 1', categoria: 'Conciertos', ciudad: 'Cartagena', lugar: 'Gran Salón Barahona', fecha: '15 de agosto', imagen: berikaFest, alt: 'Afiche de Berika Fest Cartagena Vol. 1 en el Gran Salón Barahona' },
  { titulo: 'Gran Fiesta de Velitas', categoria: 'Conciertos', ciudad: 'Cartagena', lugar: 'Centro de Convenciones Hotel Las Américas', fecha: '7 de diciembre de 2023', imagen: fiestaVelitas, alt: 'Afiche de la Gran Fiesta de Velitas con Tito Nieves, Jessi Uribe, Eddy Herrera, Rafa Pérez, Mr Black y Byordy' },
  { titulo: 'Santiago Cruz Sinfónico', categoria: 'Conciertos', ciudad: 'Cartagena', lugar: 'Auditorio Getsemaní', fecha: '9 de septiembre de 2023', imagen: santiagoCruz, alt: 'Afiche de Santiago Cruz Sinfónico en el Auditorio Getsemaní de Cartagena' },
  { titulo: 'Disney Junior en vivo', categoria: 'Familiar', ciudad: 'Cartagena', lugar: 'Centro de Convenciones Hotel Las Américas', fecha: '3 de junio de 2023', imagen: disneyJunior, alt: 'Afiche de Disney Junior en vivo en Cartagena con Mickey y Minnie' },
  { titulo: 'Estoy que me hablo · Frank El Flaco', categoria: 'Stand-up', ciudad: 'Barranquilla', lugar: 'Teatro José Consuegra Higgins', fecha: '4 de mayo de 2023', imagen: frankElFlaco, alt: 'Afiche del stand-up Estoy que me hablo de Frank El Flaco en Barranquilla' },
];

/** Otros eventos de la trayectoria cuyo afiche ya no está disponible en el sitio. */
export const REALIZADOS_SIN_AFICHE = [
  'Capibara: la gran aventura musical (Cartagena y Santa Marta, 2026)',
  'El gran show de Intensamente y sus amigos (Cartagena, 2024)',
];
