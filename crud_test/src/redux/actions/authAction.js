// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { signIn } from "../../api/UserAxios";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH = "USER_REFRESH";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";

export const dispatchLogin = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_LOGIN });
  };
};
export const handleLogoutRedux = () => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_LOGOUT,
    });
    toast.success("Log out success!");
  };
};
export const handleRefresh = () => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_REFRESH,
    });
  };
};
