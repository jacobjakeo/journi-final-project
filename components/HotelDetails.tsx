'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './HotelDetails.module.scss';

const HotelDetails: React.FC = () => {
  const [hotel, setHotel] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { data: session, status: sessionStatus } = useSession();

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

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    const hotelId = parseInt(window.location.pathname.split('/')[2]);
    const username = session?.user?.username;

    try {
      const response = await fetch(
        `http://localhost:3001/api/hotels/${hotelId}/reviews`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: username
              ? `Bearer ${session.accessToken}`
              : undefined,
          },
          body: JSON.stringify({ hotelId, username, rating, comment }),
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
          <div className={styles.hotelInfo3}>
            <h2>What amenities are there?</h2>
            <p className={styles.description}>{hotel.amenities}</p>
            <h2>How about the room categories?</h2>
            <p className={styles.description}>
              The room categories on this property are : {hotel.roomTypes}. For
              all the rooms information please visit the hotels website.
            </p>
            <h2>Is there a restaurant inside the hotel?</h2>
            <p className={styles.description}>{hotel.dining}</p>
            <h2>When should I book to get the cheapest rates?</h2>
            <p className={styles.description}>
              The cheapest months according to our research are{' '}
              {hotel.lowestRates}.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.reviewSection}>
        <div className={styles.reviewForm}>
          <form onSubmit={handleSubmitReview}>
            <h3 className={styles.reviewHeader}>Write a Review</h3>
            <div className={styles.ratingContainer}>
              <label htmlFor="rating">☆:</label>
              <select
                id="rating"
                name="rating"
                value={rating}
                onChange={handleRatingChange}
                required
              >
                <option value={0} disabled>
                  Select a rating
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className={styles.commentContainer}>
              <label htmlFor="comment">Review:</label>
              <textarea
                id="comment"
                name="comment"
                value={comment}
                onChange={handleCommentChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
        <div className={styles.reviewComments}>
          <h3 className={styles.reviewHeader}>Member Reviews</h3>
          <div className={styles.scrollableReviews}>
            {hotel.reviews && hotel.reviews.length > 0 ? (
              <ul className={styles.reviewList}>
                {hotel.reviews.map((review) => (
                  <li key={review.id} className={styles.oneComment}>
                    <p className={styles.userName}>{review.username}</p>
                    <p className={styles.rating}>
                      Journi Rating: {review.rating} ☆
                    </p>
                    <p className={styles.review}>{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
