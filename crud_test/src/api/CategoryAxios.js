import axios from "./axiosClient";

const fetchAllCategory = () => {
  return axios.get("api/categories/allCategory");
};
const addCategory = (name) => {
  return axios.post("api/categories/addCategory", name);
};
const editCategory = (id, name) => {
  return axios.put(`api/categories/updateCategory/${id}`);
};
const deleteCategory = (id) => {
  return axios.delete(`api/categories/deleteCategory/${id}`);
};
const getCategoryProduct = (id) => {
  return axios.get(`api/categories/getCategoryProducts/${id}`);
};
export {
  fetchAllCategory,
  addCategory,
  editCategory,
  deleteCategory,
  getCategoryProduct,
};
