import './globals.css'

export const metadata = {
  title: 'Transportes GEMA | Transporte de Carga Pesada Costa Rica',
  description: '⭐ Empresa familiar con +12 camiones. Transporte de contenedores 20-40-45 pies, carga refrigerada y químicos. Cobertura nacional zona atlántica y pacífica',
  keywords: 'transporte carga pesada costa rica, transporte contenedores, carga refrigerada, transporte químicos costa rica, transporte zona atlántica, transporte zona pacífica, contenedores 20 pies, contenedores 40 pies, contenedores 45 pies, transporte limón, transporte puntarenas',
  authors: [{ name: 'Transportes GEMA' }],
  creator: 'Transportes GEMA',
  publisher: 'Transportes GEMA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Transportes GEMA - Transporte de Carga Pesada Costa Rica',
    description: 'Empresa familiar con +12 años transportando carga pesada en Costa Rica. Contenedores, carga refrigerada y químicos certificados.',
    url: 'https://transportesgema.com',
    siteName: 'Transportes GEMA',
    locale: 'es_CR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Transportes GEMA - Transporte de Carga Pesada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transportes GEMA - Transporte de Carga Pesada',
    description: 'Transporte de carga pesada en Costa Rica. +12 años de experiencia.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://transportesgema.com',
  },
  verification: {
    google: 'PENDIENTE', // Agregar código de verificación de Google Search Console
  },
  category: 'business',
}

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Transportes GEMA',
    description: 'Empresa de transporte de carga pesada en Costa Rica con más de 12 años de experiencia',
    url: 'https://transportesgema.com',
    logo: 'https://transportesgema.com/images/logo.svg',
    image: 'https://transportesgema.com/images/og-image.jpg',
    telephone: '+506-8941-7464',
    email: 'olmanlr2238@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CR',
      addressLocality: 'Costa Rica',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Costa Rica',
    },
    serviceType: [
      'Transporte de Contenedores',
      'Transporte de Carga Refrigerada',
      'Transporte de Químicos',
      'Transporte de Carga Pesada',
      'Transporte Zona Atlántica',
      'Transporte Zona Pacífica',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Transporte',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transporte de Contenedores',
            description: 'Contenedores de 20, 40 y 45 pies con permisos para muelles y terminales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transporte de Carga Refrigerada',
            description: 'Cadena de frío controlada con equipos especializados',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transporte de Químicos',
            description: 'Certificaciones vigentes y personal capacitado',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+506-8941-7464',
      contactType: 'customer service',
      areaServed: 'CR',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      'https://wa.me/50689417464',
    ],
    knowsAbout: [
      'Transporte de carga',
      'Logística',
      'Contenedores',
      'Carga refrigerada',
      'Transporte de químicos',
    ],
    slogan: 'Empresa familiar con +12 años de experiencia',
    foundingDate: '2012',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '20',
    },
  }

  return (
    <html lang="es-CR">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect para Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
