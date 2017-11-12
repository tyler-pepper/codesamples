import styled from 'styled-components';

import Row from '../../Components/Row';

export const Wrapper = styled(Row)`
  margin: 10px auto;

  & > div {
    margin-left: auto;
  }
`;

export default {
  Wrapper,
};
