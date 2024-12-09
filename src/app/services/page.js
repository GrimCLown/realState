import React from 'react'
import Title from '@/components/title'
import Paragraph from '@/components/paragraph'
import Button from '@/components/button'

const page = () => {
  return (
    <div className='p-4'>
        <Title title={'Services'} num={'04'}/>
        <Paragraph title={'Services'} paragraph1={'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod  '} paragraph2={'tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam '} />
        <Button/>
        <Paragraph title={'Services'} paragraph1={'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod '} paragraph2={'tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam'} />
        <Button/>


    </div>
  )
}

export default page