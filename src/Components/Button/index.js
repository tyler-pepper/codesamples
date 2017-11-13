import styled, { css } from 'styled-components';

// Reusable button style.
// Props:
// - Highlight: Colour
// - selfAlign: Right align in a flex div
export default styled.button`
  background-color: ${(props) => props.highlight || 'red'};
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 5px;
  padding: 10px 20px;
  transition: background-color 250ms ease-out, color 250ms ease-out;

  &:hover, &:focus {
    background-color: #fff;
    color: ${(props) => props.highlight || 'red'};
  }

  ${(props) => props.selfAlign && props.selfAlign === 'right' && css`
    &, & + button {
      margin-left: auto;
      margin-right: 0;
    }
  `}
`;
