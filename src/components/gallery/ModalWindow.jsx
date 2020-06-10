import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalWindow({ product, show }) {   
    const [modalShow, setModalShow] = React.useState(false);

    return (     
          <Modal 
          size="lg" 
          aria-labelledby="contained-modal-title-vcenter" 
          centered 
          show={modalShow} 
          onHide={() => setModalShow(false)}
          >
              <Modal.Header closeButton />
              <Modal.Body>
                  <img
                  className="modal_img"
                  src={`products/${product.id}.jpg`}
                  alt={product.title}
                  />
              </Modal.Body>
           </Modal>
    ) 
}