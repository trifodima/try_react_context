import React from 'react';
import First from './components/First';
import StoreProvider from './context/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <First />
    </StoreProvider>
  );
}

export default App;
