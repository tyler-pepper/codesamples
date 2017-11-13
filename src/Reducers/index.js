import { fromJS } from 'immutable';
import shuffle from 'lodash.shuffle';

import { defaultName } from '../Config';

const cards = defaultName.split('');

// Default states.
const initialState = fromJS({
  anagramScore: 0,
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
    default:
      return state;
  }
};

export default AnagramGame;
