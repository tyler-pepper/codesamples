import React, { PureComponent } from 'react';

import './Components/GlobalStyles';

import Canvas from './Components/Canvas';
import Tray from './Components/Tray';
import Github from './Components/Github';

class App extends PureComponent {
  render() {
    return (
      <Canvas>
        <Github />
        <Tray />
      </Canvas>
    );
  }
}

export default App;
