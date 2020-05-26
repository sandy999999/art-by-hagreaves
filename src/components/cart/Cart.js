import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

class Cart extends Component{
    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(
                        <div className="added-items" key={item.id}>
                            <img className="item-img" src={item.img} alt={item.img}/>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p><b>Price: NOK {item.price}</b></p>
                                
                                <div className="add-remove">
                                    <Link to="/cart">X</Link>
                                    <Link to="/cart">Y</Link>
                                </div>
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })
            ):

            (
                <p>Nothing.</p>
            )
        return(
            <Container>
                <div className="cart_dropdown">
                <button type="button" class="close" aria-hidden="true">×</button>
                    <h5>Your cart:</h5>
                    <ul className="cart-collection">
                        {addedItems}
                    </ul>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}


export default connect(mapStateToProps)(Cart)