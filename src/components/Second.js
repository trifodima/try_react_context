import React, {useContext} from 'react';
import {Context} from '../context/CreateContext';

const Second = () => {
  const state = useContext(Context);
  const {data, actions} = state;

  return (
    <React.Fragment>
      <h1>Counter: {data.counter}</h1>
      <button onClick={actions.incrementHandler}>+1</button>
    </React.Fragment>
  );
};

export default Second;