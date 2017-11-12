import React, { PureComponent } from 'react';

import Score from '../../Components/Score';

import { Wrapper } from './Header.theme';

class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Score />
      </Wrapper>
    );
  }
}

export default Header;
