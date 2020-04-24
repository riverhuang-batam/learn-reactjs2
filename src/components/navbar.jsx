import React from 'react'
const NavBar = ({totalCounters}) =>{
    
        return(
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        Navbar
                        <span className="badge badge-pill badge-secondary">{totalCounters}</span>
                    </a>
                </nav>
            </div>
        )
    }

export default NavBar;