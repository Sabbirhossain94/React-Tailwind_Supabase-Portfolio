import React, { useEffect, useState } from "react";
import { portfolioClient } from "../../server/portfolioClient";
import { TiTick } from "react-icons/ti";
import { TfiHandPointRight } from "react-icons/tfi";

export default function ProjectDetails({ selectedProjectId }) {

  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const storageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;



  useEffect(() => {
    
    const getProjectsDetails = async () => {
      try {
        setLoading(true)
        let { data, error } = await portfolioClient
          .from("projects")
          .select("*")
          .match({ id: selectedProjectId });
        if (error) {
          console.log(error);
        } else {
          const [getProjectDetails] = data;
          setProjectDetails(getProjectDetails);
        }
      }
      catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    };

    getProjectsDetails();
  }, [selectedProjectId]);


  return (
    <div className=" ">
      <div className=" h-full relative rounded-lg ">
        {loading ?
          <div role="status" className="h-[500px] mt-8 flex justify-center items-center">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
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
              src={`${storageUrl + projectDetails?.image}`}
              className="rounded-md"
              alt="error"
            />
            <h3 className="mt-4 mb-4 text-xl font-medium text-gray-900 ">
              Project Title
            </h3>
            <p className="text-lg font-medium text-gray-400">
              {projectDetails?.title}
            </p>
            <h3 className="mt-4 mb-4 text-xl font-medium text-gray-900 ">
              Project Type
            </h3>
            <p className="text-lg font-medium text-gray-400">
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
                        <TiTick className="mt-3 text-teal-500" />
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
                  <TfiHandPointRight className="mt-3 text-teal-500 text-lg" />
                  <li className="list-none ml-1 mt-2 text-lg text-gray-400">Find Figma <span className="text-blue-500"><a target="_blank" rel="noreferrer" href={projectDetails?.design_source}>{projectDetails?.design_source.substring(0, 50)}</a></span></li>
                </div>
              </>
            }
            <h3 className="mb-4 mt-4 text-xl font-medium text-gray-900 ">
              Technologies
            </h3>
            <div className="font-medium text-gray-500 flex flex-row flex-wrap">
              {projectDetails && projectDetails?.technologies?.split(",").map((item, key) => (
                <div key={key} className="flex flex-row">
                  <li className="list-none text-md px-2 mt-1 ml-1 border border-teal-500/50 rounded-lg border-x-2">
                    <p className="px-2">{item}</p>
                  </li>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
