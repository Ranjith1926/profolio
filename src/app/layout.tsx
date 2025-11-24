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
  title: 'S Ranjith Kumar - Software Engineer',
  description:
    'Portfolio of S Ranjith Kumar - Software Engineer specializing in React.js, Next.js, and React Native. Building scalable web & mobile applications with 4+ years of experience.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'S Ranjith Kumar - Software Engineer',
    description:
      'Portfolio of S Ranjith Kumar - Software Engineer specializing in React.js, Next.js, and React Native.',
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
