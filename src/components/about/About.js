import React from 'react';
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function About() {
    return (
        <>
        <Container>
            <Row className="[ row-top row-top_home ]">
                <Heading title="Bio - Thomas Hargreaves" />
            </Row>
            <Row>
                <Col md={6}>
                    
                </Col>
                <Col md={6} className="[ justify-content-center ]">
                    
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default About;