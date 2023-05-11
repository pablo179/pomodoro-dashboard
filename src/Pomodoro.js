import React, { useState } from 'react';
import Background from './components/Background';
import LockScreen from './components/LockScreen';
import ConfigurationScreen from './components/ConfigurationScreen';

function App() {
  const [openConfig, setOpenConfig] = useState(false);
  return (
    <div id="pomodoro-root">
      <Background />
      {
        openConfig
          ? <ConfigurationScreen setOpenConfig={setOpenConfig} />
          : <LockScreen setOpenConfig={setOpenConfig} />
      }
    </div>
  );
}

export default App;
