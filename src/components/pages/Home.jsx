import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App'
import Projects from "./Projects"
import Calendar from './Calendar'
import Navigation from '../Navigation'

export default function Home() {
    return (
        <Router>
            <Navigation/>
            <Routes>          
                <Route path="/" element={<App />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </Router>

    )
}
