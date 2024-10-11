'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!title || !desc || !image) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);

      // Step 1: Upload the image
      const formData = new FormData();
      formData.append('file', image); // Change 'file' to your API's expected key

      const uploadResponse = await fetch('https://students-hackaton.vercel.app/upload/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        const uploadErrorData = await uploadResponse.json();
        console.log('Error uploading image:', uploadErrorData);
        alert(`Failed to upload image: ${uploadErrorData.message}`);
        return;
      }

      const uploadData = await uploadResponse.json();
      const thumbnailUrl = uploadData.url; // Adjust this based on your upload response

      // Step 2: Create the blog post with the uploaded image URL
      const blogPostData = {
        title,
        desc,
        thumbnail: thumbnailUrl, // Use the uploaded image URL here
      };

      const response = await fetch('https://students-hackaton.vercel.app/blog/create-blog', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Set the content type for JSON
        },
        body: JSON.stringify(blogPostData),
      });

      if (response.ok) {
        alert('Blog post created successfully!');
        router.push('/blogs'); 
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData);
        alert(`Failed to create blog post: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {loading ? 'Submitting...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
