import { Link } from 'react-router-dom';
import TypeWriter from '../../helpers/TypeWriter';
import { RightGradient } from '../../helpers/Gradient';

function Hero() {

    return (
        <div className='relative'>
            <RightGradient />
            <div className="py-20 lg:py-36 mt-20 relative flex flex-col gap-10 lg:gap-0 lg:flex-row mx-auto max-w-7xl px-4 sm:px-10 xl:px-24 text-center md:text-left">
                <div data-aos="fade-right" className='lg:w-1/2 flex flex-col justify-center items-center'>
                    <div className="mt-6 text-center lg:text-start">
                        <div className="top-0 order-last -mb-3 pt-3 ">
                            <h1 className="title-font text-2xl sm:text-3xl xl:text-4xl mb-2 font-semibold text-zinc-800 dark:text-zinc-100">Hello, I am <span className='text-sky-400 dark:text-teal-500 '>Sabbir Hossain</span> </h1>
                        </div>
                        <div>
                            <div className="max-w-2xl">
                                <h1 className="text-4xl py-4 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                    <span className='text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl'>
                                        <TypeWriter />
                                    </span>
                                </h1>
                                <p className="typingeffect text-base text-zinc-600 dark:text-zinc-400">
                                    <span className="text-sky-400 dark:text-teal-500">
                                    </span> A Passionate web developer from Dhaka, Bangladesh, specializing in dynamic and responsive websites with modern frameworks like <span className='text-sky-400 font-semibold tracking-wider dark:text-teal-500'>ReactJS</span>, <span className='text-sky-400 font-semibold tracking-wider dark:text-teal-500'>NextJS</span> and other cool frameworks. With a keen eye for detail and a drive to learn, I thrive on turning ideas into digital experiences.

                                    I love crafting seamless digital experiences with performance and user-friendly design in mind.
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
                <div data-aos="zoom-in" className='flex justify-center lg:w-1/2'>
                    <img src="/assets/developer.png" className='w-full md:w-3/4 lg:w-full object-cover h-auto' alt='developer' />
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-0 z-0 h-full w-full bg-white dark:bg-slate-800"><div className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] -translate-x-[50%] translate-y-[20%] rounded-full bg-[rgba(56,189,248,0.5)] dark:bg-[rgba(20,184,166,0.5)] opacity-50 blur-[80px]"></div></div>
            </div>
        </div>
    )
}

export default Hero