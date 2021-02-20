import React from 'react'
import NavLinks from './NavLinks'
import {BrowserRouter as Router , Link} from 'react-router-dom';

const  DesktopNav = () => {
    
    
    return (
        <div>
            <Router>
                <Link to='/' className="logo">
                    Abdelhadi Amhamdi
                </Link>
            </Router>
            <NavLinks />
        </div>
    )
}

export default DesktopNav

