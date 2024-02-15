import React from 'react'

function Header() {

    return (
        <header className="pointer-events-none relative z-50 flex flex-col mt-20">
            <div className="sm:px-8 top-0 order-last -mb-3 pt-3 mt-24">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <div className="relative">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-zinc-800 dark:text-zinc-100">Hello, I am <span className='text-sky-400 dark:text-teal-500'>Sabbir</span> </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header