import styled from 'styled-components';

import Row from '../../Components/Row';
import Square from '../../Components/Square';

export const Container = styled(Row)`
  display: block;
  margin: 10px auto;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
`;

export const Platter = styled.div`
  margin: 10px auto;
  position: relative;
  width: 100%;

  &:before {
    background-color: rgba(245, 245, 220, 0.25);
    border-radius: 5px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.95);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const Sizer = styled(Square)`
  display: block;
`;

export default {
  Container,
  Top,
  Platter,
  Sizer,
}
