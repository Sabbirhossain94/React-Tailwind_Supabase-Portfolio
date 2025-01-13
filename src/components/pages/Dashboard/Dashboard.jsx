import React from "react";
import { useState, useEffect } from "react";
import { portfolioClient } from "../../../services/portfolioClient";
import AddProject from "./AddProject";
import { Table, Modal, Image } from 'antd';
import Footer from "../../Footer/Footer";
import { sideBarContents } from "./SidebarContents";
import './Table.css'
import { Tooltip } from 'antd';
import { Edit, Delete } from "../../SVG/SvgComponents";
import { Button, message, Popconfirm } from 'antd';
import { Spin } from 'antd';
import Spinner from "../../helpers/Spinner";

export default function Sidebar({ funcTopNav }) {

  funcTopNav(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
  const [action, setAction] = useState("create");
  const [previewImage, setPreviewImage] = useState(null);
  const [editProjectId, setEditProjectId] = useState(null);
  const [isCvUploaded, setIsCvUploaded] = useState(false)
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

  const confirm = (id) => {
    handleDelete(id)
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const { error } = await portfolioClient
        .from("projects")
        .delete()
        .match({ id: id });

      if (error) {
        message.error(error);
      } else {
        message.success("successfully deleted")
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false)
    }
  };

  const handleProjectAddCancel = () => {
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
    setPreviewImage(null);
    setIsProjectModalOpen(!isProjectModalOpen);
    setAction("create");
    setEditProjectId(null);
  }

  const uploadCV = async (e) => {
    const file = e.target.files[0];
    try {
      setIsCvUploaded(true)
      const { data: existingFiles } = await portfolioClient.storage
        .from('image')
        .list('CV/');
      const isFileExist = existingFiles.find((f) => f.name).name === file.name
      console.log(isFileExist)
      if (!isFileExist) {
        const { data, error } = await portfolioClient.storage
          .from("image")
          .upload(`CV/${file.name}`, file);
        if (error) {
          message.error(error);
        } else {
          message.success(data);
        }
      } else {
        const { data, error } = await portfolioClient.storage
          .from("image")
          .update(`CV/${file.name}`, file);
        if (error) {
          message.error(error);
        } else {
          message.success(data);
        }
      }

    } catch (error) {
      message.error(error)
    } finally {
      setIsCvUploaded(false)
      message.success("CV Uploaded Successfully")
    }

  };

  useEffect(() => {
    getProjects();
  }, [isProjectModalOpen, loading]);

  const handleProjectEdit = (id) => {
    setEditProjectId(id)
  }

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
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button style={{ border: 'none', boxShadow: "none", padding: '5px' }}><Delete /></Button>
          </Popconfirm>
          <button className="text-indigo-600 hover:text-indigo-900"
            onClick={() => {
              setIsProjectModalOpen(!isProjectModalOpen)
              setAction("edit");
              handleProjectEdit(record.id)
            }}
          >
            <Edit />
          </button>
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
                  {isCvUploaded ? <><Spinner /> <span className="pl-3">Processing</span> </> : "Upload CV"}
                </label>
              </div>
              <div className="overflow-hidden sm:mt-0 sm:ml-8 sm:flex-none">
                <button
                  type="button"
                  onClick={() => {
                    setIsProjectModalOpen(!isProjectModalOpen);
                    setAction("create");
                    setEditProjectId(null)
                  }
                  }
                  className="overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add projects
                </button>
              </div>
            </div>
            <div className="relative">
              <Table
                scroll={{ x: 1000 }}
                style={{ marginTop: '20px' }}
                columns={columns}
                dataSource={allprojects}
                pagination={false}
              />
              {loading ? <Spin className="absolute top-1/2 left-1/2" /> : ""}
            </div>
            <Modal title={action === "create" ? "Add Project Details" : "Edit Project Details"} width={800} open={isProjectModalOpen} onCancel={handleProjectAddCancel} footer={null}>
              <AddProject
                isProjectModalOpen={isProjectModalOpen}
                setIsProjectModalOpen={setIsProjectModalOpen}
                funcTopNav={funcTopNav}
                addProject={addProject}
                setAddProject={setAddProject}
                editProjectId={editProjectId}
                action={action}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                setAction={setAction}
                loading={loading}
                setLoading={setLoading}
              />
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
