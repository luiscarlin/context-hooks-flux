import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// create the app context
export const AppContext = createContext();

// create a wrapper
export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
