import React from 'react'
import Table from './subpages/Table'


export default function Dashboard({ session, funcTopNav, funcSideNav }) {
    funcTopNav(false)
    funcSideNav(true)
    return (
        <div>
            <Table />
        </div>
    )
}
