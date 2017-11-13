import { css } from 'styled-components';

export const checkAnagram = (selectedCards, anagramSuccesses) => {
  const selectedString = selectedCards.reduce((prev, selected) => prev + selected.character.toLowerCase(), '');
  return anagramSuccesses.findKey((success) => success === selectedString) > -1 || false;
};

export const mediaQuery = {
  mobile: (...args) => css`
    @media (max-width: 600px) {
      ${css(...args)}
    }
  `,
};


export default {
  checkAnagram,
  mediaQuery,
};
