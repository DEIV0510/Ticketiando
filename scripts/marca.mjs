// Favicon e íconos a partir del isotipo del logo registrado: solo se RECORTA (no se redibuja ni recolorea).
// Además genera los fondos difuminados del héroe. Uso: node scripts/marca.mjs
import sharp from 'sharp';
import fs from 'node:fs';

const LOGO = 'src/assets/marca/logo.png';
const NOCHE = '#000a32';
fs.mkdirSync('public/img', { recursive: true });

// El isotipo (boleta con la figura) ocupa las primeras ~222 columnas del logo de 1200 px.
const isotipo = await sharp(LOGO).extract({ left: 0, top: 0, width: 222, height: 230 }).trim().png().toBuffer();

for (const [nombre, lado, margen] of [
  ['favicon-32.png', 32, 0.12],
  ['apple-touch-icon.png', 180, 0.18],
  ['icono-512.png', 512, 0.2],
]) {
  const interior = Math.round(lado * (1 - margen * 2));
  const icono = await sharp(isotipo).resize({ width: interior, height: interior, fit: 'inside' }).toBuffer();
  await sharp({ create: { width: lado, height: lado, channels: 4, background: NOCHE } })
    .composite([{ input: icono, gravity: 'center' }])
    .png()
    .toFile(`public/${nombre}`);
}

// Fondos del héroe: el arte del evento muy difuminado y oscurecido (se ve como luz de escenario, sin texto legible).
const FONDOS = {
  'festival-cerveza-artesanal-del-caribe': 'src/assets/eventos/festival-banner.jpg',
  'la-maquina-del-tiempo': 'src/assets/eventos/maquina-banner.jpg',
};
for (const [slug, src] of Object.entries(FONDOS)) {
  await sharp(src)
    .resize({ width: 480 })
    .blur(22)
    .modulate({ brightness: 0.75, saturation: 1.25 })
    .webp({ quality: 60 })
    .toFile(`public/img/fondo-${slug}.webp`);
}
console.log('listo');
