import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../../../App";
import { portfolioClient } from "../../../server/portfolioClient";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../../Navbar/Navbar";
import Sign from "../Authentication/Sign";
import Dashboard from "../Dashboard/Dashboard";
import NoPage from "../NoPage/NoPage";
import PrivateRoute from "../Dashboard/PrivateRoute";
import AboutMe from "../../About Me/AboutMe";

export default function Home() {
  const [session, setSession] = useState(null);
  const [showTopNav, setShowTopNav] = useState(true);
  const [, setShowSideNav] = useState(false);

  useEffect(() => {
    portfolioClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    portfolioClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const isAuth = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);
  return (
    <Router>
      {showTopNav && <Navbar session={session} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <App
              session={session}
              funcTopNav={setShowTopNav}
              funcSideNav={setShowSideNav}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutMe funcTopNav={setShowTopNav} funcSideNav={setShowSideNav} />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects funcTopNav={setShowTopNav} funcSideNav={setShowSideNav} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact funcTopNav={setShowTopNav} funcSideNav={setShowSideNav} />
          }
        />
        <Route
          path="/sign"
          element={
            <Sign
              session={session}
              funcTopNav={setShowTopNav}
              funcSideNav={setShowSideNav}
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
  );
}
