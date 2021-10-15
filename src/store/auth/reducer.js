const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function authSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "loginPage/userLoggedIn":
      return {
        token: action.payload.token,
        profile: action.payload.profile,
      };

    default:
      return state;
  }
}
