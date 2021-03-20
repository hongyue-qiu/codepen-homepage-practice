import React from 'react'
import { BrowserRouter as Router,NavLink } from 'react-router-dom'
import './navBar.scss'
import Pro from "../Pro/Pro";

const NavBar = () => {
    return (
        <nav className={'nav-bar'}>
            <div>
                <h2 className={'nav-bar-btn-description'}>Try Our Online Editor</h2>
                <a href={'/'} className={'nav-bar-btn'}><span>GetStart</span></a>
            </div>
            <Router>
                <div className={'nav-items'} >
                    <NavLink className={'nav-item'} to={'/trending'}>Trending</NavLink>
                    <NavLink className={'nav-item'} to={'/challenge'}>Challenge</NavLink>
                    <NavLink className={'nav-item'} to={'/spark'}>Spark</NavLink>
                </div>
                <div className={'nav-pro'}>
                    <NavLink className={'nav-item'} to={'/trending'}>
                        CodePen
                        <Pro/>
                    </NavLink>
                </div>
                <div className={'nav-descriptions'}>
                    <div className={'nav-description-picture'}>picture</div>
                    <a className={'nav-description-text'} href={'/'}>Your new development career awaits. Check out the latest listings.</a>
                    <a className={'nav-description-text'} href={'/'}>ads via Carbon</a>
                </div>
            </Router>
        </nav>
    )
}

export default NavBar
