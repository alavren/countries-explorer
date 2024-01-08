import { Metadata } from 'next';
import { getServerSession } from "next-auth";
import * as React from 'react';

import '@/styles/globals.css';

import Nav from "@/components/Nav";

import SessionProvider from "../../providers/SessionProvider";

export const metadata: Metadata = {
  title: 'Countries explorer',
  description: 'Simple countries explorer',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Nav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
