import React from 'react'
import Table from './subpages/Table'
import Sidebar from './subpages/Sidebar'
import Gallery from './subpages/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Dashboard({ session, funcNav, funcSideNav }) {
    funcNav(false)
    funcSideNav(true)
    return (
        <div>
            <Table />
        </div>
    )
}
