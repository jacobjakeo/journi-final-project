'use client';
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ExampleImage from '../public/assets/hotelimages/hotel-1.jpg';
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
      <div className={styles.hotelImage}>
        <h2 className={styles.hotelName}>{hotel.name}</h2>
        <Image
          src={ExampleImage}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.hotelInfo}>
        <div className={styles.leftSide}>
          <p className={styles.location}>{hotel.location}</p>
          <p className={styles.price}>
            Starting from € {hotel.price} per night
          </p>
          <p className={styles.rooms}>
            This property has {hotel.numberOfRooms} rooms
          </p>
          <p className={styles.link}>
            More Information
            <br />
            <a href={hotel.website}>{hotel.website}</a>
          </p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.description}>{hotel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
