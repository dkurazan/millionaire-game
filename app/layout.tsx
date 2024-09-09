import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StoreProvider from './providers';
import './assets/globals.scss';

export const metadata: Metadata = {
  title: 'Millionaire',
  description: '"Who wants to be a millionaire?" game',
};

const inter = Inter({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
