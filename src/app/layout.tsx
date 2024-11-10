import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from './components/navbar';
import Footer from './components/footer';

const manrope = Manrope({
  subsets: ['latin'],
  weight: [ '200', '300', '400', '500', '600', '700'],
  variable: '--font-geist-sans',
});


export const metadata: Metadata = {
  title: 'Boldo',
  description: 'Technical Assessment | TTT - Frontend Developer - Design Implementation Test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
