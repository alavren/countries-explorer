import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: 'Countries explorer',
    template: '%s | Countries explorer',
  },
  description: 'Simple countries explorer',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
