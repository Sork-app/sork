import { useRouter } from 'next/router'
import { useState } from 'react'

import { createClient } from '@/utils/supabase/component'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })




export default function LoginPage() {
    const router = useRouter()
    const supabase = createClient()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // google flow
    const [googleAuth, setGoogleAuth] = useState(false)
    const [githubAuth, setGithubAuth] = useState(false)


    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        if (error) {
            toast.error(error.message);
        } else {
            if (data) {
                console.log(data);
                router.push('/client/home');
            }
        }
    }

    async function logIn() {
        event.preventDefault(); 
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            toast.error(error.message)
        } else {
            if (data) {
                console.log(data)
                toast.success('Logged in successfully')
            }
        }
    }

    async function signUp() {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) {
            console.error(error)
        }
        router.push('/')
    }

    return (
        <main className={`flex items-center justify-center min-h-screen }`}>
  <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
       
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-base-200  py-12 shadow sm:rounded-sm border-t-4 border-primary px-10">
          <div className="flex">
       <div>
          <h2 className=" mb-4  text-2xl font-semibold leading-9 tracking-tight text-white">
            Choose your workspace
          </h2>
          </div>
          <div className='ml-auto'>
          <img
            onClick={() => router.push('/')}
            className="mt-1.5 h-6 w-full cursor-pointer"
            src="/SorkNew.svg"
            alt="Your Company"
          />
          </div>
        </div>

        <div className='mt-2 bg-base-100 cursor-pointer px-2 py-2 shadow sm:rounded-sm  '>
        <div className='flex items-center'>
            <img className='w-14 rounded-lg   ' src="https://media.licdn.com/dms/image/C560BAQF04W_6w7WX0A/company-logo_100_100/0/1677520034246/ctfguide_logo?e=1722470400&v=beta&t=apY2_xFhT-kwGYQ-68-13BysQwncHCygZzz9imU43CA" alt="CTFGuide Logo"></img>
            <h1 className='text-white text-xl ml-4 '>CTFGuide Corporation</h1>
          </div>
        </div>

        <div className=' mt-2 bg-base-100 cursor-pointer px-2 py-2 shadow sm:rounded-sm  '>
        <div className='flex items-center'>
            <img className='w-14 rounded-lg  ' src="../../Sork_Logo_White.png" alt="CTFGuide Logo"></img>
            <h1 className='text-white text-xl ml-4 '>Sork HQ</h1>
          </div>
        </div>

        <div className=' mt-2 bg-base-100 cursor-pointer px-2 py-2 shadow sm:rounded-sm  '>
        <div className='flex items-center'>
            <img className='w-14 rounded-lg   ' src="https://avatars.githubusercontent.com/u/36462227?s=200&v=4" alt="CTFGuide Logo"></img>
            <h1 className='text-white text-xl ml-4 '>STiBaRC LLC</h1>
          </div>
        </div>

      
       

       
          </div>


        </div>

        <ToastContainer />

      </div>

      
        </main>
    )
}