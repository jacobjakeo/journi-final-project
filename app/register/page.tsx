import { RegisterForm } from '../api/register/form';
import styles from './registerpage.module.scss';

export default function RegisterPage() {
  return (
    <div className={styles.registerpage}>
      <RegisterForm />
    </div>
  );
}
