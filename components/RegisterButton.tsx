'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

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
    <button onClick={handleRegisterClick} className="your-button-styles">
      Register
    </button>
  );
};

export default RegisterButton;
