import styled, { css } from 'styled-components';

import Square from '../../Components/Square';

export default styled(Square)`
  align-items: center;
  background-color: rgba(245, 245, 220, 1);
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  left: ${(props) => props.order * (95 / props.maxCards)}%;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transition: background 100ms ease-out, left 250ms ease-out;
  z-index: ${(props) => props.order * 10};

  ${(props) => props.selected && css`
    background-color: #92e492;
  `};
`;
