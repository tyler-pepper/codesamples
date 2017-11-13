import React from 'react';

import { Wrapper } from './Special.theme';

import { defaultName, specialRewards } from '../../Config';

// SPECIAL
const Special = ({ anagramSuccesses }) => {
  const specialEnabled = anagramSuccesses.findKey((success) => success === defaultName.toLowerCase()) > -1 || false;

  return (
    <Wrapper special={specialEnabled && specialRewards[Math.floor(Math.random() * specialRewards.length)]} />
  );
};

export default Special;
