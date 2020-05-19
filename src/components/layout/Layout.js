import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import About from "../about/About";
import Contact from "../contact/Contact";
import Copyrights from "../standard/Copyrights";
import Terms from "../standard/Terms";
import Logo from "../../images/compressed/girl-with-bubbles.jpg";
import Facebook from "../../images/icons/facebook.png";
import Instagram from "../../images/icons/instagram.png";
import Twitch from "../../images/icons/twitch.png";
import Soundcloud from "../../images/icons/soundcloud.png";


function Layout() {
    return (
        <>
        <Router>
            <Container fluid id="main-container">
                <Container>
                <Navbar className="[ navbar_flex ]" expand="false">
                    <NavLink to="/" exact>
                        <Navbar.Brand className="navbar-brand"><img className="logo" src={Logo} alt="D-Access Logo"/>
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="[ mr-auto lg-nav ]">
                                <NavLink to="/about" className="[ nav-link_lg ]">
                                    About
                                </NavLink>
                                <NavLink activeClassName="active" to="/cart" exact className="[ nav-link_lg ]">
                                    Cart
                                </NavLink>
                                <NavLink activeClassName="active" to="/contact" exact className="[ nav-link_lg ]">
                                    Contact
                                </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Container>


                <Container fluid id="main-content"> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/cart" exact component={Cart} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/copyrights" exact component={Copyrights} />
                        <Route path="/terms" exact component={Terms} />
                    </Switch>
                </Container>

                <Navbar className="[ footer ]">
                    <Container>
                        <Nav className="[ footer-nav ]">
                            <NavLink activeClassName="active" to="/copyrights"  className="[ footer-link ]">
                                Copyrights
                            </NavLink>
                            <NavLink activeClassName="active" to="/terms"  className="[ footer-link ]">
                                Terms & Conditions
                            </NavLink>
                        </Nav>
                        <Nav className="[ social-nav ]">
                            <NavLink to="www.facebook.com">
                                <img className="icon" src={Facebook} alt="Facebook Profile"/>
                            </NavLink>
                            <NavLink to="www.instagram.com">
                                <img className="icon" src={Instagram} alt="Instagram Profile"/>
                            </NavLink>
                            <NavLink to="www.twitch.tv">
                                <img className="icon" src={Twitch} alt="Twitch Profile"/>
                            </NavLink>
                            <NavLink to="www.soundcloud.com">
                                <img className="icon" src={Soundcloud} alt="Soundcloud Profile"/>
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                 
            </Container>
        </Router>
        </>
    );
}

export default Layout;