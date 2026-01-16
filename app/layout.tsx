import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Norwood Atlas - Software Design, Engineering & Marketing',
    template: '%s | Norwood Atlas',
  },
  description: 'Norwood Atlas builds software that ships. We combine product design, engineering, and growth marketing to help startups and teams launch faster.',
  keywords: ['software development', 'product design', 'UX design', 'growth marketing', 'startup development'],
  authors: [{ name: 'Norwood Atlas' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://norwoodatlas.com',
    siteName: 'Norwood Atlas',
    title: 'Norwood Atlas - Software Design, Engineering & Marketing',
    description: 'Norwood Atlas builds software that ships. We combine product design, engineering, and growth marketing to help startups and teams launch faster.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norwood Atlas - Software Design, Engineering & Marketing',
    description: 'Norwood Atlas builds software that ships. We combine product design, engineering, and growth marketing to help startups and teams launch faster.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Norwood Atlas',
    description: 'Software design, engineering, and marketing company',
    url: 'https://norwoodatlas.com',
    logo: 'https://norwoodatlas.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/norwoodatlas',
      'https://github.com/norwoodatlas',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@norwoodatlas.com',
      contactType: 'Customer Service',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
