import { portfolioClient } from "../services/config";
import { useState, useEffect } from "react";

export const useSession = () => {

    const [session, setSession] = useState(null);

    useEffect(() => {
        portfolioClient.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        portfolioClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return { session, setSession }
}