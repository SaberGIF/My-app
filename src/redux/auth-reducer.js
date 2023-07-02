import { authAPI } from "../api/Api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

export const setAuthUserData = (email, id, login) => ({ type: SET_AUTH_USER_DATA, data:{email, id, login} });

export const getAuth = () => {
  return (dispatch) => {
    authAPI.me()
    .then((data) => {
        if (data.resultCode === 0) {
            let {email, id, login} = data.data;
            dispatch(setAuthUserData(email, id, login));
        }
    });
  }
}

export default authReducer;
