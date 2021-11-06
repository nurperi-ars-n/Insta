import { LOGIN, LOG_OUT } from "../actions";

const initialState = {
  user: null,
  isAuth: false,
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
    default:
      return state;
  }
};
