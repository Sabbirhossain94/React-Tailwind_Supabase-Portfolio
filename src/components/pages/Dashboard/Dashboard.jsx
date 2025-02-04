import { useState, useEffect } from "react";
import AddProject from "./AddProject";
import { Table, Modal, Spin, Switch } from 'antd';
import { sideBarContents } from "../../../helpers/SidebarContents";
import { SidebarArrow, DarkThemeIcon, LightThemeIcon } from "../../SVG/SvgComponents";
import Spinner from "../../helpers/Spinner";
import { useNavigate, Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { signOut } from "../../../services/signOut";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { tableColumns } from "../../../helpers/dashboard/tableColumn";
import { GoSidebarCollapse } from "react-icons/go";
import { getAllProjects } from "../../../services/dashboard/getAllProjects";
import { uploadCV } from "../../../services/dashboard/uploadCV";
import './Table.css'

export default function Sidebar() {
  const navigate = useNavigate();
  const { dark, setDark } = useDarkMode();
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
    features: [],
    technologies: [],
    design_source: ""
  });
  const [action, setAction] = useState("create");
  const [previewImage, setPreviewImage] = useState(null);
  const [editProjectId, setEditProjectId] = useState(null);
  const [isCvUploaded, setIsCvUploaded] = useState(false)

  const getProjects = async () => {
    try {
      let data = await getAllProjects()
      const mappedData = data.map((project) => {
        return {
          id: project.id,
          title: project.title,
          image: project.image,
          githublink: project.githublink,
          livelink: project.livelink,
          project_type: project.project_type,
          features: project?.features ? JSON.parse(project.features) : [],
          technologies: project?.technologies ? JSON.parse(project.technologies) : [],
          inserted_at: project.inserted_at
        }
      })
      setAllProjects(mappedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProjectAddCancel = () => {
    setAddProject({
      title: "",
      image: "",
      githublink: "",
      livelink: "",
      project_type: "",
      features: [],
      technologies: [],
      design_source: ""
    })
    setPreviewImage(null);
    setIsProjectModalOpen(!isProjectModalOpen);
    setAction("create");
    setEditProjectId(null);
  }

  const handleCVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setIsCvUploaded(true);
      await uploadCV(file)
    } catch (error) {
      console.error(error)
    } finally {
      setIsCvUploaded(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, [isProjectModalOpen, loading]);

  const handleProjectEdit = (id) => {
    setEditProjectId(id)
  }

  const handleSignOut = async () => {
    await signOut(navigate)
  }

  const themeHandler = (checked) => {
    if (checked) {
      setDark(true)
    } else {
      setDark(false)
    }
  };

  return (
    <div className="flex pb-10">
      {/* sidebar */}
      <div
        className={`${sideBarOpen ? "translate-x-0" : "-translate-x-full"
          } min-h-screen fixed z-[1000] w-64 py-4 px-3 shadow-3xl bg-white dark:bg-slate-800 border-r border-zinc-200 dark:border-zinc-700/50 transition duration-300`}
      >
        <div className="flex justify-between items-center py-2">
          <div className="p-2">
            <h1 className="font-poppins flex gap-1 font-semibold whitespace-nowrap tracking-[1px] dark:text-white text-xl sm:text-2xl">
              <span className="text-sky-400 dark:text-teal-500">{`{`}</span>
              <span >{`SH`}</span>
              <span className="text-sky-400 dark:text-teal-500">{`}`}</span>
            </h1>
          </div>
          {sideBarOpen &&
            (
              <button onClick={() => setSideBarOpen(!sideBarOpen)}>
                <SidebarArrow />
              </button>
            )}
        </div>
        <div className="mt-[50px]">
          <ul className="space-y-4">
            {sideBarContents.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex gap-3 group transition duration-300 rounded-lg p-2 font-normal text-zinc-900 hover:text-sky-400 dark:hover:text-teal-500 dark:text-white hover:bg-zinc-100/80 dark:hover:bg-gray-700/50`}
                >
                  <span>
                    {item.logo}
                  </span>
                  <span
                    className='whitespace-nowrap transition-opacity duration-300'
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
            <li className="p-2">
              <button onClick={handleSignOut} className="flex items-center gap-3 group">
                <CiLogout className="text-xl transition duration-300 text-zinc-400 dark:text-white group-hover:text-sky-400 dark:group-hover:text-teal-500" />
                <span
                  className='whitespace-nowrap transition duration-300 dark:text-white group-hover:text-sky-400 dark:group-hover:text-teal-500'
                >
                  Sign out
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="absolute flex flex-col gap-4 bottom-0 border-t dark:border-zinc-700/50 p-4 left-0 right-0">
          <div className="flex justify-between items-center">
            <p className="flex group items-center gap-3">
              {dark ? <DarkThemeIcon /> :
                <LightThemeIcon />
              }
              <span
                className='whitespace-nowrap transition duration-300 dark:text-white'
              >
                {dark ? "Dark" : "Light"} Theme
              </span>
            </p>
            <Switch onChange={themeHandler} size="small" />
          </div>
        </div>
      </div>

      <div className={`mt-[100px] flex flex-col justify-self-center transition duration-300 w-full px-6 sm:px-6 lg:px-8 z-1 ${sideBarOpen && 'blur-sm dark:blur-md'} `}>
        <div className="flex flex-row gap-4 sm:gap-0 overflow-hidden justify-between items-end sm:w-full md:w-full">
          <div>
            <GoSidebarCollapse onClick={() => setSideBarOpen(!sideBarOpen)} className="text-3xl dark:text-white dark:hover:text-teal-500 hover:text-sky-400 transition duration-300 cursor-pointer" />
          </div>
          <div className="flex gap-4">
            <div className="overflow-hidden sm:mt-0 sm:ml-16 sm:flex-none">
              <label htmlFor="file" className="cursor-pointer overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-900/50 dark:text-zinc-300 px-4 py-2 text-sm font-medium transition duration-300 text-zinc-900 shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                <input
                  type="file"
                  id="file"
                  accept="application/pdf"
                  onChange={(e) => handleCVUpload(e)}
                  className="hidden mt-[5px] w-full text-sm text-gray-900 bg-zinc-200 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none"
                />
                {isCvUploaded ? <><Spinner /> <span className="pl-3">Processing</span> </> : "Upload CV"}
              </label>
            </div>
            <div className="overflow-hidden sm:flex-none">
              <button
                type="button"
                onClick={() => {
                  setIsProjectModalOpen(!isProjectModalOpen);
                  setAction("create");
                  setEditProjectId(null)
                }
                }
                className="overflow-hidden inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 dark:bg-zinc-700/50 dark:hover:bg-zinc-900/50 dark:text-zinc-300 px-4 py-2 text-sm font-medium transition duration-300 text-zinc-900 shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add projects
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Table
            scroll={{ x: 1000 }}
            style={{ marginTop: '20px' }}
            columns={tableColumns(setLoading, isProjectModalOpen, setIsProjectModalOpen, setAction, handleProjectEdit)}
            dataSource={allprojects}
            pagination={false}
            className="custom-table border-separate border-spacing-0"
          />
          {loading ? <Spin className="absolute top-1/2 left-1/2" /> : ""}
        </div>
        <Modal width={800} open={isProjectModalOpen} onCancel={handleProjectAddCancel} footer={null}>
          <AddProject
            isProjectModalOpen={isProjectModalOpen}
            setIsProjectModalOpen={setIsProjectModalOpen}
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
  );
}
