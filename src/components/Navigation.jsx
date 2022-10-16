import "../../src/animation.css"
import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation({ session }) {

    // const navLinkStyles = ({ isActive }) => {
    //     return {

    //         color: isActive ? "blue" : "gray",

    //     }
    // }
    const [openMenuIcon, setOpenMenuIcon] = useState(false)
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
            <nav className=" bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center md:ml-[80px]">
                            {/* <div className="flex-shrink-0">
                                <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                                <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div> */}
                            <div className="flex-shrink-0 sm:hidden">
                                <button className='rounded-md hover:bg-gray-800 px-1 py-1'>
                                    {openMenuIcon ? (<svg onClick={() => setOpenMenuIcon(false)} xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>) : (<svg onClick={() => setOpenMenuIcon(true)} className=" block h-8 w-8" xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>)}
                                </button>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</NavLink>
                                    <NavLink to="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</NavLink>
                                    <NavLink to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</NavLink>
                                    {session ? '' : (<NavLink to="/sign" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sign In</NavLink>)}
                                    {session ? '' : (<NavLink to="/account" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Account</NavLink>)}
                                    {session ? '' : (<NavLink to="/dashboard" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</NavLink>)}
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center">
                                <button type="button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="rounded-md px-3 py-2 hover:bg-gray-700">
                                    {dark ? (<svg viewBox="0 0 24 24" aria-hidden="true" className=" stroke-sky-500  h-8 w-8">
                                        <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                    </svg>) : (
                                        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500">
                                            </path>
                                            <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500">
                                            </path>
                                        </svg>
                                    )}
                                </button>
                                <div className="relative ml-3">
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex sm:hidden">
                            <button type="button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="rounded-md px-3 py-2 hover:bg-gray-700">
                                {dark ? (<svg viewBox="0 0 24 24" aria-hidden="true" className=" stroke-sky-500  h-8 w-8">
                                    <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">

                                    </path>
                                </svg>) : (
                                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500">
                                        </path>
                                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500">
                                        </path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                    <div className={openMenuIcon ? "slide-down " : "slide-up "}>
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</NavLink>
                            <NavLink to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</NavLink>
                            <NavLink to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</NavLink>
                        </div>
                      
                    </div>
                </div>
            </nav >
        </div >
    )
}
