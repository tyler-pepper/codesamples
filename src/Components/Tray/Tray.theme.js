import styled from 'styled-components';

import Square from '../../Components/Square';

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 20px;
  position: relative;
  width: calc(100% - 40px);
`;

export const Sizer = styled(Square)`
  display: block;
`;

export default {
  Wrapper,
  Sizer,
}
