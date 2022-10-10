
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

export default function Home() {

    const [session, setSession] = useState(null);
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
            <Navigation />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/dashboard" element={<Dashboard session={session}/>} />
                <Route path="/account" element={<Account session={session}/>} />
            </Routes>
        </Router>

    )
}
