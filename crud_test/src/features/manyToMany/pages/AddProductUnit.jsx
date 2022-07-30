// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// import { addProductUnitById } from "../../../api/ProductUnitAxios";

// AddProductUnit.propTypes = {
//   show: PropTypes.bool,
//   handleClose: PropTypes.func,
//   handleDataProductUnit: PropTypes.func,
//   dataProductUnit: PropTypes.object,
// };

// function AddProductUnit({
//   show,
//   handleClose,
//   dataProductUnit,
//   handleDataProductUnit,
// }) {
//   const [unitId, setUnitId] = useState(0);
//   const [productId, setProductId] = useState(0);
//   const handleAddProductUnitId = async () => {
//     try {
//       let data = await addProductUnitById({
//         unitId: dataProductUnit.units.id,
//         productId: dataProductUnit.id,
//       });
//       console.log("check dataaa: ", data);
//       handleClose();
//       setUnitId("");
//       setProductId("");
//       handleDataProductUnit({
//         unitId: dataProductUnit.units.id,
//         productId: dataProductUnit.id,
//       });
//     } catch (error) {
//       console.log("fetch api productUnit failed: ", error);
//     }
//   };

//   return (
//     <div>
//       <>
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Add new ProductUnit</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="body-add-new">
//               <div className="mb-3">
//                 <label className="form-lable">Unitid</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={unitId}
//                   onChange={(event) => setUnitId(event.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">ProductId</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={productId}
//                   onChange={(event) => setProductId(event.target.value)}
//                 />
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={() => handleAddProductUnitId()}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     </div>
//   );
// }

// export default AddProductUnit;
