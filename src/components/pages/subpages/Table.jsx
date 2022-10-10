import React from 'react'
import { supabase } from '../../../supabaseClient'
import { useState, useEffect } from 'react';


export default function Table() {

    const [allprojects, setAllProjects] = useState([])

    const getProjects = async (e) => {
        let { data, error } = await supabase
            .from('projects')
            .select('*')
        if (error) {
            console.log(error)
        } else {
            setAllProjects(data)
        }
    }
    const deleteProject = async (id) => {
        const { data, error } = await supabase
            .from('projects')
            .delete()
            .match({ id: id })
    }
    useEffect(() => {
        getProjects()
    }, [])
    


    return (
        <div>
            <div className="mt-[50px] w-4/5 ml-[300px] px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">

                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add projects</button>
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
                                                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
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
                                                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                        <svg className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                                                <a href="#" className="group inline-flex">
                                                    Link
                                                    <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                        <svg className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-slate-700">
                                        {allprojects.map((item) => (
                                            <tr key={item.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">{item.title}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.image}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.description}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-200">{item.link}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button  onClick={() => deleteProject(item.id)} className="text-red-600 hover:text-red-900">Delete<span className="sr-only">, Lindsay Walton</span></button>
                                                    <button  className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></button>
                                                </td>
                                            </tr>
                                        ))}
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
