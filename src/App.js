import './App.css';
import BlogFeed from './components/BlogFeed';
import Scroll_to_top from "./components/sub-components/Scroll_to_top"
//import { Link } from 'react-router-dom';

function App({ session, funcTopNav, funcSideNav}) {

  funcTopNav(true)
  funcSideNav(false)
  

  return (

    <div>
      <div>
        <div className="relative">
          <header className="pointer-events-none relative z-50 flex flex-col" style={{ height: "var(--header-height)", marginBottom: "var(--header-mb)" }}>
            <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
            <div className="sm:px-8 top-0 order-last -mb-3 pt-3" style={{ position: "var(--header-position)" }}>
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="top-[var(--avatar-top,theme(spacing.3))] w-full" style={{ position: "var(--header-inner-position)" }}>
                      <div className="relative">
                        <div
                          className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                          style={{ opacity: "var(--avatar-border-opacity, 0)", transform: "var(--avatar-border-transform)" }}
                        >
                        </div>
                        <a aria-label="Home" className="block h-16 w-16 origin-left pointer-events-auto" style={{ transform: "var(--avatar-image-transform)" }} href="/">
                          <img
                            alt=""
                            sizes="4rem"
                            src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/public/image/avatar.png"
                            width="512"
                            height="512"
                            decoding="async"
                            data-nimg="future"
                            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                            style={{ color: "transparent" }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div style={{ height: "var(--content-offset)" }}>

          </div>
          <main>
            <div className="sm:px-8 mt-9">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Full Stack Web developer</h1>
                      <p className="typingeffect mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I'm Sabbir, a web developer based in Dhaka, Bangladesh. I have experience building websites based on React JS, Next JS and other cool frameworks. I love to learn new things everyday.

                      </p>
                      <div className="mt-6 flex gap-6">

                        <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/Sabbirhossain94">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                            >
                            </path>
                          </svg>
                        </a>
                        <a className="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://www.linkedin.com/in/sabbir-hossain-b73726214/">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                            <path
                              d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:px-8 mt-16 md:mt-24">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className=" grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
                      <BlogFeed session={session} />
                      <div className="space-y-6 lg:pl-16 xl:pl-24">

                        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
                              <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
                              <path
                                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                                className="stroke-zinc-400 dark:stroke-zinc-500"
                              ></path>
                            </svg>
                            <span className="ml-3">Education and Certifications</span>
                          </h2>
                          <ol className="mt-6 space-y-4">
                            <li className="flex gap-4">
                              <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                              >
                                <img alt="" src="https://i.imgur.com/ptq7E9Q.jpg" width="32" height="32" decoding="async" data-nimg="future" className="rounded-full h-10 w-10" loading="lazy" style={{ color: "transparent" }} />
                              </div>
                              <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Institution</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Bachelor in CSE</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">East West University</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2019 until Present">
                                  <time dateTime="2019">2015</time>
                                  <span aria-hidden="true">—</span>
                                  <time dateTime="2022">2020</time>
                                </dd>
                              </dl>
                            </li>
                            <li className="flex gap-4">
                              <div
                                className=" relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                              >
                                <img alt="" src="https://i.imgur.com/1FWhJeT.png" width="28" height="28" decoding="async" data-nimg="future" className="rounded-full h-10 w-10" loading="lazy" style={{ color: "transparent" }} />
                              </div>
                              <a className="flex flex-auto flex-wrap gap-x-2" href="https://www.freecodecamp.org/certification/sabbir_hossain_/javascript-algorithms-and-data-structures" target="_blank">
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                  <dt className="sr-only">Company</dt>
                                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">FreeCodeCamp</dd>
                                  <dt className="sr-only">Role</dt>
                                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">JS Algorithms and Data Structures</dd>
                                  <dt className="sr-only">Date</dt>
                                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2014 until 2019">
                                    <span aria-hidden="true">—</span>
                                    <time dateTime="2019">December 9,
                                      2020</time>
                                  </dd>
                                </dl>
                              </a>
                            </li>
                            <li className="flex gap-4">
                              <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                              >
                                <img alt="" src="https://i.imgur.com/1FWhJeT.png" width="28" height="28" decoding="async" data-nimg="future" className="rounded-full h-10 w-10" loading="lazy" style={{ color: "transparent" }} />
                              </div>
                              <a className="flex flex-auto flex-wrap gap-x-2" href="https://www.freecodecamp.org/certification/sabbir_hossain_/responsive-web-design" target="_blank">
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                  <dt className="sr-only">Company</dt>
                                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">FreeCodeCamp</dd>
                                  <dt className="sr-only">Role</dt>
                                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Responsive Web Design</dd>
                                  <dt className="sr-only">Date</dt>
                                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2014">
                                    <span aria-hidden="true">—</span>
                                    <time dateTime="2014">February 3,
                                      2021</time>
                                  </dd>
                                </dl>
                              </a>
                            </li>
                            <li className="flex gap-4">
                              <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                              >
                                <img alt="" src="https://i.imgur.com/1FWhJeT.png" width="28" height="28" decoding="async" data-nimg="future" className="rounded-full h-10 w-10" loading="lazy" style={{ color: "transparent" }} />
                              </div>
                              <a className="flex flex-auto flex-wrap gap-x-2" href="https://www.freecodecamp.org/certification/sabbir_hossain_/front-end-development-libraries" target="_blank">
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                  <dt className="sr-only">Company</dt>
                                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">FreeCodeCamp</dd>
                                  <dt className="sr-only">Role</dt>
                                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Front End Development Libraries</dd>
                                  <dt className="sr-only">Date</dt>
                                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
                                    <span aria-hidden="true">—</span>
                                    <time dateTime="2011">March 27,
                                      2021</time>
                                  </dd>
                                </dl></a>
                            </li>
                            <li className="flex gap-4">
                              <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                              >
                                <img alt="" src="https://i.imgur.com/1FWhJeT.png" width="28" height="28" decoding="async" data-nimg="future" className="rounded-full h-10 w-10" loading="lazy" style={{ color: "transparent" }} />
                              </div>
                              <a className="flex flex-auto flex-wrap gap-x-2" href="https://www.freecodecamp.org/certification/sabbir_hossain_/back-end-development-and-apis" target="_blank">
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                  <dt className="sr-only">Company</dt>
                                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">FreeCodeCamp</dd>
                                  <dt className="sr-only">Role</dt>
                                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Back End Development and APIs</dd>
                                  <dt className="sr-only">Date</dt>
                                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
                                    <span aria-hidden="true">—</span>
                                    <time dateTime="2011">June 12,
                                      2021</time>
                                  </dd>
                                </dl>
                              </a>
                            </li>
                          </ol>
                          <a
                            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                            href="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/public/image/CV.pdf"
                            download="cv.pdf"
                          >
                            Download CV
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
                              <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              </path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Scroll_to_top />
          <footer className="mt-32">
            <div className="sm:px-8">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/">About</a>
                          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">Projects</a>
                          <a className="transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact">Contact</a>
                        </div>
                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>

  )
}

export default App
