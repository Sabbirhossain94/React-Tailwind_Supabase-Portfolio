
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import App from '../../App'
import { supabase } from '../../supabaseClient'
import Projects from "./Projects"
import Contact from './Contact'
import Navigation from '../Navigation'
import Sign from './Sign'
import Dashboard from './Dashboard'
import Account from '../../Account'
import AddProject from './subpages/AddProject'

export default function Home() {

    const [session, setSession] = useState(null);
    const [showNav, setShowNav] = useState(true);
    useEffect(() => {

        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

    }, [])

    return (
        <Router>
            {showNav &&
                <Navigation />
            }
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/dashboard" element={<Dashboard session={session} funcNav={setShowNav} />} />
                <Route path="/dashboard/:id" element={<AddProject session={session} funcNav={setShowNav} />} />
                <Route path="/dashboard/:id/update" element={<AddProject session={session} funcNav={setShowNav} />} />
                <Route path="/account" element={<Account session={session} />} />
            </Routes>
        </Router>

    )
}
