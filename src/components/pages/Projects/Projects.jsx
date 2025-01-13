import React from "react";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../../server/portfolioClient";
import AnimatedPage from "../../helpers/AnimatedPages";
import Footer from "../../Footer/Footer";
import ProjectDetails from "../../ProjectDetails/ProjectDetails";
import Loader from "../../helpers/Loader";
import { Modal } from 'antd';
import ScrollToTop from ".././../helpers/ScrollToTop"

export default function Projects({ funcTopNav, funcSideNav }) {
  funcTopNav(true);
  funcSideNav(false);
  const storageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;
  const [allprojects, setAllProjects] = useState([]);
  const [, setModal] = useState(false);
  const [delay, setDelay] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

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

  setTimeout(() => {
    setDelay(1);
  }, 2000);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null)
  };

  const handleProjectDetailsModal = (id) => {
    setIsModalOpen(true);
    setSelectedProjectId(id)
  }

  return (
    <AnimatedPage>
      <div>
        <main className="pt-[50px] bg-white dark:bg-slate-800">
          <div className="mx-auto max-w-7xl">
            <div data-aos="fade-up" className="relative px-10 xl:px-24">
              <div className="transition-opacity mt-16 sm:mt-20">
                <ul className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:px-0 md:mt-32 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-8 xl:gap-x-8">
                  {allprojects.map((project) => (
                    <li
                      key={project.id}
                      className=" shadow-md hover:shadow-xl ring-1 scale-95 transition dark:highlight-white/5 group relative rounded-3xl bg-slate-100 p-6 hover:scale-100 duration-300 hover:bg-slate-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-900/50"
                    >
                      <div className="rounded-lg aspect-[672/400] transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] dark:bg-slate-700">
                        <div
                        >
                          <img
                            alt="error"
                            src={`${storageUrl + project.image}`}
                            className={` rounded-md absolute h-full w-full`}
                            style={{
                              color: "transparent",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col items-start">
                        <div className="flex flex-row">
                          <h2 className="text-sm font-semibold leading-6 text-slate-900 group-hover:text-sky-500 dark:text-white dark:group-hover:text-teal-500">
                            <p target="_blank">
                              <span className="inset-0 rounded-3xl"></span>
                              {project.title}
                            </p>
                          </h2>
                        </div>
                        <div className="mt-2">
                          <a
                            href={project.livelink}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2 rounded-md bg-sky-200/50  dark:bg-zinc-700 group-hover:cursor-pointer w-full transition duration-300 pr-2  dark:border-white group-hover:dark:border-sky-500 group-hover:border-sky-500 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-sky-500 dark:group-hover:text-teal-500 dark:text-slate-400"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.githublink}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2 ml-2 rounded-md bg-sky-200/50  dark:bg-zinc-700 group-hover:cursor-pointer w-full pr-2 dark:border-white group-hover:dark:border-sky-500 group-hover:border-sky-500 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-sky-500 dark:group-hover:text-teal-500 dark:text-slate-400"
                          >
                            Github
                          </a>
                          <span
                            className="px-2 rounded-md bg-sky-200/50  dark:bg-zinc-700 group-hover:cursor-pointer w-full ml-2 flex-none text-[0.8125rem] leading-6 text-slate-500 group-hover:text-sky-500 dark:group-hover:text-teal-500 dark:text-slate-400"
                            onClick={() => {
                              handleProjectDetailsModal(project.id)
                            }}
                          >
                            Details
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                  <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={800}
                  >
                    <ProjectDetails
                      setModal={setModal}
                      selectedProjectId={selectedProjectId}
                    />
                  </Modal>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <ScrollToTop />
      </div>
    </AnimatedPage>
  );
}
