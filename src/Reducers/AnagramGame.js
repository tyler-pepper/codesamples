import shuffle from 'lodash.shuffle';

import { defaultName } from '../Config';

const cards = defaultName.split('');

const initialState = {
  anagramScore: 0,
  cardOrder: cards.map((char, index) => index),
  selectedCards: {},
};

const AnagramGame = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'RESET_GAME':
      return initialState;
    case 'SHUFFLE_CARDS':
      state.cardOrder = shuffle(state.cardOrder);
      return state;
    case 'TOGGLE_CARD':
      state.selectedCards = (cards) => {
        const index = cards.indexOf(action.id);
        if (index !== -1) return cards.delete(index);
        return cards.push(action.id);
      };
      return state;
    default:
      return state;
  }
};

export default AnagramGame;
