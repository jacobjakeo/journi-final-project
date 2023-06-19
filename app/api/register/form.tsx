'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import styles from './form.module.scss';

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: '', email: '', password: '' });

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formValues),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: '/' });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      {!!error && <p>{error}</p>}
      <div className={styles.leftContainer}>
        <Image
          src="/../public/assets/mainlogo.png"
          width={300}
          height={300}
          alt="Journi logo"
          className={styles.logoImage}
        />
      </div>
      <div className={styles.rightContainer}>
        <h2 className={styles.registration_header}>Create a new account</h2>
        <div className={styles.inputWrapper}>
          <label htmlFor="name" className={styles.inputLabel}>
            USERNAME
          </label>
          <input
            required
            type="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={styles.input_fieldname}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email" className={styles.inputLabel}>
            EMAIL
          </label>
          <input
            required
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={styles.input_fieldemail}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password" className={styles.inputLabel}>
            PASSWORD
          </label>
          <input
            required
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className={styles.input_fieldpassword}
          />
        </div>
        <button className={styles.button_signup} disabled={loading}>
          {loading ? 'Loading...' : 'REGISTER'}
        </button>
      </div>
    </form>
  );
};
