import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteProduct } from "../../../api/ProductAxios";

DeleteProduct.propTypes = {};

function DeleteProduct({
  show,
  handleClose,
  dataDeleteProduct,
  handleDeleteProductModal,
}) {
  const confirmDelete = async () => {
    let res = await deleteProduct(dataDeleteProduct.id);
    console.log("check delete:", res);
    if (res) {
      toast.success("Delete user succeed!");
      handleClose();
      handleDeleteProductModal(dataDeleteProduct);
    } else {
      toast.error("error delete user");
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            HEY BRO! Do you want delete this tutorial?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProduct;
