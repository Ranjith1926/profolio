import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'S Ranjith Kumar | Software Engineer',
  description:
    'Software Engineer specializing in React, Next.js, and React Native. Built multi-tenant SaaS platforms, mobile apps, and enterprise web applications.',
  keywords: [
    'Software Engineer',
    'React.js',
    'Next.js',
    'React Native',
    'TypeScript',
    'Full Stack Developer',
    'SaaS',
    'Web Development',
  ],
  authors: [{ name: 'S Ranjith Kumar' }],
  creator: 'S Ranjith Kumar',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'S Ranjith Kumar | Software Engineer',
    description:
      'Software Engineer specializing in React, Next.js, and React Native. Built multi-tenant SaaS platforms, mobile apps, and enterprise web applications.',
    siteName: 'S Ranjith Kumar Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
