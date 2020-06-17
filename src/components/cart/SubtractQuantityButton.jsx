import React from "react";
import { subtractQuantity } from "../../store/actions/CartActions";
import { connect } from "react-redux";



function SubtractQuantityButton(product, cartItems){
    return(
        <div className="quantity subtract" onClick={(e) => subtractQuantity(cartItems, product)}>-</div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
  });

export default connect(mapStateToProps, { subtractQuantity })(SubtractQuantityButton);