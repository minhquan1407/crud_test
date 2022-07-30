import axios from "./axiosClient";

const postCreateUnit = (name, price) => {
  return axios.post("/api/units/addUnit", { name, price });
};

const getAllUnit = (page) => {
  return axios.get(`/api/units/getAllUnit?page=${page}`);
};

const getUnitById = (id) => {
  return axios.get(`/api/units/getUnitIdProduct/${id}`);
};
const paginationUnit = () => {
  return axios.get("/api/units/paginationUnit");
};
export { postCreateUnit, getAllUnit, getUnitById, paginationUnit };
