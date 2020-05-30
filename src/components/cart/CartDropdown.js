import React, { Component } from "react";
import { connect } from "react-redux";
import Currency from "../../currency";
import { addToCart, removeFromCart } from "../actions/CartActions";
import Container from "react-bootstrap/Container";
import Trashcan from "../../images/icons/trash-blue.png";
import { NavLink } from "react-router-dom";

class CartDropdown extends Component {
  render() {
    const { cartItems } = this.props;

    return (
    <Container>
        <div id="cart_dropdown" className="cart_dropdown">
        {/*<button type="button" className="close" aria-hidden="true" onClick={this.handleClose}>&times;</button>*/}
        {cartItems.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <Container className="cart-collection">
            <div className="added-items">
                {cartItems.map((item) => (
                <li className="cart_item" key={item.id}>
                    <b>{item.title}</b>
                    <img src={Trashcan} className="trashcan" alt="Remove from cart" onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}/>
                    <br />
                    <p>{item.count}</p>
                </li>
                ))}
            </div>

            <b>
              Total:{" "}
              {Currency.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <NavLink to="/checkout" exact className="[ btn btn-primary ]">Checkout</NavLink>
          </Container>
        )}
        </div>
    </Container>
    );
  }
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(CartDropdown);