import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { addProductByCategory } from "../../../api/ProductAxios";
import { useParams } from "react-router-dom";

AddCategory.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleAddNewProduct: PropTypes.func,
  dataByIdCategory: PropTypes.object,
};

function AddCategory({
  show,
  handleClose,
  handleAddNewProduct,
  dataByIdCategory,
}) {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const handleAddProduct = async () => {
    let data = await addProductByCategory(
      { categoryId: dataByIdCategory.id },
      image,
      title,
      description,
      price
    );
    console.log("check ressss: ", data);
    if (data && data.id) {
      handleClose();
      toast.success("A User is created succeed");
      setImage("");
      setPrice(0);
      setDescription("");
      setTitle("");
      handleAddNewProduct({
        title: title,
        description: description,
        image: image,
        price: price,
        categoryId: dataByIdCategory.id,
      });
      //   success
    } else {
      toast.error("A error...");
      //error
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
          <Modal.Title>Add new ProductById</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div className="mb-3">
              <label className="form-lable">Upload Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
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
          <Button variant="primary" onClick={() => handleAddProduct()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategory;
