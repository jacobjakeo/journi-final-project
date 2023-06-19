import React from 'react';
import styles from './UserPost.module.scss';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Journi | Profile',
  description: 'Your profile page.',
};

const UserPostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profilePicture} />
        <div className={styles.profileInfo}>
          <div className={styles.username}>John Doe</div>
          <div className={styles.status}>Active</div>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.statsContainer}>
        <h3 className={styles.statisticsHeading}>Traveller Statistics</h3>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Hotels Visited</div>
            <div className={styles.statNumber}>nA</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Countries Visited</div>
            <div className={styles.statNumber}>nA</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Reviews Written</div>
            <div className={styles.statNumber}>nA</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statHeading}>Stars Given</div>
            <div className={styles.statNumber}>nA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPostPage;
