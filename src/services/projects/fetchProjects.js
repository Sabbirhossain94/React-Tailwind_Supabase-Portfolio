import { portfolioClient } from "../config";

export const projectsData = async () => {
    try {
        let { data, error } = await portfolioClient.from("projects").select("*");
        if (error) {
            throw error
        }
        return data
    } catch (error) {
        console.error(error)
    }
}

export const singleProjectData = async (projectId) => {
    try {
        let { data, error } = await portfolioClient
            .from("projects")
            .select("*")
            .match({ id: projectId })
            .single();

        if (error) {
            console.log(error);
        }
        return data
    }
    catch (error) {
        console.log(error)
    }
}