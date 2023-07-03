'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './BlogPostsCards.module.scss';

interface Post {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  author: {
    name: string;
  };
}

function BlogPostsCards() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [postId, setPostId] = useState(null);
  const router = useRouter();

  const handlePostClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const postId = event.currentTarget.dataset.postId;
    if (postId) {
      setPostId(postId);
      if (postId !== undefined) {
        router.push(`/posts/${postId}`);
      }
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    handlePostClick(event);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Latest Posts</h2>
      <div className={styles.postsContainer}>
        <div className={styles.postsList}>
          {posts.map((post, index) => (
            <div
              className={styles.postsCard}
              key={`post-${post.id}`}
              data-post-id={post.id}
            >
              <div className={styles.imageContainer}>
                <Image
                  className={styles.cardImage}
                  src={`/assets/blogimages/blogpost-${post.id}.jpg`}
                  alt={post.title}
                  width={1000}
                  height={350}
                />
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <button className={styles.readMoreButton}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogPostsCards;
