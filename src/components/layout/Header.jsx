import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Logo from "../../images/icons/logo-gradient.png";
import Carticon from "../../images/icons/cart-white.png";
import Toggle from "./Toggle";
import HamburgerMenu from "react-hamburger-menu";
import CartDropdown from "../cart/CartDropdown";
import Facebook from "../../images/icons/facebook.png";
import Instagram from "../../images/icons/instagram.png";
import Twitch from "../../images/icons/twitch.png";

function Header() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Navbar
        onScroll={handleScroll}
        className={`navbar_flex ${scrollPosition ? "sticky_header" : ""}`}
      >
        <NavLink to="/" exact>
          <img className="logo" src={Logo} alt="Hargreaves Logo" />
          <h1 className="logo-h1">Art by Hargreaves</h1>
        </NavLink>

        <div className="navbar_icons">
          <Toggle>
            {({ open, handleClick }) => (
              <div className="cart_container">
                <img
                  className="icon"
                  src={Carticon}
                  onClick={handleClick}
                  alt="Show shopping cart"
                />
                {open && <CartDropdown />}
              </div>
            )}
          </Toggle>

          <Toggle>
            {({ open, handleClick }) => (
              <div className="hamburger_container">
                <HamburgerMenu
                  className="hamburger"
                  isOpen={open}
                  menuClicked={handleClick}
                  width={25}
                  height={20}
                  strokeWidth={2}
                  color="white"
                  animationDuration={0.5}
                />
                {open && (
                  <Nav className="[ dropdown_menu ]">
                    <a
                      className="[ social-link ]"
                      href="https://www.facebook.com/thomashargreavesartist"
                    >
                      <img
                        className="icon"
                        src={Facebook}
                        alt="Hargreaves Facebook Profile"
                      />
                    </a>
                    <a
                      className="[ social-link ]"
                      href="https://www.instagram.com/heartbyhargreaves/"
                    >
                      <img
                        className="icon"
                        src={Instagram}
                        alt="Hargreaves Instagram Profile"
                      />
                    </a>
                    <a className="[ social-link ]" href="https://www.twitch.tv/templito">
                      <img className="icon" src={Twitch} alt="Hargreaves Twitch Stream" />
                    </a>
                    <a
                      className="[ dropdown_link dropdown_link-cta cta ]"
                      href="https://streamlabs.com/templito/tip"
                    >
                      Donate
                    </a>
                    <NavLink
                      activeClassName="active"
                      to="/about"
                      className="[ dropdown_link ]"
                    >
                      About
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      to="/contact"
                      exact
                      className="[ dropdown_link ]"
                    >
                      Contact
                    </NavLink>
                  </Nav>
                )}
              </div>
            )}
          </Toggle>
        </div>
      </Navbar>
    </Container>
  );
}

export default Header;
