import React, { Component } from "react";

export default class CloseButton extends Component {
    state = {
        close: true,
    }

    closeParent = () => {
        this.setState({
            close: !this.state.close
        })
    }
}