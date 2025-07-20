import React from 'react'
import { Link } from 'react-router-dom'
import { FcSearch } from 'react-icons/fc'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa"


const Footer = () => {
  return (
    <div className='max-w-[1280] bg-orange-500 h-[70vh]  px-10 pt-6 mb-0'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center gap-4 hover:transition-all hover:translate-1.5'>
          <h1 className='text-4xl bg-white px-6 py-5 rounded-lg font-bold ' >Recipe Finder</h1>
          <FcSearch size={50} />
        </div>
      <div className='flex flex-col gap-6 hover:cursor-pointer '>
        <Link to='/' className='text-white text-2xl font-medium hover:text-3xl'>Home</Link>
        <Link to='/category' className='text-white text-2xl font-medium hover:text-3xl'>Category</Link>
        <Link to='/favorite' className='text-white text-2xl font-medium hover:text-3xl'>Favorite</Link>
        <Link to='/signUp' className='text-white text-2xl font-medium hover:text-3xl'>Sign Up</Link>
       
      </div>
        
      <div>
        <h1 className='text-2xl  font-extrabold mb-5'>follow us</h1>
        <div className='flex gap-6'>
          <FaFacebookSquare  size={40} color='white ' className='hover:transition-all hover:translate-1.5'/>
          <FaInstagramSquare  size={40} color='white' className='hover:transition-all hover:translate-1.5'/>
          <FaTwitterSquare  size={40} color='white' className='hover:transition-all hover:translate-1.5'/>
        </div>
        



      </div>
    </div>
    
    <div className='border-t border-white mt-6 flex  justify-between pt-7'>
      <div>
          <p className='text-white '>© 2025 Recipe Finder,All Rights Reserved</p>
      </div>
          
      <div className='flex text-white  gap-4 underline hover:cursor-pointer'>
        <p>Privacy policy</p>
        <p>Terms & conditions</p>
      </div>
          

        </div>
    </div>
  )
}

export default Footer