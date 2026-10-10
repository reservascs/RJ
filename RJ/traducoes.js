// traducoes.js — funções de internacionalização
// Depende de: TRADUCOES_INTERFACE e IDIOMAS (definidos em data.js)

var idiomaAtual = 'pt';

function obterIdioma() {
  return idiomaAtual;
}

function definirIdioma(lang) {
  if (!IDIOMAS[lang]) return;
  idiomaAtual = lang;
  localStorage.setItem('idioma', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = IDIOMAS[lang].dir || 'ltr';
  document.dispatchEvent(new CustomEvent('idiomaAlterado', { detail: { idioma: lang } }));
}

/**
 * Retorna a string traduzida da interface.
 * Suporta notação de ponto: tInterface('menu.inicio'), tInterface('footer.sobre'), etc.
 */
function tInterface(chave) {
  var lang = obterIdioma();
  var traducoes = (typeof TRADUCOES_INTERFACE !== 'undefined' && TRADUCOES_INTERFACE[lang])
    ? TRADUCOES_INTERFACE[lang]
    : (typeof TRADUCOES_INTERFACE !== 'undefined' ? TRADUCOES_INTERFACE['pt'] : null);

  if (!traducoes) return chave;

  var partes = chave.split('.');
  var valor = traducoes;
  for (var i = 0; i < partes.length; i++) {
    if (valor == null || typeof valor !== 'object') return chave;
    valor = valor[partes[i]];
  }
  return (valor != null && typeof valor !== 'object') ? valor : chave;
}

/**
 * Retorna o valor traduzido de um campo de pacote (titulo, descricao, etc.)
 * O campo pode ser string simples ou objeto {pt, en, es, fr, de}.
 */
function tPacote(campo) {
  if (!campo) return '';
  if (typeof campo === 'string') return campo;
  var lang = obterIdioma();
  return campo[lang] || campo['pt'] || '';
}

/**
 * Retorna o valor traduzido de um campo de post do blog (titulo, resumo, conteudo...).
 * Posts guardam a tradução em campos com sufixo "_<idioma>" (ex.: titulo_de, resumo_en).
 * Se a tradução para o idioma atual não existir, cai de volta pro campo em português.
 */
function tPost(post, campo) {
  if (!post) return '';
  var lang = obterIdioma();
  if (lang !== 'pt' && post[campo + '_' + lang] != null) return post[campo + '_' + lang];
  return post[campo];
}

// Inicializa idioma salvo no localStorage antes do DOMContentLoaded
(function() {
  var salvo = localStorage.getItem('idioma');
  if (salvo && typeof IDIOMAS !== 'undefined' && IDIOMAS[salvo]) {
    idiomaAtual = salvo;
    document.documentElement.lang = salvo;
    document.documentElement.dir = IDIOMAS[salvo].dir || 'ltr';
  }
})();

/**
 * Retorna um clone do pacote com todos os campos traduzíveis
 * resolvidos para o idioma atual (string simples).
 * Seguro chamar quantas vezes quiser — não muta o original.
 */
function getPacoteTraduzido(id) {
  var lista = typeof PACOTES !== 'undefined' ? PACOTES : [];
  var p = lista.find(function(x) { return x.id === id; });
  if (!p) return null;

  var lang = obterIdioma();

  function r(campo) {
    if (!campo) return '';
    if (typeof campo === 'string') return campo;
    return campo[lang] || campo['pt'] || '';
  }

  // categoriaLabel no idioma certo
  var catLabel = p.categoriaLabel || '';
  if (typeof CATEGORIAS !== 'undefined' && CATEGORIAS[p.categoria]) {
    var cl = CATEGORIAS[p.categoria].label;
    catLabel = (cl && typeof cl === 'object') ? (cl[lang] || cl['pt'] || catLabel) : (cl || catLabel);
  }

  // inclusos / naoInclusos: array ou objeto {pt,en,...}
  function resolveArray(campo) {
    if (!campo) return [];
    if (Array.isArray(campo)) return campo;
    return campo[lang] || campo['pt'] || [];
  }

  return Object.assign({}, p, {
    titulo:        r(p.titulo),
    tagline:       r(p.tagline),
    descricao:     r(p.descricao),
    duracao:       r(p.duracao),
    categoriaLabel: catLabel,
    precoDisplay:  p.preco || (typeof tInterface === 'function' ? tInterface('pacote.sobConsulta') : 'Sob consulta'),
    inclusos:      resolveArray(p.inclusos),
    naoInclusos:   resolveArray(p.naoInclusos),
  });
}
