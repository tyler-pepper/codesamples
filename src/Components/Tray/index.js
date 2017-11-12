import React, { PureComponent } from 'react';
import update from 'immutability-helper';
import shuffle from 'lodash.shuffle';

import Card from '../../Components/Card';
import Button from '../../Components/Button';

import { Wrapper, Sizer } from './Tray.theme';

import { defaultName } from '../../Config';

class Tray extends PureComponent {
  constructor() {
    super();

    this.state = {
      cards: defaultName.split(''),
      cardOrder: defaultName.split('').map((char, index) => index),
      selectedCards: {},
    };

    this.resetCards = this.resetCards.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
  }

  resetCards() {
    this.setState({
      cardOrder: defaultName.split('').map((char, index) => index),
      selectedCards: {},
    });
  }

  shuffleCards() {
    this.setState({ cardOrder: shuffle(this.state.cardOrder) });
  }

  toggleCard(index) {
    this.setState({ selectedCards: update(this.state.selectedCards, {$toggle: [index]}) });
  }

  render() {
    return (
      <div>
        <Button onClick={ this.resetCards }>Reset</Button>
        <Button onClick={ this.shuffleCards }>Shuffle</Button>

        <Wrapper>
          <Sizer maxCards={ this.state.cards.length } />
          { this.state.cards.map((character, index) => (
            <Card onClick={ () => this.toggleCard(index) } selected={ this.state.selectedCards[index] } maxCards={ this.state.cards.length } order={ this.state.cardOrder[index] } key={ character + index }>
              <span>{ character }</span>
            </Card>
          )) }
        </Wrapper>
      </div>
    );
  }
}

export default Tray;
