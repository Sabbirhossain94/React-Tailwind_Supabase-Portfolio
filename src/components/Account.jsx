import { useState, useEffect, useRef } from 'react'
//import { portfoliClien } from '../supabaseClient'
import { portfolioClient } from "../portfolioClient"

const Account = ({ session }) => {
    //const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)


    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            // setLoading(false)
            // const { user } = session

            const updates = {
                id: session.user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            let { error } = await portfolioClient.from('profiles').upsert(updates)

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            //setLoading(false)
            alert("you have successfully updated your profile!")
        }
    }


    return (
        <div>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 sm:w-3/4 sm:mx-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h3 className="text-center text-xl font-bold tracking-tight dark:text-white">Update your profile</h3>
                </div>
                <div className="ring-1 rounded mt-4 sm:mx-auto sm:w-full sm:max-w-md">

                    <div aria-live="polite" className='flex flex-col p-4 '>

                        <form onSubmit={updateProfile} className="space-y-6 p-5">
                          {session ? ( <div className="ring-1 inputField block w-full appearance-none rounded-md border  px-3 py-2 dark:text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" >Email: {session.user.email}</div>):''}  
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium dark:text-white">Name</label>
                                <input
                                    className="ring-1 inputField dark:bg-slate-800 block w-full text-white appearance-none rounded-md border  px-3 py-2  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    value={username || ''}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium dark:text-white">Website</label>
                                <input
                                    className="ring-1 inputField dark:bg-slate-800 block w-full text-white appearance-none rounded-md border  px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    id="website"
                                    type="url"
                                    placeholder='https://'
                                    value={website || ''}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                                    Update profile
                                </button>
                            </div>
                        </form>

                        <div className='flex justify-center '>
                            <button
                                type="button"
                                className="flex w-11/12 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => portfolioClient.auth.signOut()}
                            >
                                Sign Out
                            </button></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Account