import React from 'react'
import Image from 'next/image'
import MainImg2 from '/public/images/main2.jpg'
import Title from './title'

const aboutUs = () => {
  return (
    <div className='p-4 gap-2 '>
    <div className='flex justify-between border-b-2'>
      <h1 className='text-2xl font-bold'>About us</h1>
    <h1 className='text-2xl font-bold'>01</h1>
    </div>
        <div className=''>
            <div>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
            <Image
                className='w-auto h-auto '
                src={MainImg2}
                alt="Picture of the author"
                
            />
        </div>
        <div>
       
            
        </div>
    </div>
  )
}

export default aboutUs