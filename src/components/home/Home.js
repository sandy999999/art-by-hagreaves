import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../cart/CartActions";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Heading from "../layout/Heading";

class Home extends Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-img">
                        <img src={item.img} alt={item.title}/>
                        <h3 className="card-title">{item.title}</h3>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: NOK {item.price}</b></p>
                    </div>
                    <Button to="/" onClick={()=>{this.handleClick(item.id)}}>Add to cart</Button>
                </div>
            )
        })

        return(
            <Container className="items-container">
                <Heading title="Artworks" />
                <div className="box">
                    {itemList}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
