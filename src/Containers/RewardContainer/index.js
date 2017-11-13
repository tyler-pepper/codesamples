import { connect } from 'react-redux';
import Reward from '../../Components/Reward';

const mapStateToProps = (state, ownProps) => {
  return {
    anagramScore: state.get('anagramScore'),
    anagramSuccesses: state.get('anagramSuccesses'),
  }
};

const RewardContainer = connect(
  mapStateToProps,
)(Reward);

export default RewardContainer;
