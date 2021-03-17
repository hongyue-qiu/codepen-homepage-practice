import React from 'react'
import { BrowserRouter as Router,NavLink } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {
    return (
        <nav className={'nav-bar'}>
            <div>
                <h2 className={'nav-bar-btn-description'}>Try Our Online Editor</h2>
                <a href={'/'} className={'nav-bar-btn'}><span>GetStart</span></a>
            </div>
            <Router>
                <NavLink to={'/trending'}>Trending</NavLink>
                <NavLink to={'/challenge'}>Challenge</NavLink>
                <NavLink to={'/spark'}>Spark</NavLink>
            </Router>
        </nav>
    )
}

export default NavBar
