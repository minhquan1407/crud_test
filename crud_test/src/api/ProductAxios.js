import axios from "./axiosClient";

const fetchAllProduct = () => {
  return axios.get("/api/products/allProduct");
};

const addProductByCategory = (
  { categoryId: id },
  image,
  title,
  description,
  price
) => {
  return axios.post(`/api/products/addProduct/${id}`, {
    title,
    description,
    image,
    price,
  });
};
const deleteProduct = (id) => {
  return axios.delete(`api/products/deleteProduct/${id}`);
};
const updateProduct = (id, title, description, price) => {
  return axios.put(`api/products/updateProduct/${id}`, {
    title,
    description,
    price,
  });
};
const getProductUnit = () => {
  return axios.get("/api/products/getProductUnit");
};
export {
  fetchAllProduct,
  addProductByCategory,
  deleteProduct,
  updateProduct,
  getProductUnit,
};
