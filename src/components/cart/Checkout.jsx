import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../../utils/currency";
import { addToCart, removeFromCart } from "../../store/actions/CartActions";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Heading from "../layout/Heading";
import Trashcan from "../../images/icons/trash-blue.png";
import AddQuantityButton from "./AddQuantityButton";
import SubtractQuantityButton from "./SubtractQuantityButton";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;

    let Prints = cartItems.filter((item) => {
      return item.type === "Prints"
    });

    let AddSubtract = cartItems.map((item) => {
      if (item.type === "Prints") {
        return <><AddQuantityButton /><SubtractQuantityButton /></>
      } else{
        return null;
      }
    })
  

    return (
      <Container>
        <Heading title="Checkout " />

        <Row>
          {cartItems.length === 0 ? (
            "Basket is empty"
          ) : (
            <div className="cart_count">You have {cartItems.length} items in the basket.</div>
          )}
        </Row>

        {cartItems.length > 0 && (
          <>
          <Row>
              {cartItems.map((item) => (
              <Col key={item.id}>
                <ul className="checkout_list">
                  <li className="checkout_item">
                    <img
                      className="checkout_img"
                      src={`products/${item.id}.jpg`}
                      alt={item.title}
                    />
                    <h4>{item.title}</h4>
                    <div className="checkout_info">
                      <div className="item_count">
                      {item.count} X {util.formatCurrency(item.price)}
                      </div>
                      {AddSubtract}
                      <img
                      src={Trashcan}
                      className="trashcan"
                      alt="Remove from cart"
                      onClick={(e) =>
                        this.props.removeFromCart(this.props.cartItems, item)
                      }
                      />
                    </div>
                  </li>
                </ul>
              </Col>
              ))}
          </Row>
          <Row>
            <Col md={2}>
              <div className="checkout_total">
                <b>
                  Sum:{" "}
                  {util.formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0),
                  )}
                </b>
              </div>
            </Col>
          </Row>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Checkout);
