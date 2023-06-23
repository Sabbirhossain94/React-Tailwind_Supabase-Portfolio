import React from "react";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../../portfolioClient";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";

export default function Sidebar({ funcTopNav }) {
  funcTopNav(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [allprojects, setAllProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const storageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;
  const sideBarContents = [
    {
      name: "Home",
      path: true,
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      action: () => {},
    },
    {
      name: "Projects",
      path: false,
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mr-3 h-6 w-6 flex-shrink-0 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      ),
      action: () => {},
    },
  ];

  const getProjects = async (e) => {
    let { data, error } = await portfolioClient.from("projects").select("*");
    if (error) {
      console.log(error);
    } else {
      setAllProjects(data);
    }
  };
  const deleteProject = async (id) => {
    const { data, error } = await portfolioClient
      .from("projects")
      .delete()
      .match({ id: id });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  const uploadCV = async (e) => {
    const file = e.target.files[0];
    const filePath = `CV/CV of Sabbir Hossain.pdf`;
    console.log(file);
    const { data, error } = await portfolioClient.storage
      .from("image")
      .update(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      {showProjectForm && (
        <AddProject
          showProjectForm={showProjectForm}
          setShowProjectForm={setShowProjectForm}
        />
      )}

      <div className="flex">
        <div
          className={`${
            sideBarOpen ? "w-[60px]" : "w-[200px]"
          } h-screen bg-slate-900 py-4 px-3 shadow-lg shadow-slate-500/40 duration-300`}
        >
          <div className="flex justify-end">
            {sideBarOpen ? (
              <button onClick={() => setSideBarOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 rounded-full p-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={() => setSideBarOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-10 w-10 rounded-full p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="mt-[50px]">
            <ul className="space-y-2 ">
              {sideBarContents.map((item, key) => (
                <li key={key}>
                  <a
                    onClick={item.action}
                    href={item.path ? "/" : "#"}
                    className="flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    {item.logo}
                    <span
                      className={`${
                        sideBarOpen ? "hidden" : ""
                      } ml-3 whitespace-nowrap transition-opacity duration-300`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[100px] flex flex-col justify-self-center w-11/12 px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-row overflow-hidden justify-end items-end sm:w-full md:w-full">
            <div className="overflow-hidden sm:mt-0 sm:ml-16 sm:flex-none">
              <label className="cursor-pointer overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                <input
                  type="file"
                  id="file"
                  accept="application/pdf, application/vnd.ms-excel"
                  onChange={uploadCV}
                  className="hidden  mt-[5px] w-full text-sm text-gray-900 bg-blue-500 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                />
                Upload CV
              </label>
            </div>
            <div className="overflow-hidden sm:mt-0 sm:ml-8 sm:flex-none">
              <Link to="/dashboard/addproject">
                <button
                  type="button"
                  onClick={() => setShowProjectForm(true)}
                  className="overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add projects
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[20px] overflow-x-auto relative shadow-md sm:rounded-lg">
            {allprojects.length === 0 ? (
              <h1>No Projects to show!</h1>
            ) : (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="font-sans text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Title
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Thumbnail
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Github link
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Live Link
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Inserted at
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allprojects.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-white dark:bg-gray-900 dark:border-gray-700"
                    >
                      <td className="py-4 px-6">{item.title}</td>
                      <td className="py-4 px-6">
                        <img
                          style={{
                            width: "100px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          src={`${storageUrl}` + `${item.image}`}
                          alt="error"
                        />
                      </td>
                      <td className="py-4 px-6">{item.githublink}</td>
                      <td className="py-4 px-6">{item.livelink}</td>
                      <td className="py-4 px-6">{item.inserted_at}</td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => deleteProject(item.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <Link to={`/dashboard/` + item.id + `/update`}>
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}{" "}
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
}
