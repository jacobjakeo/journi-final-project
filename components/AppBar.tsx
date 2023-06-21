import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './AppBar.module.scss';
import RegisterButton from './RegisterButton';
import SigninButton from './SigninButton';

const AppBar = () => {
  return (
    <div>
      <header className={styles.appBar}>
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href="/">
                <Image
                  src="/../public/assets/mainlogo.png"
                  width={50}
                  height={50}
                  alt="Home button in the style of the Journi logo"
                />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/hotels">Explore Hotels</Link>
            </li>
          </ul>
          <div className={styles.authButtons}>
            <SigninButton />
            <RegisterButton />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AppBar;
