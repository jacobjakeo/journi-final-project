import React from 'react';
import styles from './news.module.scss';

const NewsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading1}>COMING SOON</h1>
        <p className={styles.para1}>
          Read about the happenings and openings inside the hotel industry.
        </p>
      </div>
    </div>
  );
};

export default NewsPage;
