import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
	  color: ${({theme}) => theme.colors.text};
  }

  html {
    min-height: 100%;
  }

  body {
		background: ${({theme}) => theme.colors.gradients.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  p {
    font-size: 16px;
  }

  input[type="password"],
  input[type="text"],
  input[type="email"] {
    border: none;
    outline: none;
  }
`;
