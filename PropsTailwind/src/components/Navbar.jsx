import React from 'react'
import music from '../assets/music-solid.svg'

function Navbar() {
  return (
<div class="w-screen h-[10vh] bg-[#1e4ba7] flex flex-row justify-center items-center relative">
  <h1 className='text-[2.5rem] text-blue-50 text-center font-bold'> 
     My PlayList 
  </h1>  
    <img src ={music} height={40} className='h-[43px] absolute left-[4vw]'/>
 </div>
  )
}

export default Navbar
