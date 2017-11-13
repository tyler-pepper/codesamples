import React from 'react';

import Score from '../../Containers/ScoreContainer';

import { Wrapper, RewardImg, Above } from './Reward.theme';

import { defaultName, anagramWin, rewards } from '../../Config';

// Random dancing gifs as a reward for winning. Gifs slowly appear as score goes up.
const Reward = ({ anagramScore, anagramSuccesses }) => (
  <Wrapper>
    <div>
      { anagramSuccesses.count() > 0 &&
        <p><span>Answers: </span>{anagramSuccesses.map((successString, index) => <span key={successString}>{successString}{anagramSuccesses.count() - 1 > index && ', '}</span>)}</p>
      }
      <div>
        { anagramScore > 0 && <Above><Score /></Above> }
        { anagramScore === 0 && <p>Click the tiles above to solve {anagramWin} '{defaultName}' anagrams to reveal. Anagrams must be 3 letters or longer.</p> }
        <RewardImg reveal={anagramScore} maxReveal={anagramWin}>
          <img src={rewards[Math.floor(Math.random() * rewards.length)]} alt="Dance!" />
        </RewardImg>
      </div>
    </div>
  </Wrapper>
);

export default Reward;
