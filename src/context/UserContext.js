import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  loading: false,
  user: {
    loggedIn: false,
    data: {},
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        user: {
          loggedIn: action.loggedIn,
          data: action.data,
        },
      };
    case "LOGGED_OUT":
      return {
        ...state,
        user: {
          loggedIn: false,
          data: action.data,
        },
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        user: {
          data: action.data,
        },
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOADED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const UserContext = createContext(null);

export const UserPrvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserState = () => {
  const { state } = useContext(UserContext);
  return state;
};

export const useUserDispatch = () => {
  const { dispatch } = useContext(UserContext);
  return dispatch;
};
