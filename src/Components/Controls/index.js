import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

import Button from '../../Components/Button';

import { Container } from './Controls.theme';

const Controls = ({ resetCards, shuffleCards, submitAnagram }) => (
  <Container>
    <Button onClick={resetCards}><i className="fa fa-refresh" aria-hidden="true"></i>&nbsp;Reset</Button>
    <Button highlight="blue" onClick={shuffleCards}><i className="fa fa-random" aria-hidden="true"></i>&nbsp;Shuffle</Button>
    <Button highlight="green" selfAlign="right" onClick={submitAnagram}>Submit&nbsp;<i className="fa fa-check" aria-hidden="true"></i></Button>
  </Container>
);

Controls.propTypes = {
  resetCards: PropTypes.func.isRequired,
  shuffleCards: PropTypes.func.isRequired,
  submitAnagram: PropTypes.func.isRequired,
}

export default Controls;
