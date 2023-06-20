import Image from 'next/image';
import React from 'react';
import homePagePhoto from '../public/assets/homepagephoto.png';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <Image src={homePagePhoto} alt="hero" width={700} height={660} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading1}>Journi</h1>
        <h2 className={styles.heading2}>boutique travel community</h2>
        <p className={styles.para1}>
          A vibrant community of design-loving travelers. Immerse yourself in
          the world of boutique hotels where artistry and creativity reign
          supreme. Discover hidden gems and iconic destinations handpicked for
          their exquisite aesthetics. Connect with fellow enthusiasts, share
          captivating stories, and unlock exclusive perks.
        </p>
        <p className={styles.para2}>
          Join Journi today and embark on a journey where passion for design
          meets extraordinary hospitality.
        </p>
      </div>
    </main>
  );
};

export default Home;
