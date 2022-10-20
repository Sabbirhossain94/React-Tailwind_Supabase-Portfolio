import React from 'react'
import { useState, useEffect } from 'react'
import { portfolioClient } from '../../../portfolioClient'

export default function Gallery() {

    const [images, setImages] = useState(null)
    const [uploading, setUploading] = useState(false)

    const getImages = async (e) => {

        const { data, error } = await portfolioClient
            .storage.from('projects').download('')

        if (error) {
            console.log(error)
        } else {
            console.log(data)
            setImages(data)
        }
    }

    const uploadImage = async (event) => {

        try {


            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            let { error: uploadError } = await portfolioClient.storage
                .from('projects')
                .upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }


        } catch (error) {
            alert(error.message)
        } finally {
            alert("successfully uploaded the file")
            setUploading(false)
        }
    }
    useEffect(() => {
        getImages()
    }, [])

    return (
        <div>
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/projects/public/tuku.png" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/projects/public/tuku.png" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://aliltdblkhwtxvwqhipo.supabase.co/storage/v1/object/projects/public/tuku.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='w-1/5 flex flex-col mx-auto mt-[100px]'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-blu" htmlFor="file_input">Upload file</label>
                <input className="block w-full text-sm text-gray-900 bg-blue-500 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                    onChange={uploadImage}
                />
                <button>Upload</button>
            </div> */}
            <div className='w-1/5 flex flex-col mx-auto' style={{}} aria-live="polite">
                <img
                    src="https://i.imgur.com/W2AT377.jpg"
                    alt=""
                    className="avatar image ring-1"
                    style={{}}
                />
                {uploading ? (
                    'Uploading...'
                ) : (
                    <>

                        <div className="mt-[15px]">
                            <input
                                type="file"
                                id="single"
                                accept="image/*"
                                disabled={uploading}
                                className="block w-full text-sm text-gray-900 bg-blue-500 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            />
                        </div>
                        <button onClick={uploadImage} className='mt-[15px] flex justify-center rounded-md border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>Upload</button>

                    </>
                )}
            </div>

        </div>
    )
}
