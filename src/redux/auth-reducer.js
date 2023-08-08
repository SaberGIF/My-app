import { stopSubmit } from "redux-form";
import { authAPI } from "../api/Api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { email, id, login, isAuth },
});

export const getAuth = () => (dispatch) => {
    return authAPI.me().then((data) => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  };

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
