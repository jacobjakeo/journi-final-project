const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const path = require('node:path');

const prisma = new PrismaClient();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hotels', async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany();
    res.json(hotels);
  } catch (error) {
    console.error('Error fetching hotels:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/hotels/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await prisma.hotel.findUnique({
      where: { id: parseInt(id) },
      include: { reviews: true }, // Include the associated reviews
    });

    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.json(hotel);
  } catch (error) {
    console.error('Error fetching hotel:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/hotels/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;
  const username = req.session?.user?.username; // Safely access the username property

  if (!username) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  try {
    const hotelId = parseInt(id, 10);
    if (isNaN(hotelId)) {
      res.status(400).json({ error: 'Invalid hotel ID' });
      return;
    }

    const review = await prisma.review.create({
      data: {
        hotelId,
        username,
        rating,
        comment,
      },
    });

    res.status(201).json({ review });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
});

app.get('/api/hotels/:id/review', async (req, res) => {
  const { id } = req.params;

  try {
    const review = await prisma.review.findFirst({
      where: { hotelId: parseInt(id) },
    });

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.json(review);
  } catch (error) {
    console.error('Error fetching review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/hotels/:id/reviews', async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { hotelId: parseInt(id) },
    });

    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
