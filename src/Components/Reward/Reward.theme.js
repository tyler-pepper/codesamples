import styled from 'styled-components';

import Row from '../../Components/Row';

export const Container = styled(Row)`
`;

export const Wrapper = styled(Row)`
  margin: 10px auto;

  & > div {
    background-color: rgba(245, 245, 220, 0.25);
    border-radius: 5px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.95);
    padding: 20px;
    width: 100%;

    & > div {
      background-color: rgba(245, 245, 220, 1);
      position: relative;

      p {
        color: #000;
        left: 0;
        margin: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: 100%;
      }
    }

    img {
      opacity: 0;
      width: 100%;
    }
  }
`;

export default {
  Wrapper,
};
