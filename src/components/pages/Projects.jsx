import React from 'react'
import { useState, useEffect } from 'react';
import { portfolioClient } from '../../portfolioClient';
import AnimatedPage from '../AnimatedPages';

export default function Projects({ funcTopNav, funcSideNav }) {

    funcTopNav(true)
    funcSideNav(false)

    const [allprojects, setAllProjects] = useState([])

    const getProjects = async (e) => {
        let { data, error } = await portfolioClient
            .from('projects')
            .select('*')
        if (error) {
            console.log(error)
        } else {
            setAllProjects(data)
        }
    }
    useEffect(() => {
        getProjects()
    }, [])

    return (
        <AnimatedPage>
            <div>
                <div className=''>
                    <main className='p-[50px] bg-white dark:bg-slate-800'>
                        <div className=" sm:px-8">
                            <div className="mx-auto max-w-7xl lg:px-8">
                                <div className="relative px-4 sm:px-8 lg:px-12">
                                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                    </div>
                                    <header className="max-w-2xl">
                                        <h1 className="text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-500 sm:text-5xl">Things I've made trying to put my dent in the universe.</h1>
                                        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I've worked on several projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
                                    </header>
                                    <div className="transition-opacity mt-16 sm:mt-20">

                                        <ul className=" mx-auto mt-16 grid max-w-[26rem] grid-cols-1 gap-6 px-4 sm:mt-20 sm:max-w-[52.5rem] sm:grid-cols-2 sm:px-6 md:mt-32 lg:max-w-7xl lg:grid-cols-3 lg:gap-y-8 lg:px-8 xl:gap-x-8">
                                            {allprojects.map((item) => (
                                                <li key={item.id} className="shadow-md hover:shadow-xl ring-1 scale-95 transition hover:scale-100 dark:highlight-white/5 group relative rounded-3xl bg-slate-100 p-6 hover:bg-slate-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-900/50">
                                                    <div className="rounded-lg relative aspect-[672/400] transform overflow-hidden bg-slate-400 shadow-[0_2px_8px_rgba(15,23,42,0.08)] dark:bg-slate-700">
                                                        <img alt="" src={item.image} width="672" height="247" className="rounded-md absolute inset-0 h-full w-full" style={{ color: "transparent" }} />
                                                        <div style={{ opacity: "0", transition: "opacity 0.5s linear 0s" }}>
                                                            <video preload="none" playsInline="" className="absolute inset-0 h-full w-full [mask-image:radial-gradient(white,black)]">
                                                                <source src="videos/project_showcase.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flex flex-col items-start">
                                                        <div className='flex flex-row'><h2 className="text-sm font-semibold leading-6 text-slate-900 group-hover:text-sky-500 dark:text-white dark:group-hover:text-sky-400">
                                                            <p target="_blank">
                                                                <span className="inset-0 rounded-3xl">
                                                                </span>{item.title}
                                                            </p>
                                                        </h2>
                                                            <svg className="h-6 w-6 flex-none opacity-0 group-hover:opacity-100" viewBox="0 0 24 24" fill="none">
                                                                <path d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div >
                                                            <a href={item.link} target="_blank" className="group-hover:cursor-pointer w-full pr-2 border-r border-slate-900 dark:border-white group-hover:dark:border-sky-500 group-hover:border-sky-500 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-teal-500 dark:text-slate-400">Live Demo</a>
                                                            <a href="https://github.com/Sabbirhossain94/Good_Blog" target="_blank" className="group-hover:cursor-pointer w-full pl-2 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-teal-500 dark:text-slate-400">Github</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AnimatedPage>

    )
}
