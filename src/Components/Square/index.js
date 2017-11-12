import styled from 'styled-components';

export default styled.div`
  width: calc(100% / ${(props) => props.maxCards});

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
