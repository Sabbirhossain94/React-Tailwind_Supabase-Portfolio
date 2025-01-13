import { blogClient } from "./blogClient";

export const allBlogs = async () => {
    try {
        let { data, error } = await blogClient
            .from("blogs")
            .select("*")
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error(error)
    }
}