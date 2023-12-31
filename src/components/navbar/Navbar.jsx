import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

import LogoIcon from "../../assets/logo.png";

const Navbar = () => {
    const [cross, setCross] = useState(false);

    const crossBtn = () => {
        setCross(!cross);
    }
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
                <NavLink to="/" activeClassName="active" className="link" ><span>Home</span></NavLink>
                <NavLink to="/genres" activeClassName="active" className="link" ><span>Genres</span></NavLink>
                <NavLink to="/contactus" activeClassName="active" className="link" ><span>Contact Us</span></NavLink>
                <NavLink to="/about" activeClassName="active" className="link" ><span>About</span></NavLink>
                <NavLink to="/profileuser" activeClassName="active" className="link" ><span>My Room</span></NavLink>
            </div>

            <div className={cross ? "cross" : "hamburger-menu"} onClick={crossBtn} >
                <div className='bar' ></div>
                <div className='bar mid' ></div>
                <div className='bar' ></div>
            </div>

            <div className={cross ? "show-menu" : "hide-menu"} >
                <div className='logo-res' >
                    <div className='logo-img' >
                        <img src={LogoIcon} alt='logo' />
                    </div>
                    <div className='logo-text' >
                        GameIt
                    </div>
                </div>
                <NavLink to="/" activeClassName="active" className="link" onClick={crossBtn} ><span>Home</span></NavLink>
                <NavLink to="/genres" activeClassName="active" className="link" onClick={crossBtn} ><span>Genres</span></NavLink>
                <NavLink to="/contactus" activeClassName="active" className="link" onClick={crossBtn} ><span>Contact Us</span></NavLink>
                <NavLink to="/about" activeClassName="active" className="link" onClick={crossBtn} ><span>About</span></NavLink>
                <NavLink to="/profileuser" activeClassName="active" className="link" onClick={crossBtn} ><span>My Room</span></NavLink>
            </div>

        </div>
    )
}

export default Navbar