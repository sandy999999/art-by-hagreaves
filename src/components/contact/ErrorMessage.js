import React from "react";
import PropTypes from "prop-types";

function ErrorMessage({ children }) {
    return (
        <div class="error">{ children }</div>
    );
}

ErrorMessage.propTypes = {
	children: PropTypes.node.isRequired,
};


export default ErrorMessage;