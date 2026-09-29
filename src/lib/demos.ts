// ============================================================
// Dados dos 3 sites demo — conteúdo realista baseado na
// pesquisa de mercado (Sintra/Amadora, preços praticados em PT)
// ============================================================

export type Servico = {
  nome: string;
  desc: string;
  preco: string;
  destaque?: boolean;
};

export type Avaliacao = {
  nome: string;
  inicial: string;
  texto: string;
  data: string;
  servico: string;
};

export type DemoId = "bella" | "nova" | "glow" | "bloom";

export const waLink = (phone: string, msg: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

// ------------------------------------------------------------
// DEMO 1 — Salão Bella Vida (Agualva-Cacém)
// ------------------------------------------------------------
export const bella = {
  nome: "Salão Bella Vida",
  zona: "Agualva-Cacém",
  slogan: "Realçamos a sua beleza natural",
  intro:
    "Salão de beleza acolhedor no coração do Cacém. Cortes, cor, tratamentos capilares e nail design — com marcação rápida pelo WhatsApp e sem esperas.",
  rating: "4,8",
  numAvaliacoes: "127",
  waPhone: "351912345678",
  waMsg: "Olá! Gostaria de marcar um horário no Salão Bella Vida.",
  telefone: "+351 912 345 678",
  email: "ola@salonbellavida.pt",
  morada: "Av. Dr. Francisco Sá Carneiro 42, Loja B",
  codigoPostal: "2735-105 Agualva-Cacém",
  mapaQuery: "Av. Dr. Francisco Sá Carneiro, Agualva-Cacém, Portugal",
  horario: [
    { dias: "Segunda a Sexta", horas: "09:00 – 19:00" },
    { dias: "Sábado", horas: "09:00 – 17:00" },
    { dias: "Domingo", horas: "Fechado" },
  ],
  stats: [
    { valor: "12+", label: "anos de experiência" },
    { valor: "3.500+", label: "clientes atendidas" },
    { valor: "4,8★", label: "média no Google" },
    { valor: "5", label: "especialistas" },
  ],
  servicosCabelo: [
    {
      nome: "Corte + Escova",
      desc: "Lavagem, corte à medida da estrutura do rosto e finalização com escova.",
      preco: "€15",
    },
    {
      nome: "Coloração Completa",
      desc: "Cor uniforme e cobertura total de brancos, com produtos profissionais.",
      preco: "€35",
    },
    {
      nome: "Balayage / Mechas",
      desc: "Técnicas modernas para um efeito natural, luminoso e de manutenção fácil.",
      preco: "desde €45",
    },
    {
      nome: "Hidratação Profunda",
      desc: "Tratamento intensivo de reparação para cabelo seco, quebradiço ou com química.",
      preco: "€20",
    },
  ] as Servico[],
  servicosEstetica: [
    {
      nome: "Manicure",
      desc: "Limpeza, modelação das cutículas e verniz. Gel apenas +€10.",
      preco: "€10",
    },
    {
      nome: "Pedicure Completa",
      desc: "Cuidado completo dos pés, com esfoliação e verniz incluído.",
      preco: "€13",
    },
    {
      nome: "Depilação a Cera",
      desc: "Rosto e corpo, com cera morna premium. Zonas a partir de.",
      preco: "desde €5",
    },
    {
      nome: "Penteados & Eventos",
      desc: "Penteado para casamentos, festas e ocasiões especiais. Inclui prova.",
      preco: "desde €20",
    },
  ] as Servico[],
  sobre:
    "O Bella Vida nasceu em 2014 com uma ideia simples: um salão de bairro com qualidade de salão de autor. Hoje somos uma equipa de cinco especialistas em cabelo, unhas e estética — e a maioria das nossas clientes nos acompanha desde o primeiro dia.",
  sobrePontos: [
    "Produtos profissionais certificados (Wella, Kérastase, OPI)",
    "Especialistas dedicadas por área — cabelo, unhas e estética",
    "Marcação pelo WhatsApp, sem esperas nem chamadas perdidas",
    "Higiene rigorosa e materiais desinfetados a cada atendimento",
  ],
  avaliacoes: [
    {
      nome: "Marta S.",
      inicial: "M",
      texto:
        "Fiz balayage e adorei o resultado! A Sofia percebeu logo o que eu queria, sem exagerar no descolorante. Atendimento 5 estrelas.",
      data: "há 2 semanas",
      servico: "Balayage",
    },
    {
      nome: "Cátia R.",
      inicial: "C",
      texto:
        "Salão muito acolhedor e sempre impecável. Marquei pelo WhatsApp em segundos, cheguei à hora marcada e não esperei nada. Recomendo!",
      data: "há 1 mês",
      servico: "Manicure",
    },
    {
      nome: "Andreia F.",
      inicial: "A",
      texto:
        "Melhor corte de Cacém, sem dúvida. Preços justos, simpatia enorme e a minha hidratação durou semanas. Já é o meu salão de confiança.",
      data: "há 3 semanas",
      servico: "Corte + Hidratação",
    },
  ] as Avaliacao[],
};

// ------------------------------------------------------------
// DEMO 2 — Barbearia Nova Era (Amadora)
// ------------------------------------------------------------
export const nova = {
  nome: "Barbearia Nova Era",
  zona: "Amadora",
  slogan: "O teu fade. A nossa assinatura.",
  intro:
    "Barbearia premium no centro da Amadora. Fades à máquina, barba na navalha com toalha quente e atendimento sem esperas — marca pelo WhatsApp e chega à tua hora.",
  rating: "4,9",
  numAvaliacoes: "89",
  waPhone: "351913456789",
  waMsg: "Olá! Gostaria de marcar um horário na Barbearia Nova Era.",
  telefone: "+351 913 456 789",
  email: "marcacoes@novaerabarbearia.pt",
  morada: "Av. Miguel Bombarda 88, Loja 2",
  codigoPostal: "2700-317 Amadora",
  mapaQuery: "Av. Miguel Bombarda, Amadora, Portugal",
  horario: [
    { dias: "Segunda a Sábado", horas: "09:30 – 20:00" },
    { dias: "Domingo", horas: "Fechado" },
  ],
  stats: [
    { valor: "8", label: "anos de atividade" },
    { valor: "2.000+", label: "clientes fiéis" },
    { valor: "4,9★", label: "média no Google" },
    { valor: "3", label: "barbeiros pro" },
  ],
  servicos: [
    {
      nome: "Corte Clássico",
      desc: "Corte à tesoura ou máquina, lavagem e styling final.",
      preco: "€12",
    },
    {
      nome: "Fade / Degradê",
      desc: "Fade à máquina com acabamentos à navalha — a nossa especialidade.",
      preco: "€14",
    },
    {
      nome: "Combo Corte + Barba",
      desc: "O favorito da casa: corte completo + barba na navalha em 45 minutos.",
      preco: "€20",
      destaque: true,
    },
    {
      nome: "Barba na Navalha",
      desc: "Toalha quente, navalha clássica e balm calmante final.",
      preco: "€10",
    },
    {
      nome: "Corte Criança",
      desc: "Até 10 anos, com paciência e estilo igual ao dos grandes.",
      preco: "€9",
    },
    {
      nome: "Pigmentação de Barba",
      desc: "Preenchimento e definição para barba com falhas.",
      preco: "€8",
    },
    {
      nome: "Sobrancelha Masculina",
      desc: "Limpeza e definição na navalha, sem exageros.",
      preco: "€5",
    },
  ] as Servico[],
  sobre:
    "A Nova Era abriu em 2018 com uma missão: trazer a cultura de barbearia premium à Amadora sem preços de Lisboa. Café por conta da casa, música no ponto certo e barbeiros que tratam cada corte como um cartão de visita.",
  sobrePontos: [
    "Barbeiros com mais de 10 anos de experiência",
    "Materiais esterilizados a cada cliente — sem exceções",
    "Walk-ins aceites, mas com marcação não esperas nada",
    "Café ou água por conta da casa, sempre",
  ],
  avaliacoes: [
    {
      nome: "Ricardo M.",
      inicial: "R",
      texto:
        "Melhor fade da Amadora, sem discussão. Marco pelo WhatsApp, chego à hora e saio afiado. Zero esperas, zero conversa à toa.",
      data: "há 1 semana",
      servico: "Fade",
    },
    {
      nome: "Tiago L.",
      inicial: "T",
      texto:
        "A barba na navalha com toalha quente é outro nível. Ambiente top, atendimento impecável e o preço é honesto para a qualidade.",
      data: "há 2 semanas",
      servico: "Combo Corte + Barba",
    },
    {
      nome: "Filipe C.",
      inicial: "F",
      texto:
        "Levo o meu filho para cortar os dois ao sábado. O combo corte+barba vale cada cêntimo e o miúdo já nem quer outro sítio.",
      data: "há 1 mês",
      servico: "Combo + Corte Criança",
    },
  ] as Avaliacao[],
};

// ------------------------------------------------------------
// DEMO 3 — Studio Glow (Queluz)
// ------------------------------------------------------------
export const glow = {
  nome: "Studio Glow",
  zona: "Queluz",
  slogan: "Estética avançada, resultados visíveis.",
  intro:
    "Tratamentos de pele, depilação a laser e bem-estar em Queluz. Protocolos personalizados após avaliação gratuita — tecnologia certificada e equipa especializada.",
  rating: "5,0",
  numAvaliacoes: "63",
  waPhone: "351914567890",
  waMsg: "Olá! Gostaria de marcar uma avaliação no Studio Glow.",
  telefone: "+351 914 567 890",
  email: "ola@studioglow.pt",
  morada: "Rua Conde de Almeida Amaral 5, 1.º Esq.",
  codigoPostal: "2745-055 Queluz",
  mapaQuery: "Rua Conde de Almeida Amaral, Queluz, Portugal",
  horario: [
    { dias: "Segunda a Sexta", horas: "10:00 – 20:00" },
    { dias: "Sábado", horas: "09:00 – 17:00" },
    { dias: "Domingo", horas: "Fechado" },
  ],
  stats: [
    { valor: "6", label: "anos de estúdio" },
    { valor: "1.800+", label: "tratamentos feitos" },
    { valor: "5,0★", label: "média no Google" },
    { valor: "100%", label: "avaliação inicial grátis" },
  ],
  tratamentos: [
    {
      nome: "Limpeza de Pele Profunda",
      desc: "Esfoliação, extração, máscara e hidratação — para uma pele renovada.",
      preco: "€35",
    },
    {
      nome: "Depilação a Laser",
      desc: "Tecnologia de diodo, segura para todos os fototipos. Preço por zona.",
      preco: "desde €25",
    },
    {
      nome: "Extensões de Cílios",
      desc: "Volume russo ou clássico, com efeito natural e duradouro.",
      preco: "€35",
    },
    {
      nome: "Microblading de Sobrancelhas",
      desc: "Desenho personalizado fio a fio, com retoque incluído aos 30 dias.",
      preco: "€120",
    },
    {
      nome: "Peeling Químico",
      desc: "Renovação celular para manchas, cicatrizes de acne e textura irregular.",
      preco: "€45",
    },
    {
      nome: "Massagem Relaxante",
      desc: "Sessão de 60 minutos com óleos essenciais e pressão personalizada.",
      preco: "€40",
    },
    {
      nome: "Lash Lifting + Tinting",
      desc: "Cílios naturais curvados e pigmentados, efeito que dura 6–8 semanas.",
      preco: "€30",
    },
    {
      nome: "Pacote Glow: Limpeza + Peeling",
      desc: "Os dois tratamentos mais pedidos, no mesmo dia, com desconto de pacote.",
      preco: "€69",
      destaque: true,
    },
  ] as Servico[],
  passos: [
    {
      num: "1",
      titulo: "Marca pelo WhatsApp",
      desc: "Diz-nos o que te preocupa e recebes a disponibilidade em minutos.",
    },
    {
      num: "2",
      titulo: "Avaliação gratuita",
      desc: "Analisamos a tua pele ou zonas a tratar e recomendamos o protocolo ideal.",
    },
    {
      num: "3",
      titulo: "Plano de tratamento",
      desc: "Sessões agendadas à tua medida, com evolução visível desde a primeira.",
    },
  ],
  sobre:
    "O Studio Glow é um estúdio de estética avançada em Queluz, criado por duas técnicas com formação em dermatologia estética. Trabalhamos apenas com tecnologia certificada e produtos dermatologicamente testados — porque resultados duradouros começam com segurança.",
  sobrePontos: [
    "Protocolos personalizados após avaliação da pele",
    "Tecnologia certificada (laser diodo, radiofrequência)",
    "Produtos dermatologicamente testados",
    "Higiene hospitalar e material esterilizado",
  ],
  avaliacoes: [
    {
      nome: "Inês M.",
      inicial: "I",
      texto:
        "Fiz microblading e fiquei sem palavras — natural, simétrico e perfeito. A clínica é impecável e explicaram tudo com calma.",
      data: "há 3 semanas",
      servico: "Microblading",
    },
    {
      nome: "Sara D.",
      inicial: "S",
      texto:
        "A depilação a laser mudou a minha pele. São super atentas à avaliação antes de cada sessão e os resultados apareceram na 3.ª sessão.",
      data: "há 1 mês",
      servico: "Depilação a Laser",
    },
    {
      nome: "Paula N.",
      inicial: "P",
      texto:
        "A limpeza de pele é incrível, saí com outra cara. Ambiente relaxante, equipa muito profissional e o pacote Glow vale muito a pena.",
      data: "há 2 semanas",
      servico: "Pacote Glow",
    },
  ] as Avaliacao[],
};

// ------------------------------------------------------------
// DEMO 4 / CLIENTE REAL — BLOOM by Ana (Póvoa de Varzim)
// Ateliê de arte floral — casamentos, eventos e flores preservadas
// ------------------------------------------------------------
export const bloom = {
  nome: "BLOOM by Ana",
  zona: "Póvoa de Varzim",
  slogan: "Flores que contam histórias",
  intro:
    "Ateliê de arte floral em Póvoa de Varzim. Propostas florais personalizadas para casamentos, eventos e momentos especiais — criadas flor a flor, com o mesmo carinho de sempre.",
  instagram: "@bloomby_anaportugal_",
  instagramUrl: "https://www.instagram.com/bloomby_anaportugal_/",
  waPhone: "351919113667",
  waMsg: "Olá Ana! Gostaria de pedir uma proposta floral.",
  telefone: "+351 919 113 667",
  morada: "Rua Tenente Valadim, n.º 82",
  codigoPostal: "4490-585 Póvoa de Varzim",
  mapaQuery: "Rua Tenente Valadim 82, Póvoa de Varzim, Portugal",
  badges: [
    "Arte floral personalizada",
    "Casamentos & eventos",
    "Flores frescas & preservadas",
    "Póvoa de Varzim",
  ],
  servicos: [
    {
      nome: "Casamentos",
      desc: "Conceitos florais completos — cerimónia, mesa dos noivos e detalhes que fazem o dia.",
      preco: "sob proposta",
    },
    {
      nome: "Ramos de Noiva",
      desc: "Desenhados à medida da noiva, da primeira ideia à última flor.",
      preco: "sob proposta",
      destaque: true,
    },
    {
      nome: "Acessórios & Tiaras",
      desc: "Tiaras criadas flor a flor — delicadeza que se veste em cada momento.",
      preco: "sob proposta",
    },
    {
      nome: "Flores Preservadas",
      desc: "Arranjos que permanecem — eternal flowers for eternal moments.",
      preco: "sob proposta",
    },
    {
      nome: "Preservação de Buquê",
      desc: "Transforme o buquê do casamento numa recordação que dura para sempre.",
      preco: "sob proposta",
    },
    {
      nome: "Eventos & Momentos",
      desc: "Aniversários, batizados, homenagens e decoração floral para bolos.",
      preco: "sob proposta",
    },
    {
      nome: "Workshops",
      desc: "Experiências de arte floral no ateliê ou em instituições — cada participante cria e leva a sua própria peça.",
      preco: "sob proposta",
    },
  ] as Servico[],
  processo: [
    {
      num: "1",
      titulo: "Conversa inicial",
      desc: "Conte a ideia, a data e o estilo — pelo WhatsApp ou Instagram.",
    },
    {
      num: "2",
      titulo: "Proposta personalizada",
      desc: "Recebe uma proposta pensada ao pormenor e ajustada ao seu orçamento.",
    },
    {
      num: "3",
      titulo: "Criação flor a flor",
      desc: "Cada peça é feita à mão no ateliê, com flores escolhidas para si.",
    },
    {
      num: "4",
      titulo: "Entrega & montagem",
      desc: "Levamos e montamos tudo no dia, para não se preocupar com nada.",
    },
  ],
  sobre:
    "A Bloom by Ana tem uma nova casa na Rua Tenente Valadim — um espaço pensado com todo o cuidado para receber, inspirar e continuar a fazer parte dos momentos mais especiais de cada cliente. Cada detalhe foi preparado com amor, para que cada visita seja tão acolhedora quanto um ramo oferecido com o coração.",
  sobrePontos: [
    "Propostas florais 100% personalizadas",
    "Flores frescas e preservadas",
    "Acompanhamento próximo, da ideia à entrega",
    "Experiência em casamentos e eventos",
  ],
  citacao: "Continuamos a criar flores que contam histórias — que celebram o amor, a amizade, a gratidão e todos os pequenos momentos.",
  trabalhos: [
    {
      src: "/images/bloom/ig_p1.jpg",
      alt: "Arranjo floral personalizado com rosas brancas e flores rosas",
      legenda: "Arranjo personalizado",
    },
    {
      src: "/images/bloom/trab_tiara.jpg",
      alt: "Tiara de flores preservadas em tom rosa criada pela Bloom by Ana",
      legenda: "Tiara de flores preservadas",
    },
    {
      src: "/images/bloom/trab_coroa_buque.jpg",
      alt: "Coroa floral e buquê de flores preservadas brancas para noiva",
      legenda: "Coroa & buquê de noiva",
    },
    {
      src: "/images/bloom/trab_quadro.jpg",
      alt: "Quadro floral à medida com peças preservadas em moldura",
      legenda: "Quadro floral à medida",
    },
  ],
};

export const demos = {
  bella,
  nova,
  glow,
  bloom,
};
