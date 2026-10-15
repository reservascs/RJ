// Dados dos pacotes turísticos - Brazil Xcursions
// Gerado a partir do conteúdo real dos sites casasaoconrado.com e brazilxcursions.com
// COM SUPORTE MULTILÍNGUE (PT, EN, ES, FR, DE)

// ============================================================
// 1. IDIOMAS DISPONÍVEIS
// ============================================================
const IDIOMAS = {
  'pt': { 
    nome: 'Português', 
    bandeira: '🇧🇷', 
    codigo: 'pt',
    hreflang: 'pt-BR',
    dir: 'ltr'
  },
  'en': { 
    nome: 'English', 
    bandeira: '🇬🇧', 
    codigo: 'en',
    hreflang: 'en-US',
    dir: 'ltr'
  },
  'es': { 
    nome: 'Español', 
    bandeira: '🇪🇸', 
    codigo: 'es',
    hreflang: 'es-ES',
    dir: 'ltr'
  },
  'fr': { 
    nome: 'Français', 
    bandeira: '🇫🇷', 
    codigo: 'fr',
    hreflang: 'fr-FR',
    dir: 'ltr'
  },
  'de': { 
    nome: 'Deutsch', 
    bandeira: '🇩🇪', 
    codigo: 'de',
    hreflang: 'de-DE',
    dir: 'ltr'
  }
};

// ============================================================
// 2. TRADUÇÕES DA INTERFACE
// ============================================================
const TRADUCOES_INTERFACE = {
  'pt': {
    whatsapp: '✆ +55 21 97368-8693 (WhatsApp)',
    email: 'turismocsc@casasaoconrado.com',
    menu: {
      inicio: 'Início',
      passeios: 'Passeios',
      mapa: 'Mapa',
      blog: 'Blog',
      contato: 'Contato'
    },
    carrinho: {
      menu: '<img src="assets/carrinho.png" style="height:1.2em;vertical-align:middle;margin-right:4px;"> Carrinho',
      titulo: 'Meu Carrinho — Brazil Xcursions',
      tituloPagina: 'Meu carrinho',
      breadcrumb: 'Carrinho',
      voltar: '← Voltar',
      participantes: 'Participantes',
      remover: 'Remover',
      adicionarOutro: '+ Adicionar outro passeio',
      resumo: 'Resumo do pedido',
      passeios: 'Passeios',
      taxaServico: 'Taxa de serviço',
      gratis: 'Grátis',
      total: 'Total',
      finalizar: 'Finalizar compra →',
      ambienteSeguro: '🔒 Ambiente de compra seguro',
      vazioTitulo: 'Seu carrinho está vazio',
      vazioTexto: 'Explore nossos passeios e adicione sua próxima aventura.',
      verPasseios: 'Ver passeios'
    },
    filtros: {
      buscar: 'Buscar por nome...',
      qualquerPreco: 'Qualquer preço',
      todasCategorias: 'Todas as categorias',
      ate200: 'Até R$ 200',
      de200a600: 'R$ 200 – R$ 600',
      de600a1500: 'R$ 600 – R$ 1.500',
      acima1500: 'Acima de R$ 1.500',
      ordenar: 'Ordenar por relevância',
      menorPreco: 'Menor preço',
      maiorPreco: 'Maior preço',
      az: 'Nome (A-Z)',
      encontrados: 'passeio(s) encontrado(s)'
    },
    hero: {
      titulo: 'Explore o Brasil em toda sua diversidade',
      subtitulo: 'Trilhas, praias, cultura e aventura em todas as regiões do país'
    },
    catalogo: {
      titulo: 'Descubra todos os encantos do Rio de Janeiro'
    },
    pacote: {
      porPessoa: 'por pessoa',
      sobre: 'Sobre esta experiência',
      incluso: 'O que está incluso',
      naoIncluso: 'O que não está incluso',
      videos: 'Vídeos',
      reservar: 'Reservar agora',
      verExpedicoes: 'Ver as 3 expedições',
      whatsapp: '💬 Falar no WhatsApp',
      pagamentoSeguro: '🔒 Pagamento seguro • Cancelamento facilitado',
      guiasCredenciados: '🪶 Guias credenciados • Grupos reduzidos',
      expedicoes: 'Expedições 2026',
      expedicoesSubtitulo: 'Três saídas guiadas, cada uma numa região do Brasil. Escolha a sua e reserve.',
      verReservar: 'Ver e reservar →',
      dataPasseio: 'Data do passeio',
      participantes: 'Participantes',
      subtotal: 'Subtotal',
      adicionarCarrinho: 'Adicionar ao carrinho',
      irCarrinho: 'Ir para o carrinho',
      sobConsulta: 'Sob consulta',
      expedicaoGuia: 'Expedições guiadas',
      expedicaoDesc: '3 saídas em 2026, em parceria com a Brazil Birding Experts. Grupos pequenos, guias especialistas e tudo organizado do início ao fim.',
      voceTambemPodeGostar: 'Você também pode gostar',
      destaquesSub: 'Uma seleção dos nossos passeios favoritos, escolhidos pela equipe Brazil Xcursions.',
      combineSuaViagem: 'Combine sua viagem',
      aPartirDe: 'A partir de',
      verDetalhes: 'ver detalhes'
    },
    breadcrumb: {
      inicio: 'Início',
      passeios: 'Passeios'
    },
    footer: {
      sobre: 'Sua base no Rio de Janeiro para viver experiências autênticas: praias, trilhas, aventura e cultura carioca, tudo em um só lugar.',
      explorar: 'Explorar',
      todosPasseios: 'Todos os passeios',
      blog: 'Blog',
      trilhas: 'Trilhas & Trekking',
      praias: 'Praia & Ilhas',
      parceiros: 'Parceiros',
      sejaParceiro: 'Seja um parceiro',
      cadastrarPasseio: 'Cadastrar um passeio',
      contato: 'Contato',
      endereco: 'Rua Coronel Ribeiro Gomes, 328<br>São Conrado, Rio de Janeiro - RJ',
      direitos: '© 2026 Brazil Xcursions. Todos os direitos reservados.',
      cnpj: 'Protótipo de e-commerce — Maxifor Serviços Empresariais Ltda. — CNPJ 08.575.101/0001-00'
    },
    empty: {
      titulo: 'Passeio não encontrado',
      descricao: 'O passeio que você procura não existe ou foi removido.',
      verCatalogo: 'Ver catálogo completo'
    },
    toast: {
      adicionado: '✓ Adicionado ao carrinho: '
    },
    expedicao: {
      regiao: 'Região',
      local: 'Local',
      habitats: 'Habitats',
      datas: 'Datas',
      duracao: 'Duração',
      dificuldade: 'Dificuldade',
      guia: 'Guia',
      grupoMax: 'Grupo máximo',
      preco: 'Preço',
      suplemento: 'Suplemento',
      especies: 'Espécies alvo',
      sobre: 'Sobre esta expedição',
      reservar: 'Reservar vaga',
      whatsapp: '💬 Falar com especialista',
      media: 'Média',
      baixa: 'Baixa',
      alta: 'Alta'
    },
    carrossel: {
      passeioLabel: 'Passeio',
      blogLabel: 'Blog',
      verPasseio: 'Ver este passeio',
      lerBlog: 'Ler no blog'
    },
    mapa: { titulo: 'EXPLORE O BRASIL', regioes: { norte: 'Norte', nordeste: 'Nordeste', centroOeste: 'Centro-Oeste', sudeste: 'Sudeste', sul: 'Sul' } },
    categorias: {
      label: 'Categorias',
      titulo: 'Encontre sua próxima aventura'
    },
    blog: {
      metaDescricao: 'Guias, dicas e histórias sobre os destinos brasileiros que fazem parte do nosso catálogo de passeios.',
      heroFrase: 'Uma jornada de descobertas e experiências em variados biomas e ecossistemas',
      buscaPlaceholder: '🔍 Buscar no blog…',
      ctaTitulo: 'Não perca o próximo destino',
      ctaTexto: 'Assine nossa newsletter e receba novos guias de viagem direto no seu e-mail.',
      ctaEmailPlaceholder: 'seu@email.com',
      ctaBotao: 'Assinar',
      semResultados: 'Nenhum post encontrado para sua busca.',
      mapaCardLocal: 'Brasil — Explore o mapa',
      mapaCardTag: 'Mapa',
      mapaCardTexto: 'Clique num estado e descubra os destinos, curiosidades e os passeios disponíveis.',
      regioes: {
        Norte: 'Norte',
        Nordeste: 'Nordeste',
        'Centro-Oeste': 'Centro-Oeste',
        Sudeste: 'Sudeste',
        Sul: 'Sul'
      }
    },
    mapa: {
      metaDescricao: 'Explore o Brasil no mapa interativo da Brazil Xcursions: clique em um estado e descubra os destinos mais incríveis do país',
      breadcrumbAtual: 'Mapa do Brasil',
      introTitulo: 'Veja no mapa destinos incríveis, curiosidades e tours disponíveis para sua expedição',
      passeiosAqui: 'Passeios Brazil Xcursions aqui',
      leiaNoBlog: 'Leia no blog',
      tourTag: 'Tour',
      blogTag: 'Blog',
      erroCarregar: '⚠️ Não foi possível carregar o mapa agora.'
    }
  },
  'en': {
    whatsapp: '✆ +55 21 97368-8693 (WhatsApp)',
    email: 'turismocsc@casasaoconrado.com',
    menu: {
      inicio: 'Home',
      passeios: 'Tours',
      mapa: 'Map',
      blog: 'Blog',
      contato: 'Contact'
    },
    carrinho: {
      menu: '<img src="assets/carrinho.png" style="height:1.2em;vertical-align:middle;margin-right:4px;"> Cart',
      titulo: 'My Cart — Brazil Xcursions',
      tituloPagina: 'My cart',
      breadcrumb: 'Cart',
      voltar: '← Back',
      participantes: 'Participants',
      remover: 'Remove',
      adicionarOutro: '+ Add another tour',
      resumo: 'Order summary',
      passeios: 'Tours',
      taxaServico: 'Service fee',
      gratis: 'Free',
      total: 'Total',
      finalizar: 'Checkout →',
      ambienteSeguro: '🔒 Secure shopping environment',
      vazioTitulo: 'Your cart is empty',
      vazioTexto: 'Explore our tours and add your next adventure.',
      verPasseios: 'View tours'
    },
    filtros: {
      buscar: 'Search by name...',
      qualquerPreco: 'Any price',
      todasCategorias: 'All categories',
      ate200: 'Up to R$ 200',
      de200a600: 'R$ 200 – R$ 600',
      de600a1500: 'R$ 600 – R$ 1,500',
      acima1500: 'Above R$ 1,500',
      ordenar: 'Sort by relevance',
      menorPreco: 'Lowest price',
      maiorPreco: 'Highest price',
      az: 'Name (A-Z)',
      encontrados: 'tour(s) found'
    },
    hero: {
      titulo: 'Explore Brazil in all its diversity',
      subtitulo: 'Hiking, beaches, culture and adventure across every region of the country'
    },
    catalogo: {
      titulo: 'Discover all the charms of Rio de Janeiro'
    },
    pacote: {
      porPessoa: 'per person',
      sobre: 'About this experience',
      incluso: "What's included",
      naoIncluso: "What's not included",
      videos: 'Videos',
      reservar: 'Book now',
      verExpedicoes: 'View all 3 expeditions',
      whatsapp: '💬 Chat on WhatsApp',
      pagamentoSeguro: '🔒 Secure payment • Easy cancellation',
      guiasCredenciados: '🪶 Accredited guides • Small groups',
      expedicoes: '2026 Expeditions',
      expedicoesSubtitulo: 'Three guided departures, each in a different region of Brazil. Choose yours and book.',
      verReservar: 'View and book →',
      dataPasseio: 'Tour date',
      participantes: 'Participants',
      subtotal: 'Subtotal',
      adicionarCarrinho: 'Add to cart',
      irCarrinho: 'Go to cart',
      sobConsulta: 'Upon request',
      expedicaoGuia: 'Guided expeditions',
      expedicaoDesc: '3 departures in 2026, in partnership with Brazil Birding Experts. Small groups, specialist guides and everything organized from start to finish.',
      voceTambemPodeGostar: 'You might also like',
      destaquesSub: 'A selection of our favourite tours, handpicked by the Brazil Xcursions team.',
      combineSuaViagem: 'Combine your trip',
      aPartirDe: 'From',
      verDetalhes: 'view details'
    },
    breadcrumb: {
      inicio: 'Home',
      passeios: 'Tours'
    },
    footer: {
      sobre: 'Your base in Rio de Janeiro for authentic experiences: beaches, hiking, adventure and carioca culture, all in one place.',
      explorar: 'Explore',
      todosPasseios: 'All tours',
      blog: 'Blog',
      trilhas: 'Hiking & Trekking',
      praias: 'Beach & Islands',
      parceiros: 'Partners',
      sejaParceiro: 'Become a partner',
      cadastrarPasseio: 'Register a tour',
      contato: 'Contact',
      endereco: 'Rua Coronel Ribeiro Gomes, 328<br>São Conrado, Rio de Janeiro - RJ',
      direitos: '© 2026 Brazil Xcursions. All rights reserved.',
      cnpj: 'E-commerce prototype — Maxifor Serviços Empresariais Ltda. — CNPJ 08.575.101/0001-00'
    },
    empty: {
      titulo: 'Tour not found',
      descricao: 'The tour you are looking for does not exist or has been removed.',
      verCatalogo: 'View full catalog'
    },
    toast: {
      adicionado: '✓ Added to cart: '
    },
    expedicao: {
      regiao: 'Region',
      local: 'Location',
      habitats: 'Habitats',
      datas: 'Dates',
      duracao: 'Duration',
      dificuldade: 'Difficulty',
      guia: 'Guide',
      grupoMax: 'Max group',
      preco: 'Price',
      suplemento: 'Single supplement',
      especies: 'Target species',
      sobre: 'About this expedition',
      reservar: 'Book a spot',
      whatsapp: '💬 Chat with an expert',
      media: 'Moderate',
      baixa: 'Low',
      alta: 'High'
    },
    carrossel: {
      passeioLabel: 'Tour',
      blogLabel: 'Blog',
      verPasseio: 'View this tour',
      lerBlog: 'Read on the blog'
    },
    mapa: { titulo: 'EXPLORE BRAZIL', regioes: { norte: 'North', nordeste: 'Northeast', centroOeste: 'Midwest', sudeste: 'Southeast', sul: 'South' } },
    categorias: {
      label: 'Categories',
      titulo: 'Find your next adventure'
    },
    blog: {
      metaDescricao: 'Guides, tips and stories about the Brazilian destinations in our tour catalog.',
      heroFrase: "A journey of discovery and experiences across Brazil's varied biomes and ecosystems",
      buscaPlaceholder: '🔍 Search the blog…',
      ctaTitulo: "Don't miss the next destination",
      ctaTexto: 'Subscribe to our newsletter and get new travel guides straight to your inbox.',
      ctaEmailPlaceholder: 'you@email.com',
      ctaBotao: 'Subscribe',
      semResultados: 'No posts found for your search.',
      mapaCardLocal: 'Brazil — Explore the map',
      mapaCardTag: 'Map',
      mapaCardTexto: 'Click a state and discover the destinations, curiosities and tours available.',
      regioes: {
        Norte: 'North',
        Nordeste: 'Northeast',
        'Centro-Oeste': 'Midwest',
        Sudeste: 'Southeast',
        Sul: 'South'
      }
    },
    mapa: {
      metaDescricao: "Explore Brazil on Brazil Xcursions' interactive map: click a state and discover the country's most incredible destinations",
      breadcrumbAtual: 'Map of Brazil',
      introTitulo: 'See amazing destinations, curiosities and available tours on the map for your expedition',
      passeiosAqui: 'Brazil Xcursions tours here',
      leiaNoBlog: 'Read on the blog',
      tourTag: 'Tour',
      blogTag: 'Blog',
      erroCarregar: '⚠️ Unable to load the map right now.'
    }
  },
  'es': {
    whatsapp: '✆ +55 21 97368-8693 (WhatsApp)',
    email: 'turismocsc@casasaoconrado.com',
    menu: {
      inicio: 'Inicio',
      passeios: 'Excursiones',
      mapa: 'Mapa',
      blog: 'Blog',
      contato: 'Contacto'
    },
    carrinho: {
      menu: '<img src="assets/carrinho.png" style="height:1.2em;vertical-align:middle;margin-right:4px;"> Carrito',
      titulo: 'Mi Carrito — Brazil Xcursions',
      tituloPagina: 'Mi carrito',
      breadcrumb: 'Carrito',
      voltar: '← Volver',
      participantes: 'Participantes',
      remover: 'Eliminar',
      adicionarOutro: '+ Añadir otra excursión',
      resumo: 'Resumen del pedido',
      passeios: 'Excursiones',
      taxaServico: 'Tasa de servicio',
      gratis: 'Gratis',
      total: 'Total',
      finalizar: 'Finalizar compra →',
      ambienteSeguro: '🔒 Entorno de compra seguro',
      vazioTitulo: 'Tu carrito está vacío',
      vazioTexto: 'Explora nuestras excursiones y añade tu próxima aventura.',
      verPasseios: 'Ver excursiones'
    },
    filtros: {
      buscar: 'Buscar por nombre...',
      qualquerPreco: 'Cualquier precio',
      todasCategorias: 'Todas las categorías',
      ate200: 'Hasta R$ 200',
      de200a600: 'R$ 200 – R$ 600',
      de600a1500: 'R$ 600 – R$ 1.500',
      acima1500: 'Más de R$ 1.500',
      ordenar: 'Ordenar por relevancia',
      menorPreco: 'Menor precio',
      maiorPreco: 'Mayor precio',
      az: 'Nombre (A-Z)',
      encontrados: 'excursión(es) encontrada(s)'
    },
    hero: {
      titulo: 'Explora Brasil en toda su diversidad',
      subtitulo: 'Senderismo, playas, cultura y aventura en todas las regiones del país'
    },
    catalogo: {
      titulo: 'Descubre todos los encantos de Río de Janeiro'
    },
    pacote: {
      porPessoa: 'por persona',
      sobre: 'Sobre esta experiencia',
      incluso: 'Qué está incluido',
      naoIncluso: 'Qué no está incluido',
      videos: 'Videos',
      reservar: 'Reservar ahora',
      verExpedicoes: 'Ver las 3 expediciones',
      whatsapp: '💬 Hablar por WhatsApp',
      pagamentoSeguro: '🔒 Pago seguro • Cancelación fácil',
      guiasCredenciados: '🪶 Guías acreditados • Grupos reducidos',
      expedicoes: 'Expediciones 2026',
      expedicoesSubtitulo: 'Tres salidas guiadas, cada una en una región diferente de Brasil. Elige la tuya y reserva.',
      verReservar: 'Ver y reservar →',
      dataPasseio: 'Fecha del tour',
      participantes: 'Participantes',
      subtotal: 'Subtotal',
      adicionarCarrinho: 'Añadir al carrito',
      irCarrinho: 'Ir al carrito',
      sobConsulta: 'Bajo consulta',
      expedicaoGuia: 'Expediciones guiadas',
      expedicaoDesc: '3 salidas en 2026, en colaboración con Brazil Birding Experts. Grupos pequeños, guías especialistas y todo organizado de principio a fin.',
      voceTambemPodeGostar: 'También te puede gustar',
      destaquesSub: 'Una selección de nuestros paseos favoritos, elegidos por el equipo de Brazil Xcursions.',
      combineSuaViagem: 'Combina tu viaje',
      aPartirDe: 'Desde',
      verDetalhes: 'ver detalles'
    },
    breadcrumb: {
      inicio: 'Inicio',
      passeios: 'Excursiones'
    },
    footer: {
      sobre: 'Tu base en Río de Janeiro para vivir experiencias auténticas: playas, senderismo, aventura y cultura carioca, todo en un solo lugar.',
      explorar: 'Explorar',
      todosPasseios: 'Todas las excursiones',
      blog: 'Blog',
      trilhas: 'Senderismo & Trekking',
      praias: 'Playa & Islas',
      parceiros: 'Socios',
      sejaParceiro: 'Sé un socio',
      cadastrarPasseio: 'Registrar una excursión',
      contato: 'Contacto',
      endereco: 'Rua Coronel Ribeiro Gomes, 328<br>São Conrado, Rio de Janeiro - RJ',
      direitos: '© 2026 Brazil Xcursions. Todos los derechos reservados.',
      cnpj: 'Prototipo de e-commerce — Maxifor Serviços Empresariais Ltda. — CNPJ 08.575.101/0001-00'
    },
    empty: {
      titulo: 'Excursión no encontrada',
      descricao: 'La excursión que buscas no existe o ha sido eliminada.',
      verCatalogo: 'Ver catálogo completo'
    },
    toast: {
      adicionado: '✓ Añadido al carrito: '
    },
    expedicao: {
      regiao: 'Región',
      local: 'Localidad',
      habitats: 'Hábitats',
      datas: 'Fechas',
      duracao: 'Duración',
      dificuldade: 'Dificultad',
      guia: 'Guía',
      grupoMax: 'Grupo máximo',
      preco: 'Precio',
      suplemento: 'Suplemento individual',
      especies: 'Especies objetivo',
      sobre: 'Sobre esta expedición',
      reservar: 'Reservar plaza',
      whatsapp: '💬 Hablar con experto',
      media: 'Media',
      baixa: 'Baja',
      alta: 'Alta'
    },
    carrossel: {
      passeioLabel: 'Excursión',
      blogLabel: 'Blog',
      verPasseio: 'Ver esta excursión',
      lerBlog: 'Leer en el blog'
    },
    mapa: { titulo: 'EXPLORA BRASIL', regioes: { norte: 'Norte', nordeste: 'Noreste', centroOeste: 'Centro-Oeste', sudeste: 'Sureste', sul: 'Sur' } },
    categorias: {
      label: 'Categorías',
      titulo: 'Encuentra tu próxima aventura'
    },
    blog: {
      metaDescricao: 'Guías, consejos e historias sobre los destinos brasileños que forman parte de nuestro catálogo de paseos.',
      heroFrase: 'Un viaje de descubrimientos y experiencias por los variados biomas y ecosistemas de Brasil',
      buscaPlaceholder: '🔍 Buscar en el blog…',
      ctaTitulo: 'No te pierdas el próximo destino',
      ctaTexto: 'Suscríbete a nuestro boletín y recibe nuevas guías de viaje directamente en tu correo.',
      ctaEmailPlaceholder: 'tu@email.com',
      ctaBotao: 'Suscribirme',
      semResultados: 'No se encontraron publicaciones para tu búsqueda.',
      mapaCardLocal: 'Brasil — Explora el mapa',
      mapaCardTag: 'Mapa',
      mapaCardTexto: 'Haz clic en un estado y descubre los destinos, curiosidades y paseos disponibles.',
      regioes: {
        Norte: 'Norte',
        Nordeste: 'Nordeste',
        'Centro-Oeste': 'Centro-Oeste',
        Sudeste: 'Sudeste',
        Sul: 'Sur'
      }
    },
    mapa: {
      metaDescricao: 'Explora Brasil en el mapa interactivo de Brazil Xcursions: haz clic en un estado y descubre los destinos más increíbles del país',
      breadcrumbAtual: 'Mapa de Brasil',
      introTitulo: 'Descubre en el mapa destinos increíbles, curiosidades y paseos disponibles para tu expedición',
      passeiosAqui: 'Paseos de Brazil Xcursions aquí',
      leiaNoBlog: 'Lee en el blog',
      tourTag: 'Paseo',
      blogTag: 'Blog',
      erroCarregar: '⚠️ No se pudo cargar el mapa en este momento.'
    }
  },
  'fr': {
    whatsapp: '✆ +55 21 97368-8693 (WhatsApp)',
    email: 'turismocsc@casasaoconrado.com',
    menu: {
      inicio: 'Accueil',
      passeios: 'Visites',
      mapa: 'Carte',
      blog: 'Blog',
      contato: 'Contact'
    },
    carrinho: {
      menu: '<img src="assets/carrinho.png" style="height:1.2em;vertical-align:middle;margin-right:4px;"> Panier',
      titulo: 'Mon Panier — Brazil Xcursions',
      tituloPagina: 'Mon panier',
      breadcrumb: 'Panier',
      voltar: '← Retour',
      participantes: 'Participants',
      remover: 'Supprimer',
      adicionarOutro: '+ Ajouter une autre visite',
      resumo: 'Récapitulatif de la commande',
      passeios: 'Visites',
      taxaServico: 'Frais de service',
      gratis: 'Gratuit',
      total: 'Total',
      finalizar: 'Finaliser la commande →',
      ambienteSeguro: '🔒 Environnement d\'achat sécurisé',
      vazioTitulo: 'Votre panier est vide',
      vazioTexto: 'Explorez nos visites et ajoutez votre prochaine aventure.',
      verPasseios: 'Voir les visites'
    },
    filtros: {
      buscar: 'Rechercher par nom...',
      qualquerPreco: 'Tout prix',
      todasCategorias: 'Toutes les catégories',
      ate200: "Jusqu'à R$ 200",
      de200a600: 'R$ 200 – R$ 600',
      de600a1500: 'R$ 600 – R$ 1.500',
      acima1500: 'Au-dessus de R$ 1.500',
      ordenar: 'Trier par pertinence',
      menorPreco: 'Prix le plus bas',
      maiorPreco: 'Prix le plus élevé',
      az: 'Nom (A-Z)',
      encontrados: 'visite(s) trouvée(s)'
    },
    hero: {
      titulo: 'Explorez le Brésil dans toute sa diversité',
      subtitulo: 'Randonnée, plages, culture et aventure dans toutes les régions du pays'
    },
    catalogo: {
      titulo: 'Découvrez tous les charmes de Rio de Janeiro'
    },
    pacote: {
      porPessoa: 'par personne',
      sobre: 'À propos de cette expérience',
      incluso: 'Ce qui est inclus',
      naoIncluso: "Ce qui n'est pas inclus",
      videos: 'Vidéos',
      reservar: 'Réserver maintenant',
      verExpedicoes: 'Voir les 3 expéditions',
      whatsapp: '💬 Discuter sur WhatsApp',
      pagamentoSeguro: '🔒 Paiement sécurisé • Annulation facile',
      guiasCredenciados: '🪶 Guides agréés • Petits groupes',
      expedicoes: 'Expéditions 2026',
      expedicoesSubtitulo: 'Trois départs guidés, chacun dans une région différente du Brésil. Choisissez le vôtre et réservez.',
      verReservar: 'Voir et réserver →',
      dataPasseio: 'Date de la visite',
      participantes: 'Participants',
      subtotal: 'Sous-total',
      adicionarCarrinho: 'Ajouter au panier',
      irCarrinho: 'Aller au panier',
      sobConsulta: 'Sur demande',
      expedicaoGuia: 'Expéditions guidées',
      expedicaoDesc: '3 départs en 2026, en partenariat avec Brazil Birding Experts. Petits groupes, guides spécialistes et tout organisé du début à la fin.',
      voceTambemPodeGostar: 'Vous pourriez aussi aimer',
      destaquesSub: 'Une sélection de nos visites préférées, choisies par l\'équipe Brazil Xcursions.',
      combineSuaViagem: 'Combinez votre voyage',
      aPartirDe: 'À partir de',
      verDetalhes: 'voir détails'
    },
    breadcrumb: {
      inicio: 'Accueil',
      passeios: 'Visites'
    },
    footer: {
      sobre: 'Votre base à Rio de Janeiro pour vivre des expériences authentiques : plages, randonnée, aventure et culture carioca, tout en un seul endroit.',
      explorar: 'Explorer',
      todosPasseios: 'Toutes les visites',
      blog: 'Blog',
      trilhas: 'Randonnée & Trekking',
      praias: 'Plage & Îles',
      parceiros: 'Partenaires',
      sejaParceiro: 'Devenir partenaire',
      cadastrarPasseio: 'Enregistrer une visite',
      contato: 'Contact',
      endereco: 'Rua Coronel Ribeiro Gomes, 328<br>São Conrado, Rio de Janeiro - RJ',
      direitos: '© 2026 Brazil Xcursions. Tous droits réservés.',
      cnpj: 'Prototype e-commerce — Maxifor Serviços Empresariais Ltda. — CNPJ 08.575.101/0001-00'
    },
    empty: {
      titulo: 'Visite non trouvée',
      descricao: 'La visite que vous recherchez n\'existe pas ou a été supprimée.',
      verCatalogo: 'Voir le catalogue complet'
    },
    toast: {
      adicionado: '✓ Ajouté au panier : '
    },
    expedicao: {
      regiao: 'Région',
      local: 'Lieu',
      habitats: 'Habitats',
      datas: 'Dates',
      duracao: 'Durée',
      dificuldade: 'Difficulté',
      guia: 'Guide',
      grupoMax: 'Groupe max',
      preco: 'Prix',
      suplemento: 'Supplément individuel',
      especies: 'Espèces cibles',
      sobre: 'À propos de cette expédition',
      reservar: 'Réserver une place',
      whatsapp: '💬 Parler à un expert',
      media: 'Moyenne',
      baixa: 'Faible',
      alta: 'Élevée'
    },
    carrossel: {
      passeioLabel: 'Visite',
      blogLabel: 'Blog',
      verPasseio: 'Voir cette visite',
      lerBlog: 'Lire sur le blog'
    },
    mapa: { titulo: 'EXPLOREZ LE BRÉSIL', regioes: { norte: 'Nord', nordeste: 'Nord-Est', centroOeste: 'Centre-Ouest', sudeste: 'Sud-Est', sul: 'Sud' } },
    categorias: {
      label: 'Catégories',
      titulo: 'Trouvez votre prochaine aventure'
    },
    blog: {
      metaDescricao: 'Guides, conseils et récits sur les destinations brésiliennes de notre catalogue de visites.',
      heroFrase: "Un voyage de découvertes et d'expériences à travers les biomes et écosystèmes variés du Brésil",
      buscaPlaceholder: '🔍 Rechercher dans le blog…',
      ctaTitulo: 'Ne manquez pas la prochaine destination',
      ctaTexto: 'Abonnez-vous à notre newsletter et recevez de nouveaux guides de voyage directement dans votre boîte mail.',
      ctaEmailPlaceholder: 'vous@email.com',
      ctaBotao: "S'abonner",
      semResultados: 'Aucun article trouvé pour votre recherche.',
      mapaCardLocal: 'Brésil — Explorez la carte',
      mapaCardTag: 'Carte',
      mapaCardTexto: 'Cliquez sur un état et découvrez les destinations, curiosités et visites disponibles.',
      regioes: {
        Norte: 'Nord',
        Nordeste: 'Nord-Est',
        'Centro-Oeste': 'Centre-Ouest',
        Sudeste: 'Sud-Est',
        Sul: 'Sud'
      }
    },
    mapa: {
      metaDescricao: 'Explorez le Brésil sur la carte interactive de Brazil Xcursions : cliquez sur un état et découvrez les destinations les plus incroyables du pays',
      breadcrumbAtual: 'Carte du Brésil',
      introTitulo: 'Découvrez sur la carte des destinations incroyables, des curiosités et les visites disponibles pour votre expédition',
      passeiosAqui: 'Visites Brazil Xcursions ici',
      leiaNoBlog: 'Lire sur le blog',
      tourTag: 'Visite',
      blogTag: 'Blog',
      erroCarregar: '⚠️ Impossible de charger la carte pour le moment.'
    }
  },
  'de': {
    whatsapp: '✆ +55 21 97368-8693 (WhatsApp)',
    email: 'turismocsc@casasaoconrado.com',
    menu: {
      inicio: 'Startseite',
      passeios: 'Touren',
      mapa: 'Karte',
      blog: 'Blog',
      contato: 'Kontakt'
    },
    carrinho: {
      menu: '<img src="assets/carrinho.png" style="height:1.2em;vertical-align:middle;margin-right:4px;"> Warenkorb',
      titulo: 'Mein Warenkorb — Brazil Xcursions',
      tituloPagina: 'Mein Warenkorb',
      breadcrumb: 'Warenkorb',
      voltar: '← Zurück',
      participantes: 'Teilnehmer',
      remover: 'Entfernen',
      adicionarOutro: '+ Eine weitere Tour hinzufügen',
      resumo: 'Bestellübersicht',
      passeios: 'Touren',
      taxaServico: 'Servicegebühr',
      gratis: 'Kostenlos',
      total: 'Gesamt',
      finalizar: 'Zur Kasse →',
      ambienteSeguro: '🔒 Sichere Einkaufsumgebung',
      vazioTitulo: 'Ihr Warenkorb ist leer',
      vazioTexto: 'Entdecken Sie unsere Touren und fügen Sie Ihr nächstes Abenteuer hinzu.',
      verPasseios: 'Touren ansehen'
    },
    filtros: {
      buscar: 'Nach Name suchen...',
      qualquerPreco: 'Jeder Preis',
      todasCategorias: 'Alle Kategorien',
      ate200: 'Bis R$ 200',
      de200a600: 'R$ 200 – R$ 600',
      de600a1500: 'R$ 600 – R$ 1.500',
      acima1500: 'Über R$ 1.500',
      ordenar: 'Sortieren nach Relevanz',
      menorPreco: 'Niedrigster Preis',
      maiorPreco: 'Höchster Preis',
      az: 'Name (A-Z)',
      encontrados: 'Tour(s) gefunden'
    },
    hero: {
      titulo: 'Entdecken Sie Brasilien in seiner ganzen Vielfalt',
      subtitulo: 'Wandern, Strände, Kultur und Abenteuer in allen Regionen des Landes'
    },
    catalogo: {
      titulo: 'Entdecken Sie alle Reize von Rio de Janeiro'
    },
    pacote: {
      porPessoa: 'pro Person',
      sobre: 'Über dieses Erlebnis',
      incluso: 'Was inbegriffen ist',
      naoIncluso: 'Was nicht inbegriffen ist',
      videos: 'Videos',
      reservar: 'Jetzt buchen',
      verExpedicoes: 'Alle 3 Expeditionen ansehen',
      whatsapp: '💬 Auf WhatsApp chatten',
      pagamentoSeguro: '🔒 Sichere Zahlung • Einfache Stornierung',
      guiasCredenciados: '🪶 Akkreditierte Guides • Kleine Gruppen',
      expedicoes: 'Expeditionen 2026',
      expedicoesSubtitulo: 'Drei geführte Abfahrten, jede in einer anderen Region Brasiliens. Wählen Sie Ihre und buchen Sie.',
      verReservar: 'Ansehen und buchen →',
      dataPasseio: 'Tourdatum',
      participantes: 'Teilnehmer',
      subtotal: 'Zwischensumme',
      adicionarCarrinho: 'In den Warenkorb',
      irCarrinho: 'Zum Warenkorb',
      sobConsulta: 'Auf Anfrage',
      expedicaoGuia: 'Geführte Expeditionen',
      expedicaoDesc: '3 Abfahrten in 2026, in Partnerschaft mit Brazil Birding Experts. Kleine Gruppen, spezialisierte Guides und alles von Anfang bis Ende organisiert.',
      voceTambemPodeGostar: 'Das könnte Ihnen auch gefallen',
      destaquesSub: 'Eine Auswahl unserer Lieblingstouren, zusammengestellt vom Team Brazil Xcursions.',
      combineSuaViagem: 'Kombinieren Sie Ihre Reise',
      aPartirDe: 'Ab',
      verDetalhes: 'details ansehen'
    },
    breadcrumb: {
      inicio: 'Startseite',
      passeios: 'Touren'
    },
    footer: {
      sobre: 'Ihre Basis in Rio de Janeiro für authentische Erlebnisse: Strände, Wandern, Abenteuer und Carioca-Kultur, alles an einem Ort.',
      explorar: 'Entdecken',
      todosPasseios: 'Alle Touren',
      blog: 'Blog',
      trilhas: 'Wandern & Trekking',
      praias: 'Strände & Inseln',
      parceiros: 'Partner',
      sejaParceiro: 'Partner werden',
      cadastrarPasseio: 'Eine Tour registrieren',
      contato: 'Kontakt',
      endereco: 'Rua Coronel Ribeiro Gomes, 328<br>São Conrado, Rio de Janeiro - RJ',
      direitos: '© 2026 Brazil Xcursions. Alle Rechte vorbehalten.',
      cnpj: 'E-Commerce-Prototyp — Maxifor Serviços Empresariais Ltda. — CNPJ 08.575.101/0001-00'
    },
    empty: {
      titulo: 'Tour nicht gefunden',
      descricao: 'Die Tour, die Sie suchen, existiert nicht oder wurde entfernt.',
      verCatalogo: 'Vollständigen Katalog anzeigen'
    },
    toast: {
      adicionado: '✓ In den Warenkorb gelegt: '
    },
    expedicao: {
      regiao: 'Region',
      local: 'Ort',
      habitats: 'Lebensräume',
      datas: 'Termine',
      duracao: 'Dauer',
      dificuldade: 'Schwierigkeit',
      guia: 'Guide',
      grupoMax: 'Max. Gruppe',
      preco: 'Preis',
      suplemento: 'Einzelzimmerzuschlag',
      especies: 'Zielarten',
      sobre: 'Über diese Expedition',
      reservar: 'Platz buchen',
      whatsapp: '💬 Mit Experte sprechen',
      media: 'Mittel',
      baixa: 'Niedrig',
      alta: 'Hoch'
    },
    carrossel: {
      passeioLabel: 'Tour',
      blogLabel: 'Blog',
      verPasseio: 'Diese Tour ansehen',
      lerBlog: 'Im Blog lesen'
    },
    mapa: { titulo: 'BRASILIEN ENTDECKEN', regioes: { norte: 'Norden', nordeste: 'Nordosten', centroOeste: 'Mittelwesten', sudeste: 'Südosten', sul: 'Süden' } },
    categorias: {
      label: 'Kategorien',
      titulo: 'Finde dein nächstes Abenteuer'
    },
    blog: {
      metaDescricao: 'Reiseführer, Tipps und Geschichten über die brasilianischen Reiseziele aus unserem Tourenkatalog.',
      heroFrase: 'Eine Reise voller Entdeckungen und Erlebnisse in verschiedenen Biomen und Ökosystemen',
      buscaPlaceholder: '🔍 Blog durchsuchen…',
      ctaTitulo: 'Verpassen Sie nicht das nächste Reiseziel',
      ctaTexto: 'Abonnieren Sie unseren Newsletter und erhalten Sie neue Reiseführer direkt in Ihr Postfach.',
      ctaEmailPlaceholder: 'ihre@email.com',
      ctaBotao: 'Abonnieren',
      semResultados: 'Keine Beiträge für Ihre Suche gefunden.',
      mapaCardLocal: 'Brasilien — Karte erkunden',
      mapaCardTag: 'Karte',
      mapaCardTexto: 'Klicken Sie auf ein Bundesland und entdecken Sie die Reiseziele, Kuriositäten und verfügbaren Touren.',
      regioes: {
        Norte: 'Norden',
        Nordeste: 'Nordosten',
        'Centro-Oeste': 'Mittelwesten',
        Sudeste: 'Südosten',
        Sul: 'Süden'
      }
    },
    mapa: {
      metaDescricao: 'Entdecken Sie Brasilien auf der interaktiven Karte von Brazil Xcursions: Klicken Sie auf ein Bundesland und entdecken Sie die unglaublichsten Reiseziele des Landes',
      breadcrumbAtual: 'Karte von Brasilien',
      introTitulo: 'Entdecken Sie auf der Karte unglaubliche Reiseziele, Kuriositäten und verfügbare Touren für Ihre Expedition',
      passeiosAqui: 'Brazil Xcursions Touren hier',
      leiaNoBlog: 'Im Blog lesen',
      tourTag: 'Tour',
      blogTag: 'Blog',
      erroCarregar: '⚠️ Die Karte kann derzeit nicht geladen werden.'
    }
  }
};

