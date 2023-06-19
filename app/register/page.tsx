import Image from 'next/image';
import AppBar from '../../components/AppBar';
import { RegisterForm } from '../api/register/form';
import styles from './registerpage.module.scss';

export default function RegisterPage() {
  return (
    <div className={styles.registerpage}>
      <AppBar />
      <Image
        src="/../public/assets/logo2.png"
        width={280}
        height={100}
        alt="Journi logo"
        className={styles.headerimage}
      />
      <h2 className={styles.registration_header}>Create a new account</h2>
      <RegisterForm />
    </div>
  );
}
