import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { addProductUnitById } from "../../../../api/ProductUnitAxios";

AddProductUnitById.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleDataProductUnit: PropTypes.func,
};

function AddProductUnitById({ show, handleClose, handleDataProductUnit }) {
  const [unitId, setUnitId] = useState(0);
  const [productId, setProductId] = useState(0);
  const [nameUnit, setNameUnit] = useState("");
  const [price, setPrice] = useState(0);
  const handleAddProductUnitId = async () => {
    try {
      let data = await addProductUnitById(unitId, productId, nameUnit, price);
      console.log("check dataaa: ", data);
      handleClose();
      setUnitId(0);
      setProductId(0);
      setPrice(0);
      setNameUnit("");
      toast.success("A User is created succeed");
      handleDataProductUnit({
        unitId: unitId,
        productId: productId,
        nameUnit: nameUnit,
        price: price,
      });
    } catch (error) {
      console.log("fetch api productUnit failed: ", error);
      toast.error("A error...");
    }
  };

  return (
    <div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new ProductUnitById</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              <div className="mb-3">
                <label className="form-label">productId</label>
                <input
                  type="text"
                  className="form-control"
                  value={productId}
                  onChange={(event) => setProductId(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">unitId</label>
                <input
                  type="text"
                  className="form-control"
                  value={unitId}
                  onChange={(event) => setUnitId(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">NameUnit</label>
                <input
                  type="text"
                  className="form-control"
                  value={nameUnit}
                  onChange={(event) => setNameUnit(event.target.value)}
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
            <Button variant="primary" onClick={() => handleAddProductUnitId()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddProductUnitById;
