import React from 'react';
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function About() {
    return (
        <Container>
                <Heading title="Sales Terms & Conditions "/>
                <Row className="row">
                    <Col>
                    <h2>Contact Information</h2>
                    </Col>
                    <Col>
                    <h2>1. Contract</h2>
                        <p>Norwegian consumer legislation is mandatory, unless conditions are agreed on that are more favourable to the consumer than those implied by the law; see the Consumer Purchases Act, Section 3 and Cancellation Act, Section 3. 
                        The basis of the contract consists of the information the Purchaser receives in the payment solution, along with these standard terms and conditions. Deviations from these standard terms and conditions that are favourable to the consumer are permitted by direct correspondence between Purchaser and Seller. In instances where the contract does not supply a direct solution to a certain issue, the contract must be complemented with relevant statutory provisions.
                        Section 8 of the Cancellation Act lists information that the contract shall include in all circumstances, and the information the Purchaser has the right to receive before a contract is concluded. The Seller must itself find out whether further informational requirements follow from legislation other than that which these guidelines deal with.
                        Individual informational requirements regarding the good itself and different alternatives offered by the Seller (e.g. delivery) must be presented in the ordering solution.
                        </p>
                    </Col>
                    <Col>
                    <h2>2. Parties</h2>
                        <p>Norwegian consumer legislation is mandatory, unless conditions are agreed on that are more favourable to the consumer than those implied by the law; see the Consumer Purchases Act, Section 3 and Cancellation Act, Section 3. 
                        The basis of the contract consists of the information the Purchaser receives in the payment solution, along with these standard terms and conditions. Deviations from these standard terms and conditions that are favourable to the consumer are permitted by direct correspondence between Purchaser and Seller. In instances where the contract does not supply a direct solution to a certain issue, the contract must be complemented with relevant statutory provisions.
                        Section 8 of the Cancellation Act lists information that the contract shall include in all circumstances, and the information the Purchaser has the right to receive before a contract is concluded. The Seller must itself find out whether further informational requirements follow from legislation other than that which these guidelines deal with.
                        Individual informational requirements regarding the good itself and different alternatives offered by the Seller (e.g. delivery) must be presented in the ordering solution.
                        </p>
                    </Col>
                </Row>
        </Container>
    );
}

export default About;