import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [dark, setDark] = useState(() => {
        return document.body.classList.contains("dark");
    });

    useEffect(() => {
        if (dark) {
            setDark(true)
            document.body.classList.add("dark");
        } else {
            setDark(false)
            document.body.classList.remove("dark");
        }
    }, [dark]);

    return { dark, setDark }

}