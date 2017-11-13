// Reset the entire game.
export const resetCards = () => {
  return {
    type: 'RESET_GAME',
  }
};

// Reorder the cards.
export const shuffleCards = () => {
  return {
    type: 'SHUFFLE_CARDS',
  }
};

// Toggle selection on card.
export const toggleCard = (character, index) => {
  return {
    type: 'TOGGLE_CARD',
    payload: {
      character,
      index,
    },
  }
};

// Submit anagram word.
export const submitAnagram = () => {
  return {
    type: 'SUBMIT_ANAGRAM',
  }
};
