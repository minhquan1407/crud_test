import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAllCategory } from "../../../api/CategoryAxios";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "../../../routes/PrivateRoutes";

ShowCategory.propTypes = {};

function ShowCategory(props) {
  const auth = useSelector((state) => state.isLogged);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let data = await fetchAllCategory();
        console.log("check data:", data);
        setCategoryList(data);
      } catch (error) {
        console.log("fetch api category failed: ", error);
      }
    })();
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Category</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {categoryList &&
            categoryList.length > 0 &&
            categoryList.map((category, index) => {
              return (
                <tr key={`category-${index}`}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`category/${category.id}`}>
                      <Button className="btn btn-warning mx-3">Detail</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div>
        <Link to={"/productUnit"}>
          <Button style={{ textAlign: "center", color: "pink" }}>
            Show All Product
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ShowCategory;
