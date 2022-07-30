import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { THUMBNAIL_PLACEHOLDER } from "../../../constants/index";
import { getUnitById } from "../../../api/UnitAxios";

CardProduct.propTypes = {
  product: PropTypes.object,
  onChange: PropTypes.func,
};

function CardProduct({ product, onChange }) {
  const thumbnailUrl = product.image ? product.image : THUMBNAIL_PLACEHOLDER;
  const [price, setPrice] = useState(0);
  const handlePriceChange = (price) => {
    setPrice(price);
    // console.log("check price: ", price);
  };

  return (
    <>
      <Card className="shadow-lg m-2 p-3 rounded" style={{ width: "17rem" }}>
        <Card.Img
          src={thumbnailUrl}
          style={{ width: "100%", height: "238px" }}
        />
        <Card.Body>
          <Card.Title>Title: {product.title}</Card.Title>
          <Card.Title>
            Price:{" "}
            {/* {product.units.map((unit) => {
              return (
                <option key={unit.product_unit.unitId}>
                  {unit.product_unit.price}
                </option>
              );
            })} */}
            {price !== 0 ? price : product.price}
          </Card.Title>{" "}
          <Card.Text>Description: {product.description}...</Card.Text>
          <div style={{ display: "flex" }}>
            <Button className="btn btn-danger m-2" style={{ minWidth: "69px" }}>
              Detail
            </Button>
            <select
              style={{ height: "30px", marginTop: "12px", minWidth: "69px" }}
              onChange={(e) => handlePriceChange(e.target.value)}
            >
              {product.units.map((unit) => {
                return (
                  <option key={unit.id} value={unit.price}>
                    {unit.name}
                  </option>
                );
              })}
            </select>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardProduct;
