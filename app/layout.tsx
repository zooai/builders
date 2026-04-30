import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zoo Builders',
  description: 'Build decentralized AI research applications on Zoo Network.',
  openGraph: {
    title: 'Zoo Builders',
    description: 'Build decentralized AI research applications on Zoo Network.',
    url: 'https://zoo.builders',
    siteName: 'Zoo Builders',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
