import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  filterProductsSize,
  filterProductsType,
  filterProductsPrice,
} from "../../store/actions/ProductActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function Filter(props) {

  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setSrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
  },[]);

    return (
      <Row onScroll={handleScroll} className={`filter_row ${scrollPosition ? 'sticky_filter' : ''}`}>
        <Col>
          <Form.Label>
            Sort by
            <select
              className="form-control"
              value={props.sort}
              onChange={(event) => {
                props.filterProductsPrice(props.filteredProducts, event.target.value);
              }}
            >
              <option value="">PRICE</option>
              <option value="lowestprice">Low to high</option>
              <option value="highestprice">High to low</option>
            </select>
          </Form.Label>
        </Col>

        <Col>
          <Form.Label>
            Type
            <select
              className="form-control"
              value={props.type}
              onChange={(event) => {
                props.filterProductsType(props.products, event.target.value);
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

        <Col>
          <Form.Label>
            Size
            <select
              className="form-control"
              value={props.size}
              onChange={(event) => {
                props.filterProductsSize(props.products, event.target.value);
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

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  type: state.products.type,
  sort: state.products.sort,
});
export default connect(mapStateToProps, {
  filterProductsSize,
  filterProductsType,
  filterProductsPrice,
})(Filter);
