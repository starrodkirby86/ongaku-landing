import type { Metadata } from 'next';
import './globals.css';
import { Notable, Work_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'ongaku.io',
  description: 'Landing page for ongaku.io',
};

const notable = Notable({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const workSans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${notable.className} ${workSans.className} bg-amber-200`}>{children}</body>
    </html>
  );
}
