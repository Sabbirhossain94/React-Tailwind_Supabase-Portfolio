import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Notification from "../sub-components/Notification";
import AnimatedPage from "../AnimatedPages";
import Footer from "../Footer";
import Loader from "../sub-components/Loader";

export default function Contact({ funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const [showNotification, setShowNotification] = useState(false);
  const [delay, setDelay] = useState(0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l0k9e43",
        "template_d1na90m",
        form.current,
        "9ZJePhXgohfdxuU3G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      e.target.reset();
      setShowNotification(true);
    }, 1000);

    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  setTimeout(() => {
    setDelay(1);
  }, 2000);

  return delay === 0 ? (
    <Loader />
  ) : (
    <AnimatedPage>
      <div>
        <Notification
          showNotification={showNotification}
          setShowNotification={setShowNotification}
        />

        <div className="bg-white  dark:bg-slate-800  ">
          <main className="overflow-hidden ">
            <div className=" mt-[50px] relative bg-white  dark:bg-slate-800">
              <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative ">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* left section */}
                    <div className="rounded-md relative overflow-hidden bg-zinc-100/50 dark:bg-slate-900/20 py-10 px-6 sm:px-10 xl:p-12">
                      <h3 className="text-lg font-medium dark:text-white text-zinc-800">
                        Contact information
                      </h3>
                      <dl className="mt-8 space-y-6">
                        <dd className="flex text-base text-teal-50">
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-sky-500 dark:text-cyan-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                          <span className="ml-3 dark:text-white text-zinc-800">
                            +8801766651978
                          </span>
                        </dd>

                        <dd className="flex text-base text-teal-50">
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-sky-500 dark:text-cyan-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                          <span className="ml-3 dark:text-white text-zinc-800">
                            sabbirhossainbd199@gmail.com
                          </span>
                        </dd>
                      </dl>
                      <ul role="list" className="mt-8 flex space-x-12">
                        <li>
                          <a
                            className="text-teal-200 hover:text-teal-100"
                            href="https://github.com/Sabbirhossain94"
                          >
                            <span className="sr-only">GitHub</span>
                            <svg
                              className="h-7 w-7 text-sky-500 dark:text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-teal-200 hover:text-teal-100"
                            href="https://www.linkedin.com/in/sabbir-hossain-b73726214/"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-7 w-7 text-sky-500 dark:text-cyan-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* left section */}

                    {/* Contact form ,right section */}
                    <div className="dark:bg-slate-800  py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                      <h3 className="text-warm-gray-900 dark:border-sky-500 text-lg font-medium dark:text-white">
                        Send me a message
                      </h3>
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className=" mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="first-name"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px]  dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800 focus:border-indigo-500 focus:ring-indigo-400"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="last-name"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px] dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px] dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                            >
                              Phone
                            </label>
                          </div>
                          <div className="mt-1">
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px] dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800"
                              aria-describedby="phone-optional"
                              required
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="subject"
                            className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                          >
                            Subject
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px] dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800"
                              required
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="message"
                              className="text-warm-gray-900 block text-sm font-medium dark:text-white"
                            >
                              Message
                            </label>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="message"
                              name="message"
                              rows="4"
                              className="ring-1 dark:ring-cyan-500/30 mt-[10px] dark:text-white block w-full rounded-md py-3 px-4 shadow-sm dark:bg-slate-800"
                              aria-describedby="message-max"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                          <button
                            type="submit"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 dark:bg-cyan-500/30 hover:bg-sky-700 dark:ring-cyan-500 dark:hover:bg-cyan-700 px-6 py-3 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}
