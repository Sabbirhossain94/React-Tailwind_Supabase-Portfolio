import { Link } from 'react-router-dom';
import TypeWriter from '../../helpers/TypeWriter';

function Hero() {

    return (
        <div className="py-44 mt-20 flex flex-col gap-10 lg:gap-0 lg:flex-row mx-auto max-w-7xl px-4 sm:px-10 xl:px-24 text-center md:text-left">
            <div className='lg:w-1/2 flex flex-col justify-center items-center'>
                <div className="mt-6 text-center lg:text-start">
                    <div className="top-0 order-last -mb-3 pt-3 ">
                        <h1 className="title-font text-3xl mb-4 font-semibold text-zinc-800 dark:text-zinc-100">Hello, I am <span className='text-sky-400 dark:text-teal-500'>Sabbir</span> </h1>
                    </div>
                    <div className="relative ">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl py-4 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                <span className='text-3xl sm:text-4xl lg:text-4xl xl:text-5xl'>
                                    <TypeWriter />
                                </span>
                            </h1>
                            <p className="typingeffect text-base text-zinc-600 dark:text-zinc-400">
                                <span className="text-sky-400 dark:text-teal-500">
                                </span> A web
                                developer based in Dhaka, Bangladesh. I have
                                experience building websites based on <span className='text-sky-400 dark:text-teal-500'>ReactJS</span>, <span className='text-sky-400 dark:text-teal-500'>NextJS</span> and other cool frameworks. I love to learn new
                                things everyday.
                            </p>
                            <div className="mt-6 flex justify-center lg:justify-start gap-6">
                                <Link to="/contact" className="inline-flex items-center gap-2 justify-center rounded-md py-3 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200/50 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-2 w-1/2 md:w-1/3 xl:w-1/4">
                                    <p className='whitespace-nowrap'>
                                        Get in touch
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:w-1/2'>
                <img src="/assets/developer.png" className='w-full md:w-3/4 lg:w-full object-cover h-auto' />
            </div>
        </div>
    )
}

export default Hero