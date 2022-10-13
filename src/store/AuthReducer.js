const initialState = {
  auth: {
    token: "",
  },
};

export function AuthReducer(state = initialState, action) {
  return { ...state, auth: action.payload };
}
