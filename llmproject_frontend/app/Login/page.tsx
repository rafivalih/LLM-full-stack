import React from 'react'

const login = () => {
  return (
    <div className='bg-white min-h-[calc(100vh-60px)] text-black'>

        <div className=" flex flex-col gap-2">
        <input placeholder="UserName" type="text" required className='rounder-md bg-white border-gray-400 border hover:border-gray-700 hover:scale-105' />
        <input placeholder="mail@gmail.com" type="email"  required  className='rounder-md bg-white border-gray-400 border hover:border-gray-700 hover:scale-105'/>
        <input placeholder="UserName" type="password" required  className='rounder-md bg-white border-gray-400 border hover:border-gray-700 hover:scale-105' />
        </div>
        
        </div>
  )
}

export default login