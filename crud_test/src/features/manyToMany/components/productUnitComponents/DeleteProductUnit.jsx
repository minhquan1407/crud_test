import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteProductUnit } from "../../../../api/ProductUnitAxios";

DeleteProductUnit.propTypes = {};

function DeleteProductUnit({
  show,
  handleClose,
  dataDeleteProductUnit,
  handleDeleteProductUnitModal,
}) {
  const confirmProductUnit = async () => {
    let res = await deleteProductUnit(dataDeleteProductUnit.price);
    console.log("check delete:", res);
    if (res) {
      toast.success("Delete user succeed!");
      handleClose();
      handleDeleteProductUnitModal(dataDeleteProductUnit);
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
          <Modal.Title>Delete a ProductUnit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            HEY BRO! Do you want delete this productUnit?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmProductUnit()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProductUnit;
