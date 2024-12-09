import React from "react";
import Title from "@/components/title";
import Image from "next/image";
import MainImg2 from "/public/images/main2.jpg";
import Paragraph from "@/components/paragraph";
const page = () => {
  return (
    <div className="p-4">
      <Title title={"Mortgage"} num={"05"} />
      <div>
        <div>
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
          veniam
        </div>
        <div className="flex">
          <Image
            className="w-full h-[100px] object-cover "
            src={MainImg2}
            alt="Picture of the author"
            priority={true}
          />
          <Image
            className="w-full h-[100px] object-cover "
            src={MainImg2}
            alt="Picture of the author"
            priority={true}
          />
        </div>
        <Paragraph
          title={"Mortgage"}
          paragraph1={
            "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
          }
        />
        <Paragraph
          title={"Mortgage"}
          paragraph1={
            "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
          }
        />
      </div>
    </div>
  );
};

export default page;
