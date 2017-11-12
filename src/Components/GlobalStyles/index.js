import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background-color: #000;
    margin: 0;
    padding: 0;
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
