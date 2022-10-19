import React from 'react'

export default function Notification() {
    return (

        <div>
            <div class="absolute z-10 right-0 p-5">
                <div class="mb-4 flex w-full max-w-xs items-center rounded-lg bg-slate-800 dark:bg-zinc-800 p-6 text-gray-500 shadow  dark:text-gray-400" role="alert">
                    <div class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-500 dark:bg-green-800 dark:text-green-200">
                        <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Check icon</span>
                    </div>
                    <div class="ml-3 text-sm font-normal">Your Email has been sent!</div>
                    <button type="button" class="-mx-1.5 -my-1.5 ml-6 inline-flex h-8 w-8 rounded-lg dark:bg-zinc-800 p-1.5 text-gray-400 hover:bg-zinc-700 hover:text-gray-400 focus:ring-2 focus:ring-gray-300 bg-gray-800 dark:text-gray-200 dark:hover:bg-zinc-900 dark:hover:text-gray-200" data-dismiss-target="#toast-success" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg aria-hidden="true" class=" h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>

    )
}
