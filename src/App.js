import React from 'react';
import './App.css';
import NavigationProvider from './navigation-provider';

function App() {
  return (
    <div className="App">
      <NavigationProvider breakpoint={768} />
    </div>
  );
}

export default App;
