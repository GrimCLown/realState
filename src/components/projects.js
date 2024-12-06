import React from 'react';
import Image from 'next/image';
import ProjectsCard from './projectCard';

const projects = () => {
  const items = [
    { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
    { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
    { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
    { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
  ];

  return (
    <div className='p-4 gap-2'>
      <div className='flex justify-between border-b-2'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <h1 className='text-2xl font-bold'>02</h1>
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
        <div className='flex flex-wrap justify-center gap-6 my-6'>
          {items.map((item, index) => (
            <ProjectsCard key={index} img={item.src} title={item.title} />
          ))}
        </div>
        <div className='my-8'>
          <button className='flex w-full justify-center items-center text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Load more</button>
        </div>
      </div>
    </div>
  );
};

export default projects;
