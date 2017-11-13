import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.special ? `url(${props.special}) 0 0` : 'transparent'};
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export default {
  Wrapper,
};
