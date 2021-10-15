// / src/store/auth/actions.js

import axios from "axios";
import { API_URL } from "../../config";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    console.log("my response", response);
    // TODO:
    // make a POST API request to `/login`

    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
  };
}
