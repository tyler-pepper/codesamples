import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../Components/Card';

import { Container, Platter, Sizer } from './Tray.theme';

import { checkAnagram } from '../../Utils';
import { defaultName } from '../../Config';

// Split the string into an array.
const cards = defaultName.split('');

// Display a tray of cards.
const Tray = ({ cardOrder, toggleCard, selectedCards, anagramSuccesses }) => {
  const errorFlag = checkAnagram(selectedCards, anagramSuccesses);

  return (
    <Container>
      <Platter>
        <Sizer maxCards={cards.length} />
        { cards.map((character, index) => (
          <Card errorFlag={errorFlag} onClick={() => toggleCard(character, index)} selected={selectedCards.find((card) => card.index === index)} maxCards={cards.length} order={cardOrder.get(index)} key={character + index}>
            <span>{character}</span>
          </Card>
        )) }
      </Platter>
    </Container>
  );
}

Tray.propTypes = {
  cardOrder: PropTypes.object.isRequired,
  toggleCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.object.isRequired,
}

export default Tray;
