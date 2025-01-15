import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { portfolioClient } from "../../services/portfolioClient";
import { Toaster } from "react-hot-toast";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navbar from "../layout/common/Navbar";
import Sign from "../pages/Auth/Sign";
import ResetPass from "./Auth/ResetPass";
import Dashboard from "../pages/Dashboard/Dashboard";
import NoPage from "../../components/pages/NoPage/NoPage";
import PrivateRoute from "./Auth/PrivateRoute";
import AuthenticatedRoute from "./Auth/AuthenticatedRoute";
import AboutMe from "./About/AboutMe";
import Footer from "../../components/layout/common/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import { isAuth } from "../../services/config";
import 'aos/dist/aos.css'

export default function MainRouter() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        portfolioClient.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        portfolioClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <>
            <Toaster />
            <Router>
                <Navbar session={session} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={
                            <AboutMe />
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <Projects />
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Contact />
                        }
                    />
                    <Route element={<AuthenticatedRoute isAuth={isAuth} />}>
                        <Route
                            path="/signin"
                            element={<Sign />}
                        />
                    </Route>
                    <Route element={<PrivateRoute isAuth={isAuth} />}>
                        <Route
                            path="/resetpassword"
                            element={<ResetPass />}
                        />
                    </Route>
                    {/* <Route element={<PrivateRoute session={session} isAuth={isAuth} />}> */}
                        <Route
                            path="/dashboard"
                            exact
                            element={<Dashboard />
                            }
                        />
                    {/* </Route> */}
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
            <ScrollToTop />
            <Footer />
        </>
    );
}