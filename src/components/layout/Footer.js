import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Facebook from "../../images/icons/facebook.png";
import Instagram from "../../images/icons/instagram.png";
import Twitch from "../../images/icons/twitch.png";


function Footer(){
    return(
        <Navbar className="[ footer ]">
        <Container className="[ footer-container justify-content-between ]">
            <Nav className="[ footer-nav ]">
                <NavLink activeClassName="active" to="/copyrights" className="[ footer-link ]">
                    Copyrights
                </NavLink>
                <NavLink activeClassName="active" to="/terms" className="[ footer-link ]">
                    Terms & Conditions
                </NavLink>
                <NavLink to="/" className="[ footer-link ]">
                    <a className="[ cta ]" href="https://streamlabs.com/templito/tip">Donate</a>
                </NavLink>
            </Nav>
            <Nav className="[ social-nav ]">
                <a className="[ social-link ]" href="https://www.facebook.com/thomashargreavesartist"><img className="icon" src={Facebook} alt="Hargreaves Facebook Profile"/></a>
                <a className="[ social-link ]" href="https://www.instagram.com/heartbyhargreaves/"><img className="icon" src={Instagram} alt="Hargreaves Instagram Profile"/></a>
                <a className="[ social-link ]" href="https://www.twitch.tv/templito"><img className="icon" src={Twitch} alt="Hargreaves Twitch Stream"/></a>
            </Nav>
        </Container>
        </Navbar>
    )
}

export default Footer;