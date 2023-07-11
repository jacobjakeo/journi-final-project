'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './BlogPostSingle.module.scss';

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
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.content}</p>
        <p className={styles.authorId}>Author: XYZ</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={`/assets/blogimages/blogpost-${post.id}.jpg`}
          alt={post.title}
          width={680}
          height={350}
        />
      </div>
    </div>
  );
};

export default BlogPostSingle;
