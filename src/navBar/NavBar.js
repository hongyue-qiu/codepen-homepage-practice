import React from 'react'
import './navBar.scss'

const NavBar = () => {
    return (
        <nav className={'nav-bar'}>
            <div>
                <h2 className={'nav-bar-btn-description'}>Try Our Online Editor</h2>
                <a href={'/'} className={'nav-bar-btn'}><span>GetStart</span></a>
            </div>
        </nav>
    )
}

export default NavBar
