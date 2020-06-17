import React from "react";
import Modal from "react-bootstrap/Modal";
import currency from "../../../utils/currency";
import { addToCart } from "../../../store/actions/CartActions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

function ModalWindow({ product, show, handleClick, addToCart, cartItems }) {
    let PriceDisplayed;
    let AddToCartDisplayed;
    if(product.price!==0){
        PriceDisplayed = <div><b>Price:</b> {currency.formatCurrency(product.price)}</div>;
        AddToCartDisplayed = <Button className="button" onClick={(e) => addToCart(cartItems, product)}>Add to cart</Button>;
    } else{
        PriceDisplayed = <div><b>{currency.formatCurrency(product.price)}</b></div>;
        AddToCartDisplayed = null;
    }

    return (
          <Modal
          className="modal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClick}
          >
              <Modal.Header closeButton>
              {product.title}</Modal.Header>
              <Modal.Body>
                  <img
                  className="modal_img"
                  src={`products/${product.id}.jpg`}
                  alt={product.title}
                  />
              </Modal.Body>
              <Modal.Footer className="modal_footer">
              {AddToCartDisplayed}
              {PriceDisplayed}
              <div>{product.description}</div>
              <div><b>Size:</b> {product.dimensions}</div>
              </Modal.Footer>
           </Modal>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
});

export default connect(mapStateToProps, { addToCart })(ModalWindow);