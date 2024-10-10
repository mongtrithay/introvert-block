"use client";
import React, { useEffect, useState } from "react";

export default function dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token"); // Replace with your actual token

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://students-hackaton.vercel.app/blog/get-all-blog", {
          method: "GET", // or 'POST' if you're sending data
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json", // Adjust as necessary based on your API
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data); // Handle the data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1 className="text-red-600">Hello world</h1>
    </>
  );
}
