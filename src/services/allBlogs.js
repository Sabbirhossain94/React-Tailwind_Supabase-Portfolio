import { blogClient } from "./config";

export const allBlogs = async () => {
    try {
        let { data, error } = await blogClient
            .from("blogs")
            .select("*")
            .order('id', { ascending: false })
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error(error)
    }
}