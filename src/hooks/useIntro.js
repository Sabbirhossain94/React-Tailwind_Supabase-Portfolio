import { useState, useEffect } from "react";

export const useIntro = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [showTypeWriter, setShowTypeWriter] = useState(false)

    useEffect(() => {
        const introTimer = setTimeout(() => {
            setShowIntro(true)
            setShowTypeWriter(true);
        }, 2000);

        return () => clearTimeout(introTimer);
    }, []);

    useEffect(() => {
        if (showTypeWriter) {
            const typeWriterTimer = setTimeout(() => {
                setShowTypeWriter(false);
                setShowIntro(false)
            }, 2000);
            return () => clearTimeout(typeWriterTimer);
        }
    }, [showTypeWriter]);

    return { showIntro, showTypeWriter }
}