import Image from "next/image";
import React from "react";

const Circle = () => {
  return (
    <div className="hidden md:flex relative h-full w-full">
      <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border mx-auto rounded-full border-blue-500">
        <Image
          alt=""
          src={`/images/tailwind.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute left-0 bottom-20 bg-white shadow-xl p-1 rounded-full"
        />
        <Image
          alt=""
          src={`/images/nextjs.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute left-0 top-20 bg-white shadow-xl p-1 rounded-full"
        />
        <Image
          alt=""
          src={`/images/mongodb.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute right-0 top-20 bg-white shadow-xl p-1 rounded-full"
        />
      </div>
      <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border mx-auto rounded-full border-blue-400">
        <Image
          alt=""
          src={`/images/nodejs.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute right-0 bottom-12 bg-gray-50 shadow-xl p-1 rounded-full"
        />
      </div>
      <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 border mx-auto rounded-full border-violet-300">
        <Image
          alt=""
          src={`/images/supabase.png`}
          width={200}
          height={200}
          className="animate-spinSlower  object-contain w-10 h-10 absolute right-0 top-5 bg-white shadow-xl p-1 rounded-full"
        />
        <Image
          alt=""
          src={`/images/express.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute left-0 bottom-5 bg-white shadow-xl p-2 rounded-full"
        />
      </div>
      <div className=" absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border mx-auto rounded-full border-blue-100">
        <Image
          alt=""
          src={`/images/reactjs.png`}
          width={200}
          height={200}
          className="animate-spinSlow  object-contain w-10 h-10 absolute left-0 top-0 bg-white shadow-xl p-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default Circle;
