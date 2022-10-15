import React from 'react'
import { useEffect, useState } from 'react';
import { portfolioClient } from '../../../portfolioClient';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function AddProject({ session, funcTopNav }) {

    funcTopNav(false)
    const params = useParams();
    console.log(params)
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState(" ")
    const [link, setLink] = useState("")
    const date = new Date().toLocaleDateString()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (params.id === "addproject") {
            createProjects(e)
        }
        else {
            updateProject(e)
        }
    }

    const createProjects = async (e) => {
        e.preventDefault()
        const { data, error } = await portfolioClient
            .from('projects')
            .insert(
                { user_id: session.user.id, title: title, image: imageUrl, description: description, link: link, inserted_at: date }
            )
            .single()
    }

    const loadBlogContent = async (e) => {

        let { data, error } = await portfolioClient
            .from('projects')
            .select('*')
            .match({ id: params.id })
        if (error) {
            console.log(error)
        }
        else {

            setTitle(data[0].title)
            setImageUrl(data[0].image)
            setDescription(data[0].description)
            setLink(data[0].link)
        }
    }

    const updateProject = async (e) => {

        const { data, error } = await portfolioClient
            .from('projects')
            .update({ user_id: session.user.id, title: title, image: imageUrl, description: description, link: link, inserted_at: date })
            .match({ id: params.id })

    }
    useEffect(() => {
        if (params.id !== "undefined") {
            loadBlogContent()
        }
    }, [])


    return (
        <div>
            <div className={`mx-auto ring-1 p-6 mt-[100px] rounded-lg w-1/2 md:w-1/2`}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" id="text" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image URL</label>
                        <input type="text" id="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <input type="text" id="text" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
                        <input type="text" id="text" value={link} onChange={(e) => setLink(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <Link to="/dashboard"><button type="button" className="ml-[20px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button></Link>
                </form>
            </div>
        </div>
    )
}
