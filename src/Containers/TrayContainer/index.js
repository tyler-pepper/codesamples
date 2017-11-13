import { connect } from 'react-redux';
import { toggleCard } from '../../Actions';
import Tray from '../../Components/Tray';

const mapStateToProps = (state, ownProps) => {
  return {
    cardOrder: state.AnagramGame.cardOrder,
    selectedCards: state.AnagramGame.selectedCards,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCard: () => {
      dispatch(toggleCard(ownProps.id))
    },
  }
};

const TrayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tray);

export default TrayContainer;
