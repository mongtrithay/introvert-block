"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

const Header = () => {
    const [data, setData] = useState([]); // Initialize with an empty array
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token"); // Replace with your actual token
  
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("https://students-hackaton.vercel.app/blog/get-all-blog", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
        
                const data = await response.json();
                setData(data); // Set the fetched data
            } catch (error) {
                setError(error.message);
            }
        };
  
        getData();
    }, [token]);
    console.log(data);
    

    return (
        <>
            <header className="bg-gray-100 p-4 rounded-b-[2rem] w-full h-[100px]">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="">
                            <span className="text-xl font-bold text-blue-900">
                                Manipulator <span className="text-teal-500">❤</span>
                            </span>
                        </Link>
                    </div>
                    <nav className="flex space-x-4">
                        <Link href="/contact">
                            <span className="text-2xl text-blue-900 hover:text-teal-500">Profile</span>
                        </Link>
                    </nav>
                    <Link href="/">
                        <span className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-teal-500">Log out</span>
                    </Link>
                </div>
            </header>
            <div className='flex justify-center items-center w-full h-[1500px] bg-white mt-60'>
                <div className='grid justify-center items-center w-[1750px] h-auto bg-gradient-to-r from-white via-purple-500 to-white pb-10'>
                    <div className="flex justify-end items-end gap-10 pl-24">
                        <button className="btn flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 my-10">
                            <FaPen />
                            <span>Create</span>
                        </button>
                    </div>

                    {error && <p className="text-red-500">Error: {error}</p>}

                    {/* Only render the content if there is data */}
                    {data.length > 0 ? (
                        data.map((blog, index) => (
                            <div key={index} className='flex gap-2 w-[1000px] h-[350px] bg-slate-500 mb-4'>
                                <div className='w-[350px] h-[350px] bg-slate-600'>
                                    <Image className="w-full h-full"
                                        src={blog.thumbnail} // Assuming your API has an imageUrl field
                                        alt={blog.title}
                                        width={650}
                                        height={950}
                                        objectFit='cover'
                                    />
                                </div>
                                <div className='w-[650px] h-[350px] bg-white'>
                                    <div className=' gap-3 flex justify-start pl-5 items-center w-[650px] h-[100px] bg-red-100'>
                                        <div className='w-[90px] h-[90px] rounded-full bg-blue-200'>
                                            <Image className="w-full h-full rounded-full "
                                                src={blog.thumbnail} // Assuming your API provides an authorImage field
                                                alt={blog.author}
                                                width={90}
                                                height={90}
                                                objectFit='cover'
                                            />
                                        </div>
                                        <div className='flex justify-start items-center w-[550px] h-[100px] text-[25px] font-bold gap-96'>
                                            <h1>{blog.author}</h1>
                                            <button className="btn flex items-end space-x-2 text-black">
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='grid justify-center items-center pl-5'>
                                        <p className='py-3'>{blog.createdAt}</p>
                                        <div className='w-[620px] h-[100px] bg-white font-extrabold text-[20px]'>
                                            <h1>{blog.title}</h1>
                                        </div>
                                        <p>{blog.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No blogs available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;


