'use client';
import React, { useEffect, useState } from 'react';

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
    <div>
      <h2>{hotel.name}</h2>
      <p>{hotel.location}</p>
      <p>Price: € {hotel.price}</p>
      <p>Number of rooms: {hotel.numberOfRooms}</p>
      <p>
        Website: <a href={hotel.website}>{hotel.website}</a>
      </p>
    </div>
  );
};

export default HotelDetails;
