import React from "react";
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

return(

<Container>
<Navbar className="[ navbar_flex ]">
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
                    width={35}
                    height={30}
                    strokeWidth={4}
                    color='white'
                    animationDuration={0.5}
                />
                {open &&
                    <Nav className="[ dropdown_menu ]">
                        <NavLink activeClassName="active" to="/checkout" exact className="[ dropdown_link ]">Checkout</NavLink>
                        <NavLink activeClassName="active" to="/about" className="[ dropdown_link ]">About</NavLink>
                        <NavLink activeClassName="active" to="/contact" exact className="[ dropdown_link ]">Contact</NavLink>
                        <a className="[ dropdown_link dropdown_link-cta cta ]" href="https://streamlabs.com/templito/tip">Donate</a>
                    </Nav>
                }
            </div>
        )}
    </Toggle>

    </div>

</Navbar>
</Container>

)}

export default Header;