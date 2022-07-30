import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { findAllProductUnit } from "../../../../api/ProductUnitAxios";
import AddProductUnitById from "../../components/productUnitComponents/AddProductUnitById";
import DeleteProductUnit from "../../components/productUnitComponents/DeleteProductUnit";

ProductUnitById.propTypes = {};

function ProductUnitById(props) {
  const [dataProductUnit, setDataProductUnit] = useState([]);
  const [showModalProductUnit, setShowModalProductUnit] = useState(false);

  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataDeleteProductUnit, setDataDeleteProductUnit] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let data = await findAllProductUnit();
        console.log("check data: ", data);
        setDataProductUnit(data);
      } catch (error) {
        console.log("fetch api product failed: ", error);
      }
    })();
  }, []);

  const handleClose = () => {
    setShowModalProductUnit(false);
    setShowModalDelete(false);
  };

  const handleDataProductUnit = (productUnit) => {
    setDataProductUnit([...dataProductUnit, productUnit]);
    // console.log("check productUnit:", productUnit);
  };

  const handleDeleteProductUnit = (productUnit) => {
    setShowModalDelete(true);
    setDataDeleteProductUnit(productUnit);
  };
  const handleDeleteProductUnitModal = (productUnit) => {
    let cloneProductUnit = _.cloneDeep(dataProductUnit);
    cloneProductUnit = cloneProductUnit.filter(
      (item) => item.price !== productUnit.price
    );
    setDataProductUnit(cloneProductUnit);
  };
  return (
    <div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => setShowModalProductUnit(true)}
        >
          <i className="fa-solid fa-circle-plus"></i> Add ProductUnit
        </button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ProductId</th>
            <th>UnitId</th>
            <th>NameUnit</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {dataProductUnit &&
            dataProductUnit.length > 0 &&
            dataProductUnit.map((productUnit, index) => {
              return (
                <tr key={`unit-${index}`}>
                  <td>{productUnit.productId}</td>
                  <td>{productUnit.unitId}</td>
                  <td>{productUnit.nameUnit}</td>
                  <td>{productUnit.price}</td>
                  <td>
                    <Button
                      className="btn btn-danger mx-3"
                      onClick={() => handleDeleteProductUnit(productUnit)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AddProductUnitById
        show={showModalProductUnit}
        handleClose={handleClose}
        handleDataProductUnit={handleDataProductUnit}
      />
      <DeleteProductUnit
        show={showModalDelete}
        handleClose={handleClose}
        dataDeleteProductUnit={dataDeleteProductUnit}
        handleDeleteProductUnitModal={handleDeleteProductUnitModal}
      />
    </div>
  );
}

export default ProductUnitById;
