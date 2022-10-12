import React from 'react'
import { superBlogClient } from '../superBlogClient'
import { useState, useEffect } from 'react';
export default function BlogFeed() {

    const [session, setSession] = useState(null);
    const [showMoreblogs, setShowMoreblogs] = useState(2)
    const [allBlog, setAllBlog] = useState([]);

    useEffect(() => {

        superBlogClient.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        superBlogClient.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

    }, [])

    const fetchMoreBlogs = () => {
        setShowMoreblogs(prevState => prevState + 3)

    }

    const getAllBlogs = async (e) => {

        let { data, error } = await superBlogClient
            .from('blogs')
            .select('*')
            .range(0, showMoreblogs)
        if (error) {
            console.log(error)
        } else {

            setAllBlog(data);
        }
    }

    useEffect(() => {
        getAllBlogs()
    }, [showMoreblogs])

    return (
        <div>
            <div className="flex flex-col gap-16">
                {allBlog.map((item) => (

                    <li key={item.id} className="list-none"><article className="group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                            <a href="#">
                                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl">
                                </span>
                                <span className="relative z-10">{item.title}</span>
                            </a>
                        </h2>
                        <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2022-09-05">
                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500">
                                </span>
                            </span>{item.inserted_at}
                        </time>
                        <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400" dangerouslySetInnerHTML={{ __html: item.content }} />
                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                            Read article
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">

                                </path>
                            </svg>
                        </div>
                    </article>
                    </li>

                ))}
                <button onClick={fetchMoreBlogs} className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full" href="/#">Show More<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                    <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </svg>
                </button>
            </div>
        </div>
    )
}
