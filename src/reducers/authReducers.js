import { FETCH_LOGIN, FETCH_OTP, FETCH_REGISTER, IS_AUTHENTICATED } from "./reducerTypes/authTypes";

const initialState = {
    login: [],
    otp: [],
    register: [],
    isAuthenticated : false,
    user :{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        login: action.payload
      };

    case FETCH_OTP:
      return {
        ...state,
        otp: action.payload
      };

      case FETCH_REGISTER:
        return {
          ...state,
          register: action.payload
        };

        case IS_AUTHENTICATED : 
        return{
          ...state,
          isAuthenticated : action.payload ? true : false,
          user:action.payload
        }

    default:
      return state;
  }
}
