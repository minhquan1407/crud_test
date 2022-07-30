import axios from "./axiosClient";

const signUp = (username, email, password) => {
  return axios.post("/api/auth/signup", { username, email, password });
};

const signIn = (email, password) => {
  return axios.post("/api/auth/signIn", { email, password });
};

const activateEmail = (activation_token) => {
  return axios.post("/api/auth/activation", { activation_token });
};

const forgotPassword = (email) => {
  return axios.post("api/auth/forgot", { email });
};

const resetPassword = (password, accessToken) => {
  return axios.post("/api/auth/reset", password, accessToken);
};
export { signUp, signIn, activateEmail, forgotPassword, resetPassword };
