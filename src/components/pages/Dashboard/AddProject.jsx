import { useEffect, useState, useRef, useCallback } from "react";
import { portfolioClient } from "../../../services/portfolioClient";
import { Attachments } from "../../SVG/SvgComponents";
import { message } from 'antd';

export default function AddProject({ funcTopNav, addProject, setAddProject, editProjectId, isProjectModalOpen, setIsProjectModalOpen, action, loading, previewImage, setPreviewImage, setLoading }) {
  funcTopNav(false);
  const formData = useRef();
  const [sendImage, setSendImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null)
  const date = new Date().toLocaleDateString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (action === "create") {
      createProjects(e);
    } else if (action === "edit") {
      updateProject(e)
    }
  };

  const createProjects = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { error } = await portfolioClient
        .from("projects")
        .insert({
          user_id: userInfo.id,
          title: addProject.title,
          image: sendImage,
          githublink: addProject.githublink,
          livelink: addProject.livelink,
          project_type: addProject.project_type,
          features: addProject.features,
          technologies: addProject.technologies,
          design_source: addProject.design_source,
          inserted_at: date,
        })
        .single();
      if (error) {
        message.error("Error inserting project:", error.message);
      } else {
        setIsProjectModalOpen(false)
        message.success("Project inserted successfully");
      }
    }
    catch (error) {
      message.error(error)
    } finally {
      setLoading(false)
      message.success('Project Successfully added!');
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
    }
  };

  const getUser = async () => {
    const { data: { user } } = await portfolioClient.auth.getUser();
    if (user) {
      setUserInfo(user)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const loadProjectCoverImage = async (image) => {
    const { data } = await portfolioClient.storage
      .from("projects")
      .download(`Thumbnail/${image}`);
    setPreviewImage(URL.createObjectURL(data));
  }

  //when updating project fields will be pre-loaded
  const loadProjectContent = useCallback(async () => {
    try {
      let { data, error } = await portfolioClient
        .from("projects")
        .select("*")
        .match({ id: editProjectId });
      const [projectInfo] = data;
      if (error) {
        console.log(error);
      } else {
        setAddProject({
          title: projectInfo?.title,
          image: projectInfo?.image,
          githublink: projectInfo?.githublink,
          livelink: projectInfo?.livelink,
          project_type: projectInfo?.project_type,
          features: projectInfo?.features,
          technologies: projectInfo?.technologies,
          design_source: projectInfo?.design_source
        });
        loadProjectCoverImage(projectInfo?.image);
      }
    } catch (error) {
      console.log(error);
    }
  }, [isProjectModalOpen, action, editProjectId, setAddProject]);

  useEffect(() => {
    if (action === "edit" && editProjectId) {
      loadProjectContent();
    }
  }, [isProjectModalOpen, action, editProjectId, loadProjectContent])


  //to update a project
  const updateProject = async (e) => {
    try {
      const { error } = await portfolioClient
        .from("projects")
        .update({
          user_id: userInfo.id,
          title: addProject?.title,
          image: sendImage ? sendImage : addProject?.image,
          githublink: addProject?.githublink,
          livelink: addProject?.livelink,
          project_type: addProject?.project_type,
          features: addProject?.features,
          technologies: addProject?.technologies,
          inserted_at: date,
        })
        .match({ id: editProjectId });
      if (error) {
        console.log(error);
      } else {
        setIsProjectModalOpen(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  };


  const downloadImage = async (path) => {
    try {
      const { data, error } = await portfolioClient.storage
        .from("projects")
        .download(`Thumbnail/${path}`);
      if (error) {
        throw error;
      }
      else {
        setPreviewImage(URL.createObjectURL(data));
      }
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }

  };

  const uploadImage = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await portfolioClient.storage
      .from("projects")
      .upload("Thumbnail/" + filePath, file);

    if (uploadError) {
      console.log(uploadError);
    } else {
      downloadImage(filePath);
      setPreviewImage(filePath);
      setSendImage(filePath);
    }
  };

  return (
    <div>
      <div
        className={`mx-auto mt-[20px] rounded-lg `}
      >
        <form ref={formData} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={addProject?.title}
              onChange={(e) => setAddProject({ ...addProject, title: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="github"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Github link
            </label>
            <input
              type="text"
              id="github"
              value={addProject?.githublink}
              onChange={(e) => setAddProject({ ...addProject, githublink: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="live"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Live link
            </label>
            <input
              type="text"
              id="live"
              value={addProject?.livelink}
              onChange={(e) => setAddProject({ ...addProject, livelink: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_type"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Project Type
            </label>
            <input
              type="text"
              id="live"
              value={addProject?.project_type}
              onChange={(e) => setAddProject({ ...addProject, project_type: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_type"
              className={`block mb-2 text-sm font-medium ${addProject.project_type === "Design" ? "text-gray-900" : "text-gray-300 "} `}
            >
              Design Source
            </label>
            <input
              type="link"
              id="design_source"
              value={addProject?.design_source}
              placeholder="https://www.figma.com/file/"
              onChange={(e) => setAddProject({ ...addProject, design_source: e.target.value })}
              className={`${addProject.project_type === "Design" ? "bg-gray-50 cursor-default" : "cursor-not-allowed bg-gray-300"}  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              disabled={addProject.project_type === "Design" ? false : true}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_type"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Project Features
            </label>
            <textarea
              type="text"
              id="live"
              value={addProject?.features}
              onChange={(e) => setAddProject({ ...addProject, features: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_type"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Technologies Used
            </label>
            <textarea
              type="text"
              id="live"
              value={addProject?.technologies}
              onChange={(e) => setAddProject({ ...addProject, technologies: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <div>
              {previewImage ? (
                <>
                  <img
                    src={
                      previewImage
                        ? previewImage
                        : "https://i.imgur.com/W2AT377.jpg"
                    }
                    alt=""
                    className="avatar image ring-1 flex justify-center"
                  />
                  <div className="flex flex-row">
                    <button
                      onClick={() => {
                        setPreviewImage(null);
                      }}
                      className=" mt-[25px]  flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {action === "create" ? "Cancel" : "Change"}
                    </button>
                  </div>
                </>
              ) : (
                <div className=" sm:border-gray-200 sm:pt-5">
                  <div className="mt-1 sm:mt-0">
                    <label htmlFor="file-upload" className="relative rounded-md font-medium text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-sky-700">
                      <div className="flex w-full justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 cursor-pointer">
                        <div className="space-y-1 text-center">
                          <Attachments />
                          <span>Attach an image</span>
                          <input id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={uploadImage}
                            className="hidden" />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center mb-4">
            <button
              type="submit"
              className="bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none font-medium rounded-md text-sm w-full px-5 py-2.5 text-center "
            >
              {action === "create" ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
