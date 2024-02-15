import React, { useState } from 'react'
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link, useLocation } from 'react-router-dom';
import AnimatedPage from '../helpers/AnimatedPages';
import Loader from '../helpers/Loader';
import { certifications } from './certification';
import Footer from '../Footer/Footer';
import { saveAs } from 'file-saver';

function AboutMe() {
    const params = useLocation();
    const [delay, setDelay] = useState(0);
    const storageUrl = process.env.REACT_APP_STORAGE_CV_URL

    let timeoutValue = 2000;
    if (params.pathname === '/') {
        timeoutValue = 0;
    } else if (params.pathname === '/about') {
        timeoutValue = 2000;
    }
    setTimeout(() => {
        setDelay(1);
    }, timeoutValue);

    const handleCVDownload = () => {
        const fileUrl = `${storageUrl}CV%20of%20Sabbir%20Hossain.pdf?t=2024-02-14T18%3A36%3A20.452Z`
        fetch(fileUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                saveAs(blob, 'CV of Sabbir Hossain.pdf');
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

    return delay === 0 ? (
        <Loader />
    ) : (
        <AnimatedPage>
            <div className={`max-w-7xl xl:max-w-6xl mx-auto lg:px-8 ${params.pathname === "/about" ? "mt-32" : "mt-8"} `}>
                <section className="text-gray-600 body-font ">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-zinc-800 dark:text-zinc-100">About Me</h1>
                            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-zinc-800 dark:text-zinc-100"><span className='text-sky-400 dark:text-teal-500'>Meet</span> Sabbir Hossain </h1>
                            <p className="mb-4 leading-relaxed text-zinc-800 dark:text-zinc-400">With the expertise of a passionate, motivated and committed Web Application Developer, I am dedicated to assisting people and organizations in realizing their maximum potential. I have a wealth of expertise and a successful track record in problem-solving.</p>
                            {params.pathname === "/about" &&
                                <>
                                    <p className="mb-4 leading-relaxed text-zinc-800 dark:text-zinc-400">
                                        I have expertise in crafting dynamic user experiences using <span className='text-teal-500'>ReactJS</span> and <span className='text-teal-500'>NextJS</span>. I thrive on creating sleek and responsive designs, powered by modern CSS frameworks like <span className='text-teal-500'>TailwindCSS</span> and <span className='text-teal-500'>Ant Design</span>.With a keen eye for detail, I specialize in <span className='text-teal-500'>HTML5</span> and <span className='text-teal-500'>CSS3</span> to bring designs to life, while my GitHub profile reflects my dedication to collaboration and version control.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-zinc-800 dark:text-zinc-400">
                                        Outside of coding, you'll often find me refining APIs and testing endpoints with Postman, ensuring smooth communication between front and backend systems. Get in touch, and let's build something incredible!
                                    </p>

                                </>
                            }
                            <div className="flex justify-center">
                                {params.pathname === "/" ?
                                    <>
                                        <Link to="/about">
                                            <p className=" inline-flex items-center gap-2 justify-center rounded-md py-3 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-2 w-full">
                                                Read More
                                            </p>
                                        </Link>
                                    </> :
                                    <button
                                        onClick={handleCVDownload}
                                        className=" inline-flex items-center gap-2 justify-center rounded-md py-3 px-8 text-sm outline-offset-2 transition active:transition-none bg-zinc-100 font-medium text-zinc-900 hover:text-sky-400 hover:bg-zinc-200 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:text-teal-500 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-2 w-full">
                                        Download CV
                                        <svg
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            aria-hidden="true"
                                            className="animate-bounce h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-400 dark:group-active:stroke-zinc-50"
                                        >
                                            <path
                                                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </button>
                                }
                            </div>
                            {params.pathname === "/" && <div className="mt-6 flex gap-2">
                                <a href="https://www.linkedin.com/in/sabbir-hossain-b73726214/">
                                    <BsLinkedin className="cursor-pointer text-xl text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 scale-100 hover:scale-105 transition" />
                                </a>
                                <a href="https://github.com/Sabbirhossain97">
                                    <AiFillGithub className="cursor-pointer text-xl text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 ml-4 scale-100 hover:scale-105 transition" />
                                </a>
                                <a href="mailto:sabbirhossainbd199@gmail.com">
                                    <SiGmail className="cursor-pointer text-xl text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 ml-4 scale-100 hover:scale-105 transition" />
                                </a>
                            </div>
                            }
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center ">
                            <img className="object-cover object-center rounded " alt="hero" src="./assets/me.png" />
                        </div>
                    </div>
                </section>
                {params.pathname === "/about" &&
                    <>
                        <div className="rounded-2xl border border-zinc-100 p-5 w-10/12 md:w-11/12 xl:w-full mx-auto xl:mx-0 dark:border-zinc-700/40">
                            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                    className="h-6 w-6 flex-none"
                                >
                                    <path
                                        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                                        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                                    ></path>
                                    <path
                                        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                                        className="stroke-zinc-400 dark:stroke-zinc-500"
                                    ></path>
                                </svg>
                                <span className="ml-3 mt-1">
                                    Experience and Certifications
                                </span>
                            </h2>
                            <ol className="mt-6 space-y-4">
                                {certifications.map((item, key) => (
                                    <li key={key} className="flex gap-4 ">
                                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <img
                                                alt=""
                                                src={item.logo}
                                                width="32"
                                                height="32"
                                                decoding="async"
                                                data-nimg="future"
                                                className="rounded-full h-10 w-10"
                                                loading="lazy"
                                                style={{ color: "transparent" }}
                                            />
                                        </div>
                                        <dl className="flex flex-col md:flex-row flex-auto flex-wrap gap-x-2 ">
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 ">
                                                {item.certificate}
                                            </dd>
                                            <dd className="text-xs text-zinc-500 dark:text-zinc-400 ">
                                                {item.Institution}
                                            </dd>
                                            <dd className="md:ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                                                <span aria-hidden="true">
                                                    {item.Issued}
                                                </span>
                                            </dd>
                                        </dl>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </>
                }
            </div>
            {params.pathname === "/about" && <Footer />}

        </AnimatedPage>
    )
}

export default AboutMe