'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import homePagePhoto4 from '../public/assets/landingimages/forsthofgut-landing.jpg';
import homePagePhoto3 from '../public/assets/landingimages/lesirenuse-landing.jpg';
import homePagePhoto2 from '../public/assets/landingimages/ppp-landing.jpg';
import homePagePhoto1 from '../public/assets/landingimages/rochouse-landing.png';
import styles from './LandingCard.module.scss';

const photos = [homePagePhoto1, homePagePhoto2, homePagePhoto3, homePagePhoto4];
const copyrightTexts = [
  '© Soho Roc House',
  '© Papaya Playa Project',
  '© Le Sirenuse',
  '© Forsthofgut',
];
const transitionDuration = 3000; // 3 seconds

const LandingCard: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, transitionDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <div className={styles.photoContainer}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`${styles.photo} ${
                index === currentPhotoIndex ? styles.active : ''
              }`}
              style={{
                display: index === currentPhotoIndex ? 'block' : 'none',
              }}
            >
              <Image
                src={photo}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          ))}
        </div>
        <div className={styles.copyright}>
          {copyrightTexts.map((text, index) => (
            <span
              key={index}
              style={{
                display: index === currentPhotoIndex ? 'block' : 'none',
              }}
              className={styles.disclaimer}
            >
              {text}
            </span>
          ))}
        </div>
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
        <p className={styles.para2}>Join Journi today!</p>
      </div>
    </main>
  );
};

export default LandingCard;
