import { connect } from 'react-redux';
import Special from '../../Components/Special';

const mapStateToProps = (state, ownProps) => {
  return {
    anagramSuccesses: state.get('anagramSuccesses'),
  }
};

const SpecialContainer = connect(
  mapStateToProps,
)(Special);

export default SpecialContainer;
