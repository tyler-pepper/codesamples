import React, { PureComponent } from 'react';
import shuffle from 'lodash.shuffle';

import Card from '../../Components/Card';
import Button from '../../Components/Button';

import { Wrapper } from './Tray.theme';

import { defaultName } from '../../Config';

class Tray extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cards: defaultName.split(''),
      cardOrder: defaultName.split('').map((char, index) => index),
    };

    this.resetCards = this.resetCards.bind(this);
    this.shuffleCards = this.shuffleCards.bind(this);
  }

  resetCards() {
    this.setState({ cardOrder: defaultName.split('').map((char, index) => index) });
  }

  shuffleCards() {
    this.setState({ cardOrder: shuffle(this.state.cardOrder) });
  }

  render() {
    return (
      <div>
        <Button onClick={ this.resetCards }>Reset</Button>
        <Button onClick={ this.shuffleCards }>Shuffle</Button>

        <Wrapper>
          { this.state.cards.map((character, index) => (
            <Card maxCards={ this.state.cards.length } order={ this.state.cardOrder[index] } key={ character + index }>
              <span>{ character }</span>
            </Card>
          )) }
        </Wrapper>
      </div>
    );
  }
}

export default Tray;
