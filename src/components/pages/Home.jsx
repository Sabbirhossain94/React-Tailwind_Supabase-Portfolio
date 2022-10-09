import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App'
import Projects from "./Projects"
import Contact from './Contact'
import Navigation from '../Navigation'
import Sign from './Sign'
import Dashboard from './Dashboard'

export default function Home() {
    return (
        <Router>
            <Navigation/>          
            <Routes>          
                <Route exact path="/" element={<App />} />
                <Route  path="/projects" element={<Projects />} />
                <Route  path="/contact" element={<Contact />} />
                <Route  path="/sign" element={<Sign />} />
                <Route  path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>

    )
}
