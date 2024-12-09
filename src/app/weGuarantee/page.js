import React from 'react'
import Title from '@/components/title'

const page = () => {
  return (
    <div className='p-4 gap-2'>
        <Title title={'We Guarantee'} num={'03'}/>
        <div className='flex flex-col justify-center items-center'>
            <h1>HAPPINESS</h1>
            <h1>RELIABILITY</h1>
            <h1>OPENESS</h1>
        </div>
    </div>
  )
}

export default page