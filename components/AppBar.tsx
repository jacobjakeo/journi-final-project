import Link from 'next/link';
import React from 'react';
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
              <p>Home Page</p>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/UserPost">
              <p>User Page</p>
            </Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <SigninButton />
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
