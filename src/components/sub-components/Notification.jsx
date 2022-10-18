import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Notification({showNotification}) {
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    in={showNotification}
                    classNames="fade"
                    timeout={300}

                >
                    <div className="transition-opacityh-12 relative z-10" >

                        <div className=" h-12 relative top-0 bg-opacity-75 transition-opacity"></div>
                        <div className="transition-opacity fixed inset-0 z-10 overflow-y-auto">
                            <div className="transition-opacity flex items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">

                                            <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path snametrokelinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <div className="text-center sm:mt-5">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Success!</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Your Email has been sent!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="mt-5 sm:mt-6">
                                <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">Go back to dashboard</button>
                            </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
