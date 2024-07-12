import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function CategoryCard({img,title,color}) {
  return (
      <Link href={'categories/' + title}>
          <div
              className={'relative w-64 h-48 shadow-xl cursor-pointer rounded group transition ease-in-out duration-300 hover:scale-105 ' + color}>
              <Image src={img} width={100} height={100} className='w-full h-full object-contain group-hover:opacity-75'
                     alt="category"/>
              <h2 className='absolute right-2 bottom-4 text-gray-800 group-hover:text-white group-hover:text-2xl font-semibold transition-colors duration-500'>{title}</h2>
          </div>

</Link>
)
}

export default CategoryCard
