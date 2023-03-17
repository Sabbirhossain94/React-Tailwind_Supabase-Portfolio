import React from "react";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function BlogFeed({ session }) {
  //const [session, setSession] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMoreblogs, setShowMoreblogs] = useState(2);
  const [allBlog, setAllBlog] = useState([]);
  const blogCoverUrl = process.env.REACT_APP_STORAGE_PUBLIC_URL;
  const fetchMoreBlogs = () => {
    setShowMoreblogs((prevState) => prevState + 3);
  };
  const multipleFunc = () => {
    fetchMoreBlogs();
    setIsVisible(true);
  };

  const getAllBlogs = async (e) => {
    let { data, error } = await supabase
      .from("blogs")
      .select("*")
      .range(0, showMoreblogs);
    if (error) {
      console.log(error);
    } else {
      setAllBlog(data);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-medium mb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        Recent Blogs
      </h3>

      <TransitionGroup className="flex flex-col gap-16">
        {allBlog.map((item) => (
          <CSSTransition
            key={item.id}
            in={isVisible}
            classNames="slide"
            timeout={300}
          >
            <li
              key={item.id}
              className="cursor-pointer scale-100 hover:scale-105 transition duration-300 ease-in-out list-none "
            >
              <article className=" group relative grid grid-cols-2 w-[350px] ">
                <div className=" ">
                  <time className=" relative z-10 order-first mb-3 flex items-center text-sm text-teal-500 dark:text-zinc-500 pl-3.5">
                    <span className=" absolute inset-y-0 left-0 flex items-center">
                      <span className=" h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-teal-500"></span>
                    </span>
                    <span className="font-medium">{item.inserted_at}</span>
                  </time>
                  <img
                    src={blogCoverUrl + item.thumbnail}
                    alt="error"
                    width="150px"
                    height="150px"
                    className="rounded-md"
                  />
                </div>
                <div className=" flex flex-col justify-center min-w-full w-[250px] md:w-[350px] ">
                  <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                    <a href="https://blog.sabbirontheweb.com/">
                      <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">{item.title}</span>
                    </a>
                  </h2>

                  <div className=" relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                    Read article
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="ml-1 h-4 w-4 stroke-current"
                    >
                      <path
                        d="M6.75 5.75 9.25 8l-2.5 2.25"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </article>
            </li>
          </CSSTransition>
        ))}
        {allBlog.length > 3 ? (
          <button
            onClick={multipleFunc}
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
            href="/#"
          >
            Show More
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        ) : (
          ""
        )}
      </TransitionGroup>
    </div>
  );
}
