import React from 'react'
import Image from 'next/image';
import ProjectsCard from '@/components/projectCard';
import Title from '@/components/title';
import Button from '@/components/button';
import Paragraph from '@/components/paragraph';

const page = () => {
    const items = [
        { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
        { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
        { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
        { src: '/images/main2.jpg', title: 'Lorem ipsum dolor ' },
      ];
  return (
    <div className='p-4 gap-2'>
       <Title title={'Projects'} num={'02'}/>
      <div>
      <Paragraph title={""} paragraph1={"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} paragraph2={""}/>
        <div className='flex flex-wrap justify-center gap-6 my-6'>
          {items.map((item, index) => (
            <ProjectsCard key={index} img={item.src} title={item.title} />
          ))}
        </div>
        <Button/>
      </div>
    </div>
  )
}

export default page