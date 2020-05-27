import React from "react";

const CloseButton = ({ onClick }) => (
  <div>
    <button className="close" aria-hidden="true" onClick={onClick}>x</button>
  </div>
)

export default CloseButton;