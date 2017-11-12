import React, { PureComponent } from 'react';
import update from 'immutability-helper';
import shuffle from 'lodash.shuffle';

import Card from '../../Components/Card';
import Button from '../../Components/Button';

import { Container, Top, Platter, Sizer } from './Tray.theme';

import { defaultName, anagrams } from '../../Config';

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
    this.submitAnagram = this.submitAnagram.bind(this);
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

  submitAnagram() {

  }

  render() {
    return (
      <Container>
        <Top>
          <Button onClick={ this.resetCards }>Reset</Button>
          <Button highlight="blue" onClick={ this.shuffleCards }>Shuffle</Button>
          <Button highlight="green" selfAlign="right" onClick={ this.submitAnagram }>Submit</Button>
        </Top>
        <Platter>
          <Sizer maxCards={ this.state.cards.length } />
          { this.state.cards.map((character, index) => (
            <Card onClick={ () => this.toggleCard(index) } selected={ this.state.selectedCards[index] } maxCards={ this.state.cards.length } order={ this.state.cardOrder[index] } key={ character + index }>
              <span>{ character }</span>
            </Card>
          )) }
        </Platter>
      </Container>
    );
  }
}

export default Tray;
