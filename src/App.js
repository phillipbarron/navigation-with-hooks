import React from 'react';
import './App.css';
import NavigationProvider from './navigation-provider';

function App() {
  return (
    <div className="App">
      <NavigationProvider breakpoint={768} renderDesktop={ () => <div>desktop</div>} renderMobile={ () => <div>mobile</div>} />
    </div>
  );
}

export default App;
