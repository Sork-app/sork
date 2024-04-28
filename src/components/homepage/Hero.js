import React from 'react';
import Link from 'next/link';


const Hero = () => {
  return (

    <div className="hero min-h-screen bg-base-200 -mt-20">
      <div className="hero-content text-center">
        <div className="max-w-md">

          <div className='flex justify-center'>
            <img src="/SorkNew.svg" alt="Sork Logo" className="w-96 h-30" />
          </div>

          <p className="py-6 text-xl">No nonsense startup communication.</p>
          <div className="flex justify-center gap-x-4">

            <Link href="/client/register" className="text-[#323232] font-bold btn btn-primary">Get Started</Link>
            <Link href="/client/login" className="text-[#323232] font-bold btn btn-outline btn-primary">Go to your workspace</Link>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero;

