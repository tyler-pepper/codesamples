import React, { PureComponent } from 'react';

import Github from '../../Components/Github';
import Score from '../../Components/Score';

import { Wrapper } from './Header.theme';

class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Github />
        <Score />
      </Wrapper>
    );
  }
}

export default Header;
