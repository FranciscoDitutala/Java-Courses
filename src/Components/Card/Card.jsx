import React from 'react'

const Card = ({imagePath, title}) => {
  return (
    <div className='flex flex-col p-8'>
        <img src={imagePath}  className='max-h-[260px] max-w-[270px] min-w-[250px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer'  alt='jeans'/>
        <p className='text-[16px] p-[5px]'> {title} </p>
    </div>
  )
}

export default Card
