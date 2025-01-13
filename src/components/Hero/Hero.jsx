import { Link } from 'react-router-dom';
import Header from './Header';
import TypeWriter from '../helpers/TypeWriter';

function Hero() {

    return (
        <div className="mt-44 mx-auto max-w-7xl px-4 sm:px-10 xl:px-24 text-center md:text-left">
            <Header />
            <div className="mt-6">
                <div className="relative">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            <span>
                                <TypeWriter/>
                            </span>
                        </h1>
                        <p className="typingeffect mt-6 text-base text-zinc-600 dark:text-zinc-400">
                            <span className="text-sky-400 dark:text-teal-500">
                            </span> A web
                            developer based in Dhaka, Bangladesh. I have
                            experience building websites based on <span className='text-sky-400 dark:text-teal-500'>ReactJS</span>, <span className='text-sky-400 dark:text-teal-500'>NextJS</span> and other cool frameworks. I love to learn new
                            things everyday.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start gap-6">
                            <Link to="/contact" className="inline-flex items-center gap-2 justify-center rounded-md py-3 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200/50 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-2 w-1/2 md:w-1/3 xl:w-1/4">
                                <p>
                                    Get in touch
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero