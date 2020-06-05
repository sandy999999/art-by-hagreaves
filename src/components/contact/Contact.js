import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../layout/Heading";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required").min(2, "First name must be at least 2 characters"),
    lastName: yup.string().required("Last name is required").min(2, "First name must be at least 2 characters"),
	email: yup
		.string()
		.email("Please enter a valid email")
        .required("Email is required"),
    message: yup
        .string()
        .min(10, "Your message must be at least 10 characters")
        .required("Enter your inquiry")
});

function Contact() {
	const { contact, handleSubmit, errors } = useForm({
		validationSchema: schema
    });

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
        <Container>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Heading title="Contact" />

            <Container className="form_group">
            <Form.Group>
                <br/>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" ref={contact} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                <br/>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" ref={contact} />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={contact} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" placeholder="Enter your message" ref={contact} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

            <Button className="button" type="submit">Submit</Button>
            </Container>
            </Form>
        </Container>
	);
}

export default Contact;