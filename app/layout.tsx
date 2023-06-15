import { Inter } from 'next/font/google';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Journi | Travel Community ',
  description: 'Your boutique travel community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <main className={styles.main1}>{children}</main>
    </html>
  );
}
