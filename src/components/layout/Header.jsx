import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Logo from "../../images/icons/logo-gradient.png";
import Carticon from "../../images/icons/cart-white.png";
import Toggle from "./Toggle";
import HamburgerMenu from 'react-hamburger-menu';
import CartDropdown from "../cart/CartDropdown";


function Header() {

    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    return(

        <Navbar onScroll={handleScroll} className={`navbar_flex ${scrollPosition ? 'sticky_header' : ''}`}>
            <NavLink to="/" exact>
                <img className="logo" src={Logo} alt="Hargreaves Logo"/>
                <h1 className="logo-h1">Art by Hargreaves</h1>
            </NavLink>

            <div className="navbar_icons">
            <Toggle>
            {({ open, handleClick }) =>(
                    <div className="cart_container">
                        <img className="icon" src={Carticon} onClick={handleClick} alt="Show shopping cart"/>
                        {open && 
                            <CartDropdown />
                        }
                    </div>
                )}
            </Toggle>

            <Toggle> 
                {({ open, handleClick }) =>(
                    <div className="hamburger_container">
                        <HamburgerMenu
                            className="hamburger"
                            isOpen={open}
                            menuClicked={handleClick}
                            width={25}
                            height={20}
                            strokeWidth={2}
                            color='white'
                            animationDuration={0.5}
                        />
                        {open &&
                            <Nav className="[ dropdown_menu ]">
                                <a className="[ dropdown_link dropdown_link-cta cta ]" href="https://streamlabs.com/templito/tip">Donate</a>
                                <NavLink activeClassName="active" to="/checkout" exact className="[ dropdown_link ]">Checkout</NavLink>
                                <NavLink activeClassName="active" to="/about" className="[ dropdown_link ]">About</NavLink>
                                <NavLink activeClassName="active" to="/contact" exact className="[ dropdown_link ]">Contact</NavLink>
                                <br />
                                <NavLink activeClassName="active" to="/copyrights" className="[ dropdown_link mobile_show ]">
                                Copyrights
                                </NavLink>
                                <NavLink activeClassName="active" to="/terms" className="[ dropdown_link mobile_show ]">
                                Terms
                                </NavLink>
                            </Nav>
                        }
                    </div>
                )}
            </Toggle>

            </div>

        </Navbar>

)}

export default Header;