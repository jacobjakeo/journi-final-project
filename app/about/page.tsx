import React from 'react';
import styles from './about.module.scss';

const NewsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading1}>Journi</h1>
        <p className={styles.para1}>
          Journi is my final project at the UpLeveled Web Development Bootcamp.
          It is a fullstack app, with the front-end built on Next.js, database
          running on SQLite (Prisma), and server running on Express.
        </p>
        <p className={styles.para1}>
          I'm Jakub Oksa, a fullstack web developer based in Vienna, Austria.
          Journi is a passion project of mine, as traveling and exploring
          beautiful boutique hotels are my favorite things to do. I am currently
          looking for exciting positions in the UI/UX or front-end field. If you
          are interested in working with me, please get in touch!
        </p>
        <p className={styles.para1}>
          <a href="https://www.linkedin.com/in/jakub-okša-27138a19b/">
            Let's Talk!
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsPage;
