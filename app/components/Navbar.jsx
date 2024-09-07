import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="w-full px-5 py-5 md:px-5 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          alt="logo"
          width={180}
          className="s-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-mediumm py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black capitalize shadow-[-7px_7px_0px] shadow-black">
          Get started
          <Image src={assets.arrow} alt='arrow ' />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="capitalize text-3xl sm:text-5xl font-medium">
          latest blogs
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nulla esse excepturi quas maxime ratione unde, iste, quis beatae sed
          quasi?
        </p>
        <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-8px_7px_0px] shadow-black'>
            <input type="email" placeholder="Enter your email" className='pl-4 outline-none py-2'/>
            <button type="Submit" className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-300 active:text-slate-700'>Subscribe</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
