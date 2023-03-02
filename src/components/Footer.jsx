import React from 'react'

export default function Footer() {
    return (
      <div>
        <footer className="mt-32">
          <div className="sm:px-8">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <a
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                          href="/"
                        >
                          About
                        </a>
                        <a
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                          href="/projects"
                        >
                          Projects
                        </a>
                        <a
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                          href="/contact"
                        >
                          Contact
                        </a>
                      </div>
                     
                      <p className="dark:text-zinc-200 font-medium text-sm">
                        {" "}
                        <span className='text-teal-500'>©</span> 2023 Personal Portfolio. All Rights
                        Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}
