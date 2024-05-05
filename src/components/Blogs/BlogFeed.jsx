import React from "react";
import { supabase } from "../../server/supabaseClient";
import { useState, useEffect } from "react";
import { Spinner, ArrowRight } from "../SVG/SvgComponents";

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
                <Spinner />
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
                        <a href={blogAppUrl} target="_blank" rel="noreferrer">
                          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <span className="relative z-10 ">{item.title}</span>
                        </a>
                      </h2>

                      <div className=" relative z-10 mt-4 flex items-center text-sm font-medium text-sky-400 dark:text-teal-500">
                        Read article
                        <ArrowRight />
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
