import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request to retrieve a single hotel by ID
    const { id } = req.query;
    const hotelId = parseInt(id as string, 10); // Convert id to number

    if (isNaN(hotelId)) {
      res.status(400).json({ message: 'Invalid hotel ID' });
      return;
    }

    const hotel = await prisma.hotel.findUnique({
      where: { id: hotelId },
      include: { reviews: true }, // Include the reviews
    });

    if (!hotel) {
      res.status(404).json({ message: 'Hotel not found' });
      return;
    }

    const imageUrl = hotel.image ? `/hotel-${hotel.id}.jpg` : '';

    res.status(200).json({ ...hotel, imageUrl });
  } else if (req.method === 'POST') {
    // Handle POST request to submit a review for a hotel
    const { hotelId, username, rating, comment } = req.body;

    // Perform validation if needed (e.g., check if the user has already submitted a review for this hotel)

    const review = await prisma.review.create({
      data: {
        hotelId,
        username,
        rating,
        comment,
      },
    });

    res.status(201).json({ message: 'Review submitted successfully', review });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
