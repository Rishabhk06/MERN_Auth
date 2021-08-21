import { GET_ERRORS, SET_CURRENT_USER } from "../actions/actionTypes";
import { isEmpty } from "lodash-es";

const initialState = {
  authDetails: { isAuthenticated: false, user: {} },
  errors: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        //agar payload empty hua yani empty user aaya to isAuth false
        authDetails: {
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload,
        },
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
