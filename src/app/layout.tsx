import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://camtek.kw'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
