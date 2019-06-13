import React from 'react';
import './App.css';
import NavigationProvider from './navigation-provider';
import WindowDimensionsProvider from './window-dimensions-provider';

function App() {
  return (
    <WindowDimensionsProvider>
      <div className="App">
        <NavigationProvider breakpoint={768} renderDesktop={ () => <div>desktop</div>} renderMobile={ () => <div>mobile</div>} />
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;
