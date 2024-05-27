import Link from 'next/link'
import React from 'react'

function DashboardCard({title,value,link}) {
  return (
    <div className='flex flex-col bg-white shadow-xl justify-between rounded-md w-48 items-center p-2'>
        <span className='md:text-2xl text-sm text-[#4f4f50]'>{title}</span>
        <span className='md:text-4xl text-2xl font-bold text-[#89898d]'>{value}</span>
        <Link href={link} className='text-[#b3b0b0] underline text-xs'>see more</Link>
    </div>
  )
}

export default DashboardCard