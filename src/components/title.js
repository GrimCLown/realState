import React from 'react'

const title = ({title, num}) => {
  return (
    <div className='flex justify-between border-b-2'>
    <h1 className='text-2xl font-bold'>{title}</h1>
    <h1 className='text-2xl font-bold'>{num}</h1>
  </div>
  )
}

export default title