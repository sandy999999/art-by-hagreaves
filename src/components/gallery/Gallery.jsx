import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Toggle from "../layout/Toggle";
import Masonry from "./Masonry";
import Filter from "./Filter";
import { fetchProducts } from "../../store/actions/ProductActions";
import Row from "react-bootstrap/Row";
import ProductDetails from "../product/ProductDetails";
import ModalWindow from "./ModalWindow";

let brakePoints = [350, 500, 750];

class Gallery extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const itemList = this.props.products.map((product) => {
      return (
        <div className="tile" key={product.id}>

          <Toggle>
            {({ open, handleClick }) => (
            <>
            <Card.Img
              className="card_img"
              src={`products/${product.id}.jpg`}
              alt={product.title}
              onClick={handleClick}
            />
            {open && 
            <ModalWindow product={product} show={open} />  
            }
            </>
            )}
          </Toggle>

          <Toggle>
            {({ open, handleClick }) => (
              <ProductDetails product={product} open={open} handleClick={handleClick} />
            )}
          </Toggle>
        </div>
      );
    });

    return (
      <Container className="gallery">
        <Row>
          <Filter />
        </Row>
        <div className="masonry_container">
          <Masonry brakePoints={brakePoints}>{itemList}</Masonry>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
});

export default connect(mapStateToProps, { fetchProducts })(Gallery);
