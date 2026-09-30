import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farmácias Santa Luzia | KM 60 e Morrotes, Tubarão - SC",
  description: "Farmácias Santa Luzia em Tubarão - unidades em KM 60 e Morrotes. Entrega facilitada e atendimento humanizado. Fale agora pelo WhatsApp.",
  metadataBase: new URL("https://santaluziafarmacias.com.br/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Farmácias Santa Luzia",
    description: "Farmácias Santa Luzia em Tubarão - unidades em KM 60 e Morrotes.",
    url: "/",
    siteName: "Farmácias Santa Luzia",
    images: [
      {
        url: "/img/og-cover.jpg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmácias Santa Luzia",
    description: "Farmácias Santa Luzia em Tubarão - unidades em KM 60 e Morrotes. Entrega facilitada e atendimento humanizado.",
    images: ["/img/og-cover.jpg"],
  },
  icons: {
    icon: "/img/favicon.png",
  }
};

const jsonLdKM60 = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Farmácias Santa Luzia - Unidade KM 60",
  "image": "https://santaluziafarmacias.com.br/img/fachada-unidade-1.jpg",
  "url": "https://santaluziafarmacias.com.br/#unidades",
  "telephone": "+5548991565677",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entrega" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aferição de Pressão Arterial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aplicação de Injetáveis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aplicação de Brincos" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atendimento Farmacêutico" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retirada na Loja" } }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/farmaciassantaluzia/",
    "https://www.facebook.com/santaluziatubarao/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rodovia Norberto Brunato, 4598 - KM 60",
    "addressLocality": "Tubarão",
    "addressRegion": "SC",
    "postalCode": "88702-803",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-28.4680134",
    "longitude": "-49.0714428"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "13:30",
      "closes": "20:00"
    }
  ]
};

const jsonLdMorrotes = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Farmácias Santa Luzia - Unidade Morrotes",
  "image": "https://santaluziafarmacias.com.br/img/fachada-unidade-2.jpg",
  "url": "https://santaluziafarmacias.com.br/#unidades",
  "telephone": "+5548974008106",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Entrega" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aferição de Pressão Arterial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aplicação de Injetáveis" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aplicação de Brincos" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Atendimento Farmacêutico" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retirada na Loja" } }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/farmaciassantaluzia/",
    "https://www.facebook.com/santaluziatubarao/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua São João, 398 - Morrotes",
    "addressLocality": "Tubarão",
    "addressRegion": "SC",
    "postalCode": "88704-100",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-28.4802839",
    "longitude": "-49.0279656"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "12:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "13:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "As Farmácias Santa Luzia fazem entrega em domicílio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A entrega é feita por motoboy terceirizado nas regiões atendidas pelas unidades KM 60 e Morrotes, em Tubarão. Fale com a gente pelo WhatsApp pra confirmar prazo e disponibilidade pro seu endereço."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês aceitam receita controlada (tarja preta)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, aceitamos receitas de medicamentos controlados desde que apresentadas dentro da validade e nos moldes exigidos pela legislação vigente (receituário azul ou amarelo, conforme o caso)."
      }
    },
    {
      "@type": "Question",
      "name": "Quais convênios são aceitos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabalhamos com o convênio Vida Cotidiana nas duas unidades. Em caso de dúvida sobre cobertura de um medicamento específico, fale com a gente pelo WhatsApp antes de ir até a loja."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o horário de funcionamento das unidades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A unidade KM 60 funciona de segunda a sábado, das 8h às 12h e das 13h30 às 20h. A unidade Morrotes funciona de segunda a sexta, das 8h às 12h e das 13h30 às 18h30, e aos sábados das 8h às 12h."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdKM60) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMorrotes) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
