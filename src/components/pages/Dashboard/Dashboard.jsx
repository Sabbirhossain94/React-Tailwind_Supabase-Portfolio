import React from "react";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../../server/portfolioClient";
import AddProject from "./AddProject";
import { Table, Modal, Image } from 'antd';
import Footer from "../../Footer/Footer";
import { sideBarContents } from "./SidebarContents";
import './Table.css'
import { Tooltip } from 'antd';

export default function Sidebar({ funcTopNav }) {

  funcTopNav(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [allprojects, setAllProjects] = useState([]);
  const [addProject, setAddProject] = useState({
    title: "",
    image: "",
    githublink: "",
    livelink: "",
    project_type: "",
    features: "",
    technologies: "",
    design_source: ""
  });
  const [action, setAction] = useState(null);
  const [editProjectId, setEditProjectId] = useState(null)
  const storageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;

  const getProjects = async () => {
    let { data, error } = await portfolioClient.from("projects").select("*");
    if (error) {
      console.log(error);
    } else {
      const mappedData = data.map((project) => {
        return {
          id: project.id,
          title: project.title,
          image: project.image,
          githublink: project.githublink,
          livelink: project.livelink,
          project_type: project.project_type,
          features: project.features,
          technologies: project.technologies,
          inserted_at: project.inserted_at
        }
      })
      setAllProjects(mappedData);
    }
  };


  const handleDelete = async (id) => {
    const { error } = await portfolioClient
      .from("projects")
      .delete()
      .match({ id: id });
    if (error) {
      console.log(error);
    } else {
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);

  };

  const handleProjectAddCancel = () => {
    setIsProjectModalOpen(false);

  }

  useEffect(() => {
    if (!isProjectModalOpen) {
      setAddProject({
        title: "",
        image: "",
        githublink: "",
        livelink: "",
        project_type: "",
        features: "",
        technologies: "",
        design_source: ""
      })
      setAction(null);
      setEditProjectId(null)
    }
  }, [isProjectModalOpen])

  const uploadCV = async (e) => {
    const file = e.target.files[0];
    const filePath = `CV/CV of Sabbir Hossain.pdf`;
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
  }, [isProjectModalOpen, isDeleteModalOpen]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: 150
    },
    {
      title: 'Thumbnail',
      dataIndex: 'image',
      width: 150,
      render: (record) =>
        <Image
          style={{
            width: "100px",
            height: "50px",
            objectFit: "cover",
          }}
          src={`${storageUrl + record}`}
          alt="error"
        />
    },
    {
      title: 'Github Link',
      dataIndex: 'githublink',
      width: 250,
      render: (text) =>
        <p className=" w-[200px]" >{text}</p>
    },
    {
      title: 'Live Link',
      dataIndex: 'livelink',
      width: 250,
      render: (text) =>
        <a href={text} target="__blank">
          <p className=" w-[200px]" >{text}</p>
        </a>
    },
    {
      title: 'Inserted at',
      dataIndex: 'inserted_at',
      width: 150
    },
    {
      title: 'Project Type',
      dataIndex: 'project_type',
      width: 150,
      render: (text) =>
        <p >{text}</p>
    },
    {
      title: 'Project Features',
      dataIndex: 'features',
      width: 250,
      ellipsis: true,
      render: (text) => (
        <div>
          <Tooltip title={text}>
            <p className="truncate ...">{text}</p>
          </Tooltip>
        </div>
      )
    },
    {
      title: 'Technologies',
      dataIndex: 'technologies',
      width: 150,
      render: (text) =>
        <p >{text}</p>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 150,
      render: (_, record) => (
        <div>
          <button
            onClick={() => {
              setIsDeleteModalOpen(true);
            }}
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
          <button className="text-indigo-600 hover:text-indigo-900"
            onClick={() => {
              setIsProjectModalOpen(true);
              setAction("edit");
              setEditProjectId(record.id)
            }}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <Modal title="Delete Project" open={isDeleteModalOpen} onOk={() => handleDelete(record.id)} onCancel={handleDeleteCancel}>
            <p>Are you sure you want to delete this project?</p>
          </Modal>
        </div>
      )
    },
  ];


  return (
    <>
      <div>
        <div className="flex">
          <div
            className={`${sideBarOpen ? "w-[60px]" : "w-[200px]"
              } min-h-screen  py-4 px-3 border-r shadow-[rgba(0,0,15,0.5)_10px_-10px_10px_0px] border-zinc-700/40 duration-300`}
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
                      className={`${item.name === "Projects" && "bg-gray-700"} flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 dark:text-white dark:hover:bg-gray-700`}
                    >
                      {item.logo}
                      <span
                        className={`${sideBarOpen ? "hidden" : ""
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

          <div className="mt-[100px] flex flex-col justify-self-center w-11/12 px-6 sm:px-6 lg:px-8 ">
            <div className=" flex flex-row gap-4 sm:gap-0 overflow-hidden justify-end items-end sm:w-full md:w-full">
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
                <button
                  type="button"
                  onClick={() => {
                    setIsProjectModalOpen(true);
                    setAction("create")
                  }
                  }
                  className="overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add projects
                </button>
              </div>
            </div>
            <Table
              scroll={{ x: 1000 }}
              style={{ marginTop: '20px' }}
              columns={columns}
              dataSource={allprojects}
              pagination={false}
            />
            <Modal title={action === "create" ? "Add Project Details" : "Edit Project Details"} width={800} open={isProjectModalOpen} onCancel={handleProjectAddCancel} footer={null}>
              <AddProject
                isProjectModalOpen={isProjectModalOpen}
                setIsProjectModalOpen={setIsProjectModalOpen}
                funcTopNav={funcTopNav}
                addProject={addProject}
                setAddProject={setAddProject}
                editProjectId={editProjectId}
                action={action}
                setAction={setAction}
              />
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
