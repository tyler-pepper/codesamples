import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './ShareLogo.theme';

import githubLogo from './img/GitHub_Logo_White.png';
import drupalLogo from './img/drupal.png';

import { githubUrl, drupalUrl } from '../../Config';

const ShareLogo = ({ type }) => {
  const linkObj = { href: '', img: '' };

  switch (type) {
    case 'github':
      linkObj.href = githubUrl;
      linkObj.img = githubLogo;
      break;
    case 'drupal':
      linkObj.href = drupalUrl;
      linkObj.img = drupalLogo;
      break;
    default:
      linkObj.href = '';
      linkObj.img = '';
  }

  return (
    <Link href={linkObj.href} target="_blank"><img src={linkObj.img} alt={type} /></Link>
  );
};

ShareLogo.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ShareLogo;
