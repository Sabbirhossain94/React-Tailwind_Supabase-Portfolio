import React from 'react'
import { portfolioClient } from '../../../portfolioClient';
import { useState, useEffect } from 'react';
import "../../../../src/animation.css"
import { Link } from 'react-router-dom';
import AddProject from './AddProject';

export default function Table({ }) {

    const [allprojects, setAllProjects] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)


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

            <div className="mt-[50px] w-4/5 ml-[300px] px-4 sm:px-6 lg:px-8 ">
                <div className="flex flex-col  items-end sm:w-full md:w-full">

                    <div className="sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link to="/dashboard/addproject">
                            <button type="button" onClick={() => setShowProjectForm(true)} className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add projects</button>
                        </Link>
                    </div>

                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-slate-700">
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-6">
                                                <a href="#" className="group inline-flex">
                                                    Title

                                                </a>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Image

                                                </a>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Description

                                                </a>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Link

                                                </a>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Inserted at

                                                </a>
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Action

                                                </a>
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-slate-700">

                                        {allprojects.length === 0 ? (
                                            <tr >
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">Empty</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">Empty</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">Empty</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">Empty</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">Empty</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 text-gray-200 pr-4 text-center text-sm font-medium sm:pr-6"> N/A</td>
                                            </tr>
                                        ) : (allprojects.map((item) => (
                                            <tr key={item.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">{item.title}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.image}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.description}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.link}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.inserted_at}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
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
                                            </tr>)))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
