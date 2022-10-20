import "../../src/animation.css"
import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Navigation({ session }) {

    const location = useLocation();
    const [openMenuIcon, setOpenMenuIcon] = useState(false)
    const [dark, setDark] = useState(true);

    const navigation = [
        {
            Name: "About",
            Link: "/",
            isSession: false,
            property: "end",
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }
        },
        {
            Name: "Projects",
            Link: "/projects",
            isSession: false,
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }

        },
        {
            Name: "Contact",
            Link: "/contact",
            isSession: false,
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }

        },
        {
            Name: "Sign In",
            Link: "/sign",
            isSession: true,
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }

        },
        {
            Name: "Account",
            Link: "/account",
            isSession: true,
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }

        },
        {
            Name: "Dashboard",
            Link: "/dashboard",
            isSession: true,
            navLinkStyles: ({ isActive }) => {
                return {

                    color: isActive ? "rgb(56,189,248)" : 'white',
                    background: isActive ? "rgb(55,65,81)" : "none",
                }
            }

        }
    ];

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }, [dark]);

    useEffect(() => {
        setOpenMenuIcon(false)
    }, [location.pathname])


    return (
        <div>
            <nav className="shadow-xl bg-zinc-800 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center md:ml-[80px]">
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
                                    {navigation.map((item, key) =>
                                        (item.isSession ? '' : (<li key={key} className="list-none" ><NavLink key={item.id} to={item.Link} className="font-bold rounded-md px-3 py-2 text-sm" style={item.navLinkStyles} end>{item.Name}</NavLink></li>))
                                    )}
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
                    <div className={openMenuIcon ? "slide-down " : "slide-up"}>
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item,key) =>
                                (item.isSession ? '' : (<NavLink key={key} to={item.Link} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300" style={item.navLinkStyles} end>{item.Name}</NavLink>))
                            )}
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}
