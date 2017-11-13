import { connect } from 'react-redux';
import { resetCards, shuffleCards, submitAnagram } from '../../Actions';
import Controls from '../../Components/Controls';

const mapStateToProps = (state, ownProps) => {
  return {};
}

// Controller actions.
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
