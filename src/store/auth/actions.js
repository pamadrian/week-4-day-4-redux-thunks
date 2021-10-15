// / src/store/auth/actions.js

import axios from "axios";
import { API_URL } from "../../config";

export function userLoggedIn(token, profile) {
  return {
    type: "loginPage/userLoggedIn",
    payload: { token, profile },
  };
}

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const token = response.data.jwt;

    const responseMe = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = responseMe.data;

    // console.log("my response", response);
    console.log("response ME", responseMe);
    // make a POST API request to `/login`

    dispatch(userLoggedIn(token, profile));
  };
}
