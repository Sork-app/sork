import { useEffect, useState } from 'react';
import Loader from '../../components/general/Loader.js';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
      //  setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
       // setIsLoading(false);
      });
  }, []);
  
  return (
    <main
      className={`}`}
    >
      {isLoading && <Loader />}

      {!isLoading &&
        <div className='grid grid-cols-12'>
          <div className='w-12 h-screen col-span-3'>


            <ul className=" menu w-80  bg-base-200 text-base-content h-full">
              {/* Sidebar content here */}


              <div className='flex items-center w-full max-w-xs'>
                <div>
                  <select className="select select-ghost">
                    <option selected>CTFGuide Corporation</option>
                    <option>Fun Times</option>
                  </select>
                </div>

                <div className='ml-auto'>
                  <button className='btn '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <li><a>#general</a></li>
              <li><a>#engineering</a></li>

              <div className="flex-grow"></div>

              <li className='mb-4'><button className='btn  btn-primary'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
                Account Settings</button></li>

              <li><button className='btn  btn-error btn-outline'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
                Logout</button></li>

            </ul>




          </div>

          <div className='col-span-9 pr-10'>
            <h1 className='text-xl font-semibold mt-4'>#general</h1>
            <p>Welcome to the general channel</p>


            <div className="chat chat-start mt-4">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://firebasestorage.googleapis.com/v0/b/cyberjags-8b081.appspot.com/o/no%40ctfguide.com%2Fpictures%2Fpfp?alt=media&token=a573b854-7691-4611-aacb-0f0456a485bb" />
                </div>
              </div>
              <div className="chat-header">
                laphatize
                <time className="text-xs opacity-50 ml-2">12:45</time>
              </div>
              <div className="chat-bubble">testing</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://www.sai-is-gay.com/gay1.png" />
                </div>
              </div>
              <div className="chat-header">
                Sai
                <time className="ml-2 text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">freaky ah!</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>


            <div className='relative h-2/3'>
              <div className='absolute bottom-0 w-full px-4 py-2'>
                <div className='flex'>
                  <input
                    value={value}
                    onChange={handleInputChange}
                    onKeyPress={(e) => { if (e.key === 'Enter') { sendMessage(value); e.preventDefault(); setValue(""); messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); } }}
                    type="text"
                    className="w-full bg-base-200 px-4 py-2 rounded-full mr-5"
                    placeholder="Type your message here..."
                  />
                  <button onClick={() => { sendMessage(value); setValue(""); messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }} className="btn btn-primary rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5 " />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </main>
  )
}

