import React from 'react';
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bio from "../../images/compressed/bio.jpg";


export function About() {
    return (
        <Container>
                <Row className="heading_row">
                    <Heading title="Copyrights " />
                </Row>
                <Row className="row">
                    <Col md={6}>
                        <p>Hi! Welcome to my website. This is where I showcase my art, thoughts, sketches, events and exhibitions. Take a look and dont hesitate to contact me if you find anything of interest.</p>
                    </Col>
                    <Col md={6} className="[ justify-content-center ]">
                        <img className="bio_img" src={Bio} alt="Artist Thomas Hargreaves"/>
                    </Col>
                </Row>
        </Container>
    );
}

export default About;