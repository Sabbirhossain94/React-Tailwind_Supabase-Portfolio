import React from 'react'
import { supabase } from '../../../supabaseClient'
import { useState, useEffect } from 'react';
import "../../../../src/animation.css"

export default function Table({session}) {

    const [allprojects, setAllProjects] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState(" ")
    const [link, setLink] = useState("")

   
    const createProjects = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase
            .from('projects')
            .insert(
                { user_id: session.user.id, title: title, image: imageUrl, description: description, link: link }
            )
            .single()
    }

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
                <div className="flex flex-col items-center sm:w-full md:w-full">

                    <div className="sm:mt-0 sm:ml-16 sm:flex-none">
                        <button type="button" onClick={() => setShowProjectForm(true)} className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Add projects</button>
                    </div>
                    {/*add projects here */}

                    <div className={`ring-1 p-6 mt-[40px] rounded-lg w-1/2 md:w-1/2 ${showProjectForm ? "" : "hidden "}`}>
                        <form onSubmit={(e) => createProjects(e)}>
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                <input type="text" id="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                                <input type="text" id="text" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input type="text" id="text" value={description} onChange={(e)=> setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
                                <input type="text" id="text" value={link} onChange={(e)=> setLink(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            <button type="button" onClick={() => setShowProjectForm(false)} className="ml-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                        </form>
                    </div>


                    {/*add projects here */}
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
                                                    <button onClick={() => deleteProject(item.id)} className="text-red-600 hover:text-red-900">Delete<span className="sr-only">, Lindsay Walton</span></button>
                                                    <button className="text-indigo-600 hover:text-indigo-900">Edit<span className="sr-only">, Lindsay Walton</span></button>
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
