import styled, { css } from 'styled-components';

// Reusable button style.
// Props:
// - Highlight: Colour
// - selfAlign: Right align in a flex div
export default styled.button`
  background-color: ${(props) => props.highlight || 'transparent'};
  border: 1px solid transparent;
  border-color: ${(props) => props.highlight ? 'transparent' : '#fff'};
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 5px;
  padding: 10px 20px;
  transition: background-color 250ms ease-out, border-color 250ms ease, color 250ms ease-out;

  &:hover, &:focus {
    background-color: #fff;
    border-color: ${(props) => props.highlight || '#fff'};
    color: ${(props) => props.highlight || '#000'};
  }

  ${(props) => props.selfAlign && props.selfAlign === 'right' && css`
    &, & + button {
      margin-left: auto;
      margin-right: 0;
    }
  `}
`;
