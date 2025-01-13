import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <footer className="mt-32">
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col items-center justify-center">
                      <p className="dark:text-zinc-200 font-medium text-sm">
                        Designed and created by:
                      </p>
                      <span className="text-sky-400 dark:text-teal-500 font-semibold text-sm mt-2">
                        Sabbir Hossain
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <p>
                        © 2025 Sabbir's Portfolio , All rights reserved
                      </p>
                    </div>
                    <div className="flex flex-row p-2">
                      <a href="https://www.linkedin.com/in/sabbir-hossain-b73726214/">
                        <BsLinkedin className="cursor-pointer text-sm text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 scale-100 hover:scale-105 transition duration-300" />
                      </a>
                      <a href="https://github.com/Sabbirhossain97">
                        <AiFillGithub className="cursor-pointer text-md text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 ml-4 scale-100 hover:scale-105 transition duration-300" />
                      </a>
                      <a href="mailto:sabbirhossainbd199@gmail.com">
                        <SiGmail className="cursor-pointer text-md text-gray-500 hover:text-sky-400 dark:hover:text-teal-400 ml-4 scale-100 hover:scale-105 transition duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
