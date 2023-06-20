/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-restricted-syntax */
'use client';
import React, { useEffect, useState } from 'react';

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  numberOfRooms: number;
  website: string;
}

const HotelsPage: React.FC = () => {
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
    <div>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          <p>Location: {hotel.location}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default HotelsPage;
