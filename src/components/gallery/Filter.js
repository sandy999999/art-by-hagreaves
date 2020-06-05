import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProductsSize, filterProductsType, sortProducts } from "../actions/ProductActions";

class Filter extends Component {
  render() {
    return (
      <div className="[ row filter-row ]">
        <div className="col-md-4">
          <label>
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
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
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
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
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
          </label>
        </div>
      </div>
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