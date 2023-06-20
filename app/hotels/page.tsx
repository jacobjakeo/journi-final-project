'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  numberOfRooms: number;
  website: string;
}

const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Set the container height to 100% of the viewport height */
  overflow: hidden;
`;

const HotelsList = styled.div`
  display: flex;
  overflow-x: scroll;
  justify-content: flex-start; /* Align cards to the start of the container */
  margin-top: 50px;
  align-self: center;
  align-items: center;
  width: 80vw; /* Set the width to 80% of the viewport width */

  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

const HotelCard = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* Update flex property to make each card one-third width */
  margin-right: 10px;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Header = styled.h2`
  text-transform: uppercase;
`;

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
    <HotelsContainer>
      <Header>Hotels sourced by us personally</Header>
      <HotelsList>
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
          </HotelCard>
        ))}
      </HotelsList>
    </HotelsContainer>
  );
};

export default HotelsPage;
