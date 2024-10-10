"use client"; 

// components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
const Header = () => {
  return (
    <>
    <header className="bg-gray-100 p-4 rounded-b-[2rem]">
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

    <div className='flex justify-center items-center w-full h-[1500px] bg-white'>
      <div className='grid justify-center items-center w-[1750px] h-auto bg-gradient-to-r from-white via-purple-500 to-white pb-10'>

      <div className="flex justify-end items-end gap-10 pl-24">
      <button className="btn flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 my-10">
        <FaPen />
        <span>Create</span>
      </button>
         </div>

        <div className='flex gap-2 w-[1000px] h-[350px] bg-slate-500'>
          <div className='w-[350px] h-[350px] bg-slate-600'>
              <Image
                  src="https://i.pinimg.com/originals/0c/88/52/0c8852528595a3fb009bd33aacfa22ea.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
              />
          </div>
          <div className='w-[650px] h-[350px] bg-white'>
            <div className=' gap-3 flex justify-start pl-5 items-center w-[650px] h-[100px] bg-red-100'> 
              <div className='w-[90px] h-[90px] rounded-full bg-blue-200'>
              
                 <Image
                  src="https://i.pinimg.com/736x/ff/2a/1e/ff2a1e4424193d6e4a6afa3e94326e0e.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
                  objectFit='cover'
                  
              />

              </div>
              <div className=' flex justify-start items-center w-[550px] h-[100px] text-[25px] font-bold gap-96'>
                <h1>Minato</h1> 
                <button className="btn flex items-end space-x-2  text-black ">
                   <FaTrash />
                </button>
              </div>

            </div>
            <div className='grid justify-center items-center pl-5 '>
            <p className='py-3'>23/10/24</p>
            <div className=' w-[620px] h-[100px] bg-white font-extrabold text-[20px]'>
              <h1>
                Minato is The 4th Hokage named the flash of Shinobi who is the second person who can use charikan.
              </h1>
              
            </div>
            <p>Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage (四代目火影, Yondaime Hokage, literally meaning: Fourth Fire Shadow) of Konohagakure.
            was formed in 1947 as a merger of Akasaka, Azabu and Shiba wards following Tokyo City's transformation into Tokyo Metropolis. The modern Minato ward ...
            </p>
            

            </div>
          </div>

        </div>

        <div className='flex gap-2 w-[1000px] h-[350px] bg-slate-500'>
          <div className='w-[350px] h-[350px] bg-slate-600'>
              <Image
                  src="https://i.pinimg.com/originals/0c/88/52/0c8852528595a3fb009bd33aacfa22ea.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
              />
          </div>
          <div className='w-[650px] h-[350px] bg-white'>
            <div className=' gap-3 flex justify-start pl-5 items-center w-[650px] h-[100px] bg-red-100'> 
              <div className='w-[90px] h-[90px] rounded-full bg-blue-200'>
              <Image
                  src="https://i.pinimg.com/736x/ff/2a/1e/ff2a1e4424193d6e4a6afa3e94326e0e.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
                  objectFit='cover'
                  
              />

              </div>
              <div className=' flex justify-start items-center w-[550px] h-[100px] text-[25px] font-bold gap-96'>
                <h1>Minato</h1> 
                <button className="btn flex items-end space-x-2  text-black ">
                   <FaTrash />
                </button>
              </div>

            </div>
            <div className='grid justify-center items-center pl-5 '>
            <p className='py-3'>23/10/24</p>
            <div className=' w-[620px] h-[100px] bg-white font-extrabold text-[20px]'>
              <h1>
                Minato is The 4th Hokage named the flash of Shinobi who is the second person who can use charikan.
              </h1>
              
            </div>
            <p>Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage (四代目火影, Yondaime Hokage, literally meaning: Fourth Fire Shadow) of Konohagakure.
            was formed in 1947 as a merger of Akasaka, Azabu and Shiba wards following Tokyo City's transformation into Tokyo Metropolis. The modern Minato ward ...
            </p>
            

            </div>
          </div>

        </div>

        <div className='flex gap-2 w-[1000px] h-[350px] bg-slate-500'>
          <div className='w-[350px] h-[350px] bg-slate-600'>
              <Image
                  src="https://i.pinimg.com/originals/0c/88/52/0c8852528595a3fb009bd33aacfa22ea.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
              />
          </div>
          <div className='w-[650px] h-[350px] bg-white'>
            <div className=' gap-3 flex justify-start pl-5 items-center w-[650px] h-[100px] bg-red-100'> 
              <div className='w-[90px] h-[90px] rounded-full bg-blue-200'>
              <Image
                  src="https://i.pinimg.com/736x/ff/2a/1e/ff2a1e4424193d6e4a6afa3e94326e0e.jpg"
                  alt="Profile Picture"
                  width={650}
                  height={550}
                  objectFit='cover'
                  
              />

              </div>
              <div className=' flex justify-start items-center w-[550px] h-[100px] text-[25px] font-bold gap-96'>
                <h1>Minato</h1> 
                <button className="btn flex items-end space-x-2  text-black ">
                   <FaTrash />
                </button>
              </div>

            </div>
            <div className='grid justify-center items-center pl-5 '>
            <p className='py-3'>23/10/24</p>
            <div className=' w-[620px] h-[100px] bg-white font-extrabold text-[20px]'>
              <h1>
                Minato is The 4th Hokage named the flash of Shinobi who is the second person who can use charikan.
              </h1>
              
            </div>
            <p>Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage (四代目火影, Yondaime Hokage, literally meaning: Fourth Fire Shadow) of Konohagakure.
            was formed in 1947 as a merger of Akasaka, Azabu and Shiba wards following Tokyo City's transformation into Tokyo Metropolis. The modern Minato ward ...
            </p>
            

            </div>
          </div>

        </div>

      </div>

    </div>
    </>);
};

export default Header;

