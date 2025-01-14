import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { portfolioClient } from "../../services/portfolioClient";
import { Toaster } from "react-hot-toast";
import Loader from "../helpers/Loader"
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navbar from "../layout/common/Navbar";
import Sign from "../pages/Auth/Sign";
import ResetPass from "./Auth/ResetPass";
import Dashboard from "../pages/Dashboard/Dashboard";
import NoPage from "../../components/pages/NoPage/NoPage";
import PrivateRoute from "../../components/pages/Dashboard/PrivateRoute";
import AboutMe from "./About/AboutMe";
import Footer from "../../components/layout/common/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import { isAuth } from "../../services/config";
import 'aos/dist/aos.css'

export default function MainRouter() {
    const [session, setSession] = useState(null);
    const [showTopNav, setShowTopNav] = useState(true);
    const [, setShowSideNav] = useState(false);
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        portfolioClient.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        portfolioClient.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);


    setTimeout(() => {
        setDelay(1);
    }, 2000);

    return delay === 0 ? (
        <Loader />
    ) : (
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
                    <Route
                        path="/signin"
                        element={
                            <Sign
                                session={session}

                                isAuth={isAuth}
                            />
                        }
                    />
                        <Route
                            path="/resetpassword"
                            element={
                                <ResetPass
                                    session={session}

                                    isAuth={isAuth}
                                />
                            }
                        />
                    <Route element={<PrivateRoute session={session} isAuth={isAuth} />}>
                        <Route
                            path="/dashboard"
                            exact
                            element={<Dashboard session={session} funcTopNav={setShowTopNav} />}
                        />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
            <ScrollToTop />
            <Footer />
        </>
    );
}