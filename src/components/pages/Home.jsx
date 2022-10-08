import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../../App'
import Projects from "./Projects"
import Calendar from './Calendar'

export default function Home() {
    return (
        <Router>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
        </Router>
    )
}
