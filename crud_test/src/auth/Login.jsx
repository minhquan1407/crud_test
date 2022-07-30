import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { dispatchLogin } from "../redux/actions/authAction";
import { isEmail } from "../utils/validation/Validation";
import { signIn } from "../api/UserAxios";
Login.propTypes = {};
function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = useSelector((state) => state.isLogged);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    try {
      let res = await signIn(email, password);
      console.log("check res", res);
      if (res && res.accessToken) {
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("email", res.email);

        dispatch(dispatchLogin());
        toast.success("Login Success!");
        setIsLoading(true);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
    // console.log("event: ", event);
  };

  useEffect(() => {
    if (auth && auth === true) {
      navigate("/");
    }
  }, [auth]);
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <input
          type="text"
          placeholder="Email or username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Passoword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassWord(!isShowPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {isLoading && <i className="fas fa-sync fa-spin"></i>} &nbsp;Login
        </button>
        <p>
          <span>
            <Link to="/register">Register</Link>New Customer?
          </span>
          <span>
            <Link to="/forgotPassword">Forgot your password?</Link>
          </span>
        </p>
      </div>
    </>
  );
}
export default Login;
