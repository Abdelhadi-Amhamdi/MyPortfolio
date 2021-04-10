import React from 'react'
import NavLinks from './NavLinks'
import {BrowserRouter as Router , Link} from 'react-router-dom';

const  DesktopNav = () => {
    
    
    return (
        <div className="content">
            <Router>
                <Link to='/' className="logo">
                    Abdelhadi_Amhamdi
                </Link>
            </Router>
            <NavLinks />
        </div>
    )
}

export default DesktopNav

