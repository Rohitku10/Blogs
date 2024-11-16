import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const BlogItemDetails = () => {
  const [blogData, setBlogData] = useState(null); // State to manage blog data
  const { id } = useParams();

  useEffect(() => {
    getBlogItemData();
  }, [id]); // Re-run the effect if the `id` changes

  const getBlogItemData = async () => {
    console.log(`Fetching blog data for ID: ${id}`);
    try {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      const formattedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
      };
      setBlogData(formattedData);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  // Display a loader if the data is not yet available
  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-container">
      <div className="blog-info">
        <h2 className="blog-details-title">{blogData.title}</h2>

        <div className="author-details">
          <img className="author-pic" src={blogData.avatarUrl} alt={blogData.author} />
          <p className="details-author-name">{blogData.author}</p>
        </div>

        <img className="blog-image" src={blogData.imageUrl} alt={blogData.title} />
        <p className="blog-content">{blogData.content}</p>
      </div>
    </div>
  );
};

export default BlogItemDetails;
