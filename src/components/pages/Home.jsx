
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import App from '../../App'
import { portfolioClient } from '../../portfolioClient'
import Projects from "./Projects"
import Contact from './Contact'
import Navigation from '../Navigation'
import Sign from './Sign'
import Dashboard from './Dashboard'
import Account from '../../Account'
import AddProject from './subpages/AddProject'
import Sidebar from './subpages/Sidebar'
import Table from './subpages/Table'
import Gallery from './subpages/Gallery'


export default function Home() {

    const [session, setSession] = useState(null);
    const [showNav, setShowNav] = useState(true);
    const [showSideNav, setShowSideNav] = useState(false);
    useEffect(() => {

        portfolioClient.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        portfolioClient.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

    }, [])

    return (
        <Router>
            {showNav &&
                <Navigation session={session} />
            }
            {showSideNav &&
                <Sidebar session={session} />
            }

            <Routes>
                <Route exact path="/" element={<App session={session} />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/dashboard" element={<Dashboard session={session} funcNav={setShowNav} funcSideNav={setShowSideNav} />} />
                <Route path="/dashboard/projects" element={<Table session={session} funcSideNav={setShowSideNav} />} />
                <Route path="/dashboard/gallery" element={<Gallery session={session} funcSideNav={setShowSideNav} />} />
                <Route path="/dashboard/:id" element={<AddProject session={session} funcNav={setShowNav} />} />
                <Route path="/dashboard/:id/update" element={<AddProject session={session} funcNav={setShowNav} />} />
                <Route path="/account" element={<Account session={session} />} />
            </Routes>
        </Router>

    )
}
