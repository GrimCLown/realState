import React from 'react'
import Image from 'next/image'


const projectCard = ({img, title}) => {

    console.log('img', img)


  return (
    <div className='bg-[#262626]'>
        <Image
            className='object-cover h-full w-[1000px'
            src={img}
            alt="Picture of the author"
            priority=  {true}
            width={150} 
            height={150}
        />
        <p>{title}</p>
    </div>
  )
}

export default projectCard