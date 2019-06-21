import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from "./SignedOutLinks";


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>BCS Degree Navigator</Link>
                <SignedInLinks /> 
                <SignedOutLinks /> {/* How do we show one or the other and not both? */}
            </div>
        </nav>
    )
}

export default Navbar