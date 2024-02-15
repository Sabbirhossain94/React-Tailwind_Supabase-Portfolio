import React from "react";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";

export default function BlogFeed() {
  const [allBlog, setAllBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const blogCoverUrl = process.env.REACT_APP_STORAGE_PUBLIC_URL;
  const blogAppUrl = process.env.REACT_APP_BLOG_APP_URL;

  const getAllBlogs = async () => {
    try {
      setLoading(true);
      let { data, error } = await supabase
        .from("blogs")
        .select("*")
        .range(0, 5);
      if (error) {
        throw error;
      } else {
        setAllBlog(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 py-24">
      <div className="py-8 px-4 max-w-7xl xl:max-w-6xl mx-auto  lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="text-2xl text-center font-medium mb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">Recent Blogs</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 mt-24">
          {loading ? (
            <div className=" h-96 flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-800 animate-spin dark:text-slate-700 fill-teal-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          ) :
            allBlog.map((item) => (
              <li
                key={item.id}
                className=" cursor-pointer scale-100 hover:scale-105 transition duration-300 ease-in-out list-none "
              >
                <div className=" group relative grid grid-cols-2  gap-x-4">
                  <div className="inline-flex flex-col ">
                    <time className=" relative z-10 order-first mb-3 flex items-center text-sm text-sky-400 dark:text-teal-500 pl-3.5">
                      <span className=" absolute inset-y-0 left-0 flex items-center">
                        <span className=" h-4 w-0.5 rounded-full bg-cyan-500 dark:bg-zinc-500"></span>
                      </span>
                      <span className="font-medium">{item.inserted_at}</span>
                    </time>
                    <img
                      src={blogCoverUrl + item.thumbnail}
                      alt="error"

                      className="rounded-md "
                    />
                  </div>

                  <div className="w-[200px] md:w-[400px] text-base flex flex-col justify-center  ">
                    <div className="">
                      <h2 className="text-sm md:text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 max-w-[250px]">
                        <a href={blogAppUrl} target="_blank" >
                          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10 ">{item.title}</span>
                        </a>
                      </h2>

                      <div className=" relative z-10 mt-4 flex items-center text-sm font-medium text-sky-400 dark:text-teal-500">
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
                  </div>
                </div>
              </li>
            ))}
        </div>
      </div>
    </section>

  )
}