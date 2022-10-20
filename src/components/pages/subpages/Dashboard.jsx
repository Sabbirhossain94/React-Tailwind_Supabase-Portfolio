import React from 'react'
import { useState, useEffect } from 'react';
import { portfolioClient } from '../../../portfolioClient';
import { NavLink, Link } from 'react-router-dom';
import AddProject from './AddProject';
import Gallery from './Gallery';

export default function Sidebar({ funcTopNav }) {

    funcTopNav(false)

    const [open, setOpen] = useState(true);
    const [allprojects, setAllProjects] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showGallery, setShowGallery] = useState(false)


    const navLinkStyles = ({ isActive }) => {
        return {

            color: isActive ? "white" : "white",
            background: isActive ? "rgb(55,65,81)" : "none",

        }
    }

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

    const deleteProject = async (id) => {
        const { data, error } = await portfolioClient
            .from('projects')
            .delete()
            .match({ id: id })
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div>
            {showProjectForm && <AddProject
                showProjectForm={showProjectForm}
                setShowProjectForm={setShowProjectForm}

            />}

            <div className="flex">
                <div className="sm:w-76 xl:w-80 h-screen bg-slate-900 py-4 px-3 shadow-lg shadow-slate-500/40">
                    <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 rounded-full p-2 origin-left">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className="mt-[50px]">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="flex items-center rounded-lg p-2 text-base  font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                                    <svg xmlns="http://www.w3.org/2000/svg" color="white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <span className="ml-3 whitespace-nowrap origin-left">Home</span>
                                </Link>
                            </li>
                            <li>
                                <a  onClick={()=>setShowGallery(false)} className="flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a  onClick={() => setShowGallery(true)} className="flex items-center cursor-pointer rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"  >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span className="ml-3 flex-1 whitespace-nowrap">Gallery</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {showGallery ? <Gallery /> : (
                    <div className="mt-[100px] flex flex-col flex-shrink w-4/5  px-4 sm:px-6 lg:px-8 ">
                        <div className="flex flex-col  items-end sm:w-full md:w-full">

                            <div className="sm:mt-0 sm:ml-16 sm:flex-none">
                                <Link to="/dashboard/addproject">
                                    <button type="button" onClick={() => setShowProjectForm(true)} className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add projects</button>
                                </Link>
                            </div>

                        </div>
                        <div className="mt-[20px] overflow-x-auto relative shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Title
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Image
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Description
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Link
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Inserted at
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allprojects.map((item) => (
                                        <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <td className="py-4 px-6">{item.title}</td>
                                            <td className="whitespace-nowrap py-4 px-6">{item.image}</td>
                                            <td className="py-4 px-6">{item.description}</td>
                                            <td className="py-4 px-6">{item.link}</td>
                                            <td className="py-4 px-6">{item.inserted_at}</td>
                                            <td className="py-4 px-6">
                                                <button onClick={() => deleteProject(item.id)} className="text-red-600 hover:text-red-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                    <span className="sr-only">, Lindsay Walton</span>
                                                </button>
                                                <Link to={`/dashboard/` + item.id + `/update`}><button className="text-indigo-600 hover:text-indigo-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                    <span className="sr-only">, Lindsay Walton</span>
                                                </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
