import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSession } from "../../hooks/useSession";
import { useDelay } from "../../hooks/useDelay";
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
import useAOS from "../../hooks/useAOS";
import Intro from "../layout/common/Intro";

export default function MainRouter() {

    useAOS();
    const { session } = useSession();
    const { showIntro } = useDelay()

    return showIntro ? <Intro /> : (
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
                    <Route element={<AuthenticatedRoute session={session} />}>
                        <Route
                            path="/signin"
                            element={<Sign />}
                        />
                    </Route>
                    <Route element={<PrivateRoute session={session} />}>
                        <Route
                            path="/resetpassword"
                            element={<ResetPass />}
                        />
                    </Route>
                    <Route element={<PrivateRoute session={session} />}>
                        <Route
                            path="/dashboard"
                            exact
                            element={<Dashboard />
                            }
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