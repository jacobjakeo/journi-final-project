import Image from 'next/image';
import styles from './homepage.module.scss';

const HomePage: React.FC = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.main1}>
        <h1 className={styles.h1}>Journi</h1>
        <h2 className={styles.h2}>Welcome Back</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            Username
            <input className={styles.input1} placeholder="Username" />
          </label>
          <label className={styles.label}>
            Password
            <input className={styles.input2} placeholder="Password" />
          </label>
          <button className={styles.Button}>LOGIN</button>
        </form>
      </div>
    </section>
  );
};

export default HomePage;
