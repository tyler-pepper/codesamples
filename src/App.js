import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";

import './Components/GlobalStyles';

import Canvas from './Components/Canvas';
import Header from './Components/Header';
import Tray from './Components/Tray';
import Reward from './Components/Reward';

import { defaultName } from './Config';

class App extends PureComponent {
  render() {
    return (
      <Canvas>
        <Helmet>
          <title>Sample Code | { defaultName }</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
          <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500" rel="stylesheet" />
        </Helmet>
        <Header />
        <Tray />
        <Reward />
      </Canvas>
    );
  }
}

export default App;
