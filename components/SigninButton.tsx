'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoutIcon from '../public/assets/logouticon.png';
import styles from './AuthButtons.module.scss';

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className={styles.authenticatedContainer}>
        <p className={styles.userName}>
          <Link href="/UserPost">LOGGED IN AS: {session.user.name}</Link>
        </p>
        <button onClick={() => signOut()} className={styles.Buttons}>
          <Image src={logoutIcon} alt="Logout" className={styles.logoutIcon} />
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className={styles.Buttons}>
      Sign in
    </button>
  );
};

export default SigninButton;
