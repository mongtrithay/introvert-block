// pages/blog/[id].js
"use client"; // This marks the component as a Client Component

import { useRouter } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';

export default function BlogPostCard() {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const { id } = router.query; // Get the blog ID from the URL
      
      if (id) {
        try {
          const response = await fetch(`https://students-hackaton.vercel.app/blog/get-blog/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setBlogPost(data);
        } catch (error) {
          console.error('Error fetching blog post:', error);
        }
      }
    };

    fetchBlogPost();
  }, [router.query]); // Depend on router.query


  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
      </div>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold">{blogPost.title}</h1>
        <p className="text-xl">Welcome to my blog! :)</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-semibold">{blogPost.author}</h3>
          <p className="text-md text-gray-500">{blogPost.date}</p>
        </div>
      </div>
      <p className="text-gray-700 text-lg mb-4">{blogPost.content}</p>
      <div className="flex justify-between items-center text-gray-500">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
          <span className="text-lg">{blogPost.likes} likes</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 16v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h14l4 4"></path>
          </svg>
          <span className="text-lg">{blogPost.comments} comments</span>
        </div>
      </div>
    </div>
  );
}

  
  