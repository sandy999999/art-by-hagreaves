import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../../currency";
import { addToCart, removeFromCart } from "../actions/CartActions";
import Container from "react-bootstrap/Container";
import Trashcan from "../../images/icons/trash-blue.png";
import Button from "react-bootstrap/Button";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;

    return (
    <Container>
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <Container className="cart-collection">
            <ul className="added-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    className="trash_btn"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    <img src={Trashcan} className="trashcan" alt="Remove from cart"/>
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <Button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="button btn btn-primary"
            >
              checkout
            </Button>
          </Container>
        )}
    </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Checkout);