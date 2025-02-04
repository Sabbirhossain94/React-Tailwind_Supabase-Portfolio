import { portfolioClient } from "../config";

export const getAllProjects = async () => {
    try {
        let { data, error } = await portfolioClient.from("projects").select("*");
        if (error) throw error;
        return data
    } catch (error) {
        console.error('Error fetching projects', error)
    }
}