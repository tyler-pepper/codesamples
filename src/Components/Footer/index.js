import React, { PureComponent } from 'react';

import Github from '../../Components/Github';

import { Wrapper } from './Footer.theme';

class Footer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Github />
      </Wrapper>
    );
  }
}

export default Footer;
