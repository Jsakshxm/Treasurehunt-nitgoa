import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center justify-between min-h-screen p-10 lg:p-24">
      <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
        <input className='p-4 text-lg rounded-md w-full max-w-[500px]' type="text" placeholder='YourEmailId' name="" id="" />
        <input className='p-4 text-lg rounded-md w-full max-w-[500px]' type="password" placeholder='password' name="" id="" />
      </div>
    </div>
  )
}

export default page