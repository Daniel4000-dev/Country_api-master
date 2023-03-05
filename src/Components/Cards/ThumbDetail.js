import React from 'react'

function ThumbDetail({title, image_url, population, region, capital}) {
  return (
    <div className='container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4'>
      <div className='p-4'>
        <img src={image_url.svg} className='h-1/2  w-full rounded-tl-lg rounded-tr-lg' alt={image_url.alt} />
        <h3><span>{title}</span></h3>
        <p className='text-x5'>Population: <span className='text-grey-700 dark:textgray-300'>{population}</span></p>
        <p className='text-x5'>Region: <span className='text-grey-700 dark:textgray-300'>{region}</span></p>
        <p className='text-x5'>Capital: <span className='text-grey-700 dark:textgray-300'>{capital}</span></p>
      </div> 
    </div>
  )
}

export default ThumbDetail