import React from 'react';
import Heading from "../layout/Heading";
import Gallery from "../gallery/Gallery";
import Container from "react-bootstrap/Container";


export function Home() {
    return (
        <Container>
            <div className="heading_row">
                <Heading title="Artworks " />
            </div>
            <Gallery />
        </Container>
    );
}

export default Home;