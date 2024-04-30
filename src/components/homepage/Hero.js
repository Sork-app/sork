import React from 'react';
import Link from 'next/link';


const Hero = () => {
  return (
<>
    <div className="hero h-full bg-base-200 z-100">
      <div className="hero-content text-center">
        <div className="max-w-md ">

          <div className='flex justify-center' >
            <img src="/SorkNew.svg" alt="Sork Logo" className="w-56 h-30" />
          </div>

          <p className="py-6 text-xl">A digital workspace for startups.</p>
          <div className="flex justify-center gap-x-4">

            <Link href="/client/register" className="text-[#323232] font-bold btn btn-primary" disabled>Get Started (Invite Only)</Link>
            <Link href="/client/login" className="text-[#323232] font-bold btn btn-outline btn-primary">Go to your workspace</Link>
          </div>

          <p  className='mt-10 hover:underline text-sm cursor-pointer cursor-not-allowed' disabled>Download for macOS (Silicon)</p>
          <p className=' hover:underline text-sm cursor-pointer cursor-not-allowed' disabled>Download for Windows 11</p>


        </div>


      </div>



    </div>

</>
  )
}

export default Hero;

