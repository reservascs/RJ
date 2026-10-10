// Funções de renderização compartilhadas (cards de pacote) - Brazil Xcursions

// Escopo do site: SÓ passeios desta UF aparecem (catálogo + página de pacote).
var SITE_UF = 'RJ';
function pacotesDoSite(){ return (typeof PACOTES!=='undefined'?PACOTES:[]).filter(function(p){return p.uf===SITE_UF;}); }
function pacoteEhDoSite(p){ return !!p && p.uf===SITE_UF; }

// Resolve campo traduzível (string ou {pt,en,...}) no idioma atual
function tP(campo) {
  if (!campo) return '';
  if (typeof campo === 'string') return campo;
  var lang = (typeof obterIdioma === 'function') ? obterIdioma() : 'pt';
  return campo[lang] || campo['pt'] || '';
}

// Resolve categoriaLabel no idioma atual
function getCategoriaLabel(p) {
  if (!p.categoria || typeof CATEGORIAS === 'undefined') return p.categoriaLabel || '';
  var cat = CATEGORIAS[p.categoria];
  if (!cat) return p.categoriaLabel || p.categoria;
  if (typeof cat.label === 'object') {
    var lang = (typeof obterIdioma === 'function') ? obterIdioma() : 'pt';
    return cat.label[lang] || cat.label['pt'] || p.categoriaLabel || '';
  }
  return cat.label || p.categoriaLabel || '';
}

// Resolve precoDisplay no idioma atual (sob consulta traduzido)
function getPrecoDisplay(p) {
  if (p.preco) return p.preco;
  return (typeof tInterface === 'function') ? tInterface('pacote.sobConsulta') : 'Sob consulta';
}

function pacoteCardHTML(p) {
  var titulo     = tP(p.titulo);
  var tagline    = tP(p.tagline);
  var duracao    = tP(p.duracao);
  var catLabel   = getCategoriaLabel(p);
  var preco      = getPrecoDisplay(p);
  var href       = p.link || ('pacote.html?id=' + p.id);
  var catBadge   = p.categoriaImg
    ? '<img class="badge-cat-ic" src="' + p.categoriaImg + '" alt="" aria-hidden="true"> '
    : (p.categoriaIcon || '') + ' ';

  return (
    '<div class="pacote-card">' +
      '<div class="card-img">' +
        '<a href="' + href + '" style="display:block;width:100%;height:100%;">' +
          '<img src="' + p.imagemCapa + '" alt="' + titulo + '" loading="lazy">' +
        '</a>' +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-category">' + catBadge + catLabel + '</span>' +
        '<h3 class="card-title">' + titulo + '</h3>' +
        '<p class="card-desc">' + tagline + '</p>' +
        '<div class="card-meta"><span>⏱ ' + duracao + '</span></div>' +
        '<a href="' + href + '" class="btn">' +
          '<span class="btn-default"><small class="btn-label">' + ((typeof tInterface === 'function') ? tInterface('pacote.aPartirDe') : 'A partir de') + '</small> <strong class="btn-price">' + preco + '</strong></span>' +
          '<span class="btn-hover">' + ((typeof tInterface === 'function') ? tInterface('pacote.verDetalhes') : 'ver detalhes') + '</span>' +
        '</a>' +
      '</div>' +
    '</div>'
  );
}

function renderPacoteGrid(containerId, lista) {
  var el = document.getElementById(containerId);
  if (!el) return;
  if (!lista || !lista.length) {
    var titulo   = (typeof tInterface === 'function') ? tInterface('empty.titulo') : 'Nenhum passeio encontrado';
    var descricao = (typeof tInterface === 'function') ? tInterface('empty.desc') : 'Tente ajustar os filtros de busca.';
    el.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><h3>' + titulo + '</h3><p>' + descricao + '</p></div>';
    return;
  }
  el.innerHTML = lista.map(pacoteCardHTML).join('');
}
