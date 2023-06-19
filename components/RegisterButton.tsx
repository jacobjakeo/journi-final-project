'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './AuthButtons.module.scss';

const RegisterButton = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleRegisterClick = () => {
    router.push('/register');
  };

  if (session && session.user) {
    return null; // User is logged in, return null to hide the Register button
  }

  return (
    <button onClick={handleRegisterClick} className={styles.Buttons}>
      Register
    </button>
  );
};

export default RegisterButton;
