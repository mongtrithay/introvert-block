"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const Header = () => {
  const [data, setData] = useState([]); // Initialize with an empty array
  const [error, setError] = useState(null);
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await getPagination(currentPage);
    };
    fetchData();
  }, [currentPage]);
  const getPagination = async (page) => {
    try {
      const response = await fetch(
        `https://students-hackaton.vercel.app/blog/get-all-blogs?page=${page}&limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data); // Set the fetched data
    } catch (error) {
      setError(error.message);
    }
  };
  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
              <span className="text-2xl text-blue-900 hover:text-teal-500">
                Profile
              </span>
            </Link>
          </nav>
          <Link href="/">
            <span className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-teal-500">
              Log out
            </span>
          </Link>
        </div>
      </header>
      <div className="flex justify-center items-center w-full h-auto bg-white ">
        <div className="grid justify-center items-center w-[1750px] h-auto bg-gradient-to-r from-white via-purple-500 to-white pb-10">
          <div className="flex justify-end items-end  gap-10 pl-24">
            <Link href={"/public"}>
              <button className="btn flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 my-10">
                Public Page
              </button>
            </Link>
            <Link href={"/create"}>
              <span className="btn flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 my-10">
                <FaPen />
                <button>Create</button>
              </span>
            </Link>
          </div>

          {error && <p className="text-red-500">Error: {error}</p>}

          {/* Only render the content if there is data and blogs are available */}
          {data.blogs && data.blogs.length > 0 ? (
            data.blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex gap-2 w-[1000px] h-[350px] bg-slate-500 mb-4"
              >
                <div className="w-[350px] h-[350px] bg-slate-600">
                  <Image
                    className="w-full h-full"
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={650}
                    height={950}
                    objectFit="cover"
                  />
                </div>
                <div className="w-[650px] h-[350px] bg-white">
                  <div className="gap-3 flex justify-start pl-5 items-center w-[650px] h-[100px] bg-red-100">
                    <div className="w-[90px] h-[90px] rounded-full bg-blue-200">
                      <Image
                        className="w-full h-full rounded-full"
                        src={blog.createdBy.avatar || "/default-avatar.jpg"}
                        alt={blog.createdBy.name}
                        width={90}
                        height={90}
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex justify-start items-center w-[550px] h-[100px] text-[25px] font-bold gap-96">
                      <h1>{blog.createdBy.name}</h1>
                      <button
                        className="btn flex items-end space-x-2 text-black"
                        type="button"
                        onClick={() => deleteIcon(blog._id, token)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="grid justify-center items-center pl-5">
                    <p className="py-3">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                    <div className="w-[620px] h-[100px] bg-white font-extrabold text-[20px]">
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
          <nav className="flex gap-4 w-full justify-end">
            <button
              className="border-2 px-4 border-gray-900 rounded"
              onClick={prePage}
            >
              Pre
            </button>
            <form action="" method="post" name="test_fn">
              <h1 className="border-2 px-3 border-gray-400 rounded bg-slate-200 ">
                {currentPage}
              </h1>
            </form>
            <button
              className="border-2 px-3 border-gray-900 mr-9 rounded"
              onClick={nextPage}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

const deleteIcon = async (id,token) => {
  try {
    const response = await fetch(
      `https://students-hackaton.vercel.app/blog/delete-blog/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify({ id }),
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

export default Header;
