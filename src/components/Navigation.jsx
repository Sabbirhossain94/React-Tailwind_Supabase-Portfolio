import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({props1,props2}) {
    const [dark, setDark] = useState(true);
    useEffect(() => {
        if (dark) {
          document.body.classList.add('dark');
        }
        else {
          document.body.classList.remove('dark');
    
        }
    
      }, [dark]);
    return (
        <div>
            <div className='flex justify-between border-double pb-4 border-b-2  mb-[3.5rem]'>
                <nav class="flex  justify-start  space-y-1" aria-label="Sidebar">
                    <a href="#" class="flex  items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900" aria-current="page">
                        <svg class="-ml-1 mr-3 h-10 w-10 flex-shrink-0  text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span class="dark:text-white text-lg">Home</span>
                    </a>

                    <a href="#" class="flex items-center group  rounded-md mx-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                        <svg class="-ml-1 mr-3 h-10 w-10 flex-shrink-0 text-gray-400 dark:group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        <span class="text-lg dark:group-hover:text-white">Projects</span>

                    </a>


                    <a href="#" class="flex group items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600  hover:text-gray-900">
                        <svg class="-ml-1 group-hover:fill-white mr-3 h-10 w-10 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span class="text-lg dark:group-hover:text-white">Calendar</span>
                    </a>
                </nav>
                <div class="pointer-events-auto flex flex-col justify-center">
                    <button type="button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode" class="">
                        {dark ? (<svg viewBox="0 0 24 24" aria-hidden="true" class=" fill-teal-800  h-8 w-8">
                            <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-sky-500"></path></svg>

                        )}


                    </button>
                </div>
            </div>
        </div>
    )
}
