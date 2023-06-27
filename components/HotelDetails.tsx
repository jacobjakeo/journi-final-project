'use client';
import React, { useEffect, useState } from 'react';
import styles from './HotelDetails.module.scss';

const HotelDetails: React.FC = () => {
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const hotelId = parseInt(window.location.pathname.split('/')[2]);
      try {
        const response = await fetch(
          `http://localhost:3001/api/hotels/${hotelId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch hotel');
        }
        const data = await response.json();
        setHotel(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotel();
  }, []);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.hotelDetails}>
      <div className={styles.leftSide}>
        <h2>hotelpicture</h2>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.rightName}>{hotel.name}</h2>
        <p className={styles.rightLocation}>{hotel.location}</p>
        <p className={styles.rightPrice}>
          Starting from € {hotel.price} per night
        </p>
        <p className={styles.rightRooms}>
          This property has {hotel.numberOfRooms} rooms
        </p>
        <p className={styles.rightDesc}>{hotel.description}</p>
        <p className={styles.rightLink}>
          More Information
          <br />
          <a href={hotel.website}>{hotel.website}</a>
        </p>
      </div>
    </div>
  );
};

export default HotelDetails;
