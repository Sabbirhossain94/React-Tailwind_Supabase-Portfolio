import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'


export default function Sidebar({ session }) {

    const navLinkStyles = ({ isActive }) => {
        return {

            color: isActive ? "white" : "white",
            background: isActive ? "rgb(55,65,81)" : "none",

        }
    }

    return (
        <div>
            <div className="mt-[100px] relative z-40 md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
                <div className="fixed inset-0 z-40 flex">
                    <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button" className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Close sidebar</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">

                            {/* <div className="flex flex-shrink-0 items-center px-4">
                                
                            </div> */}

                            <nav className="mt-5 space-y-1 px-2">
                                <NavLink to="/" className="group flex items-center rounded-md  px-2 py-2 text-base font-medium text-white" style={navLinkStyles} end>
                                    <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    Home
                                </NavLink>
                                <NavLink to="/dashboard/projects" className="group flex items-center rounded-md  px-2 py-2 text-base font-medium text-white" style={navLinkStyles}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    Projects
                                </NavLink>
                                <NavLink to="/dashboard/gallery" className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" style={navLinkStyles}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    Gallery
                                </NavLink>

                            </nav>
                        </div>
                        <div className="flex flex-shrink-0 bg-gray-700 p-4">
                            <a href="#" className="group block flex-shrink-0">
                                <div className="flex items-center">
                                    <div>
                                        <img className="inline-block h-10 w-10 rounded-full" src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/public/image/avatar.png" alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-medium text-white">Sabbir Hossain</p>
                                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="w-14 flex-shrink-0"></div>
                </div>
            </div>
            {/* sidebar from md to lg screen */}
            <div className="hidden sm:absolute sm:top-0 sm:bottom-0 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <nav className="mt-5 flex-1 space-y-1 px-2">
                            <NavLink to="/" className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:text-white" style={navLinkStyles} end>
                                <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Home
                            </NavLink>
                            <NavLink to="/dashboard/projects" className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:text-white" style={navLinkStyles}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                </svg>
                                Projects
                            </NavLink>
                            <NavLink to="/dashboard/gallery" className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:text-white" style={navLinkStyles}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                Gallery
                            </NavLink>
                        </nav>
                    </div>
                    <div className="flex flex-shrink-0 bg-gray-700 p-4">
                        <Link to="/" className="group block w-full flex-shrink-0">
                            <div className="flex items-center">
                                <div>
                                    <img className="inline-block h-9 w-9 rounded-full" src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/public/image/avatar.png" alt="" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">Sabbir Hossain</p>
                                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
