import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import journiIcon from '../public/assets/mainlogo.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
