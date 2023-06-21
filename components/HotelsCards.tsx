'use client';
import React, { useEffect, useState } from 'react';
import styles from './HotelsCards.module.scss';

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  numberOfRooms: number;
  website: string;
}

const HotelsCards: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.hotelsContainer}>
      <h2 className={styles.header}>Explore new hotels</h2>
      <div className={styles.hotelsList}>
        {hotels.map((hotel) => (
          <div className={styles.hotelCard} key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsCards;
