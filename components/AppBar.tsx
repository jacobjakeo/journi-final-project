import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import journiIcon from '../public/assets/journilogo.png';
import styles from './AppBar.module.scss';
import RegisterButton from './RegisterButton';
import SigninButton from './SigninButton';

const AppBar = () => {
  return (
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
                className={styles.logoImage}
              />
            </Link>
          </li>
        </ul>
        <Image src={journiIcon} alt="Journi" className={styles.journiIcon} />
        <div className={styles.authButtons}>
          <SigninButton />
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
