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
import ArtworkDetail from "../gallery/ArtworkDetail";
import Checkout from "../cart/Checkout";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){
    return (
        <>
        <Router>
            <Header/>


                <Container fluid id="main-content"> 
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/cart" exact component={Checkout} />
                        <Route path="/gallery/:item.id" component={ArtworkDetail} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/copyrights" exact component={Copyrights} />
                        <Route path="/terms" exact component={Terms} />
                        <Route path="/checkout" exact component={Checkout} />
                    </Switch>
                </Container>

            <Footer />
                 
        </Router>
        </>
    );
}


export default Layout;