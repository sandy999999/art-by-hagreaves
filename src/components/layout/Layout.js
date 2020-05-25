import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
import Logo from "../../images/compressed/logo-white.png";
import Facebook from "../../images/icons/facebook.png";
import Instagram from "../../images/icons/instagram.png";
import Twitch from "../../images/icons/twitch.png";
import HamburgerMenu from 'react-hamburger-menu';

class Layout extends Component{
    constructor(){
        super()
        this.state = {
            open: false,
            hideOrShow: "dropdown-nav"
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    }
    
    displayHamburger = () => {
        return(
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='white'
                    animationDuration={0.5}
            />
        )
    }

    displayDropdown = () => {
        return(
            <Nav className="[ mr-auto lg-nav ]">
                <NavLink activeClassName="active" to="/cart" exact className="[ nav-link_lg ]">Cart</NavLink>
                <NavLink activeClassName="active" to="/about" className="[ nav-link_lg ]">About</NavLink>
                <NavLink activeClassName="active" to="/contact" exact className="[ nav-link_lg ]">Contact</NavLink>
            </Nav>
        )
    }

    render() {
        return (
        <>
        <Router>
            <Container fluid id="main-container">
                <Container>
                <Navbar className="[ navbar_flex ]" expand="true">
                    <NavLink to="/" exact>
                        <img className="logo" src={Logo} alt="Hargreaves Logo"/>
                        <h1 className="logo-h1">Art by Hargreaves</h1>
                    </NavLink>
                    
                    <Nav className="[ social-nav ]">
                        <a className="[ social-link ]" href="https://www.facebook.com/thomashargreavesartist"><img className="icon" src={Facebook} alt="Hargreaves Facebook Profile"/></a>
                        <a className="[ social-link ]" href="https://www.instagram.com/heartbyhargreaves/"><img className="icon" src={Instagram} alt="Hargreaves Instagram Profile"/></a>
                        <a className="[ social-link ]" href="https://www.twitch.tv/templito"><img className="icon" src={Twitch} alt="Hargreaves Twitch Stream"/></a>
                    </Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
                    <Container className="justify-content-center">
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
                    </Container>
                </Navbar>
                 
            </Container>
        </Router>
        </>
    );
}
}

export default Layout;