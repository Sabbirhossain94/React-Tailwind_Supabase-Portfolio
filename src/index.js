import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRouter from "./components/pages/MainRouter";
import { DarkModeProvider } from "./hooks/useDarkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DarkModeProvider>
        <MainRouter />
    </DarkModeProvider>
);

