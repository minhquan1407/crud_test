import {
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  USER_LOGOUT,
  USER_REFRESH,
  FETCH_USER_LOGIN,
} from "../actions/authAction";

const INITIAL_STATE = {
  user: {
    email: "",
    token: "",
  },
  isLogged: false,
  isLoading: false,
  isError: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        user: {
          email: action.data.email,
          token: action.data.token,
        },
        isLoading: false,
        isError: true,
      };
    case FETCH_USER_SUCCESS:
      // console.log("check action:", action);
      return {
        ...state,
        email: action.data.email,
        token: action.data.token,
        isLoading: false,
        isError: false,
      };
    case USER_LOGOUT:
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogged: false,
      };
    case USER_REFRESH:
      return {
        ...state,
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
        isLogged: true,
      };
    default:
      return state;
  }
};
export default authReducer;
