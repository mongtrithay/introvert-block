"use client"; // Ensure this is a client-side component

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const SignUpPage = () => {
  // State for handling form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    router.push("/Login");
  };

  // Handle Sign-Up form submission
  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://students-hackaton.vercel.app/user/sign-up",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      const { token, user } = response.data; // Assuming token and user info are returned

      // Store the token and user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to login page after successful sign-up
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign Up failed", error);
      setError("Sign Up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Image
        src="https://wallpapercave.com/wp/wp5172860.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="bg-white bg-opacity-[0.412] shadow-[0px_0px_10px_6px_white] p-8 rounded shadow-md w-full max-w-md z-30">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 leading-tight focus:outline-none"
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 leading-tight focus:outline-none"
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 leading-tight focus:outline-none"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-black-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 leading-tight focus:outline-none"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col text-center gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
        <div className="w-full h-auto pt-4 flex items-center justify-center">
          <button className="" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
