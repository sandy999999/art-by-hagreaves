import React from 'react';
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilteredItems from "../array/FilteredItems";
import SearchLocation from "../array/SearchLocation";

export function Home() {
    return (
        <>
        <Container>
            <Row className="[ row-top row-top_home ]">
                <Heading title="Find an accessible spot near you" />
            </Row>
            <Row>
                <Col md={6}>
                    <SearchLocation />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128041.44119865037!2d10.65670843650881!3d59.90480040082789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sOslo!5e0!3m2!1sno!2sno!4v1587048153539!5m2!1sno!2sno" width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col md={6} className="[ justify-content-center ]">
                    <FilteredItems />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Home;