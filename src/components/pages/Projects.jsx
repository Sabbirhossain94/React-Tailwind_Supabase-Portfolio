import React from "react";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../portfolioClient";
import AnimatedPage from "../AnimatedPages";
import Footer from "../Footer";
import ProjectDetails from "../sub-components/ProjectDetails";
import Loader from "../sub-components/Loader";

export default function Projects({ funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const storageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;

  const [allprojects, setAllProjects] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [delay, setDelay] = useState(0);

  const getProjects = async (e) => {
    let { data, error } = await portfolioClient.from("projects").select("*");
    if (error) {
      console.log(error);
    } else {
      setAllProjects(data);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  const handleHover = (id) => {
    let activeElementId = allprojects.filter((item) => {
      if (item.id === id) {
        return item.id;
      }
    });
    setActiveElement(activeElementId[0].id);
  };
  setTimeout(() => {
    setDelay(1);
  }, 2000);

  return delay === 0 ? (
    <Loader />
  ) : (
    <AnimatedPage>
      <div>
        {modal ? (
          <ProjectDetails setModal={setModal} activeElement={activeElement} />
        ) : (
          ""
        )}
        <div className={`${modal ? "blur-sm" : ""}`}>
          <main className="p-[50px] bg-white dark:bg-slate-800">
            <div className=" sm:px-8">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="mx-auto max-w-2xl lg:max-w-5xl"></div>
                  <div className="transition-opacity mt-16 sm:mt-20">
                    <ul className=" mx-auto mt-16 grid max-w-[26rem] grid-cols-1 gap-6 px-4 sm:mt-20 sm:max-w-[52.5rem] sm:grid-cols-1 sm:px-6 md:mt-32 lg:max-w-7xl md:grid-cols-2 lg:grid-cols-3 lg:gap-y-8 lg:px-8 xl:gap-x-8">
                      {allprojects.map((item) => (
                        <li
                          key={item.id}
                          className="shadow-md hover:shadow-xl ring-1 scale-95 transition  dark:highlight-white/5 group relative rounded-3xl bg-slate-100 p-6 hover:bg-slate-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-900/50"
                        >
                          <div className="rounded-lg relative aspect-[672/400] transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] dark:bg-slate-700">
                            <div
                              onMouseOver={() => handleHover(item.id)}
                              onMouseOut={() => setActiveElement(null)}
                            >
                              <img
                                alt="error"
                                src={`${storageUrl}` + `${item.image}`}
                                className={`${
                                  item.id === activeElement ? "blur-[4px]" : ""
                                } rounded-md absolute h-full w-full`}
                                style={{
                                  color: "transparent",
                                  objectFit: "cover",
                                }}
                              />

                              {item.id === activeElement ? (
                                <div
                                  className={
                                    " transition-opacity bg-zinc-800 hover:bg-zinc-700 cursor-pointer px-2 py-1 rounded-md absolute left-[100px] top-[60px]"
                                  }
                                  onClick={() => setModal(true)}
                                >
                                  <h1 className="text-lg font-semibold text-white">
                                    Details
                                  </h1>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="mt-6 flex flex-col items-start">
                            <div className="flex flex-row">
                              <h2 className="text-sm font-semibold leading-6 text-slate-900 group-hover:text-sky-500 dark:text-white dark:group-hover:text-sky-400">
                                <p target="_blank">
                                  <span className="inset-0 rounded-3xl"></span>
                                  {item.title}
                                </p>
                              </h2>
                              <svg
                                className="h-6 w-6 flex-none opacity-0 group-hover:opacity-100"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                                  stroke="#0EA5E9"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <a
                                href={item.livelink}
                                target="_blank"
                                className="group-hover:cursor-pointer w-full pr-2 border-r border-slate-900 dark:border-white group-hover:dark:border-sky-500 group-hover:border-sky-500 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-teal-500 dark:text-slate-400"
                              >
                                Live Demo
                              </a>
                              <a
                                href={item.githublink}
                                target="_blank"
                                className="group-hover:cursor-pointer w-full pl-2 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-teal-500 dark:text-slate-400"
                              >
                                Github
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}
