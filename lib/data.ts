export type UnitId = 1 | 2;

export interface Unit {
  id: UnitId;
  name: string;
  address: string;
  cep: string;
  phone: string; // WhatsApp number
  mapUrl: string; // Google Maps directions link
  mapEmbedSrc: string; // Google Maps iframe src
  reviewUrl: string; // Google Reviews link
  instagramUrl: string;
  facebookUrl: string;
}

export const UNITS: Record<UnitId, Unit> = {
  1: {
    id: 1,
    name: "Unidade KM 60",
    address: "Rodovia Norberto Brunato, 4598 - KM 60\nTubarão – SC",
    cep: "88702-803",
    phone: "5548991565677",
    mapUrl: "https://maps.google.com/?q=Rodovia+Norberto+Brunato,+4598+-+KM+60,+Tubarão+-+SC,+88702-803",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.382894155979!2d-49.0714428!3d-28.4680134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95216990792a15d7%3A0xda2c3dab99eddd39!2sFarm%C3%A1cia%20Santa%20Luzia!5e0!3m2!1spt-BR!2sbr!4v1787172151916!5m2!1spt-BR!2sbr",
    reviewUrl: "https://g.page/r/CRVNVsoFMlP9EBI/review",
    instagramUrl: "https://www.instagram.com/farmaciassantaluzia/",
    facebookUrl: "https://www.facebook.com/santaluziatubarao/",
  },
  2: {
    id: 2,
    name: "Unidade Morrotes",
    address: "Rua São João, 398 - Morrotes\nTubarão – SC",
    cep: "88704-100",
    phone: "5548974008106",
    mapUrl: "https://maps.google.com/?q=Rua+São+João,+398+-+Morrotes,+Tubarão+-+SC,+88704-100",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.975518981677!2d-49.02796560000004!3d-28.4802839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95214289b864e151%3A0xfd533205ca564d15!2sFarmacias%20Santa%20Luzia!5e0!3m2!1spt-BR!2sbr!4v1787172070427!5m2!1spt-BR!2sbr",
    reviewUrl: "https://g.page/r/CRVNVsoFMlP9EBI/review",
    instagramUrl: "https://www.instagram.com/farmaciassantaluzia/",
    facebookUrl: "https://www.facebook.com/santaluziatubarao/",
  }
};

export const SERVICES = [
  {
    title: "Entrega",
    description: "Receba seus medicamentos e produtos de beleza no conforto da sua casa.",
    icon: "delivery" // we'll use a type or map in the component
  },
  {
    title: "Aferição de Pressão Arterial",
    description: "Acompanhe seus níveis de pressão com auxílio farmacêutico e orientações.",
    icon: "pressure",
    free: true
  },
  {
    title: "Aplicação de Injetáveis",
    description: "Administração segura de medicamentos injetáveis com receita médica válida, realizada por nossos farmacêuticos e atendentes.",
    icon: "injection"
  },
  {
    title: "Aplicação de Brincos",
    description: "Perfuração rápida, segura e higiênica de orelhas para bebês, crianças e adultos.",
    icon: "earring"
  },
  {
    title: "Atendimento Farmacêutico",
    description: "Esclarecimento de dúvidas sobre receitas, uso correto de medicamentos e interações medicamentosas.",
    icon: "pharmacy",
    free: true
  },
  {
    title: "Retirada na Loja",
    description: "Compre por mensagem ou telefone e retire seu pedido embalado diretamente no balcão.",
    icon: "store",
    free: true
  }
];

export const WHY_US = [
  {
    title: "Entrega rápida",
    description: "Receba no conforto da sua casa.",
    icon: "delivery"
  },
  {
    title: "Convênios",
    description: "Trabalhamos com o convênio",
    linkText: "Vida Cotidiana",
    linkUrl: "https://www.vidacotidiana.com.br/parceiro/farmacia-santa-luzia-2/",
    icon: "card"
  },
  {
    title: "Atendimento humano",
    description: "Farmacêuticos disponíveis pra tirar sua dúvida.",
    icon: "smile"
  }
];

export type DaySchedule = {
  day: string;
  ranges: [number, number][]; // [startMinutes, endMinutes]
  label: string;
};

