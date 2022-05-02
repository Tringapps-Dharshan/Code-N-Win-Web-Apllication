import './bootstrap/css/bootstrap.min.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import React from 'react'
import dashboard from './Menues/icon_dashboard-icon_dashboard_selected.svg'
import members from './Menues/ic_members-icon_users.svg'
import project from './Menues/ic_briefcase-icon_briefcase.svg'
import client from './Menues/ic_rocket-icon_startup.svg'
import workplan from './Menues/ic_calendar-icon_date.svg'
import messages from './Menues/ic_chat-icon_chat.svg' 
import logo from './Logo@1x.png'
import './Nav.css'
function Nav() {
    const navLinkStyles=({isActive})=>{
        return{
            color: isActive ? 'white' : 'lightgray',
            borderLeft: isActive ? 'solid 4px #5BBC2E' : 'none'
        }
    }
    return (
        <div className='m-0'>
            <nav className='side-navigation navbg'>
                <img src={logo} alt='tringhub-logo'/><br/><hr color='white'/>
                <NavLink to='dashboard' className='active' style={navLinkStyles}>
                    <img src={dashboard} alt='dashboard'/>DASHBOARD
                </NavLink><br/>
                <NavLink to='members' style={navLinkStyles}>
                    <img src={members} alt='members'/>MEMBERS
                </NavLink><br/>
                <NavLink to='projects' style={navLinkStyles}>
                    <img src={project} alt='projects'/>PROJECTS
                </NavLink><br/>
                <NavLink to='clients' style={navLinkStyles}>
                    <img src={client} alt='clients'/>CLIENTS
                </NavLink><br/>
                <NavLink to='workplan' style={navLinkStyles}>
                    <img src={workplan} alt='workplan'/>WORKPLAN
                </NavLink><br/>
                <NavLink to='messages' style={navLinkStyles}>
                    <img src={messages} alt='messages'/>MESSAGES
                </NavLink>
            </nav>
            <Routes>
                <Route path='dashboard' element={<Nav />} />
            </Routes>
        </div>
    )
}

export default Nav