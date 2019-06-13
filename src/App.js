import React from 'react';
import './App.css';
import ResponsiveNavigation from './navigation/responsive-navigation';
import WindowDimensionsProvider from './window-dimensions-provider';

function App() {
  return (
    <WindowDimensionsProvider>
      <div className="App">
        <ResponsiveNavigation breakpoint={768} />
      </div>
    </WindowDimensionsProvider>
  );
}

export default App;
