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
    });
    res.status(200).json(hotel);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
