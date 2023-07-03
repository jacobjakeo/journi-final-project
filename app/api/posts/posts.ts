import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request to retrieve all blog posts
    const posts = await prisma.post.findMany();

    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    // Handle POST request to submit a new blog post
    // ...
    // Add your logic for creating a new blog post here
    // ...
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
