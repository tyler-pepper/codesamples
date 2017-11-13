import { connect } from 'react-redux';
import { resetCards, shuffleCards, submitAnagram } from '../../Actions';
import Controls from '../../Components/Controls';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetCards: () => {
      dispatch(resetCards())
    },
    shuffleCards: () => {
      dispatch(shuffleCards())
    },
    submitAnagram: () => {
      dispatch(submitAnagram())
    },
  }
};

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);

export default ControlsContainer;

// resetCards() {
//   this.setState({
//     cardOrder: defaultName.split('').map((char, index) => index),
//     selectedCards: {},
//   });
// }
//
// shuffleCards() {
//   this.setState({ cardOrder: shuffle(this.state.cardOrder) });
// }
//
// toggleCard(index) {
//   this.setState({ selectedCards: update(this.state.selectedCards, {$toggle: [index]}) });
//   console.log(this.state.selectedCards);
// }
