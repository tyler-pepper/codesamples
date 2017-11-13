import { connect } from 'react-redux';
import { toggleCard } from '../../Actions';
import Tray from '../../Components/Tray';

const mapStateToProps = (state, ownProps) => {
  return {
    cardOrder: state.get('cardOrder'),
    selectedCards: state.get('selectedCards'),
    anagramSuccesses: state.get('anagramSuccesses'),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCard: (character, index) => {
      dispatch(toggleCard(character, index));
    },
  }
};

const TrayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tray);

export default TrayContainer;
