import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import currency from "../../utils/currency";
import { addToCart } from "../../store/actions/CartActions";


function ProductDetails({ handleClick, open, product, addToCart, cartItems }) {   
    return (     
    <>       
        <div className={`plus_icon ${open ? 'closed' : 'opened'}`} onClick={handleClick}>+       
        </div>

        {open && (
            <Card.Body className="card_body">           
                <Card.Title className="card_title">{product.title}</Card.Title>           
                <Card.Text className="card_content">             
                    {product.description}             
                    <br />             
                    <br />
                    <b>Size:</b> {product.dimensions}             
                    <br />             
                    <b>Price:</b> {currency.formatCurrency(product.price)}           
                </Card.Text>           
                <Button className="button" onClick={(e) => addToCart(cartItems, product)}>Add to cart</Button>         
            </Card.Body>       
        )}     
    </>   
    ) 
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
  });

export default connect(mapStateToProps, { addToCart })(ProductDetails);