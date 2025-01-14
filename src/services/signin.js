import { portfolioClient } from "./portfolioClient";
import toast from "react-hot-toast";

export const signInUser = async (formData, setLoading) => {
    try {
        setLoading(true);
        const { error } = await portfolioClient.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });
        if (error) throw error;
        toast.success("Successfully logged in!");
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
};