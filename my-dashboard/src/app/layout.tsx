import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // o html precisa estar englobando tudo

    <html lang='en'>
      {/* embaixo do body começa o que voce quer que apareça na tela, inclusive o AuthProvider do Context */}

      <body
        className={cn(
          'min-h-screen',
          'bg-background',
          'text-foreground',
          'font-sans',
          'antialiased',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
