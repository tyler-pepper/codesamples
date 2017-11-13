export const checkAnagram = (selectedCards, anagramSuccesses) => {
  const selectedString = selectedCards.reduce((prev, selected) => prev + selected.character.toLowerCase(), '');
  return anagramSuccesses.findKey((success) => success === selectedString) > -1 || false;
};

export default {
  checkAnagram,
};
