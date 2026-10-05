import '../globals.css';
import { Inter } from 'next/font/google';
import { i18n } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: 'Revolt Motors - Premium Electric Motorcycles',
  description: 'India\'s first AI-enabled electric motorcycle.',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    // We will await params dynamically in next 15 if needed, but for layout we can just pass the promise if we want, or resolve it.
    // In Next 15, `params` is a promise, so we should await it if we need it here, but we can pass `lang` down or just let the page handle it.
    // Wait, the Next 15 `layout` params should be awaited. Let's just use a simple html tag without lang for now, or make this async.
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
