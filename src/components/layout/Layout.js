import React, { Component } from "react";
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
import Register from "../register/Register";
import Login from "../login/Login";
import Logo from "../../images/daccesslogo.png";
import { HamburgerSpring } from 'react-animated-burgers';

class Layout extends Component {
    constructor(){
        super();

            this.state = {
                showDropdown: false,
            };

            this.showDropdown = this.showDropdown.bind(this);
            this.hideDropdown = this.hideDropdown.bind(this);
    }

    showDropdown(event) {
        event.preventDefault();

        this.setState({
            isActive: !this.state.isActive
        })
            
        this.setState({ showDropdown: true }, () => {
            document.addEventListener('click', this.hideDropdown);
        });
    }
          
    hideDropdown(event) {

        if(!this.dropdownNav.contains(event.target)){
            this.setState({ showDropdown: false }, () => {
                document.removeEventListener('click', this.hideDropdown);
            });
        }
    }
    

    render(){
        return (
        <>
        <Router>
            <Container fluid id="main-container">
                <Navbar className="[ navbar_flex ]">
                <Container>
                    <NavLink to="/" exact>
                        <Navbar.Brand className="navbar-brand"><img className="logo" src={Logo} alt="D-Access Logo"/>
                        </Navbar.Brand>
                    </NavLink>
                        <Nav className="[ lg-nav ]">
                                <NavLink to="/login" className="[ nav-link_lg ]">
                                    Log In
                                </NavLink>
                                <NavLink to="/register" className="[ nav-link_lg cta ]">
                                    Sign Up
                                </NavLink>
                                <NavLink activeClassName="active" to="/" exact className="[ nav-link_lg ]">
                                    Find Venues
                                </NavLink>
                        </Nav>
                        <div className="[ sm-nav ]">
                        <HamburgerSpring cassName="[ hamburger-dropdown ]" isActive={this.state.isActive} toggleButton={this.showDropdown} barColor="white"/>
                        {
                            this.state.showDropdown
                            ? (
                            <Nav className="[ dropdown-nav flex-column ]" ref={(element) => {this.dropdownNav = element;}}>
                                <NavLink to="/login" className="[ nav-link ]">
                                    Log In
                                </NavLink>
                                <NavLink to="/register" className="[ nav-link cta ]">
                                    Sign Up
                                </NavLink>
                                <NavLink activeClassName="active" to="/" exact className="[ nav-link ]">
                                    Find Venues
                                </NavLink>
                            </Nav>
                            )
                            :(
                                null
                            )
                        }
                        </div>
                    </Container>
                </Navbar>

                <Container fluid id="main-content"> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </Container>

                <Navbar className="[ footer ]">
                    <Container className="justify-content-center">
                        <Nav className="[ footer-nav ]">
                            <NavLink activeClassName="active" to="/business"  className="[ footer-link ]">
                                Register your business
                            </NavLink>
                            <NavLink activeClassName="active" to="/terms"  className="[ footer-link ]">
                                Terms & Conditions
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