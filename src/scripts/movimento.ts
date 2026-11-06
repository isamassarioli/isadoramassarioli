// Movimento da página inicial. Tudo aqui respeita "reduzir movimento" do sistema:
// com ele ligado, nada se mexe e a página fica na versão parada.

const semMovimento = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Letreiro das perguntas: botão para pausar e retomar (WCAG 2.2.2).
function letreiro() {
  const el = document.getElementById('letreiro');
  const botao = el?.querySelector<HTMLButtonElement>('.letreiro-pausa');
  if (!el || !botao) return;
  botao.addEventListener('click', () => {
    const pausado = el.classList.toggle('pausado');
    botao.setAttribute('aria-pressed', String(pausado));
    botao.textContent = (pausado ? botao.dataset.rotuloTocar : botao.dataset.rotuloPausar) ?? '';
  });
}

// "Como o projeto acontece": no desktop, a linha do tempo anda para o lado conforme o scroll
// e a etapa atual fica em destaque. No celular e sem movimento, vira uma lista comum.
function linhaDoTempo() {
  const secao = document.querySelector<HTMLElement>('.lp-metodo');
  const lista = secao?.querySelector<HTMLElement>('.lp-etapas');
  const progresso = secao?.querySelector<HTMLElement>('.metodo-progresso');
  if (!secao || !lista || !progresso) return;
  const etapas = Array.from(lista.children) as HTMLElement[];
  const largo = window.matchMedia('(min-width: 900px)');

  let pedido = 0;
  const atualizar = () => {
    pedido = 0;
    const ativo = largo.matches && !semMovimento();
    secao.classList.toggle('rolando', ativo);
    if (!ativo) {
      lista.style.transform = '';
      progresso.style.transform = '';
      etapas.forEach((e) => e.classList.remove('atual'));
      return;
    }
    const caixa = secao.getBoundingClientRect();
    const percurso = secao.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -caixa.top / Math.max(1, percurso)));
    const sobra = Math.max(0, lista.scrollWidth - lista.parentElement!.clientWidth);
    lista.style.transform = `translateX(${-sobra * p}px)`;
    progresso.style.transform = `scaleX(${p})`;
    const atual = Math.min(etapas.length - 1, Math.floor(p * etapas.length));
    etapas.forEach((e, i) => e.classList.toggle('atual', i === atual));
  };
  const agendar = () => { if (!pedido) pedido = requestAnimationFrame(atualizar); };
  window.addEventListener('scroll', agendar, { passive: true });
  window.addEventListener('resize', agendar);
  largo.addEventListener('change', agendar);
  atualizar();
}

// Estrelinhas no rastro do cursor: só com mouse (desktop) e sem "reduzir movimento".
function rastroDeEstrelas() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || semMovimento()) return;
  const cores = ['#ef2d56', '#12b0dd', '#fffd66', '#330c2f'];
  const svg = (cor: string) =>
    `<svg viewBox="248 114 515 728" aria-hidden="true" focusable="false"><path fill="${cor}" d="M500 114L530.886 447.114L763 478L530.886 508.886L500 842L469.114 508.886L248 478L469.114 447.114L500 114Z"/></svg>`;
  let ultimo = 0;
  let i = 0;
  let vivas = 0;
  window.addEventListener('pointermove', (ev) => {
    const agora = performance.now();
    if (agora - ultimo < 45 || vivas > 18 || semMovimento()) return;
    ultimo = agora;
    const e = document.createElement('span');
    e.className = 'rastro-estrela';
    e.setAttribute('aria-hidden', 'true');
    const tam = 8 + Math.random() * 10;
    e.style.cssText = `left:${ev.clientX}px;top:${ev.clientY}px;width:${tam}px;height:${tam * 1.41}px;--giro:${Math.random() * 90 - 45}deg`;
    e.innerHTML = svg(cores[i++ % cores.length]);
    document.body.appendChild(e);
    vivas++;
    e.addEventListener('animationend', () => { e.remove(); vivas--; }, { once: true });
  }, { passive: true });
}

export function iniciarMovimento() {
  letreiro();
  linhaDoTempo();
  rastroDeEstrelas();
}
