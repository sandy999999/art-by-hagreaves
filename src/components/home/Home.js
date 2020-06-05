import React from 'react';
import Heading from "../layout/Heading";
import Gallery from "../gallery/Gallery";
import Container from "react-bootstrap/Container";


function Home() {
    return (
        <Container>
            <Heading title="Gallery " />
            <Gallery />
        </Container>
    );
}

export default Home;