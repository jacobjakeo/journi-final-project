import { RegisterForm } from '../api/register/form';
import styles from './registerpage.module.scss';

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Journi | Register ',
  description: 'Create a new account.',
};

export default function RegisterPage() {
  return (
    <div className={styles.registerpage}>
      <RegisterForm />
    </div>
  );
}
