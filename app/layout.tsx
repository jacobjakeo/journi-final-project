import { Inter } from 'next/font/google';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Providers from '../components/Providers';
import styles from './layout.module.scss';

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
      <body className={styles.body}>
        <Providers>
          <AppBar />
          <div className={styles['root-layout']}>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
