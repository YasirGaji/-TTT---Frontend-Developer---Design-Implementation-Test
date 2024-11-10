import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './providers';
import Navbar from './components/navbar';
import Footer from './components/footer';

const geistSans = localFont({
  src: './fonts/Manrope-Bold.ttf',
  variable: '--font-geist-sans',
  weight: '700', 
});

const geistMono = localFont({
  src: './fonts/Manrope-Medium.ttf',
  variable: '--font-geist-mono',
  weight: '500', 
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
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
