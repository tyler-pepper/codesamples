import styled, { css } from 'styled-components';

import Square from '../../Components/Square';

export default styled(Square)`
  align-items: center;
  background-color: beige;
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: ${(props) => props.order * (100 / props.maxCards)}%;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transition: background 100ms ease-out, left 250ms ease-out;
  z-index: ${(props) => props.order * 10};

  ${(props) => props.selected && css`
    background-color: green;
  `};
`;
