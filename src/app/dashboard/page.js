import React from 'react'
import Image from 'next/image'
import MainImg from '../../../public/images/main.jpg'
import MainImg2 from '../../../public/images/main2.jpg'

const Dashboard = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold'>BLUE BEYOND</h1>
      <Image
        className='w-auto h-auto object-cover '
        src={MainImg2}
        alt="Picture of the author"
        priority={true}
      />
    <div id="cssportal-grid" className="grid  grid-cols-6 gap-0 w-full h-full flex my-4 p-4">
      <div id="div1" className="col-span-4 row-span-1 flex gap-2 items-baseline border-b-2 border-r-2 p-2 ">        
        <h1 className='text-4xl'>20</h1>
        <p>Years of Experience</p></div>
      <div id="div3" className="col-span-2 row-span-1 border-b-2 items-center justify-center p-2">
      <h1 className='text-4xl'>20+</h1>
        <p>Experience</p>
      </div>
      <div id="div4" className="col-span-2 row-span-1 border-r-2 justify-center p-2 ">
      <h1 className='text-4xl'>20</h1>
        <p>Experience</p></div>
      <div id="div5" className="col-span-2 row-span-1 border-r-2 p-2">
      <h1 className='text-4xl'>20</h1>
        <p>Experience</p></div>
      <div id="div6" className="col-span-2 row-span-1 p-2" >
      <h1 className='text-4xl'>20</h1>
        <p>Experience</p></div>
    </div>

    </div>
  )
}

export default Dashboard