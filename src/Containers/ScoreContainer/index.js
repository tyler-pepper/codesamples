import { connect } from 'react-redux';
import Score from '../../Components/Score';

const mapStateToProps = (state, ownProps) => {
  return {
    anagramScore: state.get('anagramScore'),
  }
};

const ScoreContainer = connect(
  mapStateToProps,
)(Score);

export default ScoreContainer;
