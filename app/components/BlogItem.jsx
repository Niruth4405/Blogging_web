import Image from "next/image";
import React from "react";
import { blog_data } from "../assets/assets";
import { assets } from "../assets/assets";

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className="">
      <div
        className="mx-auto mr-3 mb-3 md:mb-5 max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px] shadow-black"
      >
        <Image
          src={image}
          alt={title} // Provide a meaningful alt text
          width={400}
          height={400}
          className="border border-black"
        />
        <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center py-2 px-5 font-semibold text-center cursor-pointer">
          Read More
          <Image
            src={assets.arrow}
            alt="arrow key"
            width={15}
            className="ml-2 flex justify-center items-center "
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
