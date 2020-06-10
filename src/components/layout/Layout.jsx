import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Copyrights from "../copyrights/Copyrights";
import Terms from "../terms/Terms";
import Checkout from "../cart/Checkout";
import Header from "./Header";
import Footer from "./footer/Footer";

function Layout(){
    return (
        <>
        <Router>
            <Header/>

                <Container fluid id="main-content"> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/copyrights" component={Copyrights} />
                        <Route path="/terms" component={Terms} />
                    </Switch>
                </Container>

            <Footer />
                 
        </Router>
        </>
    );
}


export default Layout;