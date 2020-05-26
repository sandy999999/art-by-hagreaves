import React, { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state = {
            open: false,
        }
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    render() {
        const{children}=this.props;
        return children({
                open: this.state.open,
                handleClick: this.handleClick
        })};
}

export default Toggle;