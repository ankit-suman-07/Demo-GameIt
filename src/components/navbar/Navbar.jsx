import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

import LogoIcon from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='logo' >
                <div className='logo-img' >
                    <img src={LogoIcon} alt='logo' />
                </div>
                <div className='logo-text' >
                    GameIt
                </div>
            </div>

            <div className='menus' >
                <NavLink exact to="/" activeClassName="active" className="link" ><span>Home</span></NavLink>
                <NavLink to="/genres" activeClassName="active" className="link" ><span>Genres</span></NavLink>
                <NavLink to="/contact" activeClassName="active" className="link" ><span>Contact Us</span></NavLink>
                <NavLink to="/saved" activeClassName="active" className="link" ><span>Saved</span></NavLink>
                <NavLink to="/room" activeClassName="active" className="link" ><span>My Room</span></NavLink>
            </div>

        </div>
    )
}

export default Navbar