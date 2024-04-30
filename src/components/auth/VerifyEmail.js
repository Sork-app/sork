import React from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })


const VerifyEmail = () => {


    const router = useRouter()

    return (
        <>
     <main className={`flex items-center justify-center min-h-screen }`}>
  <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            onClick={() => router.push('/')}
            className="mx-auto h-10 w-auto cursor-pointer"
            src="/SorkNew.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-4xl font-semibold leading-9  text-white">
            Check your Inbox
          </h2>
          <p className="mt-6 text-center text-xl  text-white">
            We have sent a verification email to your email address. Please check your inbox and follow the instructions to verify your account.
          </p>
        </div>


        

      </div>
        </main>

        </>
    )
}

export default VerifyEmail;

