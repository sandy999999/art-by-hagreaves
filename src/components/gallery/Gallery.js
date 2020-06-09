import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Toggle from "../layout/Toggle";
import Masonry from "./Masonry";
import Filter from "./Filter";
import { fetchProducts } from "../../store/actions/ProductActions";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import ProductDetails from "../product/ProductDetails";

let brakePoints = [350, 500, 750];

class Gallery extends Component {
    
    componentDidMount() {
        this.props.fetchProducts();
      }

    render(){

        const itemList = this.props.products.map(product=>{

            return(
                    <div className="tile" key={product.id}>                        


                        <Card.Img className="card_img" src={`products/${product.id}.jpg`} alt={product.title}/>


                            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton />
                                <Modal.Body>
                                    <img className="modal_img" src={`products/${product.id}.jpg`} alt={product.title}/>
                                </Modal.Body>
                            </Modal>



                        <Toggle>             
                        {({ open, handleClick }) => (               
                            <ProductDetails product={product}                 
                                            open={open}                         
                                            handleClick={handleClick}               
                            />             
                        )}           
                        </Toggle>
                    </div>

            )
        })

        return(
            <Container>
                <Row>
                    <Filter />
                </Row>
				<div className="masonry_container">
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
  });

export default connect(mapStateToProps, { fetchProducts })(Gallery);