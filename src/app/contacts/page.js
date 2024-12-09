import React from "react";
import Title from "@/components/title";
import Button from "@/components/button";
import Image from "next/image";
import MainImg2 from "/public/images/main2.jpg";

const page = () => {
  return (
    <div className="p-4 bg-[#262626] ">
      <Title title="Contacts" num="06" />
      <div className="flex flex-col items-start">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat{" "}
        </p>
        <input type="text" placeholder="Name" className="my-4 w-full"></input>
        <input
          type="text"
          placeholder="0987654321"
          className="my-4 w-full"
        ></input>
        <div className="flex items-start">
          <input type="checkbox"  className="my-1 me-2"/>
          <p className="text-[#6c6c6c]">You must agree to the terms and conditions to submit.</p>
        </div>

        <Button />
        <Image
          className="w-full w-[570px] object-cover "
          src={MainImg2}
          alt="Picture of the author"
          priority={true}
        />
      </div>
    </div>
  );
};

export default page;
