import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const postId = parseInt(id as string, 10); // Convert postId to number

    if (isNaN(postId)) {
      res.status(400).json({ message: 'Invalid post ID' });
      return;
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { author: true }, // Include the author
    });

    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
  }
}
