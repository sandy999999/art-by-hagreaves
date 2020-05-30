import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ArtworkDetail extends Component{
    render(){

        let details = this.props.products.map(item=>{
                    return(
                        <Card>
                            <Card.Img className="card-img" src={item.img} alt={item.title}/>
                            <Card.Body className="card-body">
                            <Card.Title className="card-title">{item.title}</Card.Title>
                                <Card.Text className="card-content">
                                    {item.desc}
                                    <br/>
                                    <br/>
                                    <p>Size: {item.size}</p>
                                    <b>Price:</b> NOK {item.price}
                                </Card.Text>
                                <Button to="/" onClick={()=>{this.handleAddClick(item.id)}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
        return(
            <Container>
                {details}
            </Container>
        )
    }
}

export default ArtworkDetail;