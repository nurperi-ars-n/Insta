<<<<<<< HEAD
import { LOGIN, LOG_OUT , CHANGE_TOKEN } from "../actions";

=======
import { LOGIN, LOG_OUT } from "../actions";
>>>>>>> b55513135ca5b40b32617d9842ebfbd626c7c449
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
              token:"",
              
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
