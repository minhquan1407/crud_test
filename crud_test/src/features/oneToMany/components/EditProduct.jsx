import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateProduct } from "../../../api/ProductAxios";

EditProduct.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleEditProductModal: PropTypes.func,
  dataEditProduct: PropTypes.object,
};

function EditProduct({
  show,
  handleClose,
  handleEditProductModal,
  dataEditProduct,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const handleUpdateProduct = async () => {
    let data = await updateProduct(
      dataEditProduct.id,
      title,
      description,
      price
      // published
    );
    console.log("check ress: ", data);
    if (data) {
      handleClose();
      toast.success("Update user success");
      handleEditProductModal({
        title: title,
        description: description,
        price: price,
        id: dataEditProduct.id,
      });
      //   success
    } else {
      toast.error("A error...");
      //error
    }
  };
  useEffect(() => {
    // hàm này chạy khi có sự thay đổi của dataUserEdit
    if (show) {
      setTitle(dataEditProduct.title);
      setDescription(dataEditProduct.description);
      setPrice(dataEditProduct.price);
    }
  }, [dataEditProduct]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div className="mb-3">
              <label className="form-lable">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdateProduct()}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct;
