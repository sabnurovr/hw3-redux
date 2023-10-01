import { types } from "../types";

const initialState = {
  users: [],
  userOneInfo: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.USERS:
      return { ...state, users: action.payload };
    case "SET_USER_ONE_INFO":
      return {
        ...state,
        userOneInfo: action.payload, 
      };
    default:
      return state;
  }
}
