import { fromJS } from 'immutable';
import { find } from 'lodash';
import shuffle from 'lodash.shuffle';

import { checkAnagram } from '../Utils';
import { defaultName, anagrams, anagramWin } from '../Config';

const cards = defaultName.split('');

// Default states.
const initialState = fromJS({
  anagramScore: 0,
  anagramSuccesses: [],
  cardOrder: cards.map((char, index) => index),
  selectedCards: [],
});

const AnagramGame = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      // Replace the entire state with inital.
      return initialState;
    case 'SHUFFLE_CARDS':
      // Randomize the cardOrder array.
      return state.set('cardOrder', fromJS(shuffle(state.get('cardOrder'))));
    case 'TOGGLE_CARD':
      // Add/remove selectedCards payload object.
      return state.update('selectedCards', (cards) => {
        const index = cards.findKey((card) => card.index === action.payload.index);
        if (index !== undefined && index !== -1) return cards.delete(index);
        return cards.push(action.payload);
      });
    case 'SUBMIT_ANAGRAM':
      // Check anagrams object for correct result. Add to score and reset selectedCards.
      let newScore = state.get('anagramScore');
      const selectedString = state.get('selectedCards').reduce((prev, selected) => prev + selected.character.toLowerCase(), '');
      const successes = state.get('anagramSuccesses');
      let best = false;
      let all = false;

      // Deny duplicates.
      const errorFlag = checkAnagram(state.get('selectedCards'), successes);

      if (!errorFlag) {
        // Find best anagram and win!
        best = anagrams.best === selectedString;

        // Find any anagram and gain a point.
        all = find(anagrams.all, (o) => o === selectedString);
      }

      return state
        // Push successful anagrams to array.
        .update('anagramSuccesses', (successes) => {
          if (best || all) {
            return successes.push(selectedString);
          }

          return successes;
        })
        // Reset card selection.
        .set('selectedCards', initialState.get('selectedCards'))
        // Update score.
        .update('anagramScore', (score) => {
          if (best) {
            newScore = anagramWin;
          } else if (all) {
            newScore++;
          }

          return newScore;
        });
    default:
      return state;
  }
};

export default AnagramGame;
