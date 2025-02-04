import { useEffect, useState, useRef, useCallback } from "react";
import { portfolioClient } from "../../../services/config";
import { message } from 'antd';
import { TagsInput } from "react-tag-input-component";
import { loadCoverImage } from "../../../services/dashboard/loadCoverImage";
import AttachImage from "./AttachImage";
import { useSession } from "../../../hooks/useSession";

export default function AddProject({ addProject, setAddProject, editProjectId, isProjectModalOpen, setIsProjectModalOpen, action, loading, previewImage, setPreviewImage, setLoading }) {
  const formData = useRef();
  const { session } = useSession();
  const [sendImage, setSendImage] = useState(null);
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
          user_id: session.user.id,
          title: addProject.title,
          image: sendImage,
          githublink: addProject.githublink,
          livelink: addProject.livelink,
          project_type: addProject.project_type,
          features: addProject.features,
          technologies: JSON.stringify(addProject.technologies),
          design_source: JSON.stringify(addProject.design_source),
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

  const loadProjectCoverImage = async (image) => {
    try {
      let data = await loadCoverImage(image);
      setPreviewImage(URL.createObjectURL(data));
    } catch (error) {
      console.error(error)
    }
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
          features: JSON.parse(projectInfo?.features),
          technologies: JSON.parse(projectInfo?.technologies),
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
          user_id: session.user.id,
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

  const handleTechnologies = (tags) => {
    setAddProject((prev) => ({
      ...prev,
      technologies: tags,
    }));
  };

  const handleFeatures = (tags) => {
    setAddProject((prev) => ({
      ...prev,
      features: tags,
    }));
  };

  return (
    <div>
      <div
        className={`mx-auto mt-[20px] rounded-lg `}
      >
        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {action === "create" ? 'Add Project Details' : 'Update Project Details'}
        </h3>
        <form ref={formData} onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={addProject?.title}
              onChange={(e) => setAddProject({ ...addProject, title: e.target.value })}
              className="bg-zinc-100 w-full p-2.5 text-gray-900 dark:text-zinc-400 text-sm rounded-lg transition duration-300 border border-zinc-100 dark:border-slate-500/20 focus:border-sky-400 dark:focus:border-teal-500 focus:outline-none dark:bg-slate-500/20"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="github"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Github link
            </label>
            <input
              type="text"
              id="github"
              value={addProject?.githublink}
              onChange={(e) => setAddProject({ ...addProject, githublink: e.target.value })}
              className="bg-zinc-100 w-full p-2.5 text-gray-900 dark:text-zinc-400 text-sm rounded-lg transition duration-300 border border-zinc-100 dark:border-slate-500/20 focus:border-sky-400 dark:focus:border-teal-500 focus:outline-none dark:bg-slate-500/20"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="live"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Live link
            </label>
            <input
              type="text"
              id="live"
              value={addProject?.livelink}
              onChange={(e) => setAddProject({ ...addProject, livelink: e.target.value })}
              className="bg-zinc-100 w-full p-2.5 text-gray-900 dark:text-zinc-400 text-sm rounded-lg transition duration-300 border border-zinc-100 dark:border-slate-500/20 focus:border-sky-400 dark:focus:border-teal-500 focus:outline-none dark:bg-slate-500/20"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Project Type
            </label>
            <input
              type="text"
              id="project_type"
              value={addProject?.project_type}
              onChange={(e) => setAddProject({ ...addProject, project_type: e.target.value })}
              className="bg-zinc-100 w-full p-2.5 text-gray-900 dark:text-zinc-400 text-sm rounded-lg transition duration-300 border border-zinc-100 dark:border-slate-500/20 focus:border-sky-400 dark:focus:border-teal-500 focus:outline-none dark:bg-slate-500/20"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="design_source"
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
              className={`${addProject.project_type === "Design" ? "bg-gray-50 cursor-default" : "cursor-not-allowed bg-zinc-300 dark:bg-slate-600/20 dark:border-slate-600/20"} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              disabled={addProject.project_type === "Design" ? false : true}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="project_features"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Project Features
            </label>
            <TagsInput
              id="project_features"
              value={addProject?.features}
              onChange={handleFeatures}
              name="technologies"
              classNames={{
                tag: "text-black dark:bg-zinc-800 dark:text-gray-300",
                input: "text-zinc-900 dark:text-zinc-400 p-1",
              }}
              placeHolder="Enter Features..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="technologies"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-zinc-400"
            >
              Technologies Used
            </label>
            <TagsInput
              id="technologies"
              value={addProject?.technologies}
              onChange={handleTechnologies}
              name="technologies"
              classNames={{
                tag: "text-black dark:bg-zinc-800 dark:text-gray-300",
                input: "text-zinc-900 dark:text-zinc-400 p-1",
              }}
              placeHolder="Enter Technologies..."
            />
          </div>
          <AttachImage
            previewImage={previewImage}
            setPreviewImage={setPreviewImage}
            action={action}
            uploadImage={uploadImage}
          />
          <div className="flex flex-col items-center mb-4">
            <button
              type="submit"
              className="bg-gray-100 border dark:text-zinc-400 border-gray-300 hover:bg-gray-200 dark:border-transparent transition duration-300 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 focus:outline-none font-medium rounded-md text-sm w-full px-5 py-2.5 text-center "
            >
              {action === "create" ? "Submit" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
