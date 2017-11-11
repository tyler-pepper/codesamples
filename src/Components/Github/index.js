import React, { PureComponent } from 'react';

import { Link } from './Github.theme';

import logo from './img/GitHub_Logo_White.png';

import { githubUrl } from '../../Config';

class Github extends PureComponent {
  render() {
    return (
      <Link href={githubUrl} target="_blank"><img src={ logo } alt="GitHub Logo" /></Link>
    );
  }
}

export default Github;
