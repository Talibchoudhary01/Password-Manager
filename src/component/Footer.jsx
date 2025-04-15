import React from 'react'

const Footer = () => {
  return (
    

    <div className='flex   flex-col items-center justify-center bg-slate-800  w-full '>
        <a className='' href="https://leetcode.com/u/Talib_choudhary/" target='_blank'>
         <h1 className="text-2xl font-bold text-center ">
          <span className="text-green-700 ">&lt;</span>
          <span className='text-white'>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        </a>
        <div className='flex items-center gap-2  text-white ml-4 '>
          <a className='flex gap-2' href="https://www.instagram.com/choudhary01420/" target='_blank'>
      Created with <img className='h-7' src="./heart.png" alt="love" /> by Talib Choudhary
          </a>
      </div>
    </div>
   
  )
}

export default Footer
