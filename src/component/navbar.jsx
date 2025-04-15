import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-slate-800 text-white sticky top-0'>
      <div className="myContainer flex justify-between items-center px-4 py-5 h-10">

        <div className="logo font-bold text-white text-3xl pl-[250px] hover:cursor-pointer" >
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span>
          <span className='text-green-700'>OP/&gt;</span>
         
      </div>




       <ul className='text-xl  font-[18px] pr-[240px]'>
        {/* <li className='flex gap-[55px]'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="/">About</a>
            <a className='hover:font-bold' href="/">Contact</a>
            
        </li> */}
        <button className=" github  text-white  invert w-16 p-5 rounded-full hover:cursor-pointer ">
          <a className='flex items-center' href="https://github.com/Talibchoudhary01" target='_blank'>
          <img src="./github.svg" alt="github logo" />
         <p className='text-black text-xl font-semibold pl-2 '>GitHub</p>
          </a>
        </button>
    </ul>
    </div>
    </nav>
  )
}

export default navbar
