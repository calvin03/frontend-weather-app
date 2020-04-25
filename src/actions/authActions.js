import {
  FETCH_LOGIN,
  FETCH_OTP,
  FETCH_REGISTER,
  IS_AUTHENTICATED,
} from "../reducers/reducerTypes/authTypes";
import axios from "axios";

import jwt from "jsonwebtoken";

const apiUrl = process.env.REACT_APP_API_URL;
const config = setAuthorizationToken(localStorage.jwtToken);

export default function setAuthorizationToken(token) {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  } else {
    return false;
  }
}

export function setIsAuthenticated(user) {
  return {
    type: IS_AUTHENTICATED,
    payload: user,
  };
}

export const login = (user) => async (dispatch) => {
  const { username, password } = user;
  try {
    const res = await axios.post(
      `${apiUrl}/auth/login`,
      { username, password },
      config
    );

    if (res) {
      dispatch({
        type: FETCH_LOGIN,
        payload: res.data,
      });
      return "Login Successful";
    } else {
      return "Internal server error";
    }
  } catch (error) {
    return error;
  }
};

export const register = (user) => async (dispatch) => {
  const { username, password } = user;
  try {
    const res = await axios.post(
      `${apiUrl}/auth/register`,
      { username, password },
      config
    );

    if (res) {
      dispatch({
        type: FETCH_REGISTER,
        payload: res.data,
      });
      return "Register Successful";
    } else {
      return "Internal server error";
    }
  } catch (error) {
    return error;
  }
};
