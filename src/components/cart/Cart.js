import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "./CartActions";
import Container from "react-bootstrap/Container";


class Cart extends Component{
    
    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    handleClose = () => {
        document.getElementById("cart_dropdown").style.display ="none";
    };



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
                                <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
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
                <div id="cart_dropdown" className="cart_dropdown">
                <button type="button" className="close" aria-hidden="true" onClick={this.handleClose}>&times;</button>
                    <br />
                    <h5>Your cart:</h5>
                    <Container className="cart-collection">
                        {addedItems}
                    </Container>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)