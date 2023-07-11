'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import styles from './UserProfile.module.scss';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Journi | Profile',
  description: 'Your profile page.',
};

const UserProfile = () => {
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
    // User is not logged in, handle accordingly
    return <div>Please log in to view this page.</div>;
  }

  const { user } = session;
  const createdAtYear = new Date(user.createdAt).getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profilePicture} />
        <div className={styles.profileInfo}>
          <div className={styles.username}>{user.name}</div>
          <div className={styles.email}>{user.email}</div>
          <div className={styles.status}>{createdAtYear}</div>
          <div className={styles.profileHead}>My Favorite Hotel</div>
          <p className={styles.text}>Le Yaca</p>
          <div className={styles.profileHead}>Last Visited Country</div>
          <p className={styles.text}>France</p>
          <div className={styles.profileHead}>Status</div>
          <p className={styles.text}>Looking for new recommendations!</p>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.statsContainer}>
        <h3 className={styles.statisticsHeading}>Journi Statistics</h3>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Hotels Visited</div>
            <div className={styles.statNumber}>5</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Countries Visited</div>
            <div className={styles.statNumber}>4</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Reviews Written</div>
            <div className={styles.statNumber}>3</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Stars Given</div>
            <div className={styles.statNumber}>10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