// ============================================================
// 3. CATEGORIAS COM TRADUÇÕES
// ============================================================
const CATEGORIAS = {
  'praia/ilha': { 
    label: { pt: 'Praia & Ilhas', en: 'Beach & Islands', es: 'Playa & Islas', fr: 'Plage & Îles', de: 'Strände & Inseln' },
    icon: '🏝️', 
    img: 'assets/ic-praia-ilhas.png' 
  },
  'aventura/adrenalina': { 
    label: { pt: 'Aventura & Adrenalina', en: 'Adventure & Adrenaline', es: 'Aventura & Adrenalina', fr: 'Aventure & Adrénaline', de: 'Abenteuer & Adrenalin' },
    icon: '🪂', 
    img: 'assets/ic-aventura-adrenalina.png' 
  },
  'trilha/trekking': { 
    label: { pt: 'Trilhas & Trekking', en: 'Hiking & Trekking', es: 'Senderismo & Trekking', fr: 'Randonnée & Trekking', de: 'Wandern & Trekking' },
    icon: '🥾', 
    img: 'assets/ic-trilhas-trekking.png' 
  },
  'cultura/cidade': { 
    label: { pt: 'Cultura & Cidade', en: 'Culture & City', es: 'Cultura & Ciudad', fr: 'Culture & Ville', de: 'Kultur & Stadt' },
    icon: '🏙️', 
    img: 'assets/ic-cultura-cidade.png' 
  },
  'natureza': { 
    label: { pt: 'Natureza & Expedições', en: 'Nature & Expeditions', es: 'Naturaleza & Expediciones', fr: 'Nature & Expéditions', de: 'Natur & Expeditionen' },
    icon: '🌿', 
    img: 'assets/ic-natureza-expedicoes.png' 
  }
};

