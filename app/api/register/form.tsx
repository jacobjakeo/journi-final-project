'use client';
import { signIn } from 'next-auth/react';
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
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="NAME"
          className={styles.input_fieldname}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="EMAIL ADDRESS"
          className={styles.input_fieldemail}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="PASSWORD"
          className={styles.input_fieldpassword}
        />
      </div>
      <button type="submit" className={styles.button_signup} disabled={loading}>
        {loading ? 'Loading...' : 'REGISTER'}
      </button>
    </form>
  );
};
