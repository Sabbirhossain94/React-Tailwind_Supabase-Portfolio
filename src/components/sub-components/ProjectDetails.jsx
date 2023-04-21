import React, { useEffect, useState, useRef } from "react";
import { portfolioClient } from "../../portfolioClient";
import { TiTick } from "react-icons/ti";

export default function ({ setModal, activeElement }) {
  const [projectDetails, setProjectDetails] = useState([]);
  let projectId = activeElement;
  const getProjectsDetails = async () => {
    let { data, error } = await portfolioClient
      .from("projects")
      .select(`id,projectdetails(*)`)
      .match({ id: projectId });
    if (error) {
      console.log(error);
    } else {
      setProjectDetails(data);
    }
  };
  useEffect(() => {
    getProjectsDetails();
  }, []);
  let [getDetails] = projectDetails;
  let currentProject = getDetails?.projectdetails;

  return (
    <div>
      <div className=" flex justify-center items-center ">
        <div className="m-auto rounded-lg mx-auto absolute top-1/3 z-50 overflow-x-hidden overflow-y-auto scrollbar-thumb-gray-300 dark:scrollbar-thumb-slate-700 scrollbar-track-black scrollbar-thin bg-gray-100 border-gray-200 dark:bg-slate-900 h-1/2 w-10/12 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4">
          <div className="flex h-full relative rounded-lg ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {currentProject
              ? currentProject.map((item) => (
                  <div key={item.id} className="h-full px-6 py-6 mt-8 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Project Title
                    </h3>
                    <p className="text-lg font-medium text-gray-500">
                      {item.project_title}
                    </p>
                    <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 dark:text-white">
                      Project Features
                    </h3>

                    <div className="flex">
                      <div className="font-medium text-md text-gray-500 text-left">
                        {item.features.split(".").map((item, key) => (
                          <div key={key} className="flex flex-row">
                            <TiTick className="mt-3 text-teal-500" />
                            <li className="list-none ml-1 mt-2">{item}</li>
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 dark:text-white">
                      Technologies Used
                    </h3>
                    <div className="font-medium text-gray-500 flex flex-row flex-wrap">
                      {item.technologies.split(",").map((item, key) => (
                        <div key={key} className="flex flex-row">
                          <li className="list-none text-md px-2 mt-1 ml-1 border border-teal-500/50 rounded-lg border-x-2">
                            <p className="px-2">{item}</p>
                          </li>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
