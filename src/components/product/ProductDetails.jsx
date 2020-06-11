import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import currency from "../../utils/currency";
import { addToCart } from "../../store/actions/CartActions";


function ProductDetails({ handleClick, open, product, addToCart, cartItems }) {
    let AddToCartDisplayed;
    let PriceDisplayed;
    if(product.price!==0){
        AddToCartDisplayed = <Button className="button" onClick={(e) => addToCart(cartItems, product)}>Add to cart</Button>;
        PriceDisplayed = <><b>Price:</b> {currency.formatCurrency(product.price)}</>;
    } else{
        AddToCartDisplayed = null;
        PriceDisplayed = <><br/><b>{currency.formatCurrency(product.price)}</b></>;
    }

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
                    {PriceDisplayed}
                </Card.Text>
                {AddToCartDisplayed}
            </Card.Body>
        )}
    </>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
  });

export default connect(mapStateToProps, { addToCart })(ProductDetails);