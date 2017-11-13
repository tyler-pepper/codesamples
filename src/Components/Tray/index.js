import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../Components/Card';

import { Container, Platter, Sizer } from './Tray.theme';

import { defaultName } from '../../Config';

const cards = defaultName.split('');

const Tray = ({ cardOrder, toggleCard, selectedCards }) => (
  <Container>
    <Platter>
      <Sizer maxCards={cards.length} />
      { cards.map((character, index) => (
        <Card onClick={toggleCard} selected={selectedCards[index]} maxCards={cards.length} order={cardOrder[index]} key={character + index}>
          <span>{character}</span>
        </Card>
      )) }
    </Platter>
  </Container>
);

Tray.propTypes = {
  cardOrder: PropTypes.array.isRequired,
  toggleCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.object.isRequired,
}

export default Tray;
