'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './HotelDetails.module.scss';

const HotelDetails: React.FC = () => {
  const [hotel, setHotel] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

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

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    const hotelId = parseInt(window.location.pathname.split('/')[2]);

    try {
      const response = await fetch(
        `http://localhost:3001/api/hotels/${hotelId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ hotelId, rating, comment }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const data = await response.json();
      // Update the hotel state to include the new review
      setHotel((prevHotel) => ({
        ...prevHotel,
        reviews: [...prevHotel.reviews, data.review],
      }));

      // Reset the rating and comment fields
      setRating(0);
      setComment('');
    } catch (error) {
      console.error(error);
    }
  };

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.hotelDetails}>
      <div className={styles.hotelImage}>
        <h2 className={styles.hotelName}>{hotel.name}</h2>
        <Image
          src={`/assets/hotelimages/hotel-${hotel.id}.jpg`}
          alt={hotel.name}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.hotelInfo}>
        <div className={styles.leftSide}>
          <p className={styles.location}>{hotel.location}</p>
          <p className={styles.price}>
            Starting from € {hotel.price} per night, prices may vary.
          </p>
          <p className={styles.rooms}>
            This property has {hotel.numberOfRooms} rooms in total.
          </p>
          <p className={styles.link}>
            <a href={hotel.website}>{hotel.website}</a>
          </p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.description}>{hotel.description}</p>
        </div>
      </div>
      <div className={styles.hotelInfo2}>
        <div className={styles.hotelImage2}>
          <Image
            src={`/assets/hotelimages/roomsimages/hotelroom-${hotel.id}.jpg`}
            alt={hotel.name}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.rightSide2}>
          <h2>AMENITIES</h2>
          <p className={styles.description}>{hotel.description}</p>
          <h2>ROOMS</h2>
          <p className={styles.description}>{hotel.description}</p>
          <h2>DINING</h2>
          <p className={styles.description}>{hotel.description}</p>
          <h2>LOWEST RATES</h2>
          <p className={styles.description}>{hotel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
