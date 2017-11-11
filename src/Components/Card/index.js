import styled from 'styled-components';

export default styled.div`
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
  transition: left 250ms ease-out;
  width: calc(100% / ${(props) => props.maxCards});
  z-index: ${(props) => props.order * 10};

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
