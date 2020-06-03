import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/CartActions";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Toggle from "../layout/Toggle";
import Masonry from "./Masonry";
import Filter from "./Filter";
import { fetchProducts } from "../actions/ProductActions";
import currency from "../../currency";
import Row from "react-bootstrap/Row";

let brakePoints = [350, 500, 750];

class Gallery extends Component {
    
    componentDidMount() {
        this.props.fetchProducts();
      }

    render(){

        const itemList = this.props.products.map(product=>{

            return(
                <Toggle>
                    {({ open, handleClick }) =>(
                    <div className="tile" key={product.id}>
                        <Card.Img className="card-img" src={`products/${product.id}.jpg`} alt={product.title}/>


                        {/*<div className={`circle-plus ${open ? "opened" : "closed"}`} onClick={handleClick} >
                            <div className="circle">
                                <div className="horizontal"></div>
                                <div className="vertical"></div>
                            </div>
                            </div>*/}

                        <p className={`plus_icon ${open ? "closed" : "opened"}`} onClick={handleClick}>+</p>

                        {open &&
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{product.title}</Card.Title>
                                <Card.Text className="card-content">
                                    {product.description}
                                    <br/>
                                    <br/>
                                    <b>Size:</b> {product.dimensions}
                                    <br/>
                                    <b>Price:</b> {currency.formatCurrency(product.price)}
                                </Card.Text>
                                <Button onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>Add to cart</Button>
                            </Card.Body>
                        }
                    </div>
                    )}
                </Toggle>
            )
        })

        return(
            <Container>
                <Toggle>
                    {({ open, handleClick }) =>(
                        <Container>
                            <Row>
                                <p className={`plus_icon-filter ${open ? "closed" : "opened"}`} onClick={handleClick}>+</p>

                            {open && 
                                <Filter />
                            }
                            </Row>
                        </Container>
                    )}
                </Toggle>
				<div className="masonry-container">
					<Masonry brakePoints={brakePoints}>
                        {itemList}
					</Masonry>
				</div>
			</Container>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items,
  });

export default connect(mapStateToProps, { fetchProducts, addToCart })(Gallery);