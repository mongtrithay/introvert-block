"use client"; // Ensure this is marked as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    router.push("/signup");
  };

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://students-hackaton.vercel.app/user/sign-in",
        {
          email: email, // Using email
          password,
        }
      );
      const { token, user } = response.data;

      // Save authentication data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("time", new Date().getTime());

      // Redirect to home page
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed. Please check your credentials and try again.");
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 leading-tight focus:outline-none"
                type="text"
                id="email" // Changed id to email
                placeholder="Enter your email"
                value={email} // Updated state variable
                onChange={(e) => setEmail(e.target.value)} // Updated state setter
              />
            </div>
          </div>
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
          <div className="flex flex-col text-center gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-sm">
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </form>
        <div className="w-full h-auto flex items-center justify-center">
          <button className="" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
