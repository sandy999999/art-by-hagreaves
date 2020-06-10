import React from "react";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bio from "../../images/compressed/bio.jpg";

export function About() {
  return (
    <Container>
      <Heading title="Thomas Hargreaves " />
      <Row>
        <Col md={6}>
          <p>
            Thomas Hargreaves is an artist from Oslo who through the medium of painting
            attempts to step outside of his self- identifications in order to express the
            inexpressible and be a clear channel for the infinite creative stream. In turn
            this process paradoxically allows him to further know him Self.
          </p>
          <p>
            He works on canvas and murals as well as creative projects for private and
            commerce. Please contact for any inquires.
          </p>{" "}
        </Col>
        <Col md={6} className="[ justify-content-center ]">
          <img className="bio_img" src={Bio} alt="Artist Thomas Hargreaves" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
