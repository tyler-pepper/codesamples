import React from 'react';

import { anagramWin } from '../../Config';

// Display game score.
const Score = ({ anagramScore }) => (
  <span>{anagramScore}/{anagramWin}</span>
);

export default Score;
