import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div >
            <nav >
                <NavLink exact to="/" >Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
            </nav>

        </div>
    );
}

export default Navbar;