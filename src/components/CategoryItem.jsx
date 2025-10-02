import React from 'react'

const CategoryItem = ({ className, imgSrc, imgAlt, categoryName }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between 
      w-23 h-23  md:w-25 md:h-25 lg:w-38 lg:h-38 
      border border-gray-600 rounded-lg p-2 hover:shadow-md transition-shadow 
      ${className}`}
    >
      <div className="w-full h-3/4 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <p className="pt-1 text-center text-xs md:text-base font-medium">
        {categoryName}
      </p>
    </div>
  )
}

export default CategoryItem