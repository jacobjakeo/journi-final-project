'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './BlogPostsCards.module.scss';

const BlogPostSingle: React.FC = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postId = parseInt(window.location.pathname.split('/')[2]);
      try {
        const response = await fetch(
          `http://localhost:3001/api/posts/${postId}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postsContainer}>
        <div>
          <div className={styles.postsCard} key={`post-${post.id}`}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.cardImage}
                src={`/assets/blogimages/blogpost-${post.id}.jpg`}
                alt={post.title}
                width={1000}
                height={350}
              />
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSingle;
