import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App'
import Projects from "./Projects"
import Contact from './Contact'
import Navigation from '../Navigation'

export default function Home() {
    return (
        <Router>
            <Navigation/>
            <Routes>          
                <Route exact path="/" element={<App />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </Router>

    )
}
