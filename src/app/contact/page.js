"use client"; // This marks the component as a Client Component

import { useRouter, useSearchParams } from 'next/navigation'; // Use next/navigation
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BlogPostCard() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get search parameters
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; // Get the token from localStorage

  useEffect(() => {
    const fetchBlogPost = async () => {
      const num = searchParams.get('id'); // Get id from search parameters
      console.log(num);

      // Check if the id is available
      if (!num) {
        setError('Blog post ID is missing');
        setLoading(false);
        return; // Exit if the id is not available
      }

      // Check if the token is available and valid before making the request
      if (!token) {
        setError('Authorization token is missing');
        setLoading(false);
        return; // Exit if the token is not available
      }

      try {
        const response = await fetch(`https://students-hackaton.vercel.app/blog/get-blog/${num}`, {
          method: 'GET', // Ensure you are using the correct method
          headers: {
            'Content-Type': 'application/json', // Set the content type
            'Authorization': `Bearer ${token}`, // Include the token for authentication
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data, "====================");
        
        setBlogPost(data); // Set the blog post data
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false when fetch is complete
      }
    };

    fetchBlogPost(); // Call the function to fetch the blog post
  }, [searchParams, token]); // Add searchParams and token to the dependency array

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {blogPost && (
        <>
          <div className="flex justify-center mb-4">
            <img src={blogPost.thumbnail} alt={blogPost.title} className="w-32 h-32 rounded-full" />
          </div>
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold">{blogPost.title}</h1>
            <p className="text-xl">{blogPost.desc}</p>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4">
              <Image
                className="w-full h-full rounded-full"
                src={blogPost.createdBy.avatar || "/default-avatar.jpg"}
                alt={blogPost.createdBy.name}
                width={90}
                height={90}
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{blogPost.createdBy.firstName} {blogPost.createdBy.lastName}</h3>
              <p className="text-md text-gray-500">{new Date(blogPost.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg mb-4">{blogPost.desc}</p>
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
              <span className="text-lg"> likes</span>
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
              <span className="text-lg"> comments</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
