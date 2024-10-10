"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Import the router

export default function Profile() {
  const router = useRouter(); // Call useRouter inside the component

  const handleNavigation = () => {
    router.push("/profile"); // Navigate 
  };

  return (
    <div className="relative w-full h-[1000px] flex justify-center items-center overflow-hidden bg-slate-400">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://cdn.dribbble.com/userupload/13608029/file/original-3a1d22518963685c82f2d9ff927e5804.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Image Overlay */}
      <div className="absolute z-10">
        <Image
          src="https://cf-sparkai-live.s3.amazonaws.com/users/2n9Ejr5HU1d8Hbj59jYxRDwFFQt/spark_ai/o_bg-remover-gen_2n9ElfXAWmSAbBrt9UDKAhT8Eeh.png"
          alt="Profile Picture"
          width={650}
          height={550}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20">
        <button
          onClick={handleNavigation} // Call the navigation function on click
          className="flex items-center justify-center w-60 h-60 rounded-full bg-art-of-manipulation ring-2 ring-blue-500 shadow-lg shadow-blue-500/100 text-white font-bold text-[35px] text-cyan-400 leading-relaxed"
        >
          SUMMON PROFILE 
        </button>
      </div>
    </div>
  );
}



  

 


