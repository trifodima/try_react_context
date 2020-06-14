import React, {useReducer} from 'react';
import {Context} from './CreateContext';
import {initialState, reducer} from './reducer';

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    data: state,
    actions: {
      incrementHandler: () => {
        dispatch({type: 'INCREMENT'});
      }
    }
  }

  return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
  );
};

export default StoreProvider;