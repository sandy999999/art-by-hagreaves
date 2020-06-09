import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProductsSize, filterProductsType, sortProducts } from "../../store/actions/ProductActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

class Filter extends Component {
  render() {
    return (
      <Row className="[ filter-row ]">
        <Col md={4}>
          <Form.Label>
            Sort by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">PRICE</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </Form.Label>
        </Col>
        
        <Col md={4}>
          <Form.Label>
            Type
            <select
              className="form-control"
              value={this.props.type}
              onChange={(event) => {
                this.props.filterProductsType(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">TYPE</option>
              <option value="Prints">Prints</option>
              <option value="Canvas">Canvas</option>
              <option value="Original Drawing">Original Drawing</option>
              <option value="Others">Others</option>
            </select>
          </Form.Label>
        </Col>

        <Col md={4}>
          <Form.Label>
            Size
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProductsSize(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">SIZE</option>
              <option value="Print">Print</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Big">Big</option>
            </select>
          </Form.Label>
        </Col>

      </Row>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  type: state.products.type,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProductsSize, filterProductsType, sortProducts })(
  Filter
);