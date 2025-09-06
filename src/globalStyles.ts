import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  orangishWhite: '#FFF8F2',
  black: '#4B4B4B',
  white: '#FFFFFF',
  yellow: '#FFB930'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${colors.orangishWhite};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .icon {
  width: 2rem;
  height: auto;
  color: ${colors.primary}; /* stroke e fill usando currentColor */
  cursor: pointer;
  transition: color 0.2s;

    &:hover {
      filter: brightness(0.8);
      transition: ease 0.2s;
    }
  }
`
