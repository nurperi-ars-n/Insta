import { LOGIN, LOG_OUT , CHANGE_TOKEN } from "../actions";

const initialState = {
  user: null,
  isAuth: false,
  token:""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
      case LOG_OUT:
          return{
              ...state,
              user:null,
              isAuth:false,
              
          }
          case CHANGE_TOKEN:
            return{
              ...state,
              token:action.payload
            }
    default:
      return state;
  }
};
