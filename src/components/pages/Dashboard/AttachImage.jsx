import React from 'react'
import { Attachments } from '../../SVG/SvgComponents';

function AttachImage({ previewImage, setPreviewImage, action, uploadImage }) {
    return (
        <div className="mb-6">
            <div>
                {previewImage ? (
                    <>
                        <img
                            src={
                                previewImage
                                    ? previewImage
                                    : "https://i.imgur.com/W2AT377.jpg"
                            }
                            alt="preview"
                            className="flex justify-center w-full"
                        />
                        <div className="flex flex-row">
                            <button
                                onClick={() => {
                                    setPreviewImage(null);
                                }}
                                className="mt-[25px] flex justify-center rounded-md border border-transparent text-zinc-900 bg-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-900/50 py-2 px-4 text-sm font-medium dark:text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                {action === "create" ? "Cancel" : "Change"}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className=" sm:border-gray-200 sm:pt-5">
                        <div className="mt-1 sm:mt-0">
                            <label htmlFor="file-upload" className="relative transition duration-300 rounded-md font-medium text-sky-500 dark:text-teal-500 dark:hover:text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-sky-700">
                                <div className="flex w-full justify-center rounded-md border-2 border-dashed border-slate-500/20 px-6 pt-5 pb-6 cursor-pointer">
                                    <div className="space-y-1 text-center">
                                        <Attachments />
                                        <span>Attach an image</span>
                                        <input id="file-upload"
                                            type="file"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="hidden" />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AttachImage