import React, { Component } from "react";
import { connect } from "react-redux";
import Currency from "../../utils/currency";
import { addToCart, removeFromCart } from "../../store/actions/CartActions";
import Container from "react-bootstrap/Container";
import Trashcan from "../../images/icons/trash-blue.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

class CartDropdown extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <Container>
        <div id="cart_dropdown" className="cart_dropdown">
          {cartItems.length === 0 ? (
            "Cart is empty"
          ) : (
            <div>
              You have {cartItems.length} items in the basket. <hr />
            </div>
          )}
          {cartItems.length > 0 && (
            <>
              <div className="added_items">
                {cartItems.map((item) => (
                    <img
                      src={Trashcan}
                      className="trashcan"
                      alt="Remove from cart"
                      onClick={(e) =>
                        this.props.removeFromCart(this.props.cartItems, item)
                      }
                    />
                ))}
              </div>
              <b>
                Total:{" "}
                {Currency.formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0),
                )}
              </b>
              <NavLink to="/checkout" exact>
                <Button className="button">Checkout</Button>
              </NavLink>
            </>
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
