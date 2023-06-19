'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import styles from './AuthButtons.module.scss';

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className={styles.authenticatedContainer}>
        <p className={styles.userName}>{session.user.name}</p>
        <button onClick={() => signOut()} className={styles.Buttons}>
          Sign out
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
