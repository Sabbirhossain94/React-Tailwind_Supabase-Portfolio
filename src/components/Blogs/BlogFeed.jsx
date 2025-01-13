import { supabase } from "../../server/supabaseClient";
import { useState, useEffect } from "react";
import { Spinner } from "../SVG/SvgComponents";
import { BsArrowRight } from "react-icons/bs";
import moment from "moment";

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
    <section className="bg-white dark:bg-slate-800 p-10 xl:p-24 mx-auto max-w-7xl">
      <div>
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 data-aos="fade-up" className="text-center font-semibold mb-12 tracking-normal text-zinc-800 dark:text-zinc-100 text-3xl">Recent Blogs</h2>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto">
          {loading ? (
            <div className="h-96 flex justify-center items-center">
              <div role="status">
                <Spinner />
              </div>
            </div>
          ) :
            allBlog.map((blog, index) => (
              <div data-aos="flip-left" key={index} className="relative col-span-2 lg:col-span-1">
                <div
                  className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-100/10"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full sm:w-auto object-cover"
                      src={blogCoverUrl + blog.thumbnail}
                      loading="lazy"
                      alt="blog cover"
                    />
                  </div>
                  <div className="flex items-center dark:bg-slate-800 bg-white px-4 py-4 sm:py-0">
                    <div className="flex-1">
                      <div className="block">
                        <p className="text-xl font-semibold dark:text-gray-200">
                          {blog.title}
                        </p>
                        <p className="mt-2 text-md  gap-4 dark:text-teal-600 text-sky-400">
                          {moment(blog.inserted_at).format("MMMM D, YYYY")}
                        </p>
                        <p className="mt-2 block sm:hidden dark:text-white">
                          {blog.introduction}
                        </p>
                        <div className="mt-6 flex items-center">
                          <a href={blogAppUrl + 'blog/' + blog.slug}>
                            <button className="bg-zinc-200 rounded-xl flex items-center group bg-sky-400/10 hover:bg-sky-400/20 dark:bg-teal-500/10 text-sky-400 dark:text-teal-500 text-md px-4  py-2 cursor-pointer dark:hover:bg-teal-500/30 transition duration-300">
                              <span>Read more</span>
                              <BsArrowRight className='ml-2 mt-1 translate-x-0 group-hover:translate-x-2 transition-transform duration-300' />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

  )
}
