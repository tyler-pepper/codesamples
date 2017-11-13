export const resetCards = () => {
  return {
    type: 'RESET_GAME',
  }
};

export const shuffleCards = () => {
  return {
    type: 'SHUFFLE_CARDS',
  }
};

export const toggleCard = (id) => {
  return {
    type: 'TOGGLE_CARD',
    id,
  }
};

export const submitAnagram = () => {
  return {
    type: 'SUBMIT_ANAGRAM',
  }
};
