import React from 'react';

import { Wrapper, RewardImg } from './Reward.theme';

import Dance1 from './img/dance1.gif';
import Dance2 from './img/dance2.gif';
import Dance3 from './img/dance3.gif';

import { defaultName, anagramWin } from '../../Config';

// Random dancing gifs as a reward for winning. Gifs slowly appear as score goes up.
const Reward = ({ anagramScore, anagramSuccesses }) => {
  const dancing = [Dance1, Dance2, Dance3];

  return (
    <Wrapper>
      <div>
        {anagramSuccesses.count() > 0 &&
          <p><span>Answers: </span>{anagramSuccesses.map((successString, index) => <span key={successString}>{successString}{anagramSuccesses.count() - 1 > index && ', '}</span>)}</p>
        }
        <div>
          <p>Solve {anagramWin} '{defaultName}' anagrams to reveal. Anagrams must be 3 letters or longer.</p>
          <RewardImg reveal={anagramScore} maxReveal={anagramWin}>
            <img src={dancing[Math.floor(Math.random() * dancing.length)]} alt="Dance!" />
          </RewardImg>
        </div>
      </div>
    </Wrapper>
  );
};

export default Reward;
