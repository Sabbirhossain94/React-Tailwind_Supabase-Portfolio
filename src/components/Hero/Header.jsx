import React from 'react'

function Header() {

    return (
        <header className="pointer-events-none relative z-50 flex flex-col">
            <div className="top-0 order-last -mb-3 pt-3">
                <h1 className="title-font text-3xl mb-4 font-semibold text-zinc-800 dark:text-zinc-100">Hello, I am <span className='text-sky-400 dark:text-teal-500'>Sabbir</span> </h1>
            </div>
        </header>
    )
}

export default Header