import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
} from "../utils/validation/Validation";
import { signUp } from "../api/UserAxios";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

function Register() {
  const [user, setUser] = useState(initialState);

  const { username, email, password, cf_password } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(username) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    try {
      const res = await signUp(username, email, password);

      // setUser({ ...user, err: "", success: res.message });
      console.log("res:", res);
      toast.success("Register Success! Please activate your email to start.");
      setUser({ username: "", email: "", password: "", cf_password: "" });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="login_page">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="username"
            value={username}
            name="username"
            className="form-control"
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Enter email address"
            id="email"
            value={email}
            className="form-control"
            name="email"
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            className="form-control"
            name="password"
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="cf_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            id="cf_password"
            value={cf_password}
            className="form-control"
            name="cf_password"
            onChange={handleChangeInput}
          />
        </div>

        <div className="login_page__row">
          <button type="submit">Register</button>
        </div>
      </form>

      <p>
        Already an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
