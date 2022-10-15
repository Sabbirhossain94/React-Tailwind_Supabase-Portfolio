import React from 'react'

export default function Contact({funcTopNav,funcSideNav}) {
    funcTopNav(true)
    funcSideNav(false)
    return (
        <div>
             <div className="bg-white dark:bg-slate-800 ">
                <main className="overflow-hidden ">
                    <div className="mt-[50px]  relative bg-white dark:bg-slate-800" aria-labelledby="contact-heading">
                        <div className="bg-warm-gray-50 absolute h-1/2 w-full" aria-hidden="true"></div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative bg-white shadow-xl">
                                <h2 id="contact-heading" className="sr-only">Contact us</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    <div className="relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 py-10 px-6 sm:px-10 xl:p-12">
                                        <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                            <svg className="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
                                                <defs>
                                                    <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#fff"></stop>
                                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
                                            <svg className="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
                                                <defs>
                                                    <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#fff"></stop>
                                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
                                            <svg className="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
                                                <defs>
                                                    <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#fff"></stop>
                                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-white">Contact information</h3>
                                        <p className="mt-6 max-w-3xl text-base text-teal-50">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
                                        <dl className="mt-8 space-y-6">
                                            <dt><span className="sr-only">Phone number</span></dt>
                                            <dd className="flex text-base text-teal-50">

                                                <svg className="h-6 w-6 flex-shrink-0 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                                <span className="ml-3">+1 (555) 123-4567</span>
                                            </dd>
                                            <dt><span className="sr-only">Email</span></dt>
                                            <dd className="flex text-base text-teal-50">

                                                <svg className="h-6 w-6 flex-shrink-0 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                                <span className="ml-3">support@workcation.com</span>
                                            </dd>
                                        </dl>
                                        <ul role="list" className="mt-8 flex space-x-12">
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">Facebook</span>
                                                    <svg className="h-7 w-7 text-indigo-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">GitHub</span>
                                                    <svg className="h-7 w-7 text-indigo-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">Twitter</span>
                                                    <svg className="h-7 w-7 text-indigo-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact form */}
                                    <div className="dark:bg-slate-800 py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                        <h3 className="text-warm-gray-900 text-lg font-medium dark:text-white">Send us a message</h3>
                                        <form action="#" method="POST" className=" mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                            <div>
                                                <label htmlFor="first-name" className="text-warm-gray-900 block text-sm font-medium dark:text-white">First name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="ring-1 mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800 focus:ring-indigo-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="text-warm-gray-900 block text-sm font-medium dark:text-white">Last name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="ring-1 mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="text-warm-gray-900 block text-sm font-medium dark:text-white">Email</label>
                                                <div className="mt-1">
                                                    <input id="email" name="email" type="email" autoComplete="email" className="ring-1  mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between">
                                                    <label htmlFor="phone" className="text-warm-gray-900 block text-sm font-medium dark:text-white">Phone</label>

                                                </div>
                                                <div className="mt-1">
                                                    <input type="text" name="phone" id="phone" autoComplete="tel" className="ring-1 mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800" aria-describedby="phone-optional" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="subject" className="text-warm-gray-900 block text-sm font-medium dark:text-white">Subject</label>
                                                <div className="mt-1">
                                                    <input type="text" name="subject" id="subject" className="ring-1  mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="flex justify-between">
                                                    <label htmlFor="message" className="text-warm-gray-900 block text-sm font-medium dark:text-white">Message</label>

                                                </div>
                                                <div className="mt-1">
                                                    <textarea id="message" name="message" rows="4" className="ring-1  mt-[10px] text-warm-gray-900 block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800" aria-describedby="message-max"></textarea>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 sm:flex sm:justify-end">
                                                <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
