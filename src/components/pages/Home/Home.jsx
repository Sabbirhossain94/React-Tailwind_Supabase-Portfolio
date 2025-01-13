import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../../../App";
import { portfolioClient } from "../../../services/portfolioClient";
import { Toaster } from "react-hot-toast";
import Loader from "../../helpers/Loader";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../../Navbar/Navbar";
import Sign from "../Authentication/Sign";
import Dashboard from "../Dashboard/Dashboard";
import NoPage from "../NoPage/NoPage";
import PrivateRoute from "../Dashboard/PrivateRoute";
import AboutMe from "../../About Me/AboutMe";
import Footer from "../../Footer/Footer";
import ScrollToTop from "../../helpers/ScrollToTop";
import 'aos/dist/aos.css'

export default function Home() {
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

  const isAuth = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);

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
            element={<App />}
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
            path="/sign"
            element={
              <Sign
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
