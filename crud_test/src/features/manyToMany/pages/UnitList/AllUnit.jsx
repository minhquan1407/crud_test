import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllUnit } from "../../../../api/UnitAxios";
import AddUnit from "../../components/UnitComponents/AddUnit";
import ReactPaginate from "react-paginate";

AllUnit.propTypes = {};

function AllUnit(props) {
  const [unitList, setUnitList] = useState([]);
  const [isModalAddUnit, setIsModalAddUnit] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    findAllUnit();
  }, []);

  const findAllUnit = async (page) => {
    try {
      let { data, total_page, total } = await getAllUnit(page);
      console.log("check dataaaaaa:", data, total_page, total);
      setUnitList(data);
      setTotalItem(total);
      setTotalPages(total_page);
    } catch (error) {
      console.log("fetch api category failed: ", error);
    }
  };
  const handleClose = () => {
    setIsModalAddUnit(false);
  };
  const handleAddUnit = (unit) => {
    setUnitList([...unitList, unit]);
  };
  const handlePageClick = (event) => {
    findAllUnit(+event.selected);
  };
  return (
    <div>
      <div className="group-btns">
        <button
          className="btn btn-success"
          onClick={() => setIsModalAddUnit(true)}
        >
          <i className="fa-solid fa-circle-plus"></i> Add new
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {unitList &&
            unitList.length > 0 &&
            unitList.map((unit, index) => {
              return (
                <tr key={`unit-${index}`}>
                  <td>{unit.id}</td>
                  <td>{unit.name}</td>
                  <td>{unit.price}</td>
                  <td>
                    <Button className="btn btn-warning mx-3">Detail</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <AddUnit
        show={isModalAddUnit}
        handleClose={handleClose}
        handleAddUnit={handleAddUnit}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default AllUnit;
