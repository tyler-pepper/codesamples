import { injectGlobal } from 'styled-components';

import background from './img/bg.png';

// Default styling.
injectGlobal`
  body {
    background-color: #000;
    margin: 0;
    min-height: 100vh;
    padding: 20px 0;
    position: relative;
    z-index: 1;

    &:before {
      background: url(${background}) 0 0;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0.25;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }

  html, body, p, a, ul, ol, li, blockquote, button {
    color: #fff;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }

  img {
    height: auto;
    max-width: 100%;
  }
`;
