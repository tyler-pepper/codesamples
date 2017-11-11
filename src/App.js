import React, { PureComponent } from 'react';

import './Components/GlobalStyles';

import Canvas from './Components/Canvas';
import Tray from './Components/Tray';

class App extends PureComponent {
  render() {
    return (
      <Canvas>
        <Tray />
      </Canvas>
    );
  }
}

export default App;
