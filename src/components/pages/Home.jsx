import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import App from "../../App";
import { portfolioClient } from "../../portfolioClient";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "../Navigation";
import Sign from "./Sign";
import AddProject from "./subpages/AddProject";
import Dashboard from "./subpages/Dashboard";
import NoPage from "./NoPage";
import PrivateRoute from "./subpages/PrivateRoute";

export default function Home() {
  const [session, setSession] = useState(null);
  const [showTopNav, setShowTopNav] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    portfolioClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    portfolioClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    setIsAuth(true);
  }, [session]);
  return (
    <Router>
      {showTopNav && <Navigation session={session} />}

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

        <Route
          exact
          path="/dashboard"
          element={<PrivateRoute session={session} isAuth={isAuth} />}
        >
          <Route
            path="/dashboard"
            element={<Dashboard session={session} funcTopNav={setShowTopNav} />}
          />
          <Route
            path="/dashboard/:id"
            element={
              <AddProject session={session} funcTopNav={setShowTopNav} />
            }
          />
          <Route
            path="/dashboard/:id/update"
            element={
              <AddProject session={session} funcTopNav={setShowTopNav} />
            }
          />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
