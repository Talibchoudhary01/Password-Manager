import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './component/navbar'
import Manager from './component/Manager'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='bg-slate-200'>
      
   
    <Manager/>
    </div>
    <Footer/>

     </>
  )
}

export default App
