// Comportamentos globais - Brazil Xcursions

function toggleMenu() {
  document.querySelector('nav.main-nav').classList.toggle('open');
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(function () {
    toast.classList.remove('show');
  }, 2600);
}

// Marca o link de navegação ativo com base no arquivo atual
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  const nl = document.getElementById('newsletter-form');
  if (nl) {
    nl.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Inscrição confirmada! Fique de olho no seu e-mail. 🌊');
      nl.reset();
    });
  }

  ajustarAlturaTopbar();
  window.addEventListener('resize', ajustarAlturaTopbar);
});

// A faixa verde do topo (topbar) e o cabeçalho ficam fixos ao rolar a página.
// Como a topbar pode quebrar em 2 linhas em telas estreitas (e-mail + bandeiras),
// medimos a altura real dela e passamos para o CSS via variável, em vez de um
// valor fixo — assim o cabeçalho sempre encosta certinho embaixo da topbar.
function ajustarAlturaTopbar() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  document.documentElement.style.setProperty('--topbar-h', topbar.offsetHeight + 'px');
}

// ============================================================
// MENU PRINCIPAL (textos traduzidos + submenus de Passeios e Serviços)
// Chame atualizarMenuPrincipal() sempre que o idioma mudar.
// ============================================================
var MENU_SERVICOS_T = {
  pt: ['Serviços', 'Aluguel de bicicleta', 'Aluguel de moto', 'Transfers', 'Massagem'],
  en: ['Services', 'Bike rental', 'Motorbike rental', 'Transfers', 'Massage'],
  es: ['Servicios', 'Alquiler de bicicletas', 'Alquiler de motos', 'Traslados', 'Masajes'],
  fr: ['Services', 'Location de vélos', 'Location de motos', 'Transferts', 'Massage'],
  de: ['Services', 'Fahrradverleih', 'Motorradverleih', 'Transfers', 'Massage']
};

function atualizarMenuPrincipal() {
  if (!document.querySelector('nav.main-nav')) return;
  var lang = (typeof obterIdioma === 'function') ? obterIdioma() : (localStorage.getItem('idioma') || 'pt');

  var MENU_FB = {
    'nav-passeios': { pt: 'Passeios', en: 'Tours', es: 'Paseos', fr: 'Excursions', de: 'Ausflüge' },
    'nav-contato': { pt: 'Contato', en: 'Contact', es: 'Contacto', fr: 'Contact', de: 'Kontakt' }
  };
  var textos = { 'nav-passeios': 'menu.passeios', 'nav-contato': 'menu.contato' };
  Object.keys(textos).forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var t = (typeof tInterface === 'function') ? tInterface(textos[id]) : null;
    el.textContent = (t && t !== textos[id]) ? t : (MENU_FB[id][lang] || MENU_FB[id].pt);
  });

  var sv = MENU_SERVICOS_T[lang] || MENU_SERVICOS_T.pt;
  var svIcones = { 'sv-bicicleta': 'assets/bike.png', 'sv-moto': 'assets/moto.png', 'sv-transfers': 'assets/van.png', 'sv-massagem': 'assets/maca.png' };
  ['nav-servicos', 'sv-bicicleta', 'sv-moto', 'sv-transfers', 'sv-massagem'].forEach(function (id, i) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = (svIcones[id] ? '<img src="' + svIcones[id] + '" alt="">' : '') + sv[i];
  });

  var navCats = document.getElementById('nav-cats');
  if (navCats) {
    Promise.resolve(typeof pacotesDoSite === 'function' ? pacotesDoSite() : []).then(function (lista) {
      var usadas = {};
      (lista || []).forEach(function (p) { usadas[p.categoria] = true; });
      var itens = [];
      if (typeof CATEGORIAS !== 'undefined') {
        Object.keys(CATEGORIAS).forEach(function (key) {
          if (!usadas[key]) return;
          var cat = CATEGORIAS[key];
          var lb = cat.label; lb = (lb && lb[lang]) || (lb && lb.pt) || key;
          lb = lb.charAt(0).toUpperCase() + lb.slice(1).toLowerCase();
          var ic = cat.img ? '<img src="' + cat.img + '" alt="">' : (cat.icon + ' ');
          itens.push('<a href="index.html?categoria=' + encodeURIComponent(key) + '">' + ic + lb + '</a>');
        });
      }
      navCats.innerHTML = itens.join('');
    }).catch(function () {});
  }
}

document.addEventListener('DOMContentLoaded', atualizarMenuPrincipal);
document.addEventListener('idiomaAlterado', atualizarMenuPrincipal);
