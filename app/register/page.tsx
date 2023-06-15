import Image from 'next/image';
import styles from './registerpage.module.scss';

const RegisterPage: React.FC = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.main1}>
        <h1 className={styles.h1}>Journi</h1>
        <h2 className={styles.h2}>Create a new account</h2>
        <form className={styles.form}>
          <label className={styles.label}>
            Username
            <input className={styles.input} placeholder="Username" />
          </label>
          <label className={styles.label}>
            Password
            <input className={styles.input} placeholder="Password" />
          </label>
          <label className={styles.label}>
            Repeat Password
            <input className={styles.input} placeholder="Repeat Password" />
          </label>
          <button className={styles.Button}>REGISTER</button>
        </form>
      </div>
    </section>
  );
};
export default RegisterPage;
