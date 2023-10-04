import React, { createContext, useContext, useReducer } from 'react';

// Define an initial state
const initialState = {
  cpu: null,
  motherboard: null,
  ram: null,
  psu: null,
  storage: null,
  monitor: null,
};

// Create a context
const ComponentsContext = createContext(initialState);

// Create a reducer to update the state
const componentsReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_COMPONENT':
      return { ...state, [action.category]: action.component };
    default:
      return state;
  }
};

// Create a Provider component
export function ComponentsProvider({ children }) {
  const [state, dispatch] = useReducer(componentsReducer, initialState);

  return (
    <ComponentsContext.Provider value={{ state, dispatch }}>
      {children}
    </ComponentsContext.Provider>
  );
}

// Create a custom hook to access the state and dispatch
export function useComponents() {
  const context = useContext(ComponentsContext);
  if (!context) {
    throw new Error('useComponents must be used within a ComponentsProvider');
  }
  return context;
}
