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
