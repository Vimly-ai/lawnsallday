
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { BUSINESS_INFO } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} | Professional Lawn Care & Landscaping in Treasure Valley`,
    template: `%s | ${BUSINESS_INFO.name}`
  },
  description: BUSINESS_INFO.description,
  keywords: [
    'lawn care',
    'landscaping',
    'Nampa Idaho',
    'Boise Idaho',
    'Meridian Idaho',
    'Caldwell Idaho',
    'Treasure Valley',
    'property management',
    'rental properties',
    'home builders',
    'lawn mowing',
    'fertilization',
    'sprinkler repair',
    'mulch delivery',
    'tree trimming'
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${BUSINESS_INFO.website}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `https://${BUSINESS_INFO.website}`,
    title: `${BUSINESS_INFO.name} | Professional Lawn Care & Landscaping in Treasure Valley`,
    description: BUSINESS_INFO.description,
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: '/lawnsalldaylogo.png',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Professional Lawn Care & Landscaping in Idaho`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} | Professional Lawn Care & Landscaping`,
    description: BUSINESS_INFO.description,
    images: ['/lawnsalldaylogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description,
  url: `https://${BUSINESS_INFO.website}`,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.zip,
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'Place',
      name: 'Nampa, Idaho',
    },
    {
      '@type': 'Place',
      name: 'Boise, Idaho',
    },
    {
      '@type': 'Place',
      name: 'Meridian, Idaho',
    },
    {
      '@type': 'Place',
      name: 'Caldwell, Idaho',
    },
    {
      '@type': 'Place',
      name: 'Treasure Valley, Idaho',
    },
  ],
  serviceType: [
    'Lawn Care',
    'Landscaping',
    'Lawn Mowing',
    'Fertilization',
    'Weed Control',
    'Sprinkler Repair',
    'Tree Trimming',
    'Mulch Delivery',
    'Property Management Services',
  ],
  priceRange: '$$',
  openingHours: 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
  image: '/lawnsalldaylogo.png',
  logo: '/lawnsalldaylogo.png',
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
