import React from 'react'

const CategoryItem = ({className,imgSrc, imgAlt, categoryName}) => {
  return (
    <>
    <div className={` h-[150px] ${className}`}>
        <img className={`flex justify-center m-auto hover:cursor-pointer`} src={imgSrc} alt={imgAlt} />
        <p className='pt-2 text-center'>{categoryName}</p>
    </div>
    </>
  )
}

export default CategoryItem