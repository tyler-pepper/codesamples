import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

import Button from '../../Components/Button';

import { Container } from './Controls.theme';

import { checkAnagram } from '../../Utils';

// Buttons to reset, shuffle, and submit.
const Controls = ({ resetCards, shuffleCards, submitAnagram, selectedCards, anagramSuccesses }) => {
  const errorFlag = checkAnagram(selectedCards, anagramSuccesses);

  return (
    <Container>
      <Button onClick={resetCards}><i className="fa fa-refresh" aria-hidden="true"></i>&nbsp;Reset</Button>
      <Button highlight="blue" onClick={shuffleCards}><i className="fa fa-random" aria-hidden="true"></i>&nbsp;Shuffle</Button>
      <Button highlight={errorFlag ? 'red' : 'green'} selfAlign="right" onClick={submitAnagram}>Submit&nbsp;<i className={errorFlag ? 'fa fa-times' : 'fa fa-check'} aria-hidden="true"></i></Button>
    </Container>
  );
};

Controls.propTypes = {
  resetCards: PropTypes.func.isRequired,
  shuffleCards: PropTypes.func.isRequired,
  submitAnagram: PropTypes.func.isRequired,
}

export default Controls;
