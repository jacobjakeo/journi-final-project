'use client';
import React from 'react';
import styles from './contact.module.scss';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading1}>Contact Us</h1>
        <p className={styles.para1}>
          Get in touch with us for any inquiries or feedback
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input className={styles.input} id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              rows={5}
              required
            />
          </div>

          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
