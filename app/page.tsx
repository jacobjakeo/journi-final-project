import Image from 'next/image';
import styles from './page.module.scss';

const LandingPage: React.FC = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.main1}>
        <h1 className={styles.h1}>Journi</h1>
        <h2 className={styles.h2}>Your boutique travel community</h2>
        <button className={styles.Button}>LOGIN</button>
        <button className={styles.Button}>REGISTER</button>
      </div>
    </section>
  );
};

export default LandingPage;
