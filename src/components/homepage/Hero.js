import React from 'react';
import Link from 'next/link';


const Hero = () => {
  return (

    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">

          <div className='flex justify-center'>
            <img src="/SorkNew.svg" alt="Sork Logo" className="w-96 h-30" />
          </div>

          <p className="py-6 text-xl">No nonsense startup communication.</p>
          <Link href="/client/home" className="btn btn-primary">Open Sorkala</Link>
        </div>
      </div>
    </div>

  )
}

export default Hero;