export const SCHEDULE: Record<UnitId, DaySchedule[]> = {
  1: [
    {
      day: "Segunda a sábado",
      ranges: [
        [480, 720], // 08:00 - 12:00
        [810, 1200], // 13:30 - 20:00
      ],
      label: "08h-12h e 13h30-20h",
    },
    { day: "Domingo", ranges: [], label: "Fechado" },
  ],
  2: [
    {
      day: "Segunda a sexta",
      ranges: [
        [480, 720],
        [810, 1110], // 13:30 - 18:30
      ],
      label: "08h-12h e 13h30-18h30",
    },
    { day: "Sábado", ranges: [[480, 720]], label: "08h-12h" },
    { day: "Domingo", ranges: [], label: "Fechado" },
  ],
};

export interface Testimonial {
  name: string;
  unit: UnitId;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Maria Helena Nunes de Farias", unit: 1, rating: 5, text: "Atendimento nota 10 — farmacêutica muito atenciosa e prestativa." },
  { name: "Anderson Teixeira", unit: 1, rating: 5, text: "" },
  { name: "andrea silva", unit: 1, rating: 5, text: "Super indico 👏👏 atendimento top, e preços ótimos👏" },
  { name: "Bruna Nunes Fernandes", unit: 1, rating: 5, text: "A Farmácia Santa Luzia, é excelente não somente no atendimento e nos medicamentos de qualidade. Vai muito além disso, tudo é feito com amor e carinho em cada receita, o pedido sempre entregue com cuidado e excelência. Sou cliente e indico sempre aos meus familiares e colegas.❤️" },
  { name: "Shaiane Alves de Souza", unit: 1, rating: 5, text: "Atendimento nota 1.000 as meninas são muito atenciosas🥰" },
  { name: "Rosilene Souza", unit: 1, rating: 5, text: "" },
  { name: "Renata Souza Freitas", unit: 1, rating: 5, text: "Ótimo atendimento, as meninas são super prestativas e atenciosas. Preço muito bom" },
  { name: "Paula Firmino Luciano", unit: 1, rating: 5, text: "Atendimento incrivel" },
  { name: "Maria Aparecida Da silva vieira", unit: 1, rating: 5, text: "Uma das melhores melhor Farmácia, excelente atendimento e preciso!🥰" },
  { name: "Maristela Jardim", unit: 1, rating: 5, text: "" },
  { name: "maria cidinha", unit: 1, rating: 5, text: "As profissionais são competentes atenciosas . Com conhecimentos onde tenho confiança. Além da entrega a domicílio q agregou para ser uma excelente farmácia" },
  { name: "Giulia Grasiela", unit: 1, rating: 5, text: "Ótimo atendimento , são maravilhosas 🤌🏼" },
  { name: "Luiza Nogueira", unit: 1, rating: 5, text: "" },
  { name: "Suelen Bitencourt", unit: 1, rating: 5, text: "Ótimo atendimento meninas excelente" },
  { name: "Rosiane Firmino", unit: 1, rating: 5, text: "Ótimos preços, atendimento excelente e muita segurança. Super indico!" },
  { name: "Paulo ricardo leite", unit: 1, rating: 5, text: "Ótimo atendimento com ótimos preços." },
  { name: "Gabriel Tavares", unit: 1, rating: 5, text: "Preço acessível, e o melhor atendimento da região." }
];

export interface FaqItem {
  question: string;
  answerHtml: string; // contains html for links
}

export const FAQ: FaqItem[] = [
  {
    question: "As Farmácias Santa Luzia fazem entrega em domicílio?",
    answerHtml: "Sim. A entrega é feita por motoboy terceirizado nas regiões atendidas pelas unidades KM 60 e Morrotes, em Tubarão. Fale com a gente pelo WhatsApp pra confirmar prazo e disponibilidade pro seu endereço."
  },
  {
    question: "Vocês aceitam receita controlada (tarja preta)?",
    answerHtml: "Sim, aceitamos receitas de medicamentos controlados desde que apresentadas dentro da validade e nos moldes exigidos pela legislação vigente (receituário azul ou amarelo, conforme o caso)."
  },
  {
    question: "Quais convênios são aceitos?",
    answerHtml: "Trabalhamos com o convênio Vida Cotidiana nas duas unidades. Em caso de dúvida sobre cobertura de um medicamento específico, fale com a gente pelo WhatsApp antes de ir até a loja."
  },
  {
    question: "Qual o horário de funcionamento das unidades?",
    answerHtml: 'A unidade KM 60 funciona de segunda a sábado, das 8h às 12h e das 13h30 às 20h. A unidade Morrotes funciona de segunda a sexta, das 8h às 12h e das 13h30 às 18h30, e aos sábados das 8h às 12h. Confira os horários completos na seção <a href="#horario" class="text-brand-700 font-semibold underline">Horário de funcionamento</a>.'
  }
];
