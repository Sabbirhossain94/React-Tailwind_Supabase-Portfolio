import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Modal } from 'antd';
import Spinner from "../../../components/helpers/Spinner"
import { projectStorageUrl } from "../../../services/config";
import { singleProjectData } from "../../../services/projects/fetchProjects";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDetailsModal({ isModalOpen, setIsModalOpen, selectedProjectId, setSelectedProjectId }) {

  const [projectDetails, setProjectDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProjectId) {
      const getProjectsDetails = async () => {
        try {
          setLoading(true)
          let data = await singleProjectData(selectedProjectId);
          setProjectDetails(data)
        }
        catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      };
      getProjectsDetails();
    }
  }, [selectedProjectId]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null)
  };

  return (

    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={800} zIndex={3000}>
      <div className="h-full relative rounded-lg">
        {loading ?
          <div className="h-screen flex items-center justify-center">
            <Spinner className="text-xl" />
          </div>
          :
          <div
            className="h-full mt-8 mb-8"
          >
            <h3 className="mb-4 text-xl font-medium text-gray-900 ">
              Thumbnail
            </h3>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              src={`${projectStorageUrl + projectDetails?.image}`}
              className="rounded-md"
              alt="thumbnail"
            />
            <h3 className="mt-4 mb-4 text-xl font-medium text-gray-900 ">
              Project Title
            </h3>
            <p className="text-lg font-medium text-zinc-400">
              {projectDetails?.title}
            </p>
            <h3 className="mt-4 mb-4 text-xl font-medium text-gray-900 ">
              Project Type
            </h3>
            <p className="text-lg font-medium text-zinc-400">
              {projectDetails?.project_type}
            </p>
            {projectDetails?.project_type !== "Design" &&
              <>
                <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 ">
                  Project Features
                </h3>
                <div className="flex">
                  <div className="font-medium text-md text-gray-500 text-left">
                    {projectDetails && projectDetails?.features?.split(".").map((item, key) => (
                      <div key={key} className="flex flex-row">
                        <span>
                          <TiTick className="mt-3 text-sky-400 dark:text-teal-500 text-lg" />
                        </span>
                        <li className="list-none ml-1 mt-2">{item}</li>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            }
            {
              projectDetails?.project_type === "Design" &&
              <>
                <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 ">
                  Design Source
                </h3>
                <div className="flex flex-row">
                  <a target="_blank" rel="noreferrer" href={projectDetails?.design_source} className="list-none flex gap-2 items-center transition duration-300 text-lg text-zinc-400 hover:text-sky-400 dark:hover:text-teal-500">Go to Figma file <span><FaExternalLinkAlt /></span>
                  </a>
                </div>
              </>
            }
            <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 ">
              Technologies
            </h3>
            <div className="font-medium text-gray-500 flex flex-row flex-wrap">
              {projectDetails && projectDetails?.technologies?.split(",").map((item, key) => (
                <div key={key} className="flex flex-row">
                  <li className="list-none text-md px-2 mt-1 ml-1 border border-sky-400 dark:border-teal-500/50 rounded-lg border-x-2">
                    <p className="px-2">{item}</p>
                  </li>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </Modal >
  );
}
