import axios from "./axiosClient";

const addProductUnitById = (unitId, productId, nameUnit, price) => {
  return axios.post("/api/productUnits/addProductUnit", {
    unitId,
    productId,
    nameUnit,
    price,
  });
};
const findAllProductUnit = () => {
  return axios.get("/api/productUnits/findAllProductUnit");
};
const deleteProductUnit = (price) => {
  return axios.delete(`/api/productUnits/deleteProductUnit/${price}`);
};
export { addProductUnitById, findAllProductUnit, deleteProductUnit };
