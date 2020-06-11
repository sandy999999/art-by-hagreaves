import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../../utils/currency";
import { addToCart, removeFromCart } from "../../store/actions/CartActions";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Heading from "../layout/Heading";
import Trashcan from "../../images/icons/trash-blue.png";
import Card from "react-bootstrap/Card";

class Checkout extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <Container>
        <Heading title="Checkout " />

        <Row>
          {cartItems.length === 0 ? (
            "Basket is empty"
          ) : (
            <div>You have {cartItems.length} items in the basket.</div>
          )}
        </Row>

        {cartItems.length > 0 && (
          <Row>
            <Col>
              {cartItems.map((item) => (
                <Col>
                  <Card.Body>
                    <Card.Img
                      className="checkout_img"
                      src={`products/${item.id}.jpg`}
                      alt={item.title}
                    />
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="card_content">
                      <br />
                      {item.count} X {util.formatCurrency(item.price)}
                    </Card.Text>
                    <img
                      src={Trashcan}
                      className="trashcan"
                      alt="Remove from cart"
                      onClick={(e) =>
                        this.props.removeFromCart(this.props.cartItems, item)
                      }
                    />
                  </Card.Body>
                </Col>
              ))}
            </Col>

            <Col md={2}>
              <div>
                <b>
                  Sum:{" "}
                  {util.formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0),
                  )}
                </b>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(Checkout);
