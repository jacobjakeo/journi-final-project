import Link from 'next/link';
import React from 'react';
import RegisterButton from './RegisterButton';
import SigninButton from './SigninButton';

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href="/">
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href="/UserPost">
        User Page
      </Link>
      <SigninButton />
      <RegisterButton />
    </header>
  );
};

export default AppBar;
