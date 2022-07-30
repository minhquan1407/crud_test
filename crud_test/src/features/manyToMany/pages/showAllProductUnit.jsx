import _, { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getProductUnit } from "../../../api/ProductAxios";
import CardProduct from "../components/CardProduct";
// import AddProductUnit from "./AddProductUnit";
// import AddProductUnitById from "../components/productUnitComponents/AddProductUnitById";

ShowAllProductUnit.propTypes = {};

function ShowAllProductUnit(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);
  const getProductList = async () => {
    try {
      let data = await getProductUnit();
      console.log("check data: ", data);
      setProductList(data);
    } catch (error) {
      console.log("fetch api product failed: ", error);
    }
  };

  const handleSearch = debounce((event) => {
    let term = event.target.value;
    if (term) {
      let cloneProducts = _.cloneDeep(productList);
      cloneProducts = cloneProducts.filter((item) => item.title.includes(term));
      setProductList(cloneProducts);
    } else {
      getProductList();
    }
  }, 200);

  const handlePriceChange = (newFilters) => {
    setProductList((product) => ({
      ...product,
      newFilters,
    }));
  };
  return (
    <div>
      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Search user by email..."
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <Container>
        <Row>
          {productList &&
            productList.length > 0 &&
            productList.map((product, index) => {
              return (
                <Col md={6} lg={3} sm={12} key={`product-${index}`}>
                  <CardProduct product={product} onChange={handlePriceChange} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default ShowAllProductUnit;