// ============================================================
// 4. PACOTES COM TRADUÇÕES (13 de 20 — aguardando Parte 2 e Parte 3 de Stan)
// ============================================================
const PACOTES = [
  {
    "id": "parasail",
    "linkPagamento": "https://brazilxcursions.com/passeio/voo-de-parasail",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/d_c5uf8P9vA"],
    "titulo": {
      pt: "Parasail no Rio de Janeiro",
      en: "Parasail over Rio de Janeiro",
      es: "Parasail en Río de Janeiro",
      fr: "Parasail à Rio de Janeiro",
      de: "Parasail über Rio de Janeiro"
    },
    "categoria": "aventura/adrenalina",
    "tagline": {
      pt: "Suba aos céus rebocado por lancha e veja o Rio de um ângulo que poucos conhecem.",
      en: "Soar through the sky towed by a speedboat and see Rio from an angle few know.",
      es: "Vuela hacia el cielo remolcado por una lancha y ve Río desde un ángulo que pocos conocen.",
      fr: "Envolez-vous dans le ciel tracté par un bateau et voyez Rio sous un angle que peu connaissent.",
      de: "Schweben Sie durch den Himmel von einem Motorboot gezogen und sehen Sie Rio aus einem Blickwinkel, den nur wenige kennen."
    },
    "descricao": {
      pt: "O parasail é a forma mais tranquila e panorâmica de sentir a emoção de voar: preso a um paraquedas especial e rebocado por uma lancha, você sobe suavemente dezenas de metros acima do mar, enquanto o Rio de Janeiro se abre embaixo de você — as praias, o Pão de Açúcar, as montanhas e o azul do Atlântico até onde a vista alcança.\n\nA decolagem e o pouso acontecem a partir da própria lancha, de forma suave e segura, sem necessidade de experiência prévia. É uma atividade acessível para diferentes idades e perfis, perfeita para casais, famílias e grupos de amigos que querem uma experiência diferente e cheia de fotos incríveis. Há opção de voo duplo ou triplo, para compartilhar o momento.\n\nLá no alto, o que impera é a sensação de silêncio e liberdade, com a vista aérea das praias e dos cartões-postais cariocas. Você voa sempre acompanhado por uma equipe experiente e com todos os equipamentos de segurança.\n\nA atividade depende de condições de mar e vento favoráveis e pode ser remarcada em caso de clima adverso. Há orientações de peso e idade informadas na reserva. Leve roupa de banho, protetor solar e disposição para se molhar um pouco na saída e na chegada.",
      en: "Parasailing is the most peaceful and scenic way to experience the thrill of flying: harnessed to a special parachute and towed by a speedboat, you gently rise dozens of meters above the sea, while Rio de Janeiro unfolds beneath you — the beaches, Sugarloaf Mountain, the mountains, and the blue of the Atlantic as far as the eye can see.\n\nThe takeoff and landing take place directly from the boat, smoothly and safely, with no prior experience required. It's an activity accessible to different ages and profiles, perfect for couples, families, and groups of friends looking for a unique experience full of incredible photos. Double or triple flight options are available to share the moment.\n\nHigh up, what reigns is a feeling of silence and freedom, with an aerial view of the beaches and Rio's iconic landmarks. You'll always be accompanied by an experienced crew with all safety equipment.\n\nThe activity depends on favorable sea and wind conditions and can be rescheduled in case of bad weather. Weight and age guidelines are provided at the time of booking. Bring swimwear, sunscreen, and be ready to get a little wet on takeoff and landing.",
      es: "El parasail es la forma más tranquila y panorámica de sentir la emoción de volar: atado a un paracaídas especial y remolcado por una lancha, asciendes suavemente decenas de metros sobre el mar, mientras Río de Janeiro se abre debajo de ti — las playas, el Pan de Azúcar, las montañas y el azul del Atlántico hasta donde alcanza la vista.\n\nEl despegue y el aterrizaje se realizan desde la propia lancha, de forma suave y segura, sin necesidad de experiencia previa. Es una actividad accesible para diferentes edades y perfiles, perfecta para parejas, familias y grupos de amigos que buscan una experiencia diferente y llena de fotos increíbles. Hay opción de vuelo doble o triple para compartir el momento.\n\nAllá arriba, lo que impera es la sensación de silencio y libertad, con la vista aérea de las playas y los postales de Río. Vuelas siempre acompañado por un equipo experimentado y con todos los equipos de seguridad.\n\nLa actividad depende de condiciones favorables de mar y viento y puede ser reprogramada en caso de mal tiempo. Hay orientaciones de peso y edad informadas en la reserva. Lleva ropa de baño, protector solar y disposición para mojarte un poco en la salida y en la llegada.",
      fr: "Le parasail est la façon la plus paisible et panoramique de ressentir l'émotion de voler : attaché à un parachute spécial et tracté par un bateau, vous montez doucement à des dizaines de mètres au-dessus de la mer, tandis que Rio de Janeiro s'ouvre sous vous — les plages, le Pain de Sucre, les montagnes et le bleu de l'Atlantique à perte de vue.\n\nLe décollage et l'atterrissage se font directement depuis le bateau, en douceur et en toute sécurité, sans expérience préalable requise. C'est une activité accessible à différents âges et profils, parfaite pour les couples, les familles et les groupes d'amis à la recherche d'une expérience unique et pleine de photos incroyables. Des options de vol double ou triple sont disponibles pour partager le moment.\n\nLà-haut, ce qui règne, c'est la sensation de silence et de liberté, avec une vue aérienne des plages et des sites emblématiques de Rio. Vous volez toujours accompagné par une équipe expérimentée et avec tout l'équipement de sécurité.\n\nL'activité dépend des conditions favorables de mer et de vent et peut être reprogrammée en cas de mauvais temps. Des consignes de poids et d'âge sont fournies lors de la réservation. Apportez un maillot de bain, de la crème solaire et soyez prêt à vous mouiller un peu au départ et à l'arrivée.",
      de: "Parasailing ist die friedlichste und malerischste Art, den Nervenkitzel des Fliegens zu erleben: Mit einem speziellen Fallschirm an ein Motorboot gebunden, schweben Sie sanft Dutzende von Metern über dem Meer, während sich Rio de Janeiro unter Ihnen ausbreitet — die Strände, der Zuckerhut, die Berge und das Blau des Atlantiks, so weit das Auge reicht.\n\nStart und Landung erfolgen direkt vom Boot aus, sanft und sicher, ohne Vorkenntnisse. Es ist eine Aktivität, die für verschiedene Altersgruppen und Profile zugänglich ist, perfekt für Paare, Familien und Freundesgruppen, die ein einzigartiges Erlebnis voller unglaublicher Fotos suchen. Doppel- oder Dreifachflugoptionen sind verfügbar, um den Moment zu teilen.\n\nOben angekommen, herrscht ein Gefühl von Stille und Freiheit, mit einem Blick aus der Vogelperspektive auf die Strände und die Wahrzeichen von Rio. Sie fliegen immer in Begleitung eines erfahrenen Teams und mit aller Sicherheitsausrüstung.\n\nDie Aktivität hängt von günstigen See- und Windbedingungen ab und kann bei schlechtem Wetter verschoben werden. Gewichts- und Altersangaben werden bei der Buchung mitgeteilt. Nehmen Sie Badekleidung, Sonnenschutzmittel und die Bereitschaft mit, sich beim Start und bei der Landung ein wenig nass zu machen."
    },
    "preco": "R$ 500,00",
    "duracao": {
      pt: "Cerca de 15 minutos de voo (experiência total em torno de 1 hora)",
      en: "About 15 minutes of flight (total experience around 1 hour)",
      es: "Aproximadamente 15 minutos de vuelo (experiencia total alrededor de 1 hora)",
      fr: "Environ 15 minutes de vol (expérience totale d'environ 1 heure)",
      de: "Etwa 15 Minuten Flug (Gesamterfahrung etwa 1 Stunde)"
    },
    "inclusos": {
      pt: [
        "Voo de parasail rebocado por lancha",
        "Coletes e equipamentos de segurança",
        "Equipe credenciada e briefing de segurança",
        "Opção de voo duplo ou triplo"
      ],
      en: [
        "Parasail flight towed by a speedboat",
        "Life jackets and safety equipment",
        "Accredited crew and safety briefing",
        "Double or triple flight option"
      ],
      es: [
        "Vuelo de parasail remolcado por lancha",
        "Chalecos y equipos de seguridad",
        "Equipo acreditado y briefing de seguridad",
        "Opción de vuelo doble o triple"
      ],
      fr: [
        "Vol de parasail tracté par un bateau",
        "Gilets et équipements de sécurité",
        "Équipe accréditée et briefing de sécurité",
        "Option de vol double ou triple"
      ],
      de: [
        "Parasail-Flug von einem Motorboot gezogen",
        "Schwimmwesten und Sicherheitsausrüstung",
        "Akkreditiertes Team und Sicherheitseinweisung",
        "Doppel- oder Dreifachflugoption"
      ]
    },
    "imagens": ["assets/passeios/parasail/parasail-1.jpg", "assets/passeios/parasail/parasail-2.jpg", "assets/passeios/parasail/parasail-3.jpg", "assets/passeios/parasail/parasail-4.jpg", "assets/passeios/parasail/parasail-5.jpg", "assets/passeios/parasail/parasail-6.jpg"]
  },

  // ========== 2. ARRAIAL DO CABO ==========
  {
    "id": "arraial-cabo",
    "linkPagamento": "https://brazilxcursions.com/passeio/arraial-do-cabo",
    "uf": "RJ",
    "videos": ["assets/passeios/arraial-cabo/arraial-cabo-video.mp4"],
    "titulo": {
      pt: "Arraial do Cabo",
      en: "Arraial do Cabo",
      es: "Arraial do Cabo",
      fr: "Arraial do Cabo",
      de: "Arraial do Cabo"
    },
    "categoria": "praia/ilha",
    "tagline": {
      pt: "Venha conhecer a exuberância desse azul",
      en: "Come discover the exuberance of this blue",
      es: "Ven a conocer la exuberancia de este azul",
      fr: "Venez découvrir l'exubérance de ce bleu",
      de: "Kommen Sie und entdecken Sie die Üppigkeit dieses Blaus"
    },
    "descricao": {
      pt: "Descubra a deslumbrante beleza de Arraial do Cabo com nosso incrível pacote de bate e volta saindo do Rio de Janeiro. Embarque nessa aventura inesquecível que inclui um emocionante passeio de barco pelas águas cristalinas da região, onde você terá a oportunidade de apreciar praias paradisíacas, formações rochosas impressionantes e uma fauna marinha exuberante. Deixe-se encantar pela diversidade de tons de azul do mar, que contrastam com o branco da areia, criando um cenário de tirar o fôlego.\n\nVocê terá a chance de explorar lugares como a Gruta Azul, a Praia do Farol e a Prainhas do Pontal do Atalaia, locais conhecidos por sua beleza singular e atmosfera tranquila. Além disso, o almoço em um self-service está incluso! Momentos inesquecíveis em Arraial do Cabo, um verdadeiro paraíso na costa brasileira, onde a natureza se mostra em sua forma mais pura.\n\nRoteiro: busca no hotel a partir das 7h00, chegada ao destino às 11h45 e embarque no cais a partir das 12h00. O passeio de barco visita a Prainha do Pontal do Atalaia (a imagem símbolo de Arraial do Cabo, com desembarque na areia), a Ilha do Farol (classificada pelo Instituto Nacional de Pesquisas Espaciais como uma das mais perfeitas praias do país), a Praia do Forno (considerada uma das 5 praias mais bonitas do Brasil, com parada para mergulho), a Gruta Azul (30 metros de extensão e 15 de altura, com reflexos dourados e prateados), a Fenda de Nossa Senhora e a Pedra do Perfil do Gorila. Término do passeio às 18h00, com chegada ao Rio de Janeiro por volta das 21h00.\n\nÉ cobrada pela Prefeitura de Arraial do Cabo uma taxa individual de uso do cais no valor de R$ 35,00 por pessoa, que não está incluída no valor do pacote e é paga somente em dinheiro. O tour náutico está sujeito à autorização da Capitania dos Portos (Marinha do Brasil), que pode proibir a saída dos barcos por questões climáticas; nesse caso é feita a devolução do valor do passeio de barco e um passeio alternativo por duas praias.",
      en: "Discover the stunning beauty of Arraial do Cabo with our incredible day trip package departing from Rio de Janeiro. Embark on this unforgettable adventure that includes an exciting boat tour through the crystal clear waters of the region, where you will have the opportunity to enjoy paradisiacal beaches, impressive rock formations and exuberant marine life. Be enchanted by the diversity of shades of blue of the sea, contrasting with the white sand, creating a breathtaking scenery.\n\nYou will have the chance to explore places like the Blue Grotto, Farol Beach and Prainhas do Pontal do Atalaia, places known for their unique beauty and tranquil atmosphere. Plus, lunch at a self-service restaurant is included! Unforgettable moments in Arraial do Cabo, a true paradise on the Brazilian coast, where nature shows itself in its purest form.\n\nItinerary: hotel pickup from 7:00 am, arrival at the destination at 11:45 am and boarding at the pier from 12:00 pm. The boat tour visits Prainha do Pontal do Atalaia (the symbol image of Arraial do Cabo, with landing on the sand), Ilha do Farol (classified by the National Institute for Space Research as one of the most perfect beaches in the country), Praia do Forno (considered one of the 5 most beautiful beaches in Brazil, with a stop for swimming), Gruta Azul (30 meters long and 15 high, with golden and silver reflections), Fenda de Nossa Senhora and Pedra do Perfil do Gorila. End of the tour at 6:00 pm, arriving in Rio de Janeiro around 9:00 pm.\n\nThe Municipality of Arraial do Cabo charges an individual pier usage fee of R$ 35.00 per person, which is not included in the package price and is paid only in cash. The nautical tour is subject to authorization from the Port Authority (Brazilian Navy), which may prohibit the departure of boats due to weather conditions; in this case, the boat tour fee is refunded and an alternative tour to two beaches is offered.",
      es: "Descubre la deslumbrante belleza de Arraial do Cabo con nuestro increíble paquete de ida y vuelta desde Río de Janeiro. Embárcate en esta aventura inolvidable que incluye un emocionante paseo en barco por las aguas cristalinas de la región, donde tendrás la oportunidad de disfrutar de playas paradisíacas, impresionantes formaciones rocosas y una exuberante vida marina. Déjate encantar por la diversidad de tonos de azul del mar, que contrastan con la blanca arena, creando un paisaje impresionante.\n\nTendrás la oportunidad de explorar lugares como la Gruta Azul, la Playa del Faro y las Prainhas del Pontal do Atalaia, lugares conocidos por su belleza singular y ambiente tranquilo. Además, ¡el almuerzo en un self-service está incluido! Momentos inolvidables en Arraial do Cabo, un verdadero paraíso en la costa brasileña, donde la naturaleza se muestra en su forma más pura.\n\nItinerario: recogida en el hotel a partir de las 7:00 h, llegada al destino a las 11:45 h y embarque en el muelle a partir de las 12:00 h. El paseo en barco visita Prainha do Pontal do Atalaia (la imagen símbolo de Arraial do Cabo, con desembarque en la arena), Ilha do Farol (clasificada por el Instituto Nacional de Investigaciones Espaciales como una de las playas más perfectas del país), Praia do Forno (considerada una de las 5 playas más bonitas de Brasil, con parada para bañarse), Gruta Azul (30 metros de largo y 15 de alto, con reflejos dorados y plateados), Fenda de Nossa Senhora y Pedra do Perfil do Gorila. Fin del paseo a las 18:00 h, llegando a Río de Janeiro alrededor de las 21:00 h.\n\nLa Municipalidad de Arraial do Cabo cobra una tarifa individual de uso del muelle de R$ 35,00 por persona, que no está incluida en el precio del paquete y se paga solo en efectivo. El tour náutico está sujeto a la autorización de la Capitanía de Puertos (Armada de Brasil), que puede prohibir la salida de los barcos por condiciones climáticas; en ese caso, se devuelve el valor del paseo en barco y se ofrece un paseo alternativo por dos playas.",
      fr: "Découvrez la beauté époustouflante d'Arraial do Cabo avec notre incroyable forfait aller-retour au départ de Rio de Janeiro. Embarquez pour cette aventure inoubliable qui comprend une passionnante excursion en bateau à travers les eaux cristallines de la région, où vous aurez l'occasion d'apprécier des plages paradisiaques, des formations rocheuses impressionnantes et une vie marine exubérante. Laissez-vous séduire par la diversité des nuances de bleu de la mer, contrastant avec le sable blanc, créant un paysage à couper le souffle.\n\nVous aurez la chance d'explorer des endroits comme la Grotte Bleue, la Plage du Phare et les Prainhas du Pontal do Atalaia, des lieux connus pour leur beauté singulière et leur atmosphère paisible. De plus, le déjeuner dans un self-service est inclus ! Des moments inoubliables à Arraial do Cabo, un véritable paradis sur la côte brésilienne, où la nature se montre dans sa forme la plus pure.\n\nItinéraire : prise en charge à l'hôtel à partir de 7h00, arrivée à destination à 11h45 et embarquement au quai à partir de 12h00. L'excursion en bateau visite Prainha do Pontal do Atalaia (l'image symbole d'Arraial do Cabo, avec débarquement sur le sable), Ilha do Farol (classée par l'Institut National de Recherches Spatiales comme l'une des plus belles plages du pays), Praia do Forno (considérée comme l'une des 5 plus belles plages du Brésil, avec arrêt pour la baignade), Gruta Azul (30 mètres de long et 15 de haut, avec des reflets dorés et argentés), Fenda de Nossa Senhora et Pedra do Perfil do Gorila. Fin de l'excursion à 18h00, arrivée à Rio de Janeiro vers 21h00.\n\nLa Municipalité d'Arraial do Cabo facture une taxe individuelle d'utilisation du quai de R$ 35,00 par personne, qui n'est pas incluse dans le prix du forfait et se paie uniquement en espèces. Le tour nautique est soumis à l'autorisation de la Capitainerie des Ports (Marine brésilienne), qui peut interdire le départ des bateaux pour des raisons climatiques ; dans ce cas, le montant de l'excursion en bateau est remboursé et une excursion alternative sur deux plages est proposée.",
      de: "Entdecken Sie die atemberaubende Schönheit von Arraial do Cabo mit unserem unglaublichen Tagesausflugspaket ab Rio de Janeiro. Begeben Sie sich auf dieses unvergessliche Abenteuer, das eine aufregende Bootstour durch das kristallklare Wasser der Region beinhaltet, wo Sie die Gelegenheit haben, paradiesische Strände, beeindruckende Felsformationen und eine üppige Meeresfauna zu genießen. Lassen Sie sich von der Vielfalt der Blautöne des Meeres verzaubern, die mit dem weißen Sand kontrastieren und eine atemberaubende Kulisse schaffen.\n\nSie haben die Möglichkeit, Orte wie die Blaue Grotte, den Farol-Strand und die Prainhas do Pontal do Atalaia zu erkunden, Orte, die für ihre einzigartige Schönheit und ruhige Atmosphäre bekannt sind. Außerdem ist das Mittagessen in einem Selbstbedienungsrestaurant inbegriffen! Unvergessliche Momente in Arraial do Cabo, einem wahren Paradies an der brasilianischen Küste, wo sich die Natur in ihrer reinsten Form zeigt.\n\nReiseroute: Hotelabholung ab 7:00 Uhr, Ankunft am Zielort um 11:45 Uhr und Einschiffung am Pier ab 12:00 Uhr. Die Bootstour besucht Prainha do Pontal do Atalaia (das Symbolbild von Arraial do Cabo, mit Landung auf dem Sand), Ilha do Farol (vom Nationalen Institut für Weltraumforschung als einer der schönsten Strände des Landes eingestuft), Praia do Forno (einer der 5 schönsten Strände Brasiliens, mit Badeaufenthalt), Gruta Azul (30 Meter lang und 15 Meter hoch, mit goldenen und silbernen Reflexen), Fenda de Nossa Senhora und Pedra do Perfil do Gorila. Ende der Tour um 18:00 Uhr, Ankunft in Rio de Janeiro gegen 21:00 Uhr.\n\nDie Stadtverwaltung von Arraial do Cabo erhebt eine individuelle Pier-Nutzungsgebühr von R$ 35,00 pro Person, die nicht im Paketpreis enthalten ist und nur in bar bezahlt wird. Die Bootstour unterliegt der Genehmigung der Hafenbehörde (Brasilianische Marine), die die Ausfahrt der Boote aus Wettergründen untersagen kann; in diesem Fall wird der Betrag für die Bootstour erstattet und eine alternative Tour zu zwei Stränden angeboten."
    },
    "preco": "R$ 300,00",
    "duracao": {
      pt: "Dia inteiro (bate e volta) - saída do hotel às 7h, retorno ao Rio por volta das 21h",
      en: "Full day (round trip) - hotel pickup at 7am, return to Rio around 9pm",
      es: "Día completo (ida y vuelta) - salida del hotel a las 7h, regreso a Río alrededor de las 21h",
      fr: "Journée complète (aller-retour) - départ de l'hôtel à 7h, retour à Rio vers 21h",
      de: "Ganztägig (Hin- und Rückfahrt) - Hotelabholung um 7 Uhr, Rückkehr nach Rio gegen 21 Uhr"
    },
    "inclusos": {
      pt: ["Passeio de barco", "Almoço (self-service, Restaurante Saborear)"],
      en: ["Boat tour", "Lunch (self-service, Saborear Restaurant)"],
      es: ["Paseo en barco", "Almuerzo (self-service, Restaurante Saborear)"],
      fr: ["Excursion en bateau", "Déjeuner (self-service, Restaurant Saborear)"],
      de: ["Bootstour", "Mittagessen (Selbstbedienung, Restaurant Saborear)"]
    },
    "imagens": ["assets/passeios/arraial-cabo/arraial-cabo-1.jpg", "assets/passeios/arraial-cabo/arraial-cabo-2.jpg", "assets/passeios/arraial-cabo/arraial-cabo-3.jpg", "assets/passeios/arraial-cabo/arraial-cabo-4.jpg", "assets/passeios/arraial-cabo/arraial-cabo-5.jpg", "assets/passeios/arraial-cabo/arraial-cabo-6.jpg", "assets/passeios/arraial-cabo/arraial-cabo-7.jpg"],
    "creditoFoto": "Fotos: Gabriel Castaldini, CC BY-SA 3.0 (Wikimedia Commons); Zeca Souza (Pexels); jonathanborba (Pexels); leomarcal (Pexels); leticia-azevedo (Pexels); leticia-azevedo1 (Pexels); zeca-souza (Pexels) — uso livre.",
    "video": null
  },

  // ========== 3. ILHA GRANDE ==========
  {
    "id": "ilha-grande",
    "linkPagamento": "https://brazilxcursions.com/passeio/ilha-grande",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/RW7OX410RB4"],
    "titulo": {
      pt: "Ilha Grande",
      en: "Ilha Grande",
      es: "Ilha Grande",
      fr: "Ilha Grande",
      de: "Ilha Grande"
    },
    "categoria": "praia/ilha",
    "tagline": {
      pt: "Paraíso chamado Costa Verde",
      en: "Paradise called Costa Verde",
      es: "Paraíso llamado Costa Verde",
      fr: "Paradis appelé Costa Verde",
      de: "Paradies namens Costa Verde"
    },
    "descricao": {
      pt: "Se você está no Rio de Janeiro e quer fugir da agitação urbana por um dia, o passeio bate e volta para Ilha Grande é a pedida certa. A Ilha Grande fica a cerca de 2h30 de carro mais travessia de barco a partir da capital. O roteiro permite conhecer algumas das praias da ilha. O ritmo é intenso — saída no início da manhã e retorno no fim do dia — mas recompensa com natureza exuberante e águas cristalinas. Ideal para quem tem pouco tempo, mas não abre mão de um mergulho no paraíso.\n\nRoteiro: busca no hotel a partir das 7h00, chegada ao destino às 11h45 e embarque no cais a partir das 12h00. Visita à Lagoa Azul (uma imensa piscina natural azul-esverdeada com fundo coberto de estrelas do mar, parada para mergulho), Praia de Araçá (praia simples e tranquila cercada por mata nativa), Praia Freguesia de Santana (pequena e encantadora, com águas muito claras) e Praia de Japariz (parada para almoço, com restaurantes à beira mar e opções de frutos do mar). Término do passeio às 18h00, com chegada ao Rio de Janeiro por volta das 21h00.",
      en: "If you're in Rio de Janeiro and want to escape the urban hustle for a day, the day trip to Ilha Grande is the right choice. Ilha Grande is about 2h30 by car plus boat crossing from the capital. The itinerary allows you to visit some of the island's beaches. The pace is intense — departure early in the morning and return at the end of the day — but rewards with lush nature and crystal clear waters. Ideal for those who have little time but don't want to miss a dip in paradise.\n\nItinerary: hotel pickup from 7:00 am, arrival at the destination at 11:45 am and boarding at the pier from 12:00 pm. Visit to Lagoa Azul (a huge blue-green natural pool with a seabed covered in starfish, stop for swimming), Praia de Araçá (simple and quiet beach surrounded by native forest), Praia Freguesia de Santana (small and charming, with very clear waters) and Praia de Japariz (stop for lunch, with seaside restaurants and seafood options). End of the tour at 6:00 pm, arriving in Rio de Janeiro around 9:00 pm.",
      es: "Si estás en Río de Janeiro y quieres escapar del ajetreo urbano por un día, la excursión de ida y vuelta a Ilha Grande es la opción correcta. Ilha Grande está a unas 2h30 en coche más travesía en barco desde la capital. El itinerario permite visitar algunas de las playas de la isla. El ritmo es intenso — salida temprano por la mañana y regreso al final del día — pero recompensa con naturaleza exuberante y aguas cristalinas. Ideal para quienes tienen poco tiempo pero no quieren perderse un baño en el paraíso.\n\nItinerario: recogida en el hotel a partir de las 7:00 h, llegada al destino a las 11:45 h y embarque en el muelle a partir de las 12:00 h. Visita a Lagoa Azul (una enorme piscina natural azul-verdosa con fondo cubierto de estrellas de mar, parada para bañarse), Praia de Araçá (playa sencilla y tranquila rodeada de bosque nativo), Praia Freguesia de Santana (pequeña y encantadora, con aguas muy claras) y Praia de Japariz (parada para almorzar, con restaurantes junto al mar y opciones de mariscos). Fin del paseo a las 18:00 h, llegando a Río de Janeiro alrededor de las 21:00 h.",
      fr: "Si vous êtes à Rio de Janeiro et que vous voulez échapper à l'agitation urbaine pour une journée, l'excursion aller-retour à Ilha Grande est le bon choix. Ilha Grande est à environ 2h30 en voiture plus la traversée en bateau depuis la capitale. L'itinéraire permet de visiter certaines des plages de l'île. Le rythme est intense — départ tôt le matin et retour en fin de journée — mais récompense par une nature luxuriante et des eaux cristallines. Idéal pour ceux qui ont peu de temps mais qui ne veulent pas rater une baignade au paradis.\n\nItinéraire : prise en charge à l'hôtel à partir de 7h00, arrivée à destination à 11h45 et embarquement au quai à partir de 12h00. Visite de Lagoa Azul (une immense piscine naturelle bleu-vert avec un fond couvert d'étoiles de mer, arrêt pour la baignade), Praia de Araçá (plage simple et tranquille entourée de forêt native), Praia Freguesia de Santana (petite et charmante, aux eaux très claires) et Praia de Japariz (arrêt pour le déjeuner, avec des restaurants en bord de mer et des fruits de mer). Fin de l'excursion à 18h00, arrivée à Rio de Janeiro vers 21h00.",
      de: "Wenn Sie in Rio de Janeiro sind und für einen Tag der städtischen Hektik entfliehen möchten, ist der Tagesausflug nach Ilha Grande die richtige Wahl. Ilha Grande liegt etwa 2h30 mit dem Auto plus Bootsüberfahrt von der Hauptstadt entfernt. Die Route ermöglicht es, einige der Strände der Insel zu besuchen. Das Tempo ist intensiv — Abfahrt am frühen Morgen und Rückkehr am Ende des Tages — aber belohnt mit üppiger Natur und kristallklarem Wasser. Ideal für diejenigen, die wenig Zeit haben, aber ein Bad im Paradies nicht verpassen möchten.\n\nReiseroute: Hotelabholung ab 7:00 Uhr, Ankunft am Zielort um 11:45 Uhr und Einschiffung am Pier ab 12:00 Uhr. Besuch der Lagoa Azul (ein riesiges blaugrünes Naturbad mit einem mit Seesternen bedeckten Meeresboden, Badeaufenthalt), Praia de Araçá (einfacher und ruhiger Strand umgeben von einheimischem Wald), Praia Freguesia de Santana (klein und charmant, mit sehr klarem Wasser) und Praia de Japariz (Mittagspause mit Restaurants am Meer und Meeresfrüchteoptionen). Ende der Tour um 18:00 Uhr, Ankunft in Rio de Janeiro gegen 21:00 Uhr."
    },
    "preco": "R$ 300,00",
    "duracao": {
      pt: "Dia inteiro (bate e volta) - saída do hotel às 7h, retorno ao Rio por volta das 21h; aproximadamente 2h30 de carro mais travessia de barco",
      en: "Full day (round trip) - hotel pickup at 7am, return to Rio around 9pm; approximately 2h30 by car plus boat crossing",
      es: "Día completo (ida y vuelta) - salida del hotel a las 7h, regreso a Río alrededor de las 21h; aproximadamente 2h30 en coche más travesía en barco",
      fr: "Journée complète (aller-retour) - départ de l'hôtel à 7h, retour à Rio vers 21h; environ 2h30 en voiture plus traversée en bateau",
      de: "Ganztägig (Hin- und Rückfahrt) - Hotelabholung um 7 Uhr, Rückkehr nach Rio gegen 21 Uhr; etwa 2h30 mit dem Auto plus Bootsüberfahrt"
    },
    "inclusos": {
      pt: ["Transfer", "Barco"],
      en: ["Transfer", "Boat"],
      es: ["Traslado", "Barco"],
      fr: ["Transfert", "Bateau"],
      de: ["Transfer", "Boot"]
    },
    "imagens": ["assets/passeios/ilha-grande/ilha-grande6.jpg", "assets/passeios/ilha-grande/ilha-grande.jpg", "assets/passeios/ilha-grande/ilha-grande1.jpg", "assets/passeios/ilha-grande/ilha-grande2.jpg", "assets/passeios/ilha-grande/ilha-grande3.jpg", "assets/passeios/ilha-grande/ilha-grande4.jpg", "assets/passeios/ilha-grande/ilha-grande5.jpg"],
    "creditoFoto": "Fotos: Acarolinalopes, CC BY-SA 4.0 (Wikimedia Commons); Fulviusbsas, CC BY-SA 4.0 (Wikimedia Commons); Misstetei, CC BY-SA 3.0 (Wikimedia Commons); anderson-leme-993692175 (Pexels); hikaique (Pexels); pedrosk (Pexels) — uso livre.",
    "video": null
  },

  // ============================================================
  // AGUARDANDO STAN — PARTE 2 (7 pacotes):
  // jeep-tour, pati, gavea,
  // helicoptero, voo-livre,
  // favela-tour, stand-up
  // ============================================================

  // ============================================================
  // AGUARDANDO STAN — PARTE 3 (4 pacotes):
  // city-tour, petropolis,
  // imersao-floresta, cachoeira-amazonia
  // ============================================================

  // ========== 15. OBSERVAÇÃO DE PÁSSAROS ==========
  {
    "id": "passaros",
    "uf": "BR",
    "videos": ["https://www.youtube.com/embed/GcL_Ew2-Sqo"],
    "titulo": {
      pt: "Observação de Pássaros",
      en: "Bird Watching",
      es: "Observación de Aves",
      fr: "Observation d'Oiseaux",
      de: "Vogelbeobachtung"
    },
    "categoria": "natureza",
    "tagline": {
      pt: "Expedições de birding pelo Brasil profundo",
      en: "Birding expeditions through deep Brazil",
      es: "Expediciones de birding por el Brasil profundo",
      fr: "Expéditions d'observation ornithologique dans le Brésil profond",
      de: "Birding-Expeditionen durch das tiefe Brasilien"
    },
    "descricao": {
      pt: "A Brazil Xcursions leva você às regiões de observação de aves mais ricas do Brasil em parceria com a Brazil Birding Experts, referência mundial em birding no país. São expedições de grupo pequeno, conduzidas por guias especialistas, que unem as espécies mais raras e cobiçadas do planeta a hospedagem confortável, transporte e alimentação inclusos.\n\nEscolha abaixo a expedição de 2026 que combina com você: do Nordeste profundo ao Cerrado de Goiás, cada roteiro persegue endemismos e aves ameaçadas em cenários espetaculares — Caatinga, Mata Atlântica, campos rupestres e savanas.",
      en: "Brazil Xcursions takes you to the richest bird watching regions in Brazil in partnership with Brazil Birding Experts, a world reference in birding in the country. These are small group expeditions, led by expert guides, combining the rarest and most sought-after species on the planet with comfortable accommodation, transportation and meals included.\n\nChoose below the 2026 expedition that suits you: from the deep Northeast to the Cerrado of Goiás, each itinerary pursues endemism and threatened birds in spectacular settings — Caatinga, Atlantic Forest, rocky fields and savannas.",
      es: "Brazil Xcursions te lleva a las regiones de observación de aves más ricas de Brasil en asociación con Brazil Birding Experts, referente mundial en birding en el país. Son expediciones de grupo pequeño, dirigidas por guías especialistas, que combinan las especies más raras y codiciadas del planeta con alojamiento cómodo, transporte y alimentación incluidos.\n\nElige a continuación la expedición 2026 que más te convenga: desde el profundo Nordeste hasta el Cerrado de Goiás, cada itinerario persigue endemismos y aves amenazadas en escenarios espectaculares — Caatinga, Mata Atlántica, campos rupestres y sabanas.",
      fr: "Brazil Xcursions vous emmène dans les régions d'observation des oiseaux les plus riches du Brésil en partenariat avec Brazil Birding Experts, une référence mondiale en matière d'ornithologie dans le pays. Ce sont des expéditions en petit groupe, dirigées par des guides experts, qui allient les espèces les plus rares et les plus recherchées de la planète à un hébergement confortable, un transport et des repas inclus.\n\nChoisissez ci-dessous l'expédition 2026 qui vous correspond : du profond Nordeste au Cerrado du Goiás, chaque itinéraire recherche des endémismes et des oiseaux menacés dans des décors spectaculaires — Caatinga, Forêt Atlantique, champs rocheux et savanes.",
      de: "Brazil Xcursions bringt Sie in die reichsten Vogelbeobachtungsregionen Brasiliens in Partnerschaft mit Brazil Birding Experts, einem Weltmarktführer für Birding im Land. Es sind Kleingruppen-Expeditionen, die von erfahrenen Guides geleitet werden und die seltensten und begehrtesten Arten des Planeten mit komfortabler Unterkunft, Transport und Verpflegung verbinden.\n\nWählen Sie unten die Expedition 2026, die zu Ihnen passt: vom tiefen Nordosten bis zum Cerrado von Goiás, jede Route verfolgt Endemiten und bedrohte Vögel in spektakulären Landschaften — Caatinga, Atlantischer Regenwald, Felsfelder und Savannen."
    },
    "preco": "",
    "duracao": {
      pt: "13 a 25 dias",
      en: "13 to 25 days",
      es: "13 a 25 días",
      fr: "13 à 25 jours",
      de: "13 bis 25 Tage"
    },
    "inclusos": {
      pt: ["Hospedagem em quarto duplo", "Todas as refeições (uma bebida por refeição)", "Transporte (van, carro, 4x4, barco)", "Guia líder + guias locais", "Ingressos e taxas", "Água e lanches durante todo o tour"],
      en: ["Double room accommodation", "All meals (one drink per meal)", "Transportation (van, car, 4x4, boat)", "Lead guide + local guides", "Tickets and fees", "Water and snacks throughout the tour"],
      es: ["Alojamiento en habitación doble", "Todas las comidas (una bebida por comida)", "Transporte (van, coche, 4x4, barco)", "Guía líder + guías locales", "Entradas y tasas", "Agua y refrigerios durante todo el tour"],
      fr: ["Hébergement en chambre double", "Tous les repas (une boisson par repas)", "Transport (van, voiture, 4x4, bateau)", "Guide leader + guides locaux", "Billets et frais", "Eau et collations tout au long du tour"],
      de: ["Unterkunft im Doppelzimmer", "Alle Mahlzeiten (ein Getränk pro Mahlzeit)", "Transport (Van, Auto, 4x4, Boot)", "Leitguide + lokale Guides", "Eintrittskarten und Gebühren", "Wasser und Snacks während der gesamten Tour"]
    },
    "naoInclusos": {
      pt: ["Bebidas adicionais", "Voos não especificados no roteiro", "Itens pessoais (lavanderia e despesas pessoais)"],
      en: ["Additional drinks", "Flights not specified in the itinerary", "Personal items (laundry and personal expenses)"],
      es: ["Bebidas adicionales", "Vuelos no especificados en el itinerario", "Artículos personales (lavandería y gastos personales)"],
      fr: ["Boissons supplémentaires", "Vols non spécifiés dans l'itinéraire", "Articles personnels (blanchisserie et dépenses personnelles)"],
      de: ["Zusätzliche Getränke", "Nicht im Reiseplan aufgeführte Flüge", "Persönliche Gegenstände (Wäscherei und persönliche Ausgaben)"]
    },
    "expedicoes": [
      {
        "id": "nordeste",
        "nome": {
          pt: "Nordeste — Supreme Tour",
          en: "Northeast — Supreme Tour",
          es: "Nordeste — Supreme Tour",
          fr: "Nordeste — Supreme Tour",
          de: "Nordosten — Supreme Tour"
        },
        "regiao": {
          pt: "Nordeste",
          en: "Northeast",
          es: "Nordeste",
          fr: "Nordeste",
          de: "Nordosten"
        },
        "local": {
          pt: "Maranhão, Piauí, Ceará, Pernambuco, Alagoas e Bahia",
          en: "Maranhão, Piauí, Ceará, Pernambuco, Alagoas and Bahia",
          es: "Maranhão, Piauí, Ceará, Pernambuco, Alagoas y Bahia",
          fr: "Maranhão, Piauí, Ceará, Pernambuco, Alagoas et Bahia",
          de: "Maranhão, Piauí, Ceará, Pernambuco, Alagoas und Bahia"
        },
        "habitats": {
          pt: "Caatinga, Cerrado, Mata Atlântica e campos rupestres",
          en: "Caatinga, Cerrado, Atlantic Forest and rocky fields",
          es: "Caatinga, Cerrado, Mata Atlántica y campos rupestres",
          fr: "Caatinga, Cerrado, Forêt Atlantique et champs rocheux",
          de: "Caatinga, Cerrado, Atlantischer Regenwald und Felsfelder"
        },
        "datas": "20 de agosto a 13 de setembro de 2026",
        "duracao": {
          pt: "25 dias",
          en: "25 days",
          es: "25 días",
          fr: "25 jours",
          de: "25 Tage"
        },
        "dificuldade": {
          pt: "Média",
          en: "Moderate",
          es: "Media",
          fr: "Moyenne",
          de: "Mittel"
        },
        "guia": {
          pt: "Ciro Albano",
          en: "Ciro Albano",
          es: "Ciro Albano",
          fr: "Ciro Albano",
          de: "Ciro Albano"
        },
        "grupoMax": {
          pt: "3 pessoas",
          en: "3 people",
          es: "3 personas",
          fr: "3 personnes",
          de: "3 Personen"
        },
        "preco": "USD 8.960",
        "suplemento": "USD 825",
        "especies": {
          pt: ["Arara-azul-de-lear", "Soldadinho-do-araripe", "Saíra-sete-cores", "Pica-pau-de-kaempfer", "Beija-flor-de-capacete"],
          en: ["Lear's Macaw", "Araripe Manakin", "Seven-colored Tanager", "Kaempfer's Woodpecker", "Helmeted Woodnymph"],
          es: ["Guacamayo de Lear", "Saltarín de Araripe", "Tangara siete colores", "Pájaro carpintero de Kaempfer", "Colibrí de casco"],
          fr: ["Ara de Lear", "Manakin d'Araripe", "Tangara septicolore", "Pic de Kaempfer", "Colibri casqué"],
          de: ["Lear-Ara", "Araripe-Manakin", "Siebenfarbentangare", "Kaempferspecht", "Helmkolibri"]
        },
        "resumo": {
          pt: "A jornada mais completa que oferecemos pelo Nordeste: seis estados, das transições Maranhão–Piauí à Chapada Diamantina, atrás de algumas das aves mais raras do planeta.",
          en: "The most complete journey we offer through the Northeast: six states, from the Maranhão–Piauí transitions to Chapada Diamantina, in search of some of the rarest birds on the planet.",
          es: "El viaje más completo que ofrecemos por el Nordeste: seis estados, desde las transiciones Maranhão–Piauí hasta la Chapada Diamantina, en busca de algunas de las aves más raras del planeta.",
          fr: "Le voyage le plus complet que nous proposons dans le Nordeste : six États, des transitions Maranhão–Piauí à la Chapada Diamantina, à la recherche de certains des oiseaux les plus rares de la planète.",
          de: "Die vollständigste Reise, die wir durch den Nordosten anbieten: sechs Bundesstaaten, von den Maranhão-Piauí-Übergängen bis zur Chapada Diamantina, auf der Suche nach einigen der seltensten Vögel der Welt."
        },
        "descricao": {
          pt: "Esta é a jornada mais completa que oferecemos pelo Nordeste do Brasil — uma expedição profunda e cuidadosamente planejada por algumas das regiões de observação de aves mais diversas e gratificantes do país. Ao longo de 25 dias, atravessamos seis estados, percorrendo Mata Atlântica, Caatinga, Cerrado, campos rupestres, planícies costeiras e refúgios florestais isolados que abrigam algumas das aves mais raras do planeta.\n\nO roteiro começa nas transições entre Maranhão e Piauí, onde o lendário pica-pau-de-kaempfer ainda sobrevive, e se desenrola por locais icônicos: ilhas de floresta úmida como Guaramiranga, as paisagens dramáticas da Caatinga em Quixadá e Canudos — reduto mundial da arara-azul-de-lear — e a extraordinária Chapada do Araripe, o único lugar da Terra onde se observa o soldadinho-do-araripe.\n\nDali entramos no Centro de Endemismo de Pernambuco, a porção mais ameaçada da Mata Atlântica brasileira, onde fragmentos como a Serra do Urubu concentram espécies globalmente ameaçadas. Seguindo para a Bahia, a Chapada Diamantina, Boa Nova, Serra Bonita e as florestas de Itacaré representam o que há de melhor na observação de aves na Mata Atlântica.\n\nNível de dificuldade: média. Há alguns deslocamentos longos de carro, mas a observação em si é tranquila e as caminhadas são curtas — as mais longas em torno de 4 a 7 km. Apenas o dia dedicado ao tapaculo-de-boa-nova exige melhor preparo, com trilha íngreme de 8 a 10 km.",
          en: "This is the most complete journey we offer through Northeast Brazil — a deep and carefully planned expedition through some of the most diverse and rewarding birdwatching regions in the country. Over 25 days, we cross six states, traversing Atlantic Forest, Caatinga, Cerrado, rocky fields, coastal plains and isolated forest refuges that harbor some of the rarest birds on the planet.\n\nThe itinerary begins in the transitions between Maranhão and Piauí, where the legendary Kaempfer's Woodpecker still survives, and unfolds through iconic locations: islands of humid forest such as Guaramiranga, the dramatic landscapes of the Caatinga in Quixadá and Canudos — the world stronghold of Lear's Macaw — and the extraordinary Chapada do Araripe, the only place on Earth where the Araripe Manakin is found.\n\nFrom there we enter the Pernambuco Endemism Center, the most threatened portion of the Brazilian Atlantic Forest, where fragments such as Serra do Urubu concentrate globally threatened species. Moving on to Bahia, Chapada Diamantina, Boa Nova, Serra Bonita and the forests of Itacaré represent the best of Atlantic Forest birding.\n\nDifficulty level: moderate. There are some long car transfers, but the birding itself is relaxed and the walks are short — the longest around 4 to 7 km. Only the day dedicated to the Boa Nova Tapaculo requires better preparation, with a steep 8 to 10 km trail.",
          es: "Este es el viaje más completo que ofrecemos por el Nordeste de Brasil — una expedición profunda y cuidadosamente planificada por algunas de las regiones de observación de aves más diversas y gratificantes del país. A lo largo de 25 días, recorremos seis estados, atravesando Mata Atlántica, Caatinga, Cerrado, campos rupestres, llanuras costeras y refugios forestales aislados que albergan algunas de las aves más raras del planeta.\n\nEl itinerario comienza en las transiciones entre Maranhão y Piauí, donde el legendario pica-pau-de-kaempfer aún sobrevive, y se desarrolla a través de lugares icónicos: islas de bosque húmedo como Guaramiranga, los dramáticos paisajes de la Caatinga en Quixadá y Canudos — el bastión mundial de la arara-azul-de-lear — y la extraordinaria Chapada do Araripe, el único lugar de la Tierra donde se observa el soldadinho-do-araripe.\n\nDesde allí entramos en el Centro de Endemismo de Pernambuco, la porción más amenazada de la Mata Atlántica brasileña, donde fragmentos como la Serra do Urubu concentran especies amenazadas a nivel mundial. Siguiendo hacia Bahia, la Chapada Diamantina, Boa Nova, Serra Bonita y los bosques de Itacaré representan lo mejor de la observación de aves en la Mata Atlántica.\n\nNivel de dificultad: media. Hay algunos desplazamientos largos en coche, pero la observación en sí es tranquila y las caminatas son cortas — las más largas de alrededor de 4 a 7 km. Solo el día dedicado al tapaculo-de-boa-nova requiere mejor preparación, con un sendero empinado de 8 a 10 km.",
          fr: "C'est le voyage le plus complet que nous proposons dans le Nordeste du Brésil — une expédition approfondie et soigneusement planifiée à travers certaines des régions d'observation des oiseaux les plus diverses et les plus gratifiantes du pays. En 25 jours, nous traversons six États, parcourant la forêt atlantique, la Caatinga, le Cerrado, les champs rocheux, les plaines côtières et les refuges forestiers isolés qui abritent certains des oiseaux les plus rares de la planète.\n\nL'itinéraire commence dans les transitions entre le Maranhão et le Piauí, où le légendaire pic de Kaempfer survit encore, et se déroule à travers des lieux emblématiques : des îles de forêt humide comme Guaramiranga, les paysages spectaculaires de la Caatinga à Quixadá et Canudos — le bastion mondial de l'ara de Lear — et l'extraordinaire Chapada do Araripe, le seul endroit sur Terre où l'on observe le manakin d'Araripe.\n\nDe là, nous entrons dans le Centre d'Endémisme de Pernambuco, la portion la plus menacée de la forêt atlantique brésilienne, où des fragments comme la Serra do Urubu concentrent des espèces menacées au niveau mondial. En direction de Bahia, la Chapada Diamantina, Boa Nova, Serra Bonita et les forêts d'Itacaré représentent le meilleur de l'observation des oiseaux dans la forêt atlantique.\n\nNiveau de difficulté : moyen. Il y a de longs trajets en voiture, mais l'observation elle-même est détendue et les marches sont courtes — les plus longues font environ 4 à 7 km. Seul le jour consacré au tapaculo-de-boa-nova nécessite une meilleure préparation, avec un sentier escarpé de 8 à 10 km.",
          de: "Dies ist die vollständigste Reise, die wir durch Nordostbrasilien anbieten — eine tiefgehende und sorgfältig geplante Expedition durch einige der vielfältigsten und lohnendsten Vogelbeobachtungsregionen des Landes. In 25 Tagen durchqueren wir sechs Bundesstaaten, durch Atlantischen Regenwald, Caatinga, Cerrado, Felsfelder, Küstenebenen und isolierte Waldrefugien, die einige der seltensten Vögel der Welt beherbergen.\n\nDie Route beginnt in den Übergängen zwischen Maranhão und Piauí, wo der legendäre Kaempferspecht noch überlebt, und erstreckt sich über ikonische Orte: Inseln mit Feuchtwald wie Guaramiranga, die dramatischen Landschaften der Caatinga in Quixadá und Canudos — die weltweite Hochburg des Lear-Aras — und die außergewöhnliche Chapada do Araripe, der einzige Ort der Erde, an dem der Araripe-Manakin beobachtet wird.\n\nVon dort aus betreten wir das Pernambuco-Endemismuszentrum, den am stärksten gefährdeten Teil des brasilianischen Atlantischen Regenwaldes, wo Fragmente wie die Serra do Urubu weltweit bedrohte Arten konzentrieren. Weiter nach Bahia repräsentieren die Chapada Diamantina, Boa Nova, Serra Bonita und die Wälder von Itacaré das Beste der Vogelbeobachtung im Atlantischen Regenwald.\n\nSchwierigkeitsgrad: mittel. Es gibt einige lange Autofahrten, aber die Vogelbeobachtung selbst ist entspannt und die Wanderungen sind kurz — die längsten etwa 4 bis 7 km. Nur der Tag, der dem Boa-Nova-Tapaculo gewidmet ist, erfordert eine bessere Vorbereitung, mit einem steilen 8 bis 10 km langen Weg."
        },
        "imagem": "https://static.wixstatic.com/media/d60b19_7dd3acf5a7564f7abcbf50035447d3b5~mv2.jpg/v1/fill/w_900,h_1000,al_c,q_85/lear.jpg",
        "imagemHero": "https://static.wixstatic.com/media/d60b19_7dd3acf5a7564f7abcbf50035447d3b5~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85/lear.jpg",
        "videoLocal": "assets/passeios/passaros/nord.mp4",
        "galeria": [
          "https://static.wixstatic.com/media/d60b19_df349de5fb134714acdb151ed95f30d9~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_502d4cf5ae764bde82c3759d37e6b33a~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_39119b09c0554a5fa44f868d6c212d21~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_c1bc5827a69348f5957525a8e6f17f75~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_4f90b362fb9b48f69ba6d8f02cf12b9f~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_84a8b6ce3ba54c6db2e12b7e9fff22e5~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_e78c092002d14afe95b0bae0346583d2~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg"
        ]
      },
      {
        "id": "espirito-santo-minas",
        "nome": {
          pt: "Espírito Santo & Minas Gerais",
          en: "Espírito Santo & Minas Gerais",
          es: "Espírito Santo & Minas Gerais",
          fr: "Espírito Santo & Minas Gerais",
          de: "Espírito Santo & Minas Gerais"
        },
        "regiao": {
          pt: "Sudeste",
          en: "Southeast",
          es: "Sudeste",
          fr: "Sudeste",
          de: "Südosten"
        },
        "local": {
          pt: "Espírito Santo e Minas Gerais",
          en: "Espírito Santo and Minas Gerais",
          es: "Espírito Santo y Minas Gerais",
          fr: "Espírito Santo et Minas Gerais",
          de: "Espírito Santo und Minas Gerais"
        },
        "habitats": {
          pt: "Mata Atlântica de baixada, Cerrado, campos rupestres e Serra da Canastra",
          en: "Lowland Atlantic Forest, Cerrado, rocky fields and Serra da Canastra",
          es: "Mata Atlántica de tierras bajas, Cerrado, campos rupestres y Serra da Canastra",
          fr: "Forêt atlantique de plaine, Cerrado, champs rocheux et Serra da Canastra",
          de: "Atlantischer Regenwald im Tiefland, Cerrado, Felsfelder und Serra da Canastra"
        },
        "datas": "22 de setembro a 6 de outubro de 2026",
        "duracao": {
          pt: "15 dias",
          en: "15 days",
          es: "15 días",
          fr: "15 jours",
          de: "15 Tage"
        },
        "dificuldade": {
          pt: "Média",
          en: "Moderate",
          es: "Media",
          fr: "Moyenne",
          de: "Mittel"
        },
        "guia": {
          pt: "João Vitor Andriola",
          en: "João Vitor Andriola",
          es: "João Vitor Andriola",
          fr: "João Vitor Andriola",
          de: "João Vitor Andriola"
        },
        "grupoMax": {
          pt: "8 pessoas",
          en: "8 people",
          es: "8 personas",
          fr: "8 personnes",
          de: "8 Personen"
        },
        "preco": "USD 5.955",
        "suplemento": "USD 504",
        "especies": {
          pt: ["Saíra-apunhalada", "Pato-mergulhão", "Endêmicas de altitude do Cerrado"],
          en: ["Cherry-throated Tanager", "Brazilian Merganser", "Cerrado high altitude endemics"],
          es: ["Tangara apuñalada", "Pato mergulhão", "Endémicas de altitud del Cerrado"],
          fr: ["Tangara à gorge cerise", "Harle huppé du Brésil", "Endémiques d'altitude du Cerrado"],
          de: ["Kirschkehltangare", "Brasil-Säger", "Cerrado-Hochlandendemiten"]
        },
        "resumo": {
          pt: "De Linhares à Serra da Canastra, atrás de duas das aves mais raras do mundo: a saíra-apunhalada e o pato-mergulhão. Muitas oportunidades de fotografia e mamíferos pelo caminho.",
          en: "From Linhares to Serra da Canastra, in search of two of the rarest birds in the world: the Cherry-throated Tanager and the Brazilian Merganser. Many photography and mammal opportunities along the way.",
          es: "De Linhares a la Serra da Canastra, en busca de dos de las aves más raras del mundo: la tangara apuñalada y el pato mergulhão. Muchas oportunidades de fotografía y mamíferos en el camino.",
          fr: "De Linhares à Serra da Canastra, à la recherche de deux des oiseaux les plus rares du monde : la tangara à gorge cerise et le harle huppé du Brésil. De nombreuses opportunités de photographie et de mammifères en chemin.",
          de: "Von Linhares bis zur Serra da Canastra auf der Suche nach zwei der seltensten Vögel der Welt: der Kirschkehltangare und dem Brasil-Säger. Viele Fotomöglichkeiten und Säugetiere auf dem Weg."
        },
        "descricao": {
          pt: "Bem-vindo ao Espírito Santo e Minas Gerais! A expedição começa concentrada em raridades da Mata Atlântica de baixada do Sudeste, em Linhares, antes de partir atrás de outras preciosidades da Mata Atlântica capixaba — como a ultra-rara saíra-apunhalada (Cherry-throated Tanager).\n\nDepois de atravessar paisagens e habitats deslumbrantes em busca de especialidades do Cerrado e dos campos rupestres, encerramos a viagem no belo Cerrado da Serra da Canastra, apreciando as aves de campo e procurando o raro e criticamente ameaçado pato-mergulhão.\n\nNível de dificuldade: média. Na maior parte da viagem há pouca caminhada; em 2 a 3 dias, trilhas mais longas de até 10 km. Em áreas como o Parque Nacional da Serra da Canastra, percorremos muitos quilômetros de estradas de terra, e a busca pelo pato-mergulhão exige paciência — muitas vezes é preciso esperar parado por horas no mesmo ponto. Embora não seja um tour de fotografia, há ótimas oportunidades de fotos e de observação de mamíferos ao longo de todo o percurso.",
          en: "Welcome to Espírito Santo and Minas Gerais! The expedition begins focused on rarities of the lowland Atlantic Forest in the Southeast, in Linhares, before setting off in search of other treasures of the Espírito Santo Atlantic Forest — such as the ultra-rare Cherry-throated Tanager.\n\nAfter crossing stunning landscapes and habitats in search of Cerrado and rocky field specialties, we end the trip in the beautiful Cerrado of Serra da Canastra, enjoying the field birds and searching for the rare and critically endangered Brazilian Merganser.\n\nDifficulty level: moderate. For most of the trip there is little walking; on 2 to 3 days, longer trails of up to 10 km. In areas such as Serra da Canastra National Park, we cover many kilometers of dirt roads, and the search for the Brazilian Merganser requires patience — often you have to wait still for hours at the same spot. Although it's not a photography tour, there are great photo and mammal watching opportunities throughout the journey.",
          es: "¡Bienvenido a Espírito Santo y Minas Gerais! La expedición comienza centrada en rarezas de la Mata Atlántica de tierras bajas en el Sudeste, en Linhares, antes de partir en busca de otros tesoros de la Mata Atlántica de Espírito Santo — como la ultra-rara tangara apuñalada (Cherry-throated Tanager).\n\nDespués de cruzar paisajes y hábitats impresionantes en busca de especialidades del Cerrado y los campos rupestres, terminamos el viaje en el hermoso Cerrado de la Serra da Canastra, disfrutando de las aves de campo y buscando el raro y críticamente amenazado pato mergulhão.\n\nNivel de dificultad: media. En la mayor parte del viaje hay poca caminata; en 2 a 3 días, senderos más largos de hasta 10 km. En áreas como el Parque Nacional de la Serra da Canastra, recorremos muchos kilómetros de caminos de tierra, y la búsqueda del pato mergulhão requiere paciencia — a menudo hay que esperar quieto durante horas en el mismo punto. Aunque no es un tour de fotografía, hay excelentes oportunidades de fotos y de observación de mamíferos a lo largo de todo el recorrido.",
          fr: "Bienvenue à Espírito Santo et Minas Gerais ! L'expédition commence par une concentration sur les raretés de la forêt atlantique de plaine dans le Sudeste, à Linhares, avant de partir à la recherche d'autres trésors de la forêt atlantique d'Espírito Santo — comme la tangara à gorge cerise ultra-rare.\n\nAprès avoir traversé des paysages et des habitats époustouflants à la recherche de spécialités du Cerrado et des champs rocheux, nous terminons le voyage dans le magnifique Cerrado de la Serra da Canastra, en appréciant les oiseaux de campagne et en recherchant le rare et gravement menacé harle huppé du Brésil.\n\nNiveau de difficulté : moyen. Pendant la majeure partie du voyage, il y a peu de marche ; sur 2 à 3 jours, des sentiers plus longs allant jusqu'à 10 km. Dans des zones comme le Parc National de la Serra da Canastra, nous parcourons de nombreux kilomètres de routes de terre, et la recherche du harle huppé du Brésil exige de la patience — il faut souvent attendre immobile pendant des heures au même endroit. Bien qu'il ne s'agisse pas d'un tour de photographie, il y a d'excellentes opportunités de photos et d'observation de mammifères tout au long du parcours.",
          de: "Willkommen in Espírito Santo und Minas Gerais! Die Expedition beginnt mit der Konzentration auf Raritäten des atlantischen Tieflandregenwaldes im Südosten, in Linhares, bevor wir uns auf die Suche nach anderen Schätzen des atlantischen Regenwaldes von Espírito Santo begeben — wie die extrem seltene Kirschkehltangare.\n\nNach der Durchquerung atemberaubender Landschaften und Lebensräume auf der Suche nach Cerrado- und Felsfeld-Spezialitäten beenden wir die Reise im wunderschönen Cerrado der Serra da Canastra, genießen die Feldvögel und suchen nach dem seltenen und vom Aussterben bedrohten Brasil-Säger.\n\nSchwierigkeitsgrad: mittel. Auf dem größten Teil der Reise gibt es wenig zu Fuß; an 2 bis 3 Tagen längere Wege von bis zu 10 km. In Gebieten wie dem Nationalpark Serra da Canastra legen wir viele Kilometer auf Schotterstraßen zurück, und die Suche nach dem Brasil-Säger erfordert Geduld — oft muss man stundenlang an derselben Stelle warten. Obwohl es sich nicht um eine Fototour handelt, gibt es entlang der gesamten Strecke großartige Fotomöglichkeiten und Säugetierbeobachtungen."
        },
        "imagem": "https://static.wixstatic.com/media/d60b19_07add3aab42d4569b813dcc990532758~mv2.jpg/v1/fill/w_900,h_700,al_c,q_85/Nemosia%20rourei_Ciro%20Albano%20(2).jpg",
        "imagemHero": "https://static.wixstatic.com/media/d60b19_07add3aab42d4569b813dcc990532758~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85/Nemosia%20rourei_Ciro%20Albano%20(2).jpg",
        "videoLocal": "assets/passeios/passaros/espirito.mp4",
        "galeria": [
          "https://static.wixstatic.com/media/d60b19_8b1965ad8a154ae9982f9f2579a67191~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_024dc1446e0f41c9ae2e34c238f8cc9d~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_ca50cc4e434b4d88a429b30974cf4c96~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_c46b1df2eb6d4a2fa8f69e681c6b6659~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_ab9be347aff343fe9e63443b237702ba~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_5719caa4a5f1417bb6e7bfe71d713ebd~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg"
        ]
      },
      {
        "id": "centro-oeste",
        "nome": {
          pt: "Centro-Oeste — Central Brazil",
          en: "Central-West — Central Brazil",
          es: "Centro-Oeste — Central Brazil",
          fr: "Centro-Oeste — Central Brazil",
          de: "Zentralwesten — Central Brazil"
        },
        "regiao": {
          pt: "Centro-Oeste",
          en: "Central-West",
          es: "Centro-Oeste",
          fr: "Centro-Oeste",
          de: "Zentralwesten"
        },
        "local": {
          pt: "Goiás",
          en: "Goiás",
          es: "Goiás",
          fr: "Goiás",
          de: "Goiás"
        },
        "habitats": {
          pt: "Cerrado, savanas e manchas de floresta",
          en: "Cerrado, savannas and forest patches",
          es: "Cerrado, sabanas y manchas de bosque",
          fr: "Cerrado, savanes et îlots forestiers",
          de: "Cerrado, Savannen und Waldinseln"
        },
        "datas": "20 de outubro a 1º de novembro de 2026",
        "duracao": {
          pt: "13 dias",
          en: "13 days",
          es: "13 días",
          fr: "13 jours",
          de: "13 Tage"
        },
        "dificuldade": {
          pt: "Baixa",
          en: "Low",
          es: "Baja",
          fr: "Faible",
          de: "Niedrig"
        },
        "guia": {
          pt: "Estevão Santos e Caio Brito",
          en: "Estevão Santos and Caio Brito",
          es: "Estevão Santos y Caio Brito",
          fr: "Estevão Santos et Caio Brito",
          de: "Estevão Santos und Caio Brito"
        },
        "grupoMax": {
          pt: "8 pessoas",
          en: "8 people",
          es: "8 personas",
          fr: "8 personnes",
          de: "8 Personen"
        },
        "preco": "USD 4.824",
        "suplemento": "USD 468",
        "especies": {
          pt: ["Azulão-verdadeiro", "Soldadinho (Horned Sungem)", "Tapaculo-de-brasília", "Periquito-de-pfrimer"],
          en: ["Blue Finch", "Horned Sungem", "Brasília Tapaculo", "Pfrimer's Parakeet"],
          es: ["Azulão-verdadeiro", "Soldadinho (Horned Sungem)", "Tapaculo-de-brasília", "Periquito-de-pfrimer"],
          fr: ["Azulão-verdadeiro", "Soldadinho (Horned Sungem)", "Tapaculo-de-brasília", "Periquito-de-pfrimer"],
          de: ["Azulão-verdadeiro", "Soldadinho (Horned Sungem)", "Tapaculo-de-brasília", "Periquito-de-pfrimer"]
        },
        "resumo": {
          pt: "O coração do Brasil: as vastas extensões de Cerrado de Goiás, com endemismos, boa gastronomia local e pouca caminhada — a expedição mais tranquila das três.",
          en: "The heart of Brazil: the vast expanses of Cerrado in Goiás, with endemics, good local cuisine and little walking — the most relaxed of the three expeditions.",
          es: "El corazón de Brasil: las vastas extensiones de Cerrado de Goiás, con endemismos, buena gastronomía local y poca caminata — la expedición más tranquila de las tres.",
          fr: "Le cœur du Brésil : les vastes étendues de Cerrado dans le Goiás, avec des endémismes, une bonne cuisine locale et peu de marche — l'expédition la plus tranquille des trois.",
          de: "Das Herz Brasiliens: die weiten Gebiete des Cerrado in Goiás, mit Endemiten, guter lokaler Küche und wenig Wanderung — die entspannteste der drei Expeditionen."
        },
        "descricao": {
          pt: "Bem-vindo ao Central Brazil Tour! Nesta viagem mergulhamos no coração do Brasil — Goiás, um dos estados centrais que guarda vastos tesouros naturais e espécies de aves únicas.\n\nConhecido pela rica biodiversidade e pelas grandes extensões de Cerrado, Goiás oferece o cenário perfeito para avistar espécies magníficas como o azulão-verdadeiro, o deslumbrante soldadinho (Horned Sungem), o endêmico tapaculo-de-brasília e o ameaçado periquito-de-pfrimer, de distribuição restrita. Entre savanas onduladas e manchas de floresta, você ainda desfruta dos sabores da culinária local — uma imersão completa em natureza e cultura.\n\nNível de dificuldade: baixa. Na maior parte do tempo, a caminhada é mínima. Embora haja alguns deslocamentos mais longos, passamos duas noites na maioria dos locais, garantindo bom descanso. Não é primariamente um tour de fotografia, mas as oportunidades de boas fotos são excelentes ao longo de toda a jornada.",
          en: "Welcome to the Central Brazil Tour! On this trip we dive into the heart of Brazil — Goiás, one of the central states that holds vast natural treasures and unique bird species.\n\nKnown for its rich biodiversity and large expanses of Cerrado, Goiás offers the perfect setting to spot magnificent species such as the Blue Finch, the stunning Horned Sungem, the endemic Brasília Tapaculo and the threatened Pfrimer's Parakeet, with restricted distribution. Among rolling savannas and forest patches, you also enjoy the flavors of local cuisine — a complete immersion in nature and culture.\n\nDifficulty level: low. Most of the time, walking is minimal. Although there are some longer transfers, we spend two nights in most locations, ensuring good rest. It is not primarily a photography tour, but the photo opportunities are excellent throughout the journey.",
          es: "¡Bienvenido al Central Brazil Tour! En este viaje nos sumergimos en el corazón de Brasil — Goiás, uno de los estados centrales que guarda vastos tesoros naturales y especies de aves únicas.\n\nConocido por su rica biodiversidad y las grandes extensiones de Cerrado, Goiás ofrece el escenario perfecto para avistar especies magníficas como el azulão-verdadeiro, el deslumbrante soldadinho (Horned Sungem), el endémico tapaculo-de-brasília y el amenazado periquito-de-pfrimer, de distribución restringida. Entre sabanas onduladas y manchas de bosque, también disfrutas de los sabores de la cocina local — una inmersión completa en naturaleza y cultura.\n\nNivel de dificultad: bajo. La mayor parte del tiempo, la caminata es mínima. Aunque hay algunos desplazamientos más largos, pasamos dos noches en la mayoría de los lugares, lo que garantiza un buen descanso. No es principalmente un tour de fotografía, pero las oportunidades de buenas fotos son excelentes a lo largo de todo el viaje.",
          fr: "Bienvenue au Central Brazil Tour ! Dans ce voyage, nous plongeons au cœur du Brésil — Goiás, l'un des États centraux qui recèle de vastes trésors naturels et des espèces d'oiseaux uniques.\n\nConnu pour sa riche biodiversité et ses grandes étendues de Cerrado, Goiás offre le cadre idéal pour observer des espèces magnifiques telles que l'azulão-verdadeiro, le superbe soldadinho (Horned Sungem), le tapaculo-de-brasília endémique et le periquito-de-pfrimer menacé, à distribution restreinte. Entre savanes vallonnées et îlots forestiers, vous appréciez également les saveurs de la cuisine locale — une immersion complète dans la nature et la culture.\n\nNiveau de difficulté : faible. La plupart du temps, la marche est minime. Bien qu'il y ait des transferts plus longs, nous passons deux nuits dans la plupart des endroits, ce qui garantit un bon repos. Il ne s'agit pas principalement d'un tour de photographie, mais les opportunités de bonnes photos sont excellentes tout au long du voyage.",
          de: "Willkommen zur Central Brazil Tour! Auf dieser Reise tauchen wir ins Herz Brasiliens ein — Goiás, einer der zentralen Bundesstaaten, der riesige natürliche Schätze und einzigartige Vogelarten birgt.\n\nBekannt für seine reiche Biodiversität und die großen Cerrado-Gebiete, bietet Goiás die perfekte Kulisse, um großartige Arten wie den Azulão-verdadeiro, den atemberaubenden Soldadinho (Horned Sungem), den endemischen Tapaculo-de-brasília und den bedrohten Periquito-de-pfrimer mit begrenzter Verbreitung zu beobachten. Zwischen welligen Savannen und Waldinseln genießen Sie auch die Aromen der lokalen Küche — ein vollständiges Eintauchen in Natur und Kultur.\n\nSchwierigkeitsgrad: niedrig. Die meiste Zeit ist das Laufen minimal. Obwohl es einige längere Fahrten gibt, verbringen wir in den meisten Orten zwei Nächte, was eine gute Erholung gewährleistet. Es handelt sich nicht in erster Linie um eine Fototour, aber die Fotomöglichkeiten sind während der gesamten Reise ausgezeichnet."
        },
        "imagem": "https://static.wixstatic.com/media/d60b19_48c7cee86edd48b9ba7e02abc4434d5e~mv2.jpg/v1/fill/w_900,h_700,al_c,q_85/4.%20heliactin%20WA.jpg",
        "imagemHero": "https://static.wixstatic.com/media/d60b19_48c7cee86edd48b9ba7e02abc4434d5e~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85/4.%20heliactin%20WA.jpg",
        "videoLocal": "assets/passeios/passaros/centro.mp4",
        "galeria": [
          "https://static.wixstatic.com/media/d60b19_493a741026974f308a7bb2a060627714~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_431194e44f87411285b2b469991885b7~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_e843f2c5fd714d0181ab3957f39873d3~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_53fdf395710a4de9ab83305c15e084b8~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_bbc24c93936d4c7f8e1b14ed7a75974f~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg",
          "https://static.wixstatic.com/media/d60b19_9aa11687a2534c5e926b718b89988c44~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/f.jpg"
        ]
      }
    ],
    "imagens": [],
    "video": null
  },

  // ========== 16. AULAS DE SURF ==========
  {
    "id": "aula-surf",
    "linkPagamento": "https://brazilxcursions.com/passeio/aula-de-surf",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/kNKE7rKztZw"],
    "titulo": {
      pt: "Aulas de Surf",
      en: "Surf Lessons",
      es: "Clases de Surf",
      fr: "Cours de Surf",
      de: "Surfunterricht"
    },
    "categoria": "praia/ilha",
    "tagline": {
      pt: "O Rio e o Mar foram feitos um para o outro",
      en: "Rio and the Sea were made for each other",
      es: "Río y el Mar fueron hechos el uno para el otro",
      fr: "Rio et la Mer ont été faits l'un pour l'autre",
      de: "Rio und das Meer wurden füreinander gemacht"
    },
    "descricao": {
      pt: "Venha praticar um dos esportes mais tradicionais do Rio de Janeiro com um professor especializado e um cenário espetacular! As aulas acontecem diariamente, respeitando as condições do mar, e são para todos os níveis. O professor guia o aluno em segurança para aproveitar o melhor do surf no Rio de Janeiro. Os horários são das 6h às 18h, com todo o equipamento necessário para as aulas. Essa aula é apropriada para pessoas que têm certa familiaridade com o mar e que sabem nadar. Esporte é saúde, há desafios a se vencer, mas aprender algo novo sempre nos tornará pessoas melhores. Aloha!\n\nAula de surf: aprenda a surfar em Ipanema.",
      en: "Come practice one of Rio de Janeiro's most traditional sports with a specialized teacher and a spectacular setting! Lessons happen daily, respecting sea conditions, and are for all levels. The teacher guides the student safely to make the most of surfing in Rio de Janeiro. Hours are from 6am to 6pm, with all necessary equipment for the lessons. This lesson is appropriate for people who have some familiarity with the sea and know how to swim. Sport is health, there are challenges to overcome, but learning something new will always make us better people. Aloha!\n\nSurf lesson: learn to surf in Ipanema.",
      es: "¡Ven a practicar uno de los deportes más tradicionales de Río de Janeiro con un profesor especializado y un escenario espectacular! Las clases se realizan diariamente, respetando las condiciones del mar, y son para todos los niveles. El profesor guía al alumno con seguridad para aprovechar al máximo el surf en Río de Janeiro. Los horarios son de 6h a 18h, con todo el equipo necesario para las clases. Esta clase es apropiada para personas que tienen cierta familiaridad con el mar y saben nadar. El deporte es salud, hay desafíos que superar, pero aprender algo nuevo siempre nos hará mejores personas. ¡Aloha!\n\nClase de surf: aprende a surfear en Ipanema.",
      fr: "Venez pratiquer l'un des sports les plus traditionnels de Rio de Janeiro avec un professeur spécialisé et un cadre spectaculaire ! Les cours ont lieu quotidiennement, en respectant les conditions de la mer, et sont pour tous les niveaux. Le professeur guide l'élève en toute sécurité pour profiter au mieux du surf à Rio de Janeiro. Les horaires sont de 6h à 18h, avec tout l'équipement nécessaire pour les cours. Ce cours est adapté aux personnes qui ont une certaine familiarité avec la mer et qui savent nager. Le sport, c'est la santé, il y a des défis à relever, mais apprendre quelque chose de nouveau nous rendra toujours meilleurs. Aloha !\n\nCours de surf : apprenez à surfer à Ipanema.",
      de: "Kommen Sie und üben Sie eine der traditionellsten Sportarten von Rio de Janeiro mit einem spezialisierten Lehrer und einer spektakulären Kulisse! Der Unterricht findet täglich statt, unter Berücksichtigung der Meeresbedingungen, und ist für alle Niveaus geeignet. Der Lehrer führt den Schüler sicher an, um das Beste aus dem Surfen in Rio de Janeiro zu machen. Die Zeiten sind von 6 bis 18 Uhr, mit der gesamten notwendigen Ausrüstung für den Unterricht. Dieser Unterricht ist für Personen geeignet, die etwas Vertrautheit mit dem Meer haben und schwimmen können. Sport ist Gesundheit, es gibt Herausforderungen zu meistern, aber etwas Neues zu lernen wird uns immer zu besseren Menschen machen. Aloha!\n\nSurfunterricht: Lernen Sie in Ipanema surfen."
    },
    "preco": "R$ 150,00",
    "duracao": {
      pt: "Diariamente, de manhã e à tarde, das 6h às 18h (conforme condições do mar)",
      en: "Daily, morning and afternoon, from 6am to 6pm (depending on sea conditions)",
      es: "Diariamente, por la mañana y por la tarde, de 6h a 18h (según condiciones del mar)",
      fr: "Tous les jours, matin et après-midi, de 6h à 18h (selon les conditions de la mer)",
      de: "Täglich, morgens und nachmittags, von 6 bis 18 Uhr (je nach Meeresbedingungen)"
    },
    "inclusos": {
      pt: ["Prancha de surf", "Roupas apropriadas (roupa de neoprene)"],
      en: ["Surfboard", "Appropriate clothing (wetsuit)"],
      es: ["Tabla de surf", "Ropa adecuada (traje de neopreno)"],
      fr: ["Planche de surf", "Vêtements appropriés (combinaison néoprène)"],
      de: ["Surfbrett", "Angemessene Kleidung (Neoprenanzug)"]
    },
    "imagens": ["assets/passeios/aula-surf/aula-surf-1.jpg", "assets/passeios/aula-surf/aula-surf-2.jpg", "assets/passeios/aula-surf/aula-surf-3.jpg", "assets/passeios/aula-surf/aula-surf-4.jpg", "assets/passeios/aula-surf/aula-surf-5.jpg", "assets/passeios/aula-surf/aula-surf-6.jpg", "assets/passeios/aula-surf/aula-surf-7.jpg"],
    "creditoFoto": "Fotos: surf Flávio Amieiro, CC BY-SA 3.0 (Wikimedia Commons); thales-araujo-99818442 (Pexels); thales-ricardo-araujo-100707802 (Pexels) — uso livre.",
    "video": null
  },

  // ========== 17. ILHAS TIJUCAS ==========
  {
    "id": "ilhas-tijucas",
    "linkPagamento": "https://brazilxcursions.com/passeio/ilhas-tijucas",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/z8caF930tow"],
    "titulo": {
      pt: "Ilhas Tijucas - Entre a Cidade e o Horizonte Azul",
      en: "Tijucas Islands - Between the City and the Blue Horizon",
      es: "Islas Tijucas - Entre la Ciudad y el Horizonte Azul",
      fr: "Îles Tijucas - Entre la Ville et l'Horizon Bleu",
      de: "Tijucas-Inseln - Zwischen der Stadt und dem Blauen Horizont"
    },
    "categoria": "praia/ilha",
    "tagline": {
      pt: "Entre a cidade e o horizonte azul",
      en: "Between the city and the blue horizon",
      es: "Entre la ciudad y el horizonte azul",
      fr: "Entre la ville et l'horizon bleu",
      de: "Zwischen der Stadt und dem blauen Horizont"
    },
    "descricao": {
      pt: "As Ilhas Tijucas são como uma dádiva e um alívio para quem ama as belezas terrestres do Rio: você chega na ilha e descobre um paraíso escondido no nosso mar, águas cristalinas e uma vista panorâmica da cidade. É uma aventura prática e moderna, para quem quer explorar e nadar além da praia.\n\nA dinâmica é simples: pela manhã você pega um barquinho na Praia dos Amores, na Barra da Tijuca, e depois de 5 minutos navegando no mar, sentindo a maresia e os ventos suaves do Atlântico, você chega a um arquipélago de 3 ilhas que compõe o que chamamos de Ilhas Tijucas. Chegando lá, você entende que a beleza da cidade vai além das praias e montanhas. A equipe responsável pelo passeio é bem atenciosa e oferece todo o apoio necessário para quem quer aproveitar o mar e se divertir, com pranchas de stand-up e acessórios aquáticos disponíveis para todas as idades.\n\nDescubra um paraíso escondido no coração do Rio de Janeiro: as Ilhas Tijucas. Um refúgio natural em meio ao oceano, onde águas cristalinas encontram formações rochosas impressionantes e uma vida marinha vibrante. O trajeto é realizado em embarcações seguras e confortáveis, conduzidas por profissionais experientes.\n\nGraças à parceria entre a Casa São Conrado e a Ilhas Tijucas Tur, esse passeio está mais acessível do que nunca: por R$200 por pessoa (crianças entre 5 e 10 anos pagam R$100), você tem transporte de barco, assistência na ilha e água e mate liberados para curtir cada momento sem preocupações. O passeio é para toda a família, permitido para crianças a partir de 5 anos, com macarrões para boiar na água.\n\nO que esperar: atividades na ilha com stand-up paddle, boias de lazer e máscaras de mergulho; guias autorizados garantindo segurança; bebidas refrescantes gratuitas a bordo (água e chá-mate gelado). Saídas diárias às 8h, 11h e 14h, com duração total de aproximadamente 4 horas. O passeio não é indicado para crianças menores de 5 anos.",
      en: "The Tijucas Islands are like a gift and a relief for those who love Rio's land beauties: you arrive on the island and discover a hidden paradise in our sea, crystal clear waters and a panoramic view of the city. It's a practical and modern adventure for those who want to explore and swim beyond the beach.\n\nThe dynamics are simple: in the morning you take a small boat at Praia dos Amores, in Barra da Tijuca, and after 5 minutes sailing the sea, feeling the sea breeze and the gentle Atlantic winds, you arrive at an archipelago of 3 islands that make up what we call Tijucas Islands. Once there, you understand that the city's beauty goes beyond beaches and mountains. The team responsible for the tour is very attentive and offers all the necessary support for those who want to enjoy the sea and have fun, with stand-up paddle boards and water accessories available for all ages.\n\nDiscover a hidden paradise in the heart of Rio de Janeiro: the Tijucas Islands. A natural refuge in the middle of the ocean, where crystal clear waters meet impressive rock formations and vibrant marine life. The journey is carried out in safe and comfortable vessels, driven by experienced professionals.\n\nThanks to the partnership between Casa São Conrado and Ilhas Tijucas Tur, this tour is more accessible than ever: for R$200 per person (children between 5 and 10 years old pay R$100), you have boat transportation, assistance on the island and water and mate tea free to enjoy every moment without worries. The tour is for the whole family, allowed for children from 5 years old, with noodles to float in the water.\n\nWhat to expect: activities on the island with stand-up paddle, leisure buoys and snorkeling masks; authorized guides ensuring safety; free refreshing drinks on board (water and iced mate tea). Daily departures at 8am, 11am and 2pm, with total duration of approximately 4 hours. The tour is not recommended for children under 5 years old.",
      es: "Las Islas Tijucas son como un regalo y un alivio para quienes aman las bellezas terrestres de Río: llegas a la isla y descubres un paraíso escondido en nuestro mar, aguas cristalinas y una vista panorámica de la ciudad. Es una aventura práctica y moderna para quienes quieren explorar y nadar más allá de la playa.\n\nLa dinámica es simple: por la mañana tomas un barquito en la Praia dos Amores, en Barra da Tijuca, y después de 5 minutos navegando en el mar, sintiendo la brisa marina y los suaves vientos del Atlántico, llegas a un archipiélago de 3 islas que componen lo que llamamos Islas Tijucas. Al llegar, entiendes que la belleza de la ciudad va más allá de las playas y montañas. El equipo responsable del tour es muy atento y ofrece todo el apoyo necesario para quienes quieren disfrutar del mar y divertirse, con tablas de stand-up paddle y accesorios acuáticos disponibles para todas las edades.\n\nDescubre un paraíso escondido en el corazón de Río de Janeiro: las Islas Tijucas. Un refugio natural en medio del océano, donde aguas cristalinas se encuentran con impresionantes formaciones rocosas y una vida marina vibrante. El trayecto se realiza en embarcaciones seguras y confortables, conducidas por profesionales experimentados.\n\nGracias a la alianza entre Casa São Conrado e Ilhas Tijucas Tur, este tour es más accesible que nunca: por R$200 por persona (niños entre 5 y 10 años pagan R$100), tienes transporte en barco, asistencia en la isla y agua y mate liberados para disfrutar cada momento sin preocupaciones. El tour es para toda la familia, permitido para niños a partir de 5 años, con noodles para flotar en el agua.\n\nQué esperar: actividades en la isla con stand-up paddle, boyas de ocio y máscaras de buceo; guías autorizados garantizando seguridad; bebidas refrescantes gratuitas a bordo (agua y té mate frío). Salidas diarias a las 8h, 11h y 14h, con duración total de aproximadamente 4 horas. El tour no está recomendado para niños menores de 5 años.",
      fr: "Les Îles Tijucas sont comme un don et un soulagement pour ceux qui aiment les beautés terrestres de Rio : vous arrivez sur l'île et découvrez un paradis caché dans notre mer, des eaux cristallines et une vue panoramique sur la ville. C'est une aventure pratique et moderne pour ceux qui veulent explorer et nager au-delà de la plage.\n\nLa dynamique est simple : le matin, vous prenez un petit bateau à la Praia dos Amores, dans la Barra da Tijuca, et après 5 minutes de navigation en mer, sentant la brise marine et les doux vents de l'Atlantique, vous arrivez à un archipel de 3 îles qui composent ce que nous appelons les Îles Tijucas. Une fois sur place, vous comprenez que la beauté de la ville va au-delà des plages et des montagnes. L'équipe responsable de la visite est très attentive et offre tout le soutien nécessaire pour ceux qui veulent profiter de la mer et s'amuser, avec des planches de stand-up paddle et des accessoires aquatiques disponibles pour tous les âges.\n\nDécouvrez un paradis caché au cœur de Rio de Janeiro : les Îles Tijucas. Un refuge naturel au milieu de l'océan, où des eaux cristallines rencontrent des formations rocheuses impressionnantes et une vie marine vibrante. Le trajet est effectué dans des embarcations sûres et confortables, conduites par des professionnels expérimentés.\n\nGrâce au partenariat entre Casa São Conrado et Ilhas Tijucas Tur, cette visite est plus accessible que jamais : pour R$200 par personne (les enfants entre 5 et 10 ans paient R$100), vous avez le transport en bateau, l'assistance sur l'île et de l'eau et du maté offerts pour profiter de chaque moment sans souci. La visite est pour toute la famille, autorisée pour les enfants à partir de 5 ans, avec des nouilles pour flotter dans l'eau.\n\nCe qui vous attend : activités sur l'île avec stand-up paddle, bouées de loisir et masques de plongée ; guides autorisés garantissant la sécurité ; boissons rafraîchissantes gratuites à bord (eau et thé maté glacé). Départs quotidiens à 8h, 11h et 14h, d'une durée totale d'environ 4 heures. La visite n'est pas recommandée pour les enfants de moins de 5 ans.",
      de: "Die Tijucas-Inseln sind wie ein Geschenk und eine Erleichterung für diejenigen, die die landschaftlichen Schönheiten Rios lieben: Sie kommen auf der Insel an und entdecken ein verstecktes Paradies in unserem Meer, kristallklares Wasser und einen Panoramablick auf die Stadt. Es ist ein praktisches und modernes Abenteuer für diejenigen, die über den Strand hinaus erkunden und schwimmen möchten.\n\nDie Dynamik ist einfach: Am Morgen nehmen Sie ein kleines Boot an der Praia dos Amores in der Barra da Tijuca, und nach 5 Minuten Fahrt auf dem Meer, mit der Meeresbrise und den sanften atlantischen Winden, erreichen Sie ein Archipel von 3 Inseln, die wir Tijucas-Inseln nennen. Dort angekommen, verstehen Sie, dass die Schönheit der Stadt über Strände und Berge hinausgeht. Das Team, das für die Tour verantwortlich ist, ist sehr aufmerksam und bietet alle notwendige Unterstützung für diejenigen, die das Meer genießen und Spaß haben möchten, mit Stand-up-Paddle-Brettern und Wasserzubehör für alle Altersgruppen.\n\nEntdecken Sie ein verstecktes Paradies im Herzen von Rio de Janeiro: die Tijucas-Inseln. Ein natürlicher Zufluchtsort mitten im Ozean, wo kristallklares Wasser auf beeindruckende Felsformationen und ein lebendiges Meeresleben trifft. Die Fahrt erfolgt in sicheren und komfortablen Booten, die von erfahrenen Fachleuten gefahren werden.\n\nDank der Partnerschaft zwischen Casa São Conrado und Ilhas Tijucas Tur ist diese Tour zugänglicher denn je: Für R$200 pro Person (Kinder zwischen 5 und 10 Jahren zahlen R$100) erhalten Sie Bootstransport, Betreuung auf der Insel und kostenloses Wasser und Mate-Tee, um jeden Moment ohne Sorgen zu genießen. Die Tour ist für die ganze Familie geeignet, für Kinder ab 5 Jahren, mit Nudeln zum Schweben im Wasser.\n\nWas Sie erwartet: Aktivitäten auf der Insel mit Stand-up-Paddle, Freizeitbojen und Schnorchelmasken; autorisierte Guides für Ihre Sicherheit; kostenlose erfrischende Getränke an Bord (Wasser und Eistee). Tägliche Abfahrten um 8, 11 und 14 Uhr, mit einer Gesamtdauer von etwa 4 Stunden. Die Tour wird für Kinder unter 5 Jahren nicht empfohlen."
    },
    "preco": "R$ 200,00",
    "duracao": {
      pt: "Aproximadamente 4 horas (saídas diárias às 8h, 11h e 14h)",
      en: "Approximately 4 hours (daily departures at 8am, 11am and 2pm)",
      es: "Aproximadamente 4 horas (salidas diarias a las 8h, 11h y 14h)",
      fr: "Environ 4 heures (départs quotidiens à 8h, 11h et 14h)",
      de: "Etwa 4 Stunden (tägliche Abfahrten um 8, 11 und 14 Uhr)"
    },
    "inclusos": {
      pt: ["Transporte de barco", "Assistência na ilha", "Água e chá-mate liberados", "Pranchas de stand-up, boias e máscaras de mergulho"],
      en: ["Boat transportation", "Assistance on the island", "Free water and mate tea", "Stand-up paddle boards, buoys and snorkeling masks"],
      es: ["Transporte en barco", "Asistencia en la isla", "Agua y té mate liberados", "Tablas de stand-up, boyas y máscaras de buceo"],
      fr: ["Transport en bateau", "Assistance sur l'île", "Eau et thé maté offerts", "Planches de stand-up paddle, bouées et masques de plongée"],
      de: ["Bootstransport", "Betreuung auf der Insel", "Kostenloses Wasser und Mate-Tee", "Stand-up-Paddle-Bretter, Bojen und Schnorchelmasken"]
    },
    "imagens": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ilhas%20Tijucas%20by%20Diego%20Baravelli%2001.jpg?width=1600",
      "assets/passeios/ilhas-tijucas/Entre-a-cidade-e-o-horizonte-azul-69f54e2f7531f.jpg",
      "assets/passeios/ilhas-tijucas/Foto 01.jpg",
      "assets/passeios/ilhas-tijucas/Foto 02.jpg",
      "assets/passeios/ilhas-tijucas/Foto 3.jpg",
      "assets/passeios/ilhas-tijucas/Screenshot (746).jpg",
      "assets/passeios/ilhas-tijucas/download.jpg"
    ],
    "creditoFoto": "Foto de capa: Diego Baravelli via Wikimedia Commons.",
    "video": null
  },

  // ========== 18. CENTRO HISTÓRICO ==========
  {
    "id": "centro",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/fNkqcc0b5wQ"],
    "titulo": {
      pt: "Centro Histórico",
      en: "Historic Center",
      es: "Centro Histórico",
      fr: "Centre Historique",
      de: "Historisches Zentrum"
    },
    "categoria": "cultura/cidade",
    "marca": "casa-sao-conrado",
    "tagline": {
      pt: "História, arte urbana e sabor no coração do Rio",
      en: "History, urban art and flavor in the heart of Rio",
      es: "Historia, arte urbano y sabor en el corazón de Río",
      fr: "Histoire, art urbain et saveur au cœur de Rio",
      de: "Geschichte, Urban Art und Geschmack im Herzen von Rio"
    },
    "descricao": {
      pt: "Mergulhe no passado do Rio com um passeio que inclui marcos da era colonial, praças vibrantes e maravilhas da arquitetura moderna. Personalize sua experiência visitando locais como o Real Gabinete Português de Leitura — uma das bibliotecas mais lindas do mundo —, admirando a imponência da Catedral Metropolitana ou saboreando um café brasileiro especial em uma cafeteria histórica. O roteiro também pode incluir uma parada na Cinelândia, onde fica o grandioso Theatro Municipal, além de uma caminhada pela Escadaria Selarón e pelos Arcos da Lapa — parte do antigo sistema de aquedutos da cidade —, de onde é possível avistar o bondinho de Santa Teresa.\n\nAtenção, amantes da gastronomia! Esta é uma oportunidade de explorar a cidade como um morador local e provar comidas de rua enquanto descobre preciosidades locais, patrimônios históricos e arte urbana.",
      en: "Dive into Rio's past with a tour that includes landmarks from the colonial era, vibrant squares and wonders of modern architecture. Personalize your experience by visiting places like the Real Gabinete Português de Leitura — one of the most beautiful libraries in the world — admiring the grandeur of the Metropolitan Cathedral or savoring a special Brazilian coffee at a historic café. The itinerary may also include a stop at Cinelândia, where the grand Theatro Municipal is located, as well as a walk along the Selarón Steps and the Lapa Arches — part of the city's old aqueduct system — from where you can spot the Santa Teresa tram.\n\nAttention, food lovers! This is an opportunity to explore the city like a local and try street food while discovering local treasures, historical heritage and urban art.",
      es: "Sumérgete en el pasado de Río con un tour que incluye hitos de la época colonial, plazas vibrantes y maravillas de la arquitectura moderna. Personaliza tu experiencia visitando lugares como el Real Gabinete Português de Leitura — una de las bibliotecas más bellas del mundo —, admirando la imponencia de la Catedral Metropolitana o saboreando un café brasileño especial en una cafetería histórica. El itinerario también puede incluir una parada en Cinelândia, donde se encuentra el grandioso Theatro Municipal, además de un paseo por la Escadaria Selarón y los Arcos de Lapa — parte del antiguo sistema de acueductos de la ciudad —, desde donde se puede ver el tranvía de Santa Teresa.\n\n¡Atención, amantes de la gastronomía! Esta es una oportunidad para explorar la ciudad como un residente local y probar comida callejera mientras descubres tesoros locales, patrimonio histórico y arte urbano.",
      fr: "Plongez dans le passé de Rio avec une visite qui comprend des monuments de l'ère coloniale, des places vibrantes et des merveilles de l'architecture moderne. Personnalisez votre expérience en visitant des lieux comme le Real Gabinete Português de Leitura — l'une des plus belles bibliothèques du monde — en admirant la grandeur de la Cathédrale Métropolitaine ou en dégustant un café brésilien spécial dans un café historique. L'itinéraire peut également inclure un arrêt à Cinelândia, où se trouve le grandiose Theatro Municipal, ainsi qu'une promenade le long de l'Escadaria Selarón et des Arches de Lapa — faisant partie de l'ancien système d'aqueducs de la ville — d'où l'on peut apercevoir le tramway de Santa Teresa.\n\nAttention, amateurs de gastronomie ! C'est l'occasion d'explorer la ville comme un habitant local et de goûter à la cuisine de rue tout en découvrant des trésors locaux, des patrimoines historiques et l'art urbain.",
      de: "Tauchen Sie ein in Rios Vergangenheit mit einer Tour, die Wahrzeichen aus der Kolonialzeit, lebendige Plätze und Wunder der modernen Architektur umfasst. Personalisieren Sie Ihr Erlebnis, indem Sie Orte wie das Real Gabinete Português de Leitura besuchen — eine der schönsten Bibliotheken der Welt —, die Pracht der Metropolitankathedrale bewundern oder einen speziellen brasilianischen Kaffee in einem historischen Café genießen. Die Route kann auch einen Halt in Cinelândia beinhalten, wo sich das großartige Theatro Municipal befindet, sowie einen Spaziergang entlang der Selarón-Treppe und der Lapa-Bögen — Teil des alten Aquäduktsystems der Stadt — von wo aus man die Santa Teresa-Straßenbahn sehen kann.\n\nAchtung, Feinschmecker! Dies ist eine Gelegenheit, die Stadt wie ein Einheimischer zu erkunden und Streetfood zu probieren, während Sie lokale Schätze, historisches Erbe und Urban Art entdecken."
    },
    "preco": "R$ 250,00",
    "duracao": {
      pt: "Duração a confirmar",
      en: "Duration to be confirmed",
      es: "Duración a confirmar",
      fr: "Durée à confirmer",
      de: "Dauer noch zu bestätigen"
    },
    "inclusos": {
      pt: ["Guia local"],
      en: ["Local guide"],
      es: ["Guía local"],
      fr: ["Guide local"],
      de: ["Lokaler Guide"]
    },
    "imagens": ["assets/passeios/centro/centro-1.jpg", "assets/passeios/centro/centro-2.jpg", "assets/passeios/centro/centro-3.jpg", "assets/passeios/centro/centro-4.jpg", "assets/passeios/centro/centro-5.jpg", "assets/passeios/centro/centro-6.jpg", "assets/passeios/centro/centro-7.jpg", "assets/passeios/centro/centro-8.jpg", "assets/passeios/centro/centro-9.jpg", "assets/passeios/centro/centro-10.jpg", "assets/passeios/centro/centro-11.jpg", "assets/passeios/centro/centro-12.jpg", "assets/passeios/centro/centro-13.jpg"],
    "creditoFoto": "Foto do artesão Pacary Pataxó na Casa TUCUM: @SouMarianaMonteiro.",
    "video": null
  },

  // ========== 19. PASSEIO DE BARCO GUANABARA ==========
  {
    "id": "barco",
    "linkPagamento": "https://brazilxcursions.com/passeio/passeio-de-barco-ao-por-do-sol",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/EV2-BzvyLwE"],
    "titulo": {
      pt: "Passeio de barco ao pôr do sol",
      en: "Sunset Boat Tour",
      es: "Paseo en barco al atardecer",
      fr: "Balade en bateau au coucher du soleil",
      de: "Bootstour bei Sonnenuntergang"
    },
    "categoria": "praia/ilha",
    "marca": "casa-sao-conrado",
    "tagline": {
      pt: "O Rio visto do mar, ao sol da manhã ou à luz do pôr do sol",
      en: "Rio seen from the sea, in the morning sun or at sunset light",
      es: "Río visto desde el mar, al sol de la mañana o a la luz del atardecer",
      fr: "Rio vu de la mer, au soleil du matin ou à la lumière du coucher du soleil",
      de: "Rio vom Meer aus gesehen, im Morgenlicht oder bei Sonnenuntergang"
    },
    "descricao": {
      pt: "Viva o Rio a partir do mar em um passeio compartilhado de 3 horas pela Baía de Guanabara, saindo da Marina da Glória. Escolha entre a opção da manhã, das 10h às 13h — leve e relaxante, perfeita para famílias, casais ou quem viaja sozinho —, ou o pôr do sol, a partir das 15h, o passeio mais concorrido, com luz dourada e vistas inesquecíveis direto do mar.\n\nAo longo do trajeto há paradas para banho em águas calmas, com tapete flutuante e espaguetes de piscina à disposição, caixa de som Bluetooth tocando boa música e uma tripulação simpática e experiente cuidando de tudo. O passeio inclui caipirinha ou cerveja, frutas frescas, copos, cooler e gelo.\n\nAs vistas passam pelo Pão de Açúcar e pelo Cristo Redentor, vistos do mar, além de aviões pousando e decolando do Aeroporto Santos Dumont. Leve roupa de banho, toalha e protetor solar — e escolha se prefere a manhã tranquila ou a magia do pôr do sol.",
      en: "Experience Rio from the sea on a 3-hour shared tour of Guanabara Bay, departing from Marina da Glória. Choose between the morning option, from 10am to 1pm — light and relaxing, perfect for families, couples or solo travelers — or sunset, from 3pm, the most popular tour, with golden light and unforgettable views straight from the sea.\n\nAlong the way, there are stops for swimming in calm waters, with a floating mat and pool noodles available, Bluetooth speakers playing good music and a friendly, experienced crew taking care of everything. The tour includes caipirinha or beer, fresh fruit, cups, cooler and ice.\n\nThe views pass by Sugarloaf Mountain and Christ the Redeemer, seen from the sea, as well as planes landing and taking off from Santos Dumont Airport. Bring swimwear, towel and sunscreen — and choose whether you prefer the quiet morning or the magic of sunset.",
      es: "Vive Río desde el mar en un tour compartido de 3 horas por la Bahía de Guanabara, saliendo de la Marina da Glória. Elige entre la opción de la mañana, de 10h a 13h — ligera y relajante, perfecta para familias, parejas o viajeros solitarios — o el atardecer, a partir de las 15h, el tour más concurrido, con luz dorada y vistas inolvidables directamente desde el mar.\n\nA lo largo del recorrido hay paradas para bañarse en aguas tranquilas, con alfombra flotante y espaguetis de piscina disponibles, altavoz Bluetooth con buena música y una tripulación simpática y experimentada que se encarga de todo. El tour incluye caipirinha o cerveza, frutas frescas, vasos, cooler y hielo.\n\nLas vistas pasan por el Pan de Azúcar y el Cristo Redentor, vistos desde el mar, además de aviones aterrizando y despegando del Aeropuerto Santos Dumont. Lleva traje de baño, toalla y protector solar — y elige si prefieres la tranquila mañana o la magia del atardecer.",
      fr: "Vivez Rio depuis la mer lors d'une visite partagée de 3 heures dans la Baie de Guanabara, au départ de la Marina da Glória. Choisissez entre l'option du matin, de 10h à 13h — légère et relaxante, parfaite pour les familles, les couples ou les voyageurs seuls — ou le coucher du soleil, à partir de 15h, la visite la plus prisée, avec une lumière dorée et des vues inoubliables directement depuis la mer.\n\nTout au long du parcours, il y a des arrêts pour se baigner dans des eaux calmes, avec un tapis flottant et des nouilles de piscine à disposition, une enceinte Bluetooth diffusant de la bonne musique et un équipage sympathique et expérimenté qui s'occupe de tout. La visite comprend de la caipirinha ou de la bière, des fruits frais, des verres, un réfrigérateur et de la glace.\n\nLes vues passent par le Pain de Sucre et le Christ Rédempteur, vus de la mer, ainsi que des avions atterrissant et décollant de l'aéroport Santos Dumont. Apportez un maillot de bain, une serviette et de la crème solaire — et choisissez si vous préférez le calme du matin ou la magie du coucher du soleil.",
      de: "Erleben Sie Rio vom Meer aus auf einer 3-stündigen gemeinsamen Tour durch die Guanabara-Bucht, ab Marina da Glória. Wählen Sie zwischen der Morgenoption von 10 bis 13 Uhr — leicht und entspannend, perfekt für Familien, Paare oder Alleinreisende — oder dem Sonnenuntergang ab 15 Uhr, der beliebtesten Tour, mit goldenem Licht und unvergesslichen Ausblicken direkt vom Meer.\n\nEntlang der Route gibt es Stopps zum Baden in ruhigem Wasser, mit einer schwimmenden Matte und Poolnudeln zur Verfügung, Bluetooth-Lautsprecher mit guter Musik und einer freundlichen, erfahrenen Crew, die sich um alles kümmert. Die Tour beinhaltet Caipirinha oder Bier, frisches Obst, Becher, Kühler und Eis.\n\nDie Ausblicke gehen am Zuckerhut und am Christus dem Erlöser vorbei, vom Meer aus gesehen, sowie Flugzeuge, die am Santos Dumont Flughafen landen und starten. Nehmen Sie Badekleidung, Handtuch und Sonnencreme mit — und entscheiden Sie, ob Sie den ruhigen Morgen oder die Magie des Sonnenuntergangs bevorzugen."
    },
    "preco": "R$ 250,00",
    "duracao": {
      pt: "3 horas — manhã (10h às 13h) ou pôr do sol (a partir das 15h)",
      en: "3 hours — morning (10am to 1pm) or sunset (from 3pm)",
      es: "3 horas — mañana (10h a 13h) o atardecer (a partir de las 15h)",
      fr: "3 heures — matin (10h à 13h) ou coucher de soleil (à partir de 15h)",
      de: "3 Stunden — morgens (10 bis 13 Uhr) oder Sonnenuntergang (ab 15 Uhr)"
    },
    "inclusos": {
      pt: ["Caipirinha ou cerveja", "Frutas frescas", "Tapete flutuante e espaguetes de piscina", "Caixa de som Bluetooth", "Copos, cooler e gelo", "Tripulação simpática e experiente"],
      en: ["Caipirinha or beer", "Fresh fruits", "Floating mat and pool noodles", "Bluetooth speaker", "Cups, cooler and ice", "Friendly and experienced crew"],
      es: ["Caipirinha o cerveza", "Frutas frescas", "Alfombra flotante y espaguetis de piscina", "Altavoz Bluetooth", "Vasos, cooler y hielo", "Tripulación simpática y experimentada"],
      fr: ["Caipirinha ou bière", "Fruits frais", "Tapis flottant et nouilles de piscine", "Enceinte Bluetooth", "Verres, réfrigérateur et glace", "Équipage sympathique et expérimenté"],
      de: ["Caipirinha oder Bier", "Frisches Obst", "Schwimmende Matte und Poolnudeln", "Bluetooth-Lautsprecher", "Becher, Kühler und Eis", "Freundliche und erfahrene Crew"]
    },
    "imagens": ["assets/passeios/barco/barco-1.jpg", "assets/passeios/barco/barco-2.jpg", "assets/passeios/barco/barco-3.jpg", "assets/passeios/barco/barco1.jpg"],
    "video": null
  },

  // ========== 20. PASSEIO DE SAVEIRO ==========
  {
    "id": "saveiro",
    "linkPagamento": "https://brazilxcursions.com/passeio/passeio-de-veleiro",
    "uf": "RJ",
    "videos": ["assets/passeios/saveiro/saveiro-video.mp4"],
    "titulo": {
      pt: "Passeio de Saveiro",
      en: "Saveiro Boat Tour",
      es: "Paseo en Saveiro",
      fr: "Promenade en Saveiro",
      de: "Saveiro-Bootstour"
    },
    "categoria": "praia/ilha",
    "marca": "casa-sao-conrado",
    "tagline": {
      pt: "O Rio visto do mar, a bordo de um saveiro tradicional",
      en: "Rio seen from the sea, aboard a traditional saveiro",
      es: "Río visto desde el mar, a bordo de un saveiro tradicional",
      fr: "Rio vu de la mer, à bord d'un saveiro traditionnel",
      de: "Rio vom Meer aus gesehen, an Bord eines traditionellen Saveiro"
    },
    "descricao": {
      pt: "O passeio é cheio de histórias, desde a época do descobrimento e as lindas paisagens naturais até o visual da engenharia moderna. Um ótimo programa para todas as idades, principalmente para turistas e admiradores da navegação, da natureza e da Cidade Maravilhosa.\n\nNavegando pela Baía de Guanabara a bordo de um saveiro tradicional, você vê o Rio de um ângulo que poucos conhecem: o Pão de Açúcar, o Cristo Redentor visto do mar, aviões pousando no Santos Dumont e mais de 20 pontos históricos e culturais em um único roteiro. Embarque na Marina da Glória às 9h, início do passeio às 9h30 e duração de 2 horas. Saídas todos os dias, com guia de turismo, música ambiente e rodada de frutas de cortesia; bebidas e snacks disponíveis a bordo.\n\nRoteiro (20 pontos): Marina da Glória, Aeroporto Santos Dumont, Escola Naval, Ilha Fiscal, Centro do Rio de Janeiro, Marinha do Brasil, Museu do Amanhã, Ilha das Enxadas, Ilha das Cobras, Ponte Rio–Niterói, Centro de Niterói, Museu de Arte Moderna, Praias de Niterói, Fortaleza de Santa Cruz, Forte da Lage, Forte São João, Urca, Pão de Açúcar, Enseada de Botafogo e Praia do Flamengo.",
      en: "The tour is full of stories, from the time of discovery and the beautiful natural landscapes to the view of modern engineering. A great program for all ages, especially for tourists and admirers of navigation, nature and the Marvelous City.\n\nSailing through Guanabara Bay aboard a traditional saveiro, you see Rio from an angle few know: Sugarloaf Mountain, Christ the Redeemer seen from the sea, planes landing at Santos Dumont and over 20 historical and cultural points in a single route. Board at Marina da Glória at 9am, tour starts at 9:30am and lasts 2 hours. Daily departures, with a tour guide, ambient music and complimentary fruit; drinks and snacks available on board.\n\nRoute (20 points): Marina da Glória, Santos Dumont Airport, Naval School, Fiscal Island, Rio de Janeiro Downtown, Brazilian Navy, Museum of Tomorrow, Enxadas Island, Cobras Island, Rio–Niterói Bridge, Niterói Downtown, Museum of Modern Art, Niterói Beaches, Santa Cruz Fortress, Forte da Lage, Fort São João, Urca, Sugarloaf Mountain, Botafogo Cove and Flamengo Beach.",
      es: "El paseo está lleno de historias, desde la época del descubrimiento y los hermosos paisajes naturales hasta la vista de la ingeniería moderna. Un gran programa para todas las edades, especialmente para turistas y admiradores de la navegación, la naturaleza y la Ciudad Maravillosa.\n\nNavegando por la Bahía de Guanabara a bordo de un saveiro tradicional, ves Río desde un ángulo que pocos conocen: el Pan de Azúcar, el Cristo Redentor visto desde el mar, aviones aterrizando en Santos Dumont y más de 20 puntos históricos y culturales en una sola ruta. Embarque en la Marina da Glória a las 9h, inicio del paseo a las 9h30 y duración de 2 horas. Salidas diarias, con guía de turismo, música ambiente y ronda de frutas de cortesía; bebidas y snacks disponibles a bordo.\n\nRuta (20 puntos): Marina da Glória, Aeropuerto Santos Dumont, Escuela Naval, Isla Fiscal, Centro de Río de Janeiro, Armada de Brasil, Museo del Mañana, Isla de las Enxadas, Isla de las Cobras, Puente Río–Niterói, Centro de Niterói, Museo de Arte Moderno, Playas de Niterói, Fortaleza de Santa Cruz, Forte da Lage, Forte São João, Urca, Pan de Azúcar, Ensenada de Botafogo y Playa de Flamengo.",
      fr: "La promenade est pleine d'histoires, de l'époque de la découverte et des beaux paysages naturels à la vue de l'ingénierie moderne. Un excellent programme pour tous les âges, surtout pour les touristes et les admirateurs de la navigation, de la nature et de la Cité Merveilleuse.\n\nEn naviguant dans la Baie de Guanabara à bord d'un saveiro traditionnel, vous voyez Rio sous un angle que peu connaissent : le Pain de Sucre, le Christ Rédempteur vu de la mer, les avions atterrissant à Santos Dumont et plus de 20 points historiques et culturels en un seul itinéraire. Embarquement à la Marina da Glória à 9h, début de la promenade à 9h30 et durée de 2 heures. Départs quotidiens, avec un guide touristique, de la musique d'ambiance et une tournée de fruits de courtoisie ; boissons et snacks disponibles à bord.\n\nItinéraire (20 points) : Marina da Glória, Aéroport Santos Dumont, École Navale, Île Fiscale, Centre de Rio de Janeiro, Marine brésilienne, Musée du Demain, Île des Enxadas, Île des Cobras, Pont Rio–Niterói, Centre de Niterói, Musée d'Art Moderne, Plages de Niterói, Forteresse de Santa Cruz, Forte da Lage, Forte São João, Urca, Pain de Sucre, Anse de Botafogo et Plage de Flamengo.",
      de: "Die Tour ist voller Geschichten, von der Zeit der Entdeckung und der schönen Naturlandschaften bis zum Anblick der modernen Technik. Ein großartiges Programm für alle Altersgruppen, besonders für Touristen und Bewunderer der Schifffahrt, der Natur und der Wunderbaren Stadt.\n\nWenn Sie durch die Guanabara-Bucht an Bord eines traditionellen Saveiro segeln, sehen Sie Rio aus einem Blickwinkel, den nur wenige kennen: den Zuckerhut, den Christus den Erlöser vom Meer aus gesehen, Flugzeuge, die in Santos Dumont landen, und über 20 historische und kulturelle Punkte auf einer einzigen Route. Einschiffung an der Marina da Glória um 9 Uhr, Beginn der Tour um 9:30 Uhr und Dauer von 2 Stunden. Tägliche Abfahrten, mit einem Reiseführer, Hintergrundmusik und einer kostenlosen Obstauswahl; Getränke und Snacks sind an Bord erhältlich.\n\nRoute (20 Punkte): Marina da Glória, Flughafen Santos Dumont, Marineschule, Fiscal Island, Zentrum von Rio de Janeiro, Brasilianische Marine, Museum von Morgen, Enxadas Island, Cobras Island, Rio–Niterói-Brücke, Zentrum von Niterói, Museum für Moderne Kunst, Strände von Niterói, Festung Santa Cruz, Forte da Lage, Fort São João, Urca, Zuckerhut, Bucht von Botafogo und Flamengo-Strand."
    },
    "preco": "R$ 100,00",
    "duracao": {
      pt: "2 horas (embarque 9h, passeio às 9h30) — todos os dias",
      en: "2 hours (boarding 9am, tour at 9:30am) — every day",
      es: "2 horas (embarque 9h, paseo a las 9h30) — todos los días",
      fr: "2 heures (embarquement 9h, promenade à 9h30) — tous les jours",
      de: "2 Stunden (Einschiffung 9 Uhr, Tour um 9:30 Uhr) — täglich"
    },
    "inclusos": {
      pt: ["Guia de turismo", "Música ambiente", "Rodada de frutas de cortesia"],
      en: ["Tour guide", "Ambient music", "Complimentary fruit"],
      es: ["Guía de turismo", "Música ambiente", "Ronda de frutas de cortesía"],
      fr: ["Guide touristique", "Musique d'ambiance", "Fruits de courtoisie"],
      de: ["Reiseführer", "Hintergrundmusik", "Kostenlose Obstauswahl"]
    },
    "naoInclusos": {
      pt: ["Bebidas e snacks (à venda a bordo)"],
      en: ["Drinks and snacks (available for purchase on board)"],
      es: ["Bebidas y snacks (a la venta a bordo)"],
      fr: ["Boissons et snacks (en vente à bord)"],
      de: ["Getränke und Snacks (an Bord erhältlich)"]
    },
    "imagens": [
      "assets/passeios/saveiro/saveiro5.jpg",
      "assets/passeios/saveiro/saveiro1.jpg",
      "assets/passeios/saveiro/saveiro2.jpg",
      "assets/passeios/saveiro/saveiro3.jpg",
      "assets/passeios/saveiro/saveiro4.jpg",
      "assets/passeios/saveiro/saveiro6.jpg",
      "assets/passeios/saveiro/saveiro7.jpg"
    ],
    "creditoFoto": "Fotos: acervo Brazil Xcursions / Casa São Conrado; imagens de domínio público/Creative Commons. Pão de Açúcar ao entardecer: Lu Brito, CC BY-SA 4.0 (Wikimedia Commons).",
    "video": null
  },

  // --- passeios recuperados do data.js.bak3 (uf preservado) ---
  {
    "id": "jeep-tour",
    "linkPagamento": "https://brazilxcursions.com/passeio/jeep-tour",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/OcTVCphT37M"],
    "titulo": {"pt":"Jeep Tour Rio","en":"Jeep Tour Rio","es":"Jeep Tour Río","fr":"Jeep Tour Rio","de":"Jeep-Tour Rio"},
    "categoria": "aventura/adrenalina",
    "tagline": {"pt":"Contraste do urbano com a Mata Atlântica","en":"The contrast of the city and the Atlantic Forest","es":"El contraste de lo urbano con la Mata Atlántica","fr":"Le contraste de la ville et de la forêt atlantique","de":"Der Kontrast von Stadt und Atlantischem Regenwald"},
    "descricao": {"pt":"Combinando aventura, história e natureza, este passeio leva você ao coração da maior floresta urbana do mundo. O Jeep Tour, tradicionalmente feito em veículos 4x4 abertos, é uma imersão rápida, porém completa, nos segredos do Parque Nacional da Tijuca. Em cerca de 3 a 4 horas, você vai subir, descer e contornar montanhas cobertas por Mata Atlântica, visitando mirantes de tirar o fôlego, cachoeiras refrescantes e locais históricos.\n\nNão é apenas um passeio. É uma aventura sensorial que mostra o Rio como você nunca imaginou: selvagem, histórico e surpreendentemente verde.\n\nDicas para aproveitar ao máximo: use roupas leves (de preferência que sequem rápido) e tênis confortável (nada de salto ou chinelo); leve protetor solar, repelente e uma mochila pequena; separe uma roupa extra e uma toalha para depois da cachoeira; leve óculos de sol e boné/chapéu, pois o vento no jipe pode ser forte; esteja pronto para se sujar um pouco, já que a estrada de terra é parte da diversão; leve dinheiro em espécie para lembrancinhas ou um lanche rápido.","en":"Combining adventure, history and nature, this tour takes you into the heart of the world's largest urban forest. The Jeep Tour, traditionally done in open 4x4 vehicles, is a quick yet complete immersion into the secrets of Tijuca National Park. In about 3 to 4 hours, you'll climb, descend and wind around mountains covered by Atlantic Forest, visiting breathtaking viewpoints, refreshing waterfalls and historic spots.\n\nIt's not just a tour. It's a sensory adventure that shows you a Rio you never imagined: wild, historic and surprisingly green.\n\nTips to make the most of it: wear light clothes (preferably quick-drying) and comfortable sneakers (no heels or flip-flops); bring sunscreen, insect repellent and a small backpack; pack a spare set of clothes and a towel for after the waterfall; bring sunglasses and a cap/hat, as the wind in the jeep can be strong; be ready to get a little dirty, since the dirt road is part of the fun; bring cash for souvenirs or a quick snack.","es":"Combinando aventura, historia y naturaleza, este paseo te lleva al corazón del mayor bosque urbano del mundo. El Jeep Tour, hecho tradicionalmente en vehículos 4x4 abiertos, es una inmersión rápida pero completa en los secretos del Parque Nacional de Tijuca. En unas 3 a 4 horas, subirás, bajarás y rodearás montañas cubiertas por la Mata Atlántica, visitando miradores impresionantes, cascadas refrescantes y lugares históricos.\n\nNo es solo un paseo. Es una aventura sensorial que te muestra un Río que nunca imaginaste: salvaje, histórico y sorprendentemente verde.\n\nConsejos para aprovechar al máximo: usa ropa ligera (preferiblemente de secado rápido) y zapatillas cómodas (nada de tacones ni chanclas); lleva protector solar, repelente y una mochila pequeña; separa una muda de ropa y una toalla para después de la cascada; lleva gafas de sol y gorra/sombrero, ya que el viento en el jeep puede ser fuerte; prepárate para ensuciarte un poco, pues el camino de tierra es parte de la diversión; lleva efectivo para recuerdos o un aperitivo.","fr":"Alliant aventure, histoire et nature, cette excursion vous emmène au cœur de la plus grande forêt urbaine du monde. Le Jeep Tour, traditionnellement réalisé en 4x4 découverts, est une immersion rapide mais complète dans les secrets du Parc national de Tijuca. En environ 3 à 4 heures, vous monterez, descendrez et contournerez des montagnes couvertes de forêt atlantique, en visitant des points de vue à couper le souffle, des cascades rafraîchissantes et des lieux historiques.\n\nCe n'est pas qu'une simple visite. C'est une aventure sensorielle qui vous révèle un Rio que vous n'auriez jamais imaginé : sauvage, historique et étonnamment vert.\n\nConseils pour en profiter au maximum : portez des vêtements légers (de préférence à séchage rapide) et des baskets confortables (ni talons ni tongs) ; emportez de la crème solaire, un répulsif et un petit sac à dos ; prévoyez des vêtements de rechange et une serviette pour après la cascade ; prenez des lunettes de soleil et une casquette, car le vent dans la jeep peut être fort ; préparez-vous à vous salir un peu, la piste en terre fait partie du plaisir ; emportez de l'argent liquide pour des souvenirs ou un en-cas.","de":"Diese Tour verbindet Abenteuer, Geschichte und Natur und führt Sie ins Herz des größten Stadtwaldes der Welt. Die Jeep-Tour, traditionell in offenen 4x4-Fahrzeugen, ist ein kurzes, aber vollständiges Eintauchen in die Geheimnisse des Tijuca-Nationalparks. In etwa 3 bis 4 Stunden fahren Sie hinauf, hinab und um Berge herum, die vom Atlantischen Regenwald bedeckt sind, und besuchen atemberaubende Aussichtspunkte, erfrischende Wasserfälle und historische Orte.\n\nEs ist nicht nur eine Tour. Es ist ein Abenteuer für die Sinne, das Ihnen ein Rio zeigt, das Sie sich nie vorgestellt haben: wild, historisch und überraschend grün.\n\nTipps, um das Beste herauszuholen: Tragen Sie leichte Kleidung (am besten schnelltrocknend) und bequeme Turnschuhe (keine Absätze oder Flip-Flops); nehmen Sie Sonnencreme, Insektenschutz und einen kleinen Rucksack mit; packen Sie Wechselkleidung und ein Handtuch für nach dem Wasserfall ein; nehmen Sie Sonnenbrille und Mütze mit, da der Wind im Jeep stark sein kann; seien Sie bereit, ein wenig schmutzig zu werden, denn die Schotterpiste gehört zum Spaß dazu; bringen Sie Bargeld für Souvenirs oder einen Snack mit."},
    "preco": "R$ 250,00",
    "duracao": {"pt":"3 a 4 horas","en":"3 to 4 hours","es":"3 a 4 horas","fr":"3 à 4 heures","de":"3 bis 4 Stunden"},
    "inclusos": {"pt":["Guia","Jeep 4x4"],"en":["Guide","4x4 Jeep"],"es":["Guía","Jeep 4x4"],"fr":["Guide","Jeep 4x4"],"de":["Guide","4x4-Jeep"]},
    "imagens": ["assets/passeios/jeep-tour/jeep-tour1.jpg", "assets/passeios/jeep-tour/jeep-tour2.jpg", "assets/passeios/jeep-tour/jeep-tour3.jpg", "assets/passeios/jeep-tour/jeep-tour4.jpg", "assets/passeios/jeep-tour/jeep-tour5.jpg", "assets/passeios/jeep-tour/jeep-tour6.jpg", "assets/passeios/jeep-tour/jeep-tour7.jpg", "assets/passeios/jeep-tour/jeep-tour8.jpg"],
    "video": null
  },
  {
    "id": "pati",
    "uf": "BA",
    "videos": ["https://www.youtube.com/embed/OcTVCphT37M"],
    "titulo": "Trekking Vale do Pati",
    "categoria": "trilha/trekking",
    "tagline": "Entre os mais belos roteiros do Brasil na Chapada Diamantina",
    "descricao": "A Chapada Diamantina, localizada no coração da Bahia, é um dos biomas mais impressionantes do Brasil, combinando paisagens de serras imponentes, cachoeiras cristalinas e uma rica vegetação de cerrado e mata atlântica. Esse território de beleza abrupta e contrastante guarda em suas entranhas trilhas históricas que remontam ao ciclo do ouro e dos diamantes, revelando um patrimônio natural de valor inestimável.\n\nEntre seus inúmeros tesouros destaca-se o Vale do Pati, considerado por muitos o mais belo trecho de trekking da América do Sul. A geografia se transmuta em um anfiteatro natural de montanhas arredondadas e paredões de arenito, onde rios de águas geladas serpenteiam por fundos de vale cobertos de vegetação. É um refúgio quase secreto, acessível apenas a pé ou a cavalo, que guarda comunidades tradicionais vivendo em harmonia com a natureza. Lá, o silêncio é interrompido apenas pelo canto dos pássaros e pela correnteza de corredeiras como a do Cachoeirão do Fraga e do Rio Café. A experiência no Vale do Pati vai além da contemplação de picos como o Morro do Castelo; é uma imersão na simplicidade e na grandiosidade bruta da Chapada, que exige esforço físico e oferece em troca momentos de paz incomparáveis.\n\nItinerário — Dia 1: início ao sul do Vale do Capão, caminhada pelo rio Capão até trecho de subida (cerca de 40 minutos), passagem pelos Gerais do Vieira, córrego dos Cristais, Gerais do Rio Preto e Mirante do Pati, com descida até a hospedagem da igrejinha para descanso e jantar. Dia 2: caminhada de 6 horas (ida e volta) até o espetacular Cachoeirão, com vista do desfiladeiro e queda de 300 metros de cânion; descida do rio com 7 quedas d'água, sendo a principal a Cachoeira do Funil; pernoite na hospedagem da Dona Raquel. Dia 3: caminhada de 2 horas até o topo do Morro do Castelo (1.500 metros de altitude), com 2 mirantes e exploração da gruta do Castelo; descida até a hospedagem na prefeitura. Dia 4: caminhada pela mata do Calixto, uma das mais preservadas da região, até a cachoeira do Calixto; seguida por trecho de mata fechada até o rio do Sebo; parada para lanche e descanso; trekking até a toca da ursa e o mirante do Capão pelos campos Gerais do Vieira, encerrando no sul do Vale do Capão.",
    "preco": "R$ 2.400,00",
    "duracao": "4 dias",
    "inclusos": ["Guia", "Pouso na casa dos nativos", "Roupa de cama e toalhas", "Café, lanche e jantar"],
    "imagens": [],
  },
  {
    "id": "gavea",
    "linkPagamento": "https://brazilxcursions.com/passeio/trilha-da-pedra-da-gavea",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/N2AA29-1i48"],
    "titulo": {"pt":"Trilha Pedra da Gávea","en":"Pedra da Gávea Hike","es":"Sendero de la Pedra da Gávea","fr":"Randonnée de la Pedra da Gávea","de":"Wanderung zum Pedra da Gávea"},
    "categoria": "trilha/trekking",
    "tagline": {"pt":"A trilha que você tem que ousar","en":"The hike you have to dare","es":"El sendero que tienes que atreverte a hacer","fr":"La randonnée qu'il faut oser","de":"Die Wanderung, die man wagen muss"},
    "descricao": {"pt":"A Pedra da Gávea é conhecida como uma trilha difícil, mas que vale a pena o esforço! A recompensa é uma vista maravilhosa. A saída é às 7h30. No início da trilha é sobretudo uma subida com os macacos bem conhecidos no Rio de Janeiro. Depois, é a parte mais complicada, com um pouco de escalada; é preciso levar roupas que possam sujar. Pode parecer impressionante, mas não é nada muito complicado, e foram adicionados alguns suportes para ajudar. Depois, o desafio é se manter hidratado e usar protetor solar, pois o sol não é tímido.\n\nChegando a uma grande pedra, há duas opções: usar os arneses oferecidos pelo guia por cerca de 30 reais ou subir os cerca de 50 metros com as próprias mãos. Quando se atinge os 800 metros de altitude, é hora de festejar: a vista é de tirar o fôlego, revelando as praias do Rio de Janeiro, de Ipanema a Niterói e a praia da Barra do outro lado. O ponto forte desta trilha está também ligado à sua dificuldade: é mais tranquila no final, pois não é invadida por turistas. No regresso, há uma última etapa difícil: a descida da carrasqueira.\n\nPrepare-se para uma das aventuras mais emocionantes do Rio de Janeiro: a subida à Pedra da Gávea, o maior monólito à beira-mar do mundo. Com seus 844 metros de altitude, essa trilha é um convite à superação, à contemplação e à conexão profunda com a natureza. Durante o percurso, cercado pela exuberância da Floresta da Tijuca, você enfrentará trechos desafiadores e momentos de pura adrenalina, mas será recompensado com uma das vistas mais impressionantes do planeta: um panorama de 360° revelando as praias, a Lagoa, o Cristo Redentor e a imensidão do oceano. Com guias experientes, a experiência é conduzida com total segurança, respeitando o ritmo de cada participante.\n\nAcesso: a trilha se inicia no bairro da Barrinha, onde há uma das entradas do Parque. A estação de metrô Jardim Oceânico é a mais próxima. A trilha começa às 8h; ao chegar ao início, é preciso assinar o livro de presença por razões de segurança. Duração: cerca de 6 horas, sendo 2,5 horas de subida até a vista a 844 metros de altitude, e o restante de descida. É bom levar água e um bom lanche para a refeição no topo.","en":"Pedra da Gávea is known as a difficult hike, but well worth the effort! The reward is a wonderful view. Departure is at 7:30 am. The beginning of the trail is mostly a climb, with the monkeys so well known in Rio de Janeiro. Then comes the most complicated part, with a bit of rock scrambling; wear clothes that can get dirty. It may look impressive, but it's nothing too complicated, and some supports have been added to help. After that, the challenge is to stay hydrated and use sunscreen, because the sun is not shy.\n\nReaching a large rock, there are two options: use the harnesses offered by the guide for about 30 reais, or climb the roughly 50 meters with your own hands. When you reach 800 meters of altitude, it's time to celebrate: the view is breathtaking, revealing the beaches of Rio de Janeiro, from Ipanema to Niterói, and Barra beach on the other side. The highlight of this hike is also linked to its difficulty: it's quieter at the end, as it isn't overrun by tourists. On the way back, there's one last tough stage: the descent of the carrasqueira.\n\nGet ready for one of the most thrilling adventures in Rio de Janeiro: the climb to Pedra da Gávea, the largest monolith by the sea in the world. At 844 meters high, this trail is an invitation to push your limits, contemplate and connect deeply with nature. Along the way, surrounded by the lushness of the Tijuca Forest, you'll face challenging stretches and moments of pure adrenaline, but you'll be rewarded with one of the most impressive views on the planet: a 360° panorama revealing the beaches, the Lagoon, Christ the Redeemer and the vastness of the ocean. With experienced guides, the experience is led in complete safety, respecting each participant's pace.\n\nAccess: the trail starts in the Barrinha neighborhood, where there is one of the park's entrances. Jardim Oceânico subway station is the closest. The hike starts at 8 am; on arrival at the start, you must sign the attendance book for safety reasons. Duration: about 6 hours, with 2.5 hours of ascent to the viewpoint at 844 meters, and the rest for the descent. It's good to bring water and a good snack for the meal at the top.","es":"¡La Pedra da Gávea es conocida como un sendero difícil, pero que vale la pena el esfuerzo! La recompensa es una vista maravillosa. La salida es a las 7:30. El inicio del sendero es sobre todo una subida, con los monos tan conocidos en Río de Janeiro. Luego viene la parte más complicada, con un poco de escalada; hay que llevar ropa que se pueda ensuciar. Puede parecer impresionante, pero no es nada muy complicado, y se han añadido algunos apoyos para ayudar. Después, el desafío es mantenerse hidratado y usar protector solar, porque el sol no es tímido.\n\nAl llegar a una gran roca, hay dos opciones: usar los arneses ofrecidos por el guía por unos 30 reales, o subir los aproximadamente 50 metros con las propias manos. Cuando se alcanzan los 800 metros de altitud, es hora de celebrar: la vista es de quitar el aliento, revelando las playas de Río de Janeiro, de Ipanema a Niterói, y la playa de Barra al otro lado. El punto fuerte de este sendero también está ligado a su dificultad: es más tranquilo al final, pues no está invadido por turistas. En el regreso, hay una última etapa difícil: la bajada de la carrasqueira.\n\nPrepárate para una de las aventuras más emocionantes de Río de Janeiro: la subida a la Pedra da Gávea, el mayor monolito a orillas del mar del mundo. Con sus 844 metros de altitud, este sendero es una invitación a la superación, a la contemplación y a la conexión profunda con la naturaleza. Durante el recorrido, rodeado por la exuberancia de la Floresta da Tijuca, enfrentarás tramos desafiantes y momentos de pura adrenalina, pero serás recompensado con una de las vistas más impresionantes del planeta: un panorama de 360° que revela las playas, la Laguna, el Cristo Redentor y la inmensidad del océano. Con guías experimentados, la experiencia se conduce con total seguridad, respetando el ritmo de cada participante.\n\nAcceso: el sendero comienza en el barrio de Barrinha, donde hay una de las entradas del parque. La estación de metro Jardim Oceânico es la más cercana. El sendero empieza a las 8h; al llegar al inicio, hay que firmar el libro de presencia por razones de seguridad. Duración: cerca de 6 horas, siendo 2,5 horas de subida hasta la vista a 844 metros de altitud, y el resto de bajada. Conviene llevar agua y un buen refrigerio para la comida en la cima.","fr":"La Pedra da Gávea est connue comme une randonnée difficile, mais qui vaut bien l'effort ! La récompense est une vue magnifique. Le départ est à 7h30. Le début du sentier est surtout une montée, avec les singes bien connus à Rio de Janeiro. Ensuite vient la partie la plus compliquée, avec un peu d'escalade ; il faut porter des vêtements qui peuvent se salir. Cela peut paraître impressionnant, mais rien de très compliqué, et des prises ont été ajoutées pour aider. Ensuite, le défi est de rester hydraté et d'utiliser de la crème solaire, car le soleil n'est pas timide.\n\nEn arrivant à un grand rocher, il y a deux options : utiliser les baudriers proposés par le guide pour environ 30 reais, ou grimper la cinquantaine de mètres à la force des mains. Une fois arrivé à 800 mètres d'altitude, c'est l'heure de fêter : la vue est à couper le souffle, révélant les plages de Rio de Janeiro, d'Ipanema à Niterói, et la plage de Barra de l'autre côté. Le point fort de cette randonnée tient aussi à sa difficulté : elle est plus tranquille à la fin, car elle n'est pas envahie par les touristes. Au retour, il reste une dernière étape difficile : la descente de la carrasqueira.\n\nPréparez-vous à l'une des aventures les plus palpitantes de Rio de Janeiro : l'ascension de la Pedra da Gávea, le plus grand monolithe en bord de mer au monde. Avec ses 844 mètres d'altitude, ce sentier est une invitation au dépassement, à la contemplation et à une connexion profonde avec la nature. Au cours du parcours, entouré par l'exubérance de la forêt de Tijuca, vous affronterez des passages exigeants et des moments de pure adrénaline, mais vous serez récompensé par l'une des vues les plus impressionnantes de la planète : un panorama à 360° révélant les plages, la Lagoa, le Christ Rédempteur et l'immensité de l'océan. Avec des guides expérimentés, l'expérience est menée en toute sécurité, dans le respect du rythme de chaque participant.\n\nAccès : le sentier commence dans le quartier de Barrinha, où se trouve l'une des entrées du parc. La station de métro Jardim Oceânico est la plus proche. La randonnée commence à 8h ; en arrivant au départ, il faut signer le registre de présence pour des raisons de sécurité. Durée : environ 6 heures, dont 2h30 de montée jusqu'au point de vue à 844 mètres, le reste pour la descente. Il est bon d'emporter de l'eau et un bon en-cas pour le repas au sommet.","de":"Die Pedra da Gávea gilt als schwierige Wanderung, die die Mühe aber wert ist! Die Belohnung ist eine wunderbare Aussicht. Abfahrt ist um 7:30 Uhr. Der Anfang des Weges ist vor allem ein Aufstieg, mit den in Rio de Janeiro gut bekannten Affen. Dann kommt der komplizierteste Teil, mit ein wenig Kletterei; tragen Sie Kleidung, die schmutzig werden darf. Es mag beeindruckend aussehen, ist aber nichts allzu Kompliziertes, und es wurden einige Griffe zur Hilfe angebracht. Danach besteht die Herausforderung darin, hydriert zu bleiben und Sonnencreme zu benutzen, denn die Sonne ist nicht schüchtern.\n\nAn einem großen Felsen angekommen, gibt es zwei Möglichkeiten: die vom Guide angebotenen Klettergurte für etwa 30 Reais nutzen oder die rund 50 Meter mit den eigenen Händen erklimmen. Wenn man 800 Meter Höhe erreicht, ist es Zeit zu feiern: Die Aussicht ist atemberaubend und zeigt die Strände von Rio de Janeiro, von Ipanema bis Niterói, und den Strand von Barra auf der anderen Seite. Der Höhepunkt dieser Wanderung hängt auch mit ihrer Schwierigkeit zusammen: Am Ende ist es ruhiger, da sie nicht von Touristen überlaufen ist. Auf dem Rückweg gibt es eine letzte schwierige Etappe: den Abstieg der carrasqueira.\n\nMachen Sie sich bereit für eines der aufregendsten Abenteuer in Rio de Janeiro: den Aufstieg zur Pedra da Gávea, dem größten Monolithen am Meer der Welt. Mit ihren 844 Metern Höhe ist diese Route eine Einladung, über sich hinauszuwachsen, innezuhalten und sich tief mit der Natur zu verbinden. Unterwegs, umgeben vom üppigen Tijuca-Wald, meistern Sie herausfordernde Abschnitte und Momente puren Adrenalins, werden aber mit einer der beeindruckendsten Aussichten des Planeten belohnt: einem 360°-Panorama mit den Stränden, der Lagune, der Christusstatue und der Weite des Ozeans. Mit erfahrenen Guides wird das Erlebnis in völliger Sicherheit geführt, im Rhythmus jedes Teilnehmers.\n\nAnfahrt: Der Weg beginnt im Viertel Barrinha, wo sich einer der Parkeingänge befindet. Die U-Bahn-Station Jardim Oceânico ist am nächsten. Die Wanderung beginnt um 8 Uhr; bei Ankunft am Start muss man aus Sicherheitsgründen das Anwesenheitsbuch unterschreiben. Dauer: etwa 6 Stunden, davon 2,5 Stunden Aufstieg bis zum Aussichtspunkt auf 844 Metern und der Rest für den Abstieg. Es ist gut, Wasser und einen guten Snack für die Mahlzeit auf dem Gipfel mitzunehmen."},
    "preco": "R$ 180,00",
    "duracao": {"pt":"Cerca de 6 horas (2,5 horas de subida até 844 metros de altitude, mais descida)","en":"About 6 hours (2.5 hours up to 844 meters altitude, plus the descent)","es":"Cerca de 6 horas (2,5 horas de subida hasta 844 metros de altitud, más el descenso)","fr":"Environ 6 heures (2h30 de montée jusqu'à 844 mètres d'altitude, plus la descente)","de":"Etwa 6 Stunden (2,5 Stunden Aufstieg bis 844 Meter Höhe, plus Abstieg)"},
    "inclusos": {"pt":["Equipamentos de segurança para escalada (arneses, opcional por taxa extra)"],"en":["Climbing safety equipment (harnesses, optional for an extra fee)"],"es":["Equipos de seguridad para escalada (arneses, opcional con costo adicional)"],"fr":["Équipement de sécurité pour l'escalade (baudriers, en option moyennant un supplément)"],"de":["Sicherheitsausrüstung zum Klettern (Klettergurte, optional gegen Aufpreis)"]},
    "imagens": ["assets/passeios/gavea/gavea-1.jpg", "assets/passeios/gavea/gavea-2.jpg", "assets/passeios/gavea/gavea-3.jpg", "assets/passeios/gavea/gavea-4.jpg", "assets/passeios/gavea/gavea-5.jpg", "assets/passeios/gavea/gavea-6.jpg", "assets/passeios/gavea/gavea-7.jpg"],
  },
  {
    "id": "helicoptero",
    "linkPagamento": "https://brazilxcursions.com/passeio/voo-de-helicoptero",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/1KBmX4XRb_Q"],
    "titulo": {"pt":"Voo de Helicóptero","en":"Helicopter Flight","es":"Vuelo en Helicóptero","fr":"Vol en hélicoptère","de":"Hubschrauberflug"},
    "categoria": "aventura/adrenalina",
    "tagline": {"pt":"Uma experiência de luxo e exclusividade para ver a Cidade Maravilhosa de uma perspectiva absolutamente inesquecível!","en":"A luxurious and exclusive experience to see the Marvelous City from an absolutely unforgettable perspective!","es":"¡Una experiencia de lujo y exclusividad para ver la Ciudad Maravillosa desde una perspectiva absolutamente inolvidable!","fr":"Une expérience de luxe et d'exclusivité pour voir la Ville Merveilleuse sous un angle absolument inoubliable !","de":"Ein luxuriöses und exklusives Erlebnis, um die Wunderbare Stadt aus einer absolut unvergesslichen Perspektive zu sehen!"},
    "descricao": {"pt":"Eleve sua experiência no Rio a um novo patamar. A bordo de um helicóptero, você vai voar alto e testemunhar a grandiosidade da cidade de uma forma que poucos têm o privilégio. Veja o Cristo Redentor de perto, quase tocando o céu, contorne o Pão de Açúcar, admire o desenho perfeito da Lagoa Rodrigo de Freitas e sobrevoe as praias icônicas de Copacabana e Ipanema.\n\nEste não é apenas um passeio, é um momento cinematográfico, uma memória que se torna o ponto alto da sua viagem. Um voo panorâmico de helicóptero sobre o Rio de Janeiro é a definição de uma experiência premium, oferecendo vistas espetaculares e uma sensação de exclusividade. É a maneira mais rápida e impressionante de conhecer os principais cartões-postais da cidade.\n\nA experiência a bordo: as aeronaves são modernas e seguras, com janelas amplas para garantir a melhor visibilidade. Todos os passageiros usam fones de ouvido para se comunicar e ouvir as explicações do piloto, que atua como um guia aéreo. O voo é suave e estável, proporcionando sensação de segurança e conforto.\n\nSegurança: as empresas de táxi aéreo são rigorosamente regulamentadas pela Agência Nacional de Aviação Civil (ANAC). Os pilotos são altamente experientes e as aeronaves passam por manutenções constantes. Os voos só ocorrem em condições meteorológicas favoráveis; se o tempo não estiver bom, o voo é remarcado.\n\nDicas para aproveitar ao máximo: leve câmera ou celular com bateria cheia e memória disponível, prefira lentes grande-angulares; use roupas escuras para minimizar reflexos nas janelas; faça a reserva com antecedência, especialmente na alta temporada; o final da tarde, durante a golden hour, proporciona a luz mais bonita para fotos.\n\nMínimo de 2 pessoas, voo de 20 minutos. Há diversos tipos de pacote, variando de acordo com o trajeto e o tempo de duração do voo. Disponível todos os dias, respeitadas as condições meteorológicas.","en":"Take your Rio experience to a new level. Aboard a helicopter, you'll fly high and witness the grandeur of the city in a way few have the privilege to. See Christ the Redeemer up close, almost touching the sky, circle the Sugarloaf, admire the perfect shape of the Rodrigo de Freitas Lagoon and fly over the iconic beaches of Copacabana and Ipanema.\n\nThis isn't just a tour, it's a cinematic moment, a memory that becomes the highlight of your trip. A panoramic helicopter flight over Rio de Janeiro is the definition of a premium experience, offering spectacular views and a sense of exclusivity. It's the fastest and most impressive way to see the city's main landmarks.\n\nThe experience on board: the aircraft are modern and safe, with large windows to ensure the best visibility. All passengers wear headsets to communicate and hear the pilot's explanations, who acts as an aerial guide. The flight is smooth and stable, providing a feeling of safety and comfort.\n\nSafety: air taxi companies are strictly regulated by the National Civil Aviation Agency (ANAC). The pilots are highly experienced and the aircraft undergo constant maintenance. Flights only take place in favorable weather conditions; if the weather isn't good, the flight is rescheduled.\n\nTips to make the most of it: bring a camera or phone with a full battery and available memory, preferably wide-angle lenses; wear dark clothes to minimize reflections on the windows; book in advance, especially in high season; late afternoon, during the golden hour, offers the most beautiful light for photos.\n\nMinimum of 2 people, 20-minute flight. There are several package types, varying according to the route and flight duration. Available every day, subject to weather conditions.","es":"Eleva tu experiencia en Río a un nuevo nivel. A bordo de un helicóptero, volarás alto y serás testigo de la grandiosidad de la ciudad de una forma que pocos tienen el privilegio de ver. Observa el Cristo Redentor de cerca, casi tocando el cielo, rodea el Pan de Azúcar, admira el dibujo perfecto de la Laguna Rodrigo de Freitas y sobrevuela las playas icónicas de Copacabana e Ipanema.\n\nEsto no es solo un paseo, es un momento cinematográfico, un recuerdo que se convierte en el punto culminante de tu viaje. Un vuelo panorámico en helicóptero sobre Río de Janeiro es la definición de una experiencia premium, que ofrece vistas espectaculares y una sensación de exclusividad. Es la manera más rápida e impresionante de conocer las principales postales de la ciudad.\n\nLa experiencia a bordo: las aeronaves son modernas y seguras, con ventanas amplias para garantizar la mejor visibilidad. Todos los pasajeros usan auriculares para comunicarse y escuchar las explicaciones del piloto, que actúa como guía aéreo. El vuelo es suave y estable, proporcionando sensación de seguridad y confort.\n\nSeguridad: las empresas de taxi aéreo están rigurosamente reguladas por la Agencia Nacional de Aviación Civil (ANAC). Los pilotos son altamente experimentados y las aeronaves pasan por mantenimientos constantes. Los vuelos solo ocurren en condiciones meteorológicas favorables; si el tiempo no está bueno, el vuelo se reprograma.\n\nConsejos para aprovechar al máximo: lleva cámara o celular con batería llena y memoria disponible, preferiblemente lentes gran angulares; usa ropa oscura para minimizar reflejos en las ventanas; reserva con antelación, especialmente en temporada alta; el final de la tarde, durante la golden hour, proporciona la luz más bonita para fotos.\n\nMínimo de 2 personas, vuelo de 20 minutos. Hay diversos tipos de paquete, que varían según el trayecto y el tiempo de duración del vuelo. Disponible todos los días, respetadas las condiciones meteorológicas.","fr":"Faites passer votre expérience de Rio à un niveau supérieur. À bord d'un hélicoptère, vous volerez haut et découvrirez la grandeur de la ville d'une manière que peu ont le privilège de connaître. Admirez le Christ Rédempteur de près, presque à toucher le ciel, contournez le Pain de Sucre, admirez le dessin parfait de la Lagune Rodrigo de Freitas et survolez les plages emblématiques de Copacabana et d'Ipanema.\n\nCe n'est pas une simple visite, c'est un moment digne du cinéma, un souvenir qui devient le point culminant de votre voyage. Un vol panoramique en hélicoptère au-dessus de Rio de Janeiro est la définition d'une expérience haut de gamme, offrant des vues spectaculaires et un sentiment d'exclusivité. C'est la façon la plus rapide et la plus impressionnante de découvrir les principaux emblèmes de la ville.\n\nL'expérience à bord : les appareils sont modernes et sûrs, avec de grandes fenêtres pour garantir la meilleure visibilité. Tous les passagers portent un casque pour communiquer et écouter les explications du pilote, qui fait office de guide aérien. Le vol est doux et stable, procurant une sensation de sécurité et de confort.\n\nSécurité : les compagnies de taxi aérien sont strictement réglementées par l'Agence nationale de l'aviation civile (ANAC). Les pilotes sont très expérimentés et les appareils font l'objet d'un entretien constant. Les vols n'ont lieu que par conditions météorologiques favorables ; si le temps n'est pas bon, le vol est reporté.\n\nConseils pour en profiter au maximum : emportez un appareil photo ou un téléphone avec batterie pleine et mémoire disponible, de préférence des objectifs grand-angle ; portez des vêtements sombres pour minimiser les reflets sur les vitres ; réservez à l'avance, surtout en haute saison ; la fin d'après-midi, pendant la golden hour, offre la plus belle lumière pour les photos.\n\nMinimum de 2 personnes, vol de 20 minutes. Il existe plusieurs types de forfaits, variant selon l'itinéraire et la durée du vol. Disponible tous les jours, sous réserve des conditions météorologiques.","de":"Heben Sie Ihr Rio-Erlebnis auf eine neue Ebene. An Bord eines Hubschraubers fliegen Sie hoch hinaus und erleben die Erhabenheit der Stadt auf eine Weise, die nur wenige erleben dürfen. Sehen Sie die Christusstatue aus der Nähe, fast den Himmel berührend, umrunden Sie den Zuckerhut, bewundern Sie die perfekte Form der Lagune Rodrigo de Freitas und überfliegen Sie die ikonischen Strände von Copacabana und Ipanema.\n\nDas ist nicht nur eine Tour, es ist ein filmreifer Moment, eine Erinnerung, die zum Höhepunkt Ihrer Reise wird. Ein Panorama-Hubschrauberflug über Rio de Janeiro ist die Definition eines Premium-Erlebnisses und bietet spektakuläre Ausblicke und ein Gefühl von Exklusivität. Es ist die schnellste und eindrucksvollste Art, die wichtigsten Wahrzeichen der Stadt zu sehen.\n\nDas Erlebnis an Bord: Die Fluggeräte sind modern und sicher, mit großen Fenstern für beste Sicht. Alle Passagiere tragen Kopfhörer, um zu kommunizieren und den Erklärungen des Piloten zu folgen, der als Luft-Guide fungiert. Der Flug ist ruhig und stabil und vermittelt ein Gefühl von Sicherheit und Komfort.\n\nSicherheit: Lufttaxi-Unternehmen werden von der Nationalen Zivilluftfahrtbehörde (ANAC) streng reguliert. Die Piloten sind sehr erfahren und die Fluggeräte werden ständig gewartet. Flüge finden nur bei günstigen Wetterbedingungen statt; ist das Wetter schlecht, wird der Flug verschoben.\n\nTipps, um das Beste herauszuholen: Nehmen Sie eine Kamera oder ein Handy mit vollem Akku und freiem Speicher mit, am besten Weitwinkelobjektive; tragen Sie dunkle Kleidung, um Spiegelungen an den Fenstern zu minimieren; buchen Sie im Voraus, besonders in der Hochsaison; der späte Nachmittag, während der goldenen Stunde, bietet das schönste Licht für Fotos.\n\nMindestens 2 Personen, 20-minütiger Flug. Es gibt verschiedene Pakettypen, die je nach Route und Flugdauer variieren. Täglich verfügbar, vorbehaltlich der Wetterbedingungen."},
    "preco": "R$ 900,00",
    "duracao": {"pt":"A partir de 20 minutos de voo (mínimo de 2 pessoas); outros roteiros e durações sob consulta","en":"From 20 minutes of flight (minimum of 2 people); other routes and durations on request","es":"Desde 20 minutos de vuelo (mínimo de 2 personas); otros recorridos y duraciones bajo consulta","fr":"À partir de 20 minutes de vol (minimum de 2 personnes) ; autres itinéraires et durées sur demande","de":"Ab 20 Minuten Flug (mindestens 2 Personen); weitere Routen und Dauern auf Anfrage"},
    "inclusos": [],
    "imagens": [
      "assets/passeios/helicoptero/helicoptero4.jpg",
      "assets/passeios/helicoptero/helicoptero.jpg",
      "assets/passeios/helicoptero/helicoptero1.jpg",
      "assets/passeios/helicoptero/helicoptero2.jpg",
      "assets/passeios/helicoptero/helicoptero5.jpg",
      "assets/passeios/helicoptero/helicoptero6.jpg"
    ],
  },
  {
    "id": "voo-livre",
    "linkPagamento": "https://brazilxcursions.com/passeio/voo-livre-na-cidade-maravilhosa",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/FmL40Sbt9ew"],
    "titulo": {"pt":"Parapente e Asa Delta - Voo Livre na Cidade Maravilhosa","en":"Paragliding and Hang Gliding - Free Flight over the Marvelous City","es":"Parapente y Ala Delta - Vuelo Libre en la Ciudad Maravillosa","fr":"Parapente et Deltaplane - Vol libre au-dessus de la Ville Merveilleuse","de":"Gleitschirm und Drachenfliegen - Freiflug über der Wunderbaren Stadt"},
    "categoria": "aventura/adrenalina",
    "tagline": {"pt":"Realize o sonho de voar! Sobre a Floresta da Tijuca e o Mar, inesquecível!","en":"Make your dream of flying come true! Over the Tijuca Forest and the sea, unforgettable!","es":"¡Realiza el sueño de volar! ¡Sobre la Floresta da Tijuca y el mar, inolvidable!","fr":"Réalisez le rêve de voler ! Au-dessus de la forêt de Tijuca et de la mer, inoubliable !","de":"Erfüllen Sie sich den Traum vom Fliegen! Über dem Tijuca-Wald und dem Meer, unvergesslich!"},
    "descricao": {"pt":"Imagine-se flutuando sobre a Cidade Maravilhosa, com o vento no rosto e uma vista de tirar o fôlego que poucos têm o privilégio de ver. Este não é apenas um voo; é a realização de um sonho, um momento de pura liberdade onde você sente que pode tocar o céu. A decolagem tranquila acontece bem pertinho da Casa São Conrado, para que você comece sua experiência de natureza e adrenalina sem perder tempo.\n\nO Voo de Parapente é uma experiência de voo livre onde o piloto e o passageiro (em voo duplo) decolam de uma rampa ou montanha, utilizando um equipamento inflável que se assemelha a um paraquedas. Ele difere da Asa Delta por permitir que o praticante fique sentado, tornando-o mais acessível e ideal para quem busca uma experiência de paisagem mais contemplativa e suave. A decolagem é frequentemente feita na Pedra Bonita, a poucos minutos da Casa São Conrado. O voo permite sobrevoar a Floresta da Tijuca, as praias de São Conrado e Ipanema, e o Morro Dois Irmãos, proporcionando uma visão de 360° de um dos panoramas mais espetaculares do mundo.\n\nO Voo de Asa Delta, assim como o Parapente, é uma modalidade de voo livre, mas é conhecida por proporcionar mais velocidade e uma sensação de adrenalina superior. O equipamento, uma asa rígida em formato de triângulo, exige que o praticante fique deitado, permitindo uma sensação de voo muito próxima à de uma ave. O ponto de decolagem principal também é a rampa da Pedra Bonita, e o pouso é feito geralmente na Praia de São Conrado, proporcionando um final de voo espetacular com aterrissagem na areia. O voo é realizado em tandem (duplo) com um instrutor experiente.\n\nViva a experiência inesquecível de voar sobre a Cidade Maravilhosa! Decolando da famosa rampa da Pedra Bonita, você sobrevoa a Floresta da Tijuca e aterrissa suavemente na Praia de São Conrado. Durante o trajeto, a vista do Cristo Redentor, da Lagoa Rodrigo de Freitas e das praias cariocas se revela em todo o seu esplendor. É uma experiência segura, conduzida por instrutores certificados, que proporciona a sensação única de liberdade.\n\nRestrições: há restrições de peso e idade para ambas as modalidades. É vital informar sobre qualquer condição médica pré-existente, como problemas na coluna ou cardíacos. Melhor horário: geralmente pela manhã ou no final da tarde, quando as correntes de vento são mais estáveis. O que usar: tênis (obrigatório), roupas confortáveis, protetor solar e repelente. É altamente recomendável contratar o pacote de fotos e vídeo (opcional). O voo depende de condições climáticas favoráveis e pode ser cancelado em caso de condições adversas.","en":"Imagine yourself floating over the Marvelous City, with the wind on your face and a breathtaking view that few have the privilege to see. This isn't just a flight; it's a dream come true, a moment of pure freedom where you feel you can touch the sky. The calm take-off happens right near Casa São Conrado, so you start your experience of nature and adrenaline without wasting time.\n\nParagliding is a free-flight experience where the pilot and passenger (in tandem) take off from a ramp or mountain, using an inflatable wing that resembles a parachute. It differs from hang gliding in that the flyer stays seated, making it more accessible and ideal for those seeking a smoother, more contemplative scenic experience. Take-off is often from Pedra Bonita, a few minutes from Casa São Conrado. The flight lets you soar over the Tijuca Forest, the beaches of São Conrado and Ipanema, and the Dois Irmãos hill, providing a 360° view of one of the most spectacular panoramas in the world.\n\nHang gliding, like paragliding, is a form of free flight, but it is known for offering more speed and a greater rush of adrenaline. The equipment, a rigid triangular wing, requires the flyer to lie down, allowing a sensation of flight very close to that of a bird. The main take-off point is also the Pedra Bonita ramp, and the landing is usually on São Conrado Beach, providing a spectacular finish with a landing on the sand. The flight is done in tandem with an experienced instructor.\n\nLive the unforgettable experience of flying over the Marvelous City! Taking off from the famous Pedra Bonita ramp, you soar over the Tijuca Forest and land gently on São Conrado Beach. Along the way, the view of Christ the Redeemer, the Rodrigo de Freitas Lagoon and the Rio beaches reveals itself in all its splendor. It's a safe experience, led by certified instructors, that provides the unique sensation of freedom.\n\nRestrictions: there are weight and age restrictions for both activities. It is vital to report any pre-existing medical condition, such as back or heart problems. Best time: usually in the morning or late afternoon, when the wind currents are more stable. What to wear: sneakers (mandatory), comfortable clothes, sunscreen and insect repellent. It is highly recommended to book the photo and video package (optional). The flight depends on favorable weather conditions and may be cancelled in adverse conditions.","es":"Imagínate flotando sobre la Ciudad Maravillosa, con el viento en el rostro y una vista de quitar el aliento que pocos tienen el privilegio de ver. Esto no es solo un vuelo; es la realización de un sueño, un momento de pura libertad donde sientes que puedes tocar el cielo. El despegue tranquilo ocurre muy cerca de la Casa São Conrado, para que comiences tu experiencia de naturaleza y adrenalina sin perder tiempo.\n\nEl Parapente es una experiencia de vuelo libre donde el piloto y el pasajero (en vuelo doble) despegan de una rampa o montaña, utilizando un equipo inflable que se asemeja a un paracaídas. Se diferencia del Ala Delta porque permite que el practicante vaya sentado, haciéndolo más accesible e ideal para quien busca una experiencia paisajística más contemplativa y suave. El despegue se hace a menudo en la Pedra Bonita, a pocos minutos de la Casa São Conrado. El vuelo permite sobrevolar la Floresta da Tijuca, las playas de São Conrado e Ipanema, y el Morro Dois Irmãos, proporcionando una visión de 360° de uno de los panoramas más espectaculares del mundo.\n\nEl Ala Delta, al igual que el Parapente, es una modalidad de vuelo libre, pero es conocida por proporcionar más velocidad y una sensación de adrenalina superior. El equipo, un ala rígida en forma de triángulo, exige que el practicante vaya acostado, permitiendo una sensación de vuelo muy próxima a la de un ave. El punto de despegue principal también es la rampa de la Pedra Bonita, y el aterrizaje se hace generalmente en la Playa de São Conrado, proporcionando un final de vuelo espectacular con aterrizaje en la arena. El vuelo se realiza en tándem (doble) con un instructor experimentado.\n\n¡Vive la experiencia inolvidable de volar sobre la Ciudad Maravillosa! Despegando de la famosa rampa de la Pedra Bonita, sobrevuelas la Floresta da Tijuca y aterrizas suavemente en la Playa de São Conrado. Durante el trayecto, la vista del Cristo Redentor, de la Laguna Rodrigo de Freitas y de las playas cariocas se revela en todo su esplendor. Es una experiencia segura, conducida por instructores certificados, que proporciona la sensación única de libertad.\n\nRestricciones: hay restricciones de peso y edad para ambas modalidades. Es vital informar sobre cualquier condición médica preexistente, como problemas de columna o cardíacos. Mejor horario: generalmente por la mañana o al final de la tarde, cuando las corrientes de viento son más estables. Qué usar: zapatillas (obligatorio), ropa cómoda, protector solar y repelente. Es altamente recomendable contratar el paquete de fotos y video (opcional). El vuelo depende de condiciones climáticas favorables y puede cancelarse en caso de condiciones adversas.","fr":"Imaginez-vous flotter au-dessus de la Ville Merveilleuse, le vent sur le visage et une vue à couper le souffle que peu ont le privilège de voir. Ce n'est pas qu'un vol ; c'est la réalisation d'un rêve, un moment de liberté pure où vous avez l'impression de pouvoir toucher le ciel. Le décollage tranquille a lieu tout près de la Casa São Conrado, pour que vous commenciez votre expérience de nature et d'adrénaline sans perdre de temps.\n\nLe parapente est une expérience de vol libre où le pilote et le passager (en biplace) décollent d'une rampe ou d'une montagne, à l'aide d'une aile gonflable qui ressemble à un parachute. Il se distingue du deltaplane car il permet au pratiquant de rester assis, ce qui le rend plus accessible et idéal pour ceux qui recherchent une expérience paysagère plus contemplative et douce. Le décollage se fait souvent depuis la Pedra Bonita, à quelques minutes de la Casa São Conrado. Le vol permet de survoler la forêt de Tijuca, les plages de São Conrado et d'Ipanema, et le mont Dois Irmãos, offrant une vue à 360° de l'un des panoramas les plus spectaculaires du monde.\n\nLe deltaplane, tout comme le parapente, est une forme de vol libre, mais il est connu pour offrir plus de vitesse et une sensation d'adrénaline supérieure. L'équipement, une aile rigide en forme de triangle, exige que le pratiquant reste allongé, permettant une sensation de vol très proche de celle d'un oiseau. Le principal point de décollage est également la rampe de la Pedra Bonita, et l'atterrissage se fait généralement sur la plage de São Conrado, offrant une fin de vol spectaculaire avec un atterrissage sur le sable. Le vol se fait en tandem avec un instructeur expérimenté.\n\nVivez l'expérience inoubliable de voler au-dessus de la Ville Merveilleuse ! En décollant de la célèbre rampe de la Pedra Bonita, vous survolez la forêt de Tijuca et atterrissez en douceur sur la plage de São Conrado. En chemin, la vue sur le Christ Rédempteur, la Lagune Rodrigo de Freitas et les plages cariocas se révèle dans toute sa splendeur. C'est une expérience sûre, menée par des instructeurs certifiés, qui procure la sensation unique de liberté.\n\nRestrictions : il existe des restrictions de poids et d'âge pour les deux activités. Il est essentiel de signaler toute condition médicale préexistante, comme des problèmes de dos ou cardiaques. Meilleur moment : généralement le matin ou en fin d'après-midi, lorsque les courants de vent sont plus stables. Que porter : des baskets (obligatoire), des vêtements confortables, de la crème solaire et un répulsif. Il est fortement recommandé de réserver le forfait photos et vidéo (en option). Le vol dépend de conditions météorologiques favorables et peut être annulé en cas de conditions défavorables.","de":"Stellen Sie sich vor, Sie schweben über der Wunderbaren Stadt, mit dem Wind im Gesicht und einer atemberaubenden Aussicht, die nur wenige erleben dürfen. Das ist nicht nur ein Flug; es ist ein wahr gewordener Traum, ein Moment purer Freiheit, in dem Sie das Gefühl haben, den Himmel berühren zu können. Der ruhige Start erfolgt ganz in der Nähe der Casa São Conrado, damit Sie Ihr Natur- und Adrenalinerlebnis ohne Zeitverlust beginnen.\n\nDer Gleitschirmflug ist ein Freiflug-Erlebnis, bei dem Pilot und Passagier (im Tandem) von einer Rampe oder einem Berg abheben, mit einem aufblasbaren Flügel, der einem Fallschirm ähnelt. Er unterscheidet sich vom Drachenfliegen dadurch, dass der Flieger sitzen bleibt, was ihn zugänglicher macht und ideal für alle, die ein sanfteres, kontemplativeres Landschaftserlebnis suchen. Der Start erfolgt oft an der Pedra Bonita, wenige Minuten von der Casa São Conrado entfernt. Der Flug führt über den Tijuca-Wald, die Strände von São Conrado und Ipanema und den Hügel Dois Irmãos und bietet einen 360°-Blick auf eines der spektakulärsten Panoramen der Welt.\n\nDas Drachenfliegen ist wie der Gleitschirmflug eine Form des Freiflugs, aber bekannt dafür, mehr Geschwindigkeit und einen größeren Adrenalinschub zu bieten. Die Ausrüstung, ein starrer dreieckiger Flügel, erfordert, dass der Flieger liegt, was ein Fluggefühl ermöglicht, das dem eines Vogels sehr nahekommt. Der Hauptstartplatz ist ebenfalls die Rampe der Pedra Bonita, und die Landung erfolgt meist am Strand von São Conrado, was einen spektakulären Abschluss mit Landung im Sand bietet. Der Flug erfolgt im Tandem mit einem erfahrenen Instruktor.\n\nErleben Sie das unvergessliche Gefühl, über die Wunderbare Stadt zu fliegen! Vom berühmten Startplatz Pedra Bonita abhebend, überfliegen Sie den Tijuca-Wald und landen sanft am Strand von São Conrado. Unterwegs zeigt sich der Blick auf die Christusstatue, die Lagune Rodrigo de Freitas und die Strände Rios in ihrer ganzen Pracht. Es ist ein sicheres Erlebnis, geführt von zertifizierten Instruktoren, das das einzigartige Gefühl von Freiheit vermittelt.\n\nEinschränkungen: Für beide Aktivitäten gelten Gewichts- und Altersbeschränkungen. Es ist unbedingt erforderlich, bestehende gesundheitliche Beschwerden wie Rücken- oder Herzprobleme mitzuteilen. Beste Zeit: meist am Morgen oder späten Nachmittag, wenn die Windströmungen stabiler sind. Was anziehen: Turnschuhe (Pflicht), bequeme Kleidung, Sonnencreme und Insektenschutz. Es wird dringend empfohlen, das Foto- und Videopaket (optional) zu buchen. Der Flug hängt von günstigen Wetterbedingungen ab und kann bei ungünstigen Bedingungen abgesagt werden."},
    "preco": "R$ 1.050,00",
    "duracao": {"pt":"Aproximadamente 15 a 20 minutos de voo (atividade total em torno de 2 horas)","en":"Approximately 15 to 20 minutes of flight (total activity around 2 hours)","es":"Aproximadamente 15 a 20 minutos de vuelo (actividad total alrededor de 2 horas)","fr":"Environ 15 à 20 minutes de vol (activité totale d'environ 2 heures)","de":"Etwa 15 bis 20 Minuten Flug (Gesamtaktivität rund 2 Stunden)"},
    "inclusos": {"pt":["Instrutor profissional e certificado","Equipamentos de segurança","Transporte até o ponto de decolagem","Registro fotográfico (quando incluso no pacote)"],"en":["Professional certified instructor","Safety equipment","Transport to the take-off point","Photo record (when included in the package)"],"es":["Instructor profesional y certificado","Equipos de seguridad","Transporte hasta el punto de despegue","Registro fotográfico (cuando está incluido en el paquete)"],"fr":["Instructeur professionnel et certifié","Équipement de sécurité","Transport jusqu'au point de décollage","Reportage photo (lorsqu'il est inclus dans le forfait)"],"de":["Professioneller, zertifizierter Instruktor","Sicherheitsausrüstung","Transport zum Startplatz","Fotodokumentation (wenn im Paket enthalten)"]},
    "imagens": ["assets/passeios/voo-livre/pexels-daniel-olivier-578240085-18006356.jpg", "assets/passeios/voo-livre/3840px-s-o_conrado_ii_-_rio.jpg", "assets/passeios/voo-livre/asa-beautiful_rio_-_flickr_-_herval.jpg", "assets/passeios/voo-livre/matheus-rodrigues-de-lara-cc-by-sa-4-0-2x.jpg", "assets/passeios/voo-livre/para-panor-mica-de-uma-pessoa-saltando-de-paraquedas-acima-do-lago-vulc-o-durante-o-di.jpg", "assets/passeios/voo-livre/pexels-rodrigo-menezes-363900771-17218519.jpg"],
  },
  {
    "id": "favela-tour",
    "uf": "RJ",
    "videos": ["assets/passeios/favela-tour/favela-tour-video.mp4"],
    "titulo": {"pt":"Favela Tour","en":"Favela Tour","es":"Favela Tour","fr":"Favela Tour","de":"Favela-Tour"},
    "categoria": "cultura/cidade",
    "tagline": {"pt":"A vida por trás do nome favela","en":"The life behind the name 'favela'","es":"La vida detrás del nombre 'favela'","fr":"La vie derrière le mot favela","de":"Das Leben hinter dem Namen Favela"},
    "descricao": {"pt":"A Rocinha é a maior favela da América Latina, uma cidade dentro da cidade. Somos uma agência criada por um guia local (9 anos de experiência). A ideia desse passeio é mostrar a vida real dentro da favela e fazer você viver uma experiência local, social e cultural.\n\nNossos guias Pablo e Henrique nasceram na Rocinha e terão o prazer de contar a história deles. Você viverá em imersão por um dia na maior favela da América Latina. A experiência começa com os famosos moto-táxis que levam a um mirante com vista incrível. Em seguida, os visitantes descobrem uma casa típica, também com panorama incrível. A caminhada segue pelos becos da Rocinha (ruelas da favela), com a oportunidade de vivenciar um projeto social em torno da Capoeira, além de outros pontos culturais e surpresas.\n\nEm relação à segurança, a favela da Rocinha é um lugar seguro e os guias ficam com o visitante do início ao fim do passeio.\n\nEncontro: Estação de metrô São Conrado, saída A. O passeio inclui passeio de moto na favela até o ponto mais alto, entrada em um visual panorâmico, caminhada dentro dos becos e outros pontos culturais. Horário de início: todos os dias às 10h e às 14h. Idiomas: português, inglês, espanhol e francês. Ponto de partida: Metrô São Conrado / Rocinha (Saída A), Rua General Olímpio Mourão Filho, 320 - São Conrado, Rio de Janeiro - RJ; o visitante é buscado e levado de volta a este mesmo ponto de encontro.","en":"Rocinha is the largest favela in Latin America, a city within the city. We are an agency created by a local guide (9 years of experience). The idea of this tour is to show real life inside the favela and let you live a local, social and cultural experience.\n\nOur guides Pablo and Henrique were born in Rocinha and will be glad to share their story. You'll spend a day immersed in the largest favela in Latin America. The experience starts with the famous motorbike taxis that take you to a viewpoint with an amazing view. Then visitors discover a typical house, also with an incredible panorama. The walk continues through Rocinha's alleyways, with the chance to experience a social project around Capoeira, plus other cultural highlights and surprises.\n\nAs for safety, Rocinha is a safe place and the guides stay with visitors from start to finish.\n\nMeeting point: São Conrado subway station, exit A. The tour includes a motorbike ride in the favela up to the highest point, entrance to a panoramic viewpoint, a walk through the alleys and other cultural stops. Start times: every day at 10am and 2pm. Languages: Portuguese, English, Spanish and French. Departure point: São Conrado / Rocinha subway (Exit A), Rua General Olímpio Mourão Filho, 320 - São Conrado, Rio de Janeiro - RJ; visitors are picked up and dropped back at this same meeting point.","es":"Rocinha es la mayor favela de América Latina, una ciudad dentro de la ciudad. Somos una agencia creada por un guía local (9 años de experiencia). La idea de este paseo es mostrar la vida real dentro de la favela y hacerte vivir una experiencia local, social y cultural.\n\nNuestros guías Pablo y Henrique nacieron en Rocinha y estarán encantados de contarte su historia. Vivirás un día de inmersión en la mayor favela de América Latina. La experiencia comienza con los famosos mototaxis que llevan a un mirador con una vista increíble. Luego, los visitantes descubren una casa típica, también con un panorama increíble. La caminata continúa por los callejones de Rocinha, con la oportunidad de vivir un proyecto social en torno a la Capoeira, además de otros puntos culturales y sorpresas.\n\nEn cuanto a la seguridad, Rocinha es un lugar seguro y los guías acompañan al visitante de principio a fin.\n\nPunto de encuentro: estación de metro São Conrado, salida A. El paseo incluye recorrido en moto por la favela hasta el punto más alto, entrada a un mirador panorámico, caminata por los callejones y otros puntos culturales. Horarios de inicio: todos los días a las 10h y a las 14h. Idiomas: portugués, inglés, español y francés. Punto de partida: metro São Conrado / Rocinha (salida A), Rua General Olímpio Mourão Filho, 320 - São Conrado, Río de Janeiro - RJ; se recoge y se devuelve al visitante en este mismo punto de encuentro.","fr":"La Rocinha est la plus grande favela d'Amérique latine, une ville dans la ville. Nous sommes une agence créée par un guide local (9 ans d'expérience). L'idée de cette visite est de montrer la vraie vie à l'intérieur de la favela et de vous faire vivre une expérience locale, sociale et culturelle.\n\nNos guides Pablo et Henrique sont nés à la Rocinha et se feront un plaisir de raconter leur histoire. Vous vivrez une journée d'immersion dans la plus grande favela d'Amérique latine. L'expérience commence par les fameux moto-taxis qui mènent à un belvédère avec une vue incroyable. Ensuite, les visiteurs découvrent une maison typique, elle aussi dotée d'un panorama incroyable. La marche se poursuit dans les ruelles de la Rocinha, avec la possibilité de découvrir un projet social autour de la Capoeira, ainsi que d'autres points culturels et surprises.\n\nCôté sécurité, la Rocinha est un lieu sûr et les guides restent avec le visiteur du début à la fin.\n\nPoint de rencontre : station de métro São Conrado, sortie A. La visite comprend une balade à moto dans la favela jusqu'au point le plus haut, l'entrée à un belvédère panoramique, une marche dans les ruelles et d'autres points culturels. Horaires de départ : tous les jours à 10h et à 14h. Langues : portugais, anglais, espagnol et français. Point de départ : métro São Conrado / Rocinha (sortie A), Rua General Olímpio Mourão Filho, 320 - São Conrado, Rio de Janeiro - RJ ; le visiteur est pris en charge et ramené à ce même point de rencontre.","de":"Die Rocinha ist die größte Favela Lateinamerikas, eine Stadt in der Stadt. Wir sind eine Agentur, gegründet von einem einheimischen Guide (9 Jahre Erfahrung). Ziel dieser Tour ist es, das echte Leben in der Favela zu zeigen und Sie ein lokales, soziales und kulturelles Erlebnis erfahren zu lassen.\n\nUnsere Guides Pablo und Henrique sind in der Rocinha geboren und erzählen Ihnen gern ihre Geschichte. Sie verbringen einen Tag lang eintauchend in der größten Favela Lateinamerikas. Das Erlebnis beginnt mit den berühmten Motorradtaxis, die zu einem Aussichtspunkt mit fantastischem Blick führen. Danach entdecken die Besucher ein typisches Haus, ebenfalls mit unglaublichem Panorama. Der Rundgang führt weiter durch die Gassen der Rocinha, mit der Gelegenheit, ein soziales Projekt rund um die Capoeira zu erleben, sowie weitere kulturelle Höhepunkte und Überraschungen.\n\nZur Sicherheit: Die Rocinha ist ein sicherer Ort und die Guides bleiben von Anfang bis Ende beim Besucher.\n\nTreffpunkt: U-Bahn-Station São Conrado, Ausgang A. Die Tour umfasst eine Motorradfahrt in der Favela bis zum höchsten Punkt, den Eintritt zu einem Panorama-Aussichtspunkt, einen Spaziergang durch die Gassen und weitere kulturelle Stationen. Startzeiten: täglich um 10 und 14 Uhr. Sprachen: Portugiesisch, Englisch, Spanisch und Französisch. Ausgangspunkt: U-Bahn São Conrado / Rocinha (Ausgang A), Rua General Olímpio Mourão Filho, 320 - São Conrado, Rio de Janeiro - RJ; der Besucher wird abgeholt und zu diesem Treffpunkt zurückgebracht."},
    "preco": "R$ 180,00",
    "duracao": {"pt":"2h30 a 3 horas","en":"2.5 to 3 hours","es":"2h30 a 3 horas","fr":"2h30 à 3 heures","de":"2,5 bis 3 Stunden"},
    "inclusos": {"pt":["Moto-táxi dentro da favela","Guia local","Visita a casa típica com vista panorâmica","Vivência de projeto social de Capoeira"],"en":["Motorbike taxi inside the favela","Local guide","Visit to a typical house with panoramic view","Experience of a Capoeira social project"],"es":["Mototaxi dentro de la favela","Guía local","Visita a una casa típica con vista panorámica","Vivencia de un proyecto social de Capoeira"],"fr":["Moto-taxi dans la favela","Guide local","Visite d'une maison typique avec vue panoramique","Immersion dans un projet social de Capoeira"],"de":["Motorradtaxi in der Favela","Lokaler Guide","Besuch eines typischen Hauses mit Panoramablick","Erlebnis eines sozialen Capoeira-Projekts"]},
    "imagens": [
      "assets/passeios/favela-tour/favela-tour3.jpg",
      "assets/passeios/favela-tour/favela-tour1.jpg",
      "assets/passeios/favela-tour/favela-tour2.jpg",
      "assets/passeios/favela-tour/favela-tour4.jpg",
      "assets/passeios/favela-tour/favela-tour5.jpg"
    ],
    "video": null
  },
  {
    "id": "stand-up",
    "linkPagamento": "https://brazilxcursions.com/passeio/nascer-do-sol-stand-up-paddle",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/XmY70rOsh5I"],
    "titulo": {"pt":"Stand Up Paddle - Nascer do Sol","en":"Stand Up Paddle - Sunrise","es":"Stand Up Paddle - Amanecer","fr":"Stand Up Paddle - Lever du soleil","de":"Stand-Up-Paddling - Sonnenaufgang"},
    "categoria": "praia/ilha",
    "tagline": {"pt":"Espetáculo da natureza a cada manhã","en":"A spectacle of nature every morning","es":"Un espectáculo de la naturaleza cada mañana","fr":"Un spectacle de la nature chaque matin","de":"Ein Naturschauspiel an jedem Morgen"},
    "descricao": {"pt":"Venha ver o Sol chegar no mar de Copacabana! Sua descoberta das maravilhas da cidade não podia começar melhor. A equipe é especializada e dá uma aula de como fazer o Stand Up, ajudando com a prancha para entrar e sair do mar e com instruções para que a experiência seja completa.\n\nVocê vai começar o dia contemplando o nascer do sol surgindo no horizonte da Praia de Copacabana, contemplando a natureza, o céu e o mar de um ângulo maravilhoso na cidade maravilhosa. Esse momento mágico é um espetáculo da natureza que emociona cariocas e viajantes do mundo inteiro. Pensamos em tudo para que você viva essa experiência de forma única: tranquilidade, segurança e o cenário deslumbrante da orla mais icônica do Rio de Janeiro. Além do nascer do sol, você vai ter fotos incríveis, sentir a energia da praia ainda calma e viver uma experiência única e exclusiva. Horário de saída: antes do amanhecer, entre 5h e 5h30, conforme a estação do ano.\n\nO que está incluído: prancha de Stand Up Paddle e remo por pessoa, guarda-volumes para pertences pessoais, colete salva-vidas e instrução básica para a prática da atividade. Os valores podem sofrer alterações em feriados e alta temporada. Reservas com pelo menos um dia de antecedência; não há número mínimo de participantes; formas de pagamento: cartão de crédito ou Pix; os participantes devem portar documento de identidade original.","en":"Come watch the sun rise over the sea of Copacabana! Your discovery of the city's wonders couldn't start better. The team is specialized and gives a lesson on how to stand up paddle, helping with the board to get in and out of the water and with instructions so the experience is complete.\n\nYou'll start the day watching the sunrise appear on the horizon of Copacabana Beach, contemplating nature, the sky and the sea from a wonderful angle in the marvelous city. This magical moment is a spectacle of nature that moves locals and travelers from all over the world. We've thought of everything so you can live this experience in a unique way: calm, safety and the stunning scenery of Rio's most iconic shoreline. Beyond the sunrise, you'll get amazing photos, feel the energy of the still-quiet beach and enjoy a unique and exclusive experience. Departure time: before dawn, between 5:00 and 5:30 am, depending on the season.\n\nWhat's included: a Stand Up Paddle board and paddle per person, a locker for personal belongings, a life jacket and basic instruction for the activity. Prices may change on holidays and high season. Bookings at least one day in advance; there is no minimum number of participants; payment methods: credit card or Pix; participants must carry an original ID document.","es":"¡Ven a ver el sol llegar sobre el mar de Copacabana! Tu descubrimiento de las maravillas de la ciudad no podía empezar mejor. El equipo es especializado y da una clase de cómo hacer Stand Up, ayudando con la tabla para entrar y salir del mar y con instrucciones para que la experiencia sea completa.\n\nComenzarás el día contemplando el amanecer surgir en el horizonte de la playa de Copacabana, contemplando la naturaleza, el cielo y el mar desde un ángulo maravilloso en la ciudad maravillosa. Ese momento mágico es un espectáculo de la naturaleza que emociona a cariocas y viajeros de todo el mundo. Pensamos en todo para que vivas esta experiencia de forma única: tranquilidad, seguridad y el escenario deslumbrante de la orilla más icónica de Río de Janeiro. Además del amanecer, tendrás fotos increíbles, sentirás la energía de la playa aún en calma y vivirás una experiencia única y exclusiva. Hora de salida: antes del amanecer, entre las 5:00 y las 5:30, según la estación del año.\n\nQué incluye: tabla de Stand Up Paddle y remo por persona, casillero para pertenencias personales, chaleco salvavidas e instrucción básica para la práctica. Los precios pueden variar en feriados y temporada alta. Reservas con al menos un día de antelación; no hay número mínimo de participantes; formas de pago: tarjeta de crédito o Pix; los participantes deben portar documento de identidad original.","fr":"Venez voir le soleil se lever sur la mer de Copacabana ! Votre découverte des merveilles de la ville ne pouvait mieux commencer. L'équipe est spécialisée et donne un cours pour apprendre le stand up paddle, en aidant avec la planche pour entrer et sortir de l'eau et en donnant des instructions pour que l'expérience soit complète.\n\nVous commencerez la journée en contemplant le lever du soleil à l'horizon de la plage de Copacabana, en admirant la nature, le ciel et la mer sous un angle magnifique dans la ville merveilleuse. Ce moment magique est un spectacle de la nature qui émeut les Cariocas et les voyageurs du monde entier. Nous avons pensé à tout pour que vous viviez cette expérience de façon unique : tranquillité, sécurité et le décor éblouissant du littoral le plus emblématique de Rio de Janeiro. Au-delà du lever du soleil, vous aurez des photos incroyables, ressentirez l'énergie de la plage encore calme et vivrez une expérience unique et exclusive. Heure de départ : avant l'aube, entre 5h00 et 5h30, selon la saison.\n\nCe qui est inclus : une planche de stand up paddle et une pagaie par personne, un casier pour les affaires personnelles, un gilet de sauvetage et une instruction de base pour l'activité. Les prix peuvent varier les jours fériés et en haute saison. Réservations au moins un jour à l'avance ; il n'y a pas de nombre minimum de participants ; moyens de paiement : carte de crédit ou Pix ; les participants doivent présenter une pièce d'identité originale.","de":"Erleben Sie, wie die Sonne über dem Meer von Copacabana aufgeht! Ihre Entdeckung der Wunder der Stadt könnte nicht besser beginnen. Das Team ist spezialisiert und gibt eine Einweisung ins Stand-Up-Paddling, hilft mit dem Board beim Ein- und Aussteigen und gibt Anweisungen, damit das Erlebnis vollständig ist.\n\nSie beginnen den Tag mit dem Sonnenaufgang am Horizont der Copacabana und betrachten Natur, Himmel und Meer aus einem wunderbaren Blickwinkel in der wunderbaren Stadt. Dieser magische Moment ist ein Naturschauspiel, das Einheimische und Reisende aus aller Welt berührt. Wir haben an alles gedacht, damit Sie dieses Erlebnis auf einzigartige Weise genießen: Ruhe, Sicherheit und die atemberaubende Kulisse der bekanntesten Uferpromenade Rios. Neben dem Sonnenaufgang erhalten Sie tolle Fotos, spüren die Energie des noch ruhigen Strandes und erleben etwas Einzigartiges und Exklusives. Abfahrtszeit: vor Sonnenaufgang, zwischen 5:00 und 5:30 Uhr, je nach Jahreszeit.\n\nInbegriffen: ein Stand-Up-Paddle-Board und Paddel pro Person, ein Schließfach für persönliche Gegenstände, eine Schwimmweste und eine grundlegende Einweisung. Die Preise können an Feiertagen und in der Hochsaison variieren. Buchungen mindestens einen Tag im Voraus; keine Mindestteilnehmerzahl; Zahlungsarten: Kreditkarte oder Pix; die Teilnehmer müssen ein Original-Ausweisdokument mitführen."},
    "preco": "R$ 200,00",
    "duracao": {"pt":"Saída antes do amanhecer, entre 5h e 5h30 (conforme a estação do ano)","en":"Departure before dawn, between 5:00 and 5:30 am (depending on the season)","es":"Salida antes del amanecer, entre las 5:00 y las 5:30 (según la estación del año)","fr":"Départ avant l'aube, entre 5h00 et 5h30 (selon la saison)","de":"Abfahrt vor Sonnenaufgang, zwischen 5:00 und 5:30 Uhr (je nach Jahreszeit)"},
    "inclusos": {"pt":["Prancha de Stand Up Paddle e remo","Colete salva-vidas","Guarda-volumes","Instrução básica"],"en":["Stand Up Paddle board and paddle","Life jacket","Locker for belongings","Basic instruction"],"es":["Tabla de Stand Up Paddle y remo","Chaleco salvavidas","Casillero para pertenencias","Instrucción básica"],"fr":["Planche de Stand Up Paddle et pagaie","Gilet de sauvetage","Casier pour les affaires","Instruction de base"],"de":["Stand-Up-Paddle-Board und Paddel","Schwimmweste","Schließfach für Wertsachen","Grundlegende Einweisung"]},
    "imagens": ["assets/passeios/stand-up/stand-up1.jpg", "assets/passeios/stand-up/stand-up2.jpg", "assets/passeios/stand-up/stand-up3.jpg", "assets/passeios/stand-up/stand-up4.jpg", "assets/passeios/stand-up/stand-up5.jpg"],
    "video": null
  },
  {
    "id": "city-tour",
    "linkPagamento": "https://brazilxcursions.com/passeio/city-tour",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/BNM5iZDiAmE"],
    "titulo": {"pt":"City Tour - Rio de Janeiro","en":"City Tour - Rio de Janeiro","es":"City Tour - Río de Janeiro","fr":"City Tour - Rio de Janeiro","de":"City-Tour - Rio de Janeiro"},
    "categoria": "cultura/cidade",
    "tagline": {"pt":"Conheça o Rio em um passeio completo e inesquecível!","en":"Discover Rio on a complete and unforgettable tour!","es":"¡Descubre Río en un paseo completo e inolvidable!","fr":"Découvrez Rio lors d'une excursion complète et inoubliable !","de":"Entdecken Sie Rio auf einer kompletten und unvergesslichen Tour!"},
    "descricao": {"pt":"Conheça os principais pontos turísticos do Rio de Janeiro com receptividade, alegria e muito astral! O Rio de Janeiro deixa a todos maravilhados com sua natureza, história e arquitetura, e nesse passeio você poderá desfrutar do melhor que a cidade maravilhosa pode oferecer.\n\nDescubra os principais ícones da Cidade Maravilhosa com hospitalidade, alegria e energia contagiante. Neste City Tour exclusivo, você vivenciará o que há de melhor na capital carioca em uma experiência confortável, organizada e cheia de boas energias. O passeio é conduzido por um especialista em turismo, formado pela Universidade Estácio de Sá e apaixonado por sua profissão, fluente em português, inglês e espanhol.\n\nRoteiro: Escadaria Selarón, Catedral Metropolitana, Maracanã (visita externa) e Cristo Redentor, com almoço incluso (bebidas e sobremesas não incluídas). O passeio começa por volta das 07h30 da manhã e tem duração de 4 horas.\n\nCondições gerais: reservas com mínimo de 1 dia de antecedência; não há número mínimo de participantes; embarque na orla de Copacabana; pagamento via cartão ou Pix; participantes devem portar documento de identidade original.","en":"Get to know the main sights of Rio de Janeiro with warmth, joy and great energy! Rio de Janeiro amazes everyone with its nature, history and architecture, and on this tour you can enjoy the best that the marvelous city has to offer.\n\nDiscover the main icons of the Marvelous City with hospitality, joy and contagious energy. On this exclusive City Tour, you'll experience the best of Rio's capital in a comfortable, well-organized experience full of good vibes. The tour is led by a tourism specialist, a graduate of Estácio de Sá University who is passionate about his profession and fluent in Portuguese, English and Spanish.\n\nItinerary: Selarón Steps, Metropolitan Cathedral, Maracanã (external visit) and Christ the Redeemer, with lunch included (drinks and desserts not included). The tour starts around 7:30 am and lasts 4 hours.\n\nGeneral conditions: bookings at least 1 day in advance; no minimum number of participants; pick-up along the Copacabana shore; payment by card or Pix; participants must carry an original ID document.","es":"¡Conoce los principales puntos turísticos de Río de Janeiro con hospitalidad, alegría y mucho ánimo! Río de Janeiro maravilla a todos con su naturaleza, historia y arquitectura, y en este paseo podrás disfrutar de lo mejor que la ciudad maravillosa puede ofrecer.\n\nDescubre los principales íconos de la Ciudad Maravillosa con hospitalidad, alegría y energía contagiosa. En este City Tour exclusivo, vivirás lo mejor de la capital carioca en una experiencia cómoda, organizada y llena de buenas energías. El paseo es conducido por un especialista en turismo, graduado por la Universidad Estácio de Sá y apasionado por su profesión, fluido en portugués, inglés y español.\n\nItinerario: Escalera de Selarón, Catedral Metropolitana, Maracaná (visita externa) y Cristo Redentor, con almuerzo incluido (bebidas y postres no incluidos). El paseo comienza alrededor de las 7:30 de la mañana y dura 4 horas.\n\nCondiciones generales: reservas con mínimo 1 día de antelación; no hay número mínimo de participantes; recogida en la orilla de Copacabana; pago con tarjeta o Pix; los participantes deben portar documento de identidad original.","fr":"Découvrez les principaux sites touristiques de Rio de Janeiro avec chaleur, joie et beaucoup d'entrain ! Rio de Janeiro émerveille tout le monde par sa nature, son histoire et son architecture, et lors de cette excursion vous pourrez profiter du meilleur de la ville merveilleuse.\n\nDécouvrez les principales icônes de la Ville Merveilleuse avec hospitalité, joie et une énergie contagieuse. Lors de ce City Tour exclusif, vous vivrez le meilleur de la capitale carioca dans une expérience confortable, bien organisée et pleine de bonnes ondes. La visite est menée par un spécialiste du tourisme, diplômé de l'Université Estácio de Sá et passionné par son métier, parlant couramment portugais, anglais et espagnol.\n\nItinéraire : l'escalier Selarón, la cathédrale métropolitaine, le Maracanã (visite extérieure) et le Christ Rédempteur, déjeuner inclus (boissons et desserts non inclus). La visite commence vers 7h30 du matin et dure 4 heures.\n\nConditions générales : réservations au moins 1 jour à l'avance ; pas de nombre minimum de participants ; prise en charge le long du front de mer de Copacabana ; paiement par carte ou Pix ; les participants doivent présenter une pièce d'identité originale.","de":"Lernen Sie die wichtigsten Sehenswürdigkeiten von Rio de Janeiro mit Herzlichkeit, Freude und viel guter Laune kennen! Rio de Janeiro begeistert alle mit seiner Natur, Geschichte und Architektur, und auf dieser Tour genießen Sie das Beste, was die wunderbare Stadt zu bieten hat.\n\nEntdecken Sie die wichtigsten Wahrzeichen der Wunderbaren Stadt mit Gastfreundschaft, Freude und ansteckender Energie. Auf dieser exklusiven City-Tour erleben Sie das Beste der Hauptstadt der Cariocas in einem komfortablen, gut organisierten Erlebnis voller guter Laune. Die Tour wird von einem Tourismus-Experten geleitet, einem Absolventen der Estácio-de-Sá-Universität, der seinen Beruf mit Leidenschaft ausübt und fließend Portugiesisch, Englisch und Spanisch spricht.\n\nRoute: Selarón-Treppe, die Kathedrale von Rio, das Maracanã-Stadion (von außen) und die Christusstatue, Mittagessen inbegriffen (Getränke und Desserts nicht inbegriffen). Die Tour beginnt gegen 7:30 Uhr morgens und dauert 4 Stunden.\n\nAllgemeine Bedingungen: Buchung mindestens 1 Tag im Voraus; keine Mindestteilnehmerzahl; Abholung entlang der Uferpromenade von Copacabana; Zahlung per Karte oder Pix; die Teilnehmer müssen ein Original-Ausweisdokument mitführen."},
    "preco": "R$ 500,00",
    "duracao": {"pt":"Aproximadamente 4 horas, início por volta das 7h30","en":"About 4 hours, starting around 7:30 am","es":"Aproximadamente 4 horas, inicio alrededor de las 7:30","fr":"Environ 4 heures, départ vers 7h30","de":"Etwa 4 Stunden, Beginn gegen 7:30 Uhr"},
    "inclusos": {"pt":["Transporte em veículo climatizado (van ou carro)","Guia de turismo credenciado (português, espanhol e inglês)","Ingressos para os atrativos visitados","Almoço buffet self-service"],"en":["Transport in air-conditioned vehicle (van or car)","Accredited tour guide (Portuguese, Spanish and English)","Tickets for the attractions visited","Self-service buffet lunch"],"es":["Transporte en vehículo climatizado (van o coche)","Guía de turismo acreditado (portugués, español e inglés)","Entradas para los atractivos visitados","Almuerzo buffet self-service"],"fr":["Transport en véhicule climatisé (van ou voiture)","Guide touristique agréé (portugais, espagnol et anglais)","Billets pour les attractions visitées","Déjeuner buffet en self-service"],"de":["Transport im klimatisierten Fahrzeug (Van oder Auto)","Akkreditierter Reiseführer (Portugiesisch, Spanisch und Englisch)","Eintrittskarten für die besuchten Attraktionen","Mittagessen als Selbstbedienungsbuffet"]},
    "imagens": ["assets/passeios/city-tour/city-tour-1.jpg", "assets/passeios/city-tour/city-tour-2.jpg", "assets/passeios/city-tour/city-tour-3.jpg", "assets/passeios/city-tour/city-tour-4.jpg", "assets/passeios/city-tour/city-tour-5.jpg", "assets/passeios/city-tour/city-tour-6.jpg", "assets/passeios/city-tour/city-tour-7.jpg"],
  },
  {
    "id": "petropolis",
    "linkPagamento": "https://brazilxcursions.com/passeio/petropolis-cidade-imperial",
    "uf": "RJ",
    "videos": ["https://www.youtube.com/embed/VKcgPMt392s"],
    "titulo": {"pt":"Petrópolis: A Cidade Imperial","en":"Petrópolis: The Imperial City","es":"Petrópolis: La Ciudad Imperial","fr":"Petrópolis : la Cité impériale","de":"Petrópolis: Die Kaiserstadt"},
    "categoria": "cultura/cidade",
    "tagline": {"pt":"Venha conhecer a história do nosso querido Brasil!","en":"Come discover the history of our beloved Brazil!","es":"¡Ven a conocer la historia de nuestro querido Brasil!","fr":"Venez découvrir l'histoire de notre cher Brésil !","de":"Entdecken Sie die Geschichte unseres geliebten Brasiliens!"},
    "descricao": {"pt":"Venha vivenciar esse capítulo único na história brasileira e mundial. São mais de 200 anos de história em um dia! Conheça fatos marcantes do primeiro império tropical da história contemporânea. Petrópolis Imperial, 200 anos em um dia!\n\nDuração de aproximadamente 12 horas (incluindo deslocamento), com ponto de encontro em Copacabana e saída às 8 horas.\n\nRoteiro: Catedral São Pedro de Alcântara, Casa do Alemão, Cervejaria Bohemia com 3 degustações (de quinta a domingo), Palácio Imperial, Casa de Santos Dumont (visitação externa), Palácio de Cristal, Palácio Quitandinha (visitação externa) e Casa de Chocolate Katz.","en":"Come experience this unique chapter in Brazilian and world history. More than 200 years of history in a single day! Discover remarkable facts about the first tropical empire in contemporary history. Imperial Petrópolis, 200 years in one day!\n\nDuration of approximately 12 hours (including travel), with the meeting point in Copacabana and departure at 8 am.\n\nItinerary: São Pedro de Alcântara Cathedral, Casa do Alemão, Bohemia Brewery with 3 tastings (Thursday to Sunday), Imperial Palace, Santos Dumont House (external visit), Crystal Palace, Quitandinha Palace (external visit) and Katz Chocolate House.","es":"Ven a vivir este capítulo único en la historia brasileña y mundial. ¡Más de 200 años de historia en un día! Conoce hechos marcantes del primer imperio tropical de la historia contemporánea. ¡Petrópolis Imperial, 200 años en un día!\n\nDuración de aproximadamente 12 horas (incluyendo el desplazamiento), con punto de encuentro en Copacabana y salida a las 8 horas.\n\nItinerario: Catedral São Pedro de Alcântara, Casa do Alemão, Cervecería Bohemia con 3 degustaciones (de jueves a domingo), Palacio Imperial, Casa de Santos Dumont (visita externa), Palacio de Cristal, Palacio Quitandinha (visita externa) y Casa de Chocolate Katz.","fr":"Venez vivre ce chapitre unique de l'histoire brésilienne et mondiale. Plus de 200 ans d'histoire en une seule journée ! Découvrez des faits marquants du premier empire tropical de l'histoire contemporaine. Petrópolis impériale, 200 ans en un jour !\n\nDurée d'environ 12 heures (déplacement inclus), avec point de rencontre à Copacabana et départ à 8 heures.\n\nItinéraire : cathédrale São Pedro de Alcântara, Casa do Alemão, brasserie Bohemia avec 3 dégustations (du jeudi au dimanche), Palais impérial, maison de Santos Dumont (visite extérieure), Palais de Cristal, Palais Quitandinha (visite extérieure) et maison du chocolat Katz.","de":"Erleben Sie dieses einzigartige Kapitel der brasilianischen und der Weltgeschichte. Über 200 Jahre Geschichte an einem einzigen Tag! Entdecken Sie prägende Ereignisse des ersten tropischen Kaiserreichs der Neuzeit. Das kaiserliche Petrópolis, 200 Jahre an einem Tag!\n\nDauer von etwa 12 Stunden (inklusive Anfahrt), mit Treffpunkt in Copacabana und Abfahrt um 8 Uhr.\n\nRoute: Kathedrale São Pedro de Alcântara, Casa do Alemão, Bohemia-Brauerei mit 3 Verkostungen (Donnerstag bis Sonntag), Kaiserpalast, Haus von Santos Dumont (von außen), Kristallpalast, Quitandinha-Palast (von außen) und Katz-Schokoladenhaus."},
    "preco": "R$ 300,00",
    "duracao": {"pt":"Aproximadamente 12 horas (incluindo deslocamento), saindo de Copacabana às 8h","en":"Approximately 12 hours (including travel), departing from Copacabana at 8 am","es":"Aproximadamente 12 horas (incluyendo el desplazamiento), saliendo de Copacabana a las 8h","fr":"Environ 12 heures (déplacement inclus), départ de Copacabana à 8h","de":"Etwa 12 Stunden (inkl. Anfahrt), Abfahrt von Copacabana um 8 Uhr"},
    "inclusos": {"pt":["Transporte executivo","Guia de turismo credenciado","Almoço"],"en":["Executive transport","Accredited tour guide","Lunch"],"es":["Transporte ejecutivo","Guía de turismo acreditado","Almuerzo"],"fr":["Transport exécutif","Guide touristique agréé","Déjeuner"],"de":["Executive-Transport","Akkreditierter Reiseführer","Mittagessen"]},
    "imagens": ["assets/passeios/petropolis/pet-just-a-brazilian-man-from-brazil-cc-by-2-0.jpg", "assets/passeios/petropolis/pet-owner-cc-by-sa-3-0.jpg", "assets/passeios/petropolis/pet-pexels-compt-br-djalmaphotos.jpg", "assets/passeios/petropolis/pet-pexels-compt-br-jorginho-dj-2159500244.jpg", "assets/passeios/petropolis/pet-pexels-compt-br-juliana-crillanovick-10474342.jpg", "assets/passeios/petropolis/pet-vin-cius94-cc-by-sa-4-0.jpg", "assets/passeios/petropolis/petr-pexels-compt-br-rodrigo-hammes-49914501.jpg", "assets/passeios/petropolis/petro-vin-cius94-cc-by-sa-4-0.jpg", "assets/passeios/petropolis/pierre-andr-cc-by-sa-4-0.jpg"],
    "video": null
  },
  {
    "id": "imersao-floresta",
    "uf": "AM",
    "videos": ["https://www.youtube.com/embed/1qJsZ0hQAhE"],
    "titulo": "Imersão na Floresta",
    "categoria": "natureza",
    "tagline": "No coração da Amazônia, conviva com os nativos",
    "descricao": "Em uma experiência de 3 dias, ficamos imersos ao real modo amazônico de viver. A experiência fica ainda mais amazônica com peixes assados na brasa e momentos de descanso na rede, barracas ou cabanas, além de cachoeiras exclusivas.\n\nRoteiro — Dia 1: início a partir das 7h, saindo de Manaus, percorrendo o Lago de Balbina; chegada à Ilha 9 Irmãos; parada para o almoço; deslocamento para pesca esportiva de piranha e passeio de canoa; contemplação do pôr do sol; parada para o jantar; focagem noturna de jacarés. Dia 2: café da manhã na pousada; vivência de meio período na Casa da Farinha; parada para o almoço; visitação ao Abrigo das Araras; fim de tarde livre; acampamento na selva (opcional). Dia 3: café da manhã na pousada; translado para a Cachoeira 7 Quedas; parada para o almoço; retorno a Manaus.\n\nA ordem das atividades pode ser alterada por período sazonal ou alterações climáticas. Atentar para o check-out das pousadas antes de 12h do último dia.",
    "preco": "R$ 1.500,00",
    "duracao": "3 dias",
    "inclusos": ["Transporte ida e volta", "Hospedagem em pousada", "Café da manhã, almoço e jantar nos atrativos", "Taxa de entrada", "Transfer entre atrativos", "Seguro de vida", "Guia de turismo", "Kit de primeiros socorros"],
    "imagens": [],
    "video": null
  },
  {
    "id": "cachoeira-amazonia",
    "uf": "AM",
    "videos": ["https://www.youtube.com/embed/oc0CPPDoYeo"],
    "titulo": "Cachoeiras da Amazônia - Aventura na Floresta (4 dias)",
    "categoria": "natureza",
    "tagline": "A Amazônia te espera",
    "descricao": "A apenas 107 km de Manaus, Presidente Figueiredo é o ponto de partida para quem busca aventura na selva. São mais de 150 atrativos catalogados — entre cachoeiras imponentes, grutas misteriosas, cavernas escondidas, corredeiras desafiadoras, lagoas, igarapés e até um fervedouro surpreendente. Um território selvagem onde cada trilha é um convite à descoberta.\n\nExpedição com hospedagem, café da manhã e almoço incluídos. Roteiro — Dia 1: Caverna do Maroaga, trilha para a Gruta da Judeia, parada para o almoço, transfer para a Lagoa Cristalina e Rio Vermelho, transfer para a Cachoeira da Iracema, finalizando na Cachoeira das Araras. Dia 2: café da manhã na pousada, transfer para o Complexo do Mutum (jacuzzis naturais e 3 cachoeiras), parada para o almoço, finalizando na Cachoeira da Pedra Furada. Dia 3: café da manhã na pousada, trilha para a Cachoeira da Neblina (12 km ida e volta), parada para o almoço, encerrando o dia. Dia 4: café da manhã na pousada, transfer para a Cachoeira das Orquídeas, transfer para a Cachoeira da Asframa, parada para o almoço, finalizando na Corredeira do Urubuí.\n\nDatas disponíveis abertas, a confirmar.",
    "preco": "R$ 3.000,00",
    "duracao": "4 dias (expedição de 3 a 4 dias, conforme roteiro)",
    "inclusos": ["Transporte ida e volta a Manaus", "Taxa de entrada", "Seguro de vida", "Transfer entre atrativos", "Carros privativos compartilhados", "Guia de turismo", "Kit de primeiros socorros", "Hospedagem em pousada", "Café da manhã e almoço nos atrativos"],
    "imagens": ["TOURS/AM/am4.jpg", "TOURS/AM/am6.jpg", "TOURS/AM/am1.jpg", "TOURS/AM/am9.jpg", "TOURS/AM/am3.jpg", "TOURS/AM/am5.jpg", "TOURS/AM/am11.jpg", "TOURS/AM/am12.jpg", "TOURS/AM/am8.jpg", "TOURS/AM/am2.jpg", "TOURS/AM/am7.jpg", "TOURS/AM/am10.jpg", "TOURS/AM/am13.jpg", "TOURS/AM/am14.jpg"],
    "video": null
  },

  {
    "id": "pantanal-carioca-ilha-da-gigoia",
    "linkPagamento": "",
    "uf": "RJ",
    "videos": [
      "assets/passeios/pantanal-carioca-ilha-da-gigoia/pantanal-carioca-ilha-da-gigoia-video.mp4"
    ],
    "titulo": "Pantanal Carioca - Ilha da Gigóia",
    "categoria": "praia/ilha",
    "tagline": "#pantanalcarioca",
    "descricao": "",
    "preco": "R$ 70,00",
    "duracao": "2 horas",
    "inclusos": [
      "barco",
      "guia"
    ],
    "imagens": [
      "assets/passeios/pantanal-carioca-ilha-da-gigoia/ilha_da_gigoia_by_diego_baravelli.jpg"
    ],
    "naoInclusos": [
      "refeições"
    ],
    "disponibilidade": {
      "dias": [
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "sab",
        "dom"
      ],
      "vagas": 4,
      "bloqueios": [
        "2026-12-31",
        "2027-01-01"
      ]
    }
  }
];

