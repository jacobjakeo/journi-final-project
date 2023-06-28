'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HotelsCards.module.scss';

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  numberOfRooms: number;
  website: string;
  imageUrl: string; // Added imageUrl field
}

function HotelsCards() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hotelId, setHotelId] = useState(null);

  const handleHotelClick = (event) => {
    const hotelId = event.target.closest('.hotelCard')?.dataset.hotelId;
    if (hotelId) {
      setHotelId(hotelId);
      if (hotelId !== undefined) {
        window.location.href = `/hotels/${hotelId}`;
      }
    }
  };

  const handleMouseDown = (event) => {
    handleHotelClick(event);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/hotels');
        if (!response.ok) {
          throw new Error('Failed to fetch hotels');
        }
        const data = await response.json();
        setHotels(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className={styles.hotelsContainer}>
      <h2 className={styles.header}>Explore new hotels</h2>
      <div className={styles.hotelsList}>
        {hotels.map((hotel) => (
          <div className={styles.hotelCard} key={`hotel-${hotel.id}`}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.cardImage}
                src={`/assets/hotelimages/hotel-${hotel.id}.jpg`}
                alt={hotel.name}
                fill="layout"
                objectFit="cover"
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardHeader}>{hotel.name}</h2>
              <p className={styles.cardPara}>{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelsCards;
