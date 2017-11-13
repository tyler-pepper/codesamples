import styled from 'styled-components';

import { mediaQuery } from '../../Utils';

import Row from '../../Components/Row';

export const Wrapper = styled(Row)`
  margin: 10px auto;

  & > div {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.95);
    padding: 20px;
    width: 100%;

    & > p {
      margin-top: 0;
    }

    & > div {
      background-color: rgba(255, 255, 255, 1);
      position: relative;

      p {
        color: #000;
        left: 0;
        margin: 0;
        padding: 0 10px;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        width: calc(100% - 20px);
        z-index: 1;
      }
    }
  }
`;

export const Above = styled.div`
  color: #fff;
  font-size: 7rem;
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 100%;
  z-index: 3;

  ${mediaQuery.mobile`
    font-size: 3rem;
  `}
`;

export const RewardImg = styled.div`
  line-height: 0;
  opacity: ${(props) => props.reveal > 0 && props.maxReveal ? (props.reveal * (100 / props.maxReveal)) / 100 : 0};
  position: relative;
  z-index: 2;

  img {
    width: 100%;
  }
`;

export default {
  Wrapper,
};
