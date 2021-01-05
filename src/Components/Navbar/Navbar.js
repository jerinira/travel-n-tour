import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click,setClick]= useState(false);
    const handleClick=()=>{setClick(!click);}
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL<i className="fas fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
            
        
    )
}

export default Navbar