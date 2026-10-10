// Ajustes que dependen de la hora actual: etapa de precios vigente, eventos ya pasados y cuentas regresivas.
// El HTML ya trae el estado del día en que se construyó; esto lo corrige si pasó el tiempo.

const ahora = () => Date.now();

export function aplicarEtapas(raiz: ParentNode = document) {
  raiz.querySelectorAll<HTMLElement>('[data-etapas]').forEach((g) => {
    const t = ahora();
    let alguna = false;
    g.querySelectorAll<HTMLElement>('[data-etapa]').forEach((el) => {
      const ok = t >= Number(el.dataset.d) && t <= Number(el.dataset.h);
      el.hidden = !ok || alguna;
      if (ok) alguna = true;
    });
    const ninguna = g.querySelector<HTMLElement>('[data-etapa-ninguna]');
    if (ninguna) ninguna.hidden = alguna;
  });
  // Filas de tabla por etapa: marcar la vigente
  document.querySelectorAll<HTMLElement>('[data-col-etapa]').forEach((el) => {
    const t = ahora();
    el.classList.toggle('es-vigente', t >= Number(el.dataset.d) && t <= Number(el.dataset.h));
    el.classList.toggle('es-pasada', t > Number(el.dataset.h));
  });
}

export function ocultarPasados() {
  const t = ahora();
  document.querySelectorAll<HTMLElement>('[data-fin]').forEach((el) => {
    if (t > Number(el.dataset.fin)) el.hidden = true;
  });
  document.querySelectorAll<HTMLElement>('[data-lista-proximos]').forEach((lista) => {
    const visibles = lista.querySelectorAll('[data-fin]:not([hidden])').length;
    const vacio = document.querySelector<HTMLElement>(lista.dataset.listaProximos || '');
    if (vacio) vacio.hidden = visibles > 0;
  });
}

const dos = (n: number) => String(n).padStart(2, '0');

export function cuentas() {
  const nodos = [...document.querySelectorAll<HTMLElement>('[data-cuenta]')];
  if (!nodos.length) return;
  const pintar = () => {
    const t = ahora();
    nodos.forEach((n) => {
      const inicio = Number(n.dataset.cuenta);
      const fin = Number(n.dataset.cuentaFin);
      const resta = inicio - t;
      const partes = n.querySelectorAll<HTMLElement>('[data-u]');
      const estado = n.querySelector<HTMLElement>('[data-estado]');
      if (resta <= 0) {
        partes.forEach((p) => (p.closest('li')!.hidden = true));
        if (estado) {
          estado.hidden = false;
          estado.textContent = t < fin ? 'El evento está en curso' : 'Evento finalizado';
        }
        return;
      }
      const d = Math.floor(resta / 86_400_000);
      const h = Math.floor((resta % 86_400_000) / 3_600_000);
      const m = Math.floor((resta % 3_600_000) / 60_000);
      const s = Math.floor((resta % 60_000) / 1000);
      const valores: Record<string, string> = { d: String(d), h: dos(h), m: dos(m), s: dos(s) };
      partes.forEach((p) => {
        const v = valores[p.dataset.u!];
        if (p.textContent !== v) p.textContent = v;
      });
    });
  };
  pintar();
  let id = window.setInterval(pintar, 1000);
  document.addEventListener('visibilitychange', () => {
    window.clearInterval(id);
    if (!document.hidden) {
      pintar();
      id = window.setInterval(pintar, 1000);
    }
  });
}

aplicarEtapas();
ocultarPasados();
cuentas();
