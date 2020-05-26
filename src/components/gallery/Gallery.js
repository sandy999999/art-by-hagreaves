import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../cart/CartActions";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Toggle from "../layout/Toggle";
import Masonry from "./Masonry";
import MoreIcon from "../../images/icons/more-sunset.png";
import { Link } from "react-router-dom";

let brakePoints = [350, 500, 750];

class Gallery extends Component {

    handleAddClick = (id)=>{
        this.props.addToCart(id);
    }


    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Toggle>
                    {({ open, handleClick }) =>(
                    <div className="tile" key={item.id}>
                        <Card.Img className="card-img" src={item.img} alt={item.title}/>
                        <img id="plus-icon" className="[ more-icon ]" onClick={handleClick} src={MoreIcon} alt="See more information about artwork"/>
                        {open &&
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{item.title}</Card.Title>
                                <Card.Text className="card-content">
                                    {item.desc}
                                    <br/>
                                    <br/>
                                    <p>Size: {item.size}</p>
                                    <b>Price:</b> NOK {item.price}
                                </Card.Text>
                                <Button to="/" onClick={()=>{this.handleAddClick(item.id)}}>Add to cart</Button>
                                <Link to={"gallery/" + item.id}>
                                    <Button variant="secondary" block>
                                    Details
                                    </Button>
                                </Link>
                            </Card.Body>
                        }
                    </div>
                    )}
                </Toggle>
            )
        })

        return(
            <Container>
				<div className="masonry-container">
					<Masonry brakePoints={brakePoints}>
                        {itemList}
					</Masonry>
				</div>
			</Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);