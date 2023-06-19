import React from 'react';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Journi | Profile ',
  description: 'Your profile page.',
};

const UserPostPage = () => {
  return <div>This is only visible for logged in users.</div>;
};

export default UserPostPage;
