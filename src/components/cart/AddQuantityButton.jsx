import React from "react";
import { addQuantity } from "../../store/actions/CartActions";
import { connect } from "react-redux";



function AddQuantityButton(product, cartItems){
    return(
        <div className="quantity add" onClick={(e) => addQuantity(cartItems, product)}>+</div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
  });

export default connect(mapStateToProps, { addQuantity })(AddQuantityButton);