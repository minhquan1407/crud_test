import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postCreateUnit } from "../../../../api/UnitAxios";

AddUnit.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleAddUnit: PropTypes.func,
};

function AddUnit({ show, handleClose, handleAddUnit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const handleAddNewUnit = async () => {
    try {
      let data = await postCreateUnit(name, price);
      console.log("check data: ", data);
      handleClose();
      if (data && data.id) {
        setName("");
        setPrice(0);
        handleAddUnit({
          name: name,
          price: price,
          id: data.id,
        });
      }
    } catch (error) {
      console.log("fetch api productUnit failed: ", error);
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
            <Modal.Title>Add new Unit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="body-add-new">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
            <Button variant="primary" onClick={() => handleAddNewUnit()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddUnit;
