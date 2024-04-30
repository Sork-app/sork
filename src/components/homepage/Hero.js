import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Hero = () => {
  const [konamiActive, setKonamiActive] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActive(true);
          konamiIndex = 0; // reset for potential re-entry
        }
      } else {
        konamiIndex = 0; // reset index if the wrong key is pressed
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
<>
    <div className="hero h-full bg-base-200 z-100">
      <div className="hero-content text-center">
        <div className="max-w-md ">

          <div className='flex justify-center' >
            <img src="/SorkNew.svg" alt="Sork Logo" className="w-56 h-30" />
          </div>

          <p className="py-6 text-xl">A digital workspace for startups.</p>
          <p className=' bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-xl mb-4'>{konamiActive ? 'You have unlocked Sork!' : ''}</p>
          <div className="flex justify-center gap-x-4">

            <Link href="/client/register" className={`text-[#323232] font-bold btn btn-primary ${konamiActive ? '' : 'disabled'}`} disabled={!konamiActive}>Get Started (Invite Only)</Link>
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

