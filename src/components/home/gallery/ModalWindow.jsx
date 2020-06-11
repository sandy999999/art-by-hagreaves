import React from "react";
import Modal from "react-bootstrap/Modal";

export default function ModalWindow({ product, show, handleClick }) {
    return (
          <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClick}
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