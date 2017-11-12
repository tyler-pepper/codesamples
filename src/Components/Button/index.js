import styled, { css } from 'styled-components';

export default styled.button`
  background-color: #ccc;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 3px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 5px;
  padding: 10px 20px;
  transition: border-color 250ms ease-out;

  &:hover, &:focus {
    border-color: ${(props) => props.highlight || 'red'};
  }

  ${(props) => props.selfAlign && props.selfAlign === 'right' && css`
    &, & + button {
      margin-left: auto;
      margin-right: 0;
    }
  `}
`;
