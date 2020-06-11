import React from 'react';
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function About() {
    return (
        <Container>
                <Heading title="Copyrights " />
                <Row className="row">
                    <Col>
                        <p>
                        All rights reserved: Thomas Hargreaves - Andreas Sandersen - 2020
                        </p>
                        <p>
                        Social Media icons by <b><a href="https://www.flaticon.com/authors/pixel-perfect">Pixel Perfect</a></b>
                        </p>
                        <p>
                        Shopping Cart icon by <b><a href="https://www.flaticon.com/authors/freepik">Freepik</a></b>
                        </p>
                        <p>
                        Font license: Public Domain, GPL, OFL. EXO font. Designed by <b><a href="https://www.1001freefonts.com/search.php?d=1&q=Natanael+Gama">Nathanael Gama</a></b>
                        </p>
                    </Col>
                </Row>
        </Container>
    );
}

export default About;