// ============================================================
// 4. FUNÇÕES EXISTENTES (mantidas para compatibilidade)
// ============================================================
PACOTES.forEach(function (p) {
  var m = (p.preco || '').match(/([\d.]+),(\d{2})/);
  p.precoNumerico = m ? parseInt(m[1].replace(/\./g, ''), 10) : null;
  p.precoDisplay = p.preco ? p.preco : 'Sob consulta';
  var cat = CATEGORIAS[p.categoria] || { label: p.categoria, icon: '📍', img: '' };
  p.categoriaLabel = typeof cat.label === 'object' ? cat.label['pt'] : cat.label;
  p.categoriaIcon = cat.icon;
  p.categoriaImg = cat.img || '';
  p.imagemCapa = (p.imagens && p.imagens[0]) || '';
});

function getPacoteById(id) {
  return PACOTES.find(function (p) { return p.id === id; });
}

function getExpedicaoById(expId) {
  for (var i = 0; i < PACOTES.length; i++) {
    if (PACOTES[i].expedicoes) {
      for (var j = 0; j < PACOTES[i].expedicoes.length; j++) {
        if (PACOTES[i].expedicoes[j].id === expId) {
          return { expedicao: PACOTES[i].expedicoes[j], pacote: PACOTES[i] };
        }
      }
    }
  }
  return null;
}

function pacotesDoSite() {
  // Site do parceiro trata so do Rio: exclui categorias sem operacao aqui (ex.: natureza/Amazonia)
  var EXCLUIR_CATEGORIAS = ['natureza'];
  return PACOTES.filter(function(p){ return EXCLUIR_CATEGORIAS.indexOf(p.categoria) === -1; });
}

