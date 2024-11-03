import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/sidebar';

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
    <html lang='en'>
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
        <Sidebar></Sidebar>

        {children}
      </body>
    </html>
  );
}