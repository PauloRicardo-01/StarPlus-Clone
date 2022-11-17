import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

html, body {
  background-color: #0E0B13;
}

input,
button,
textarea {
  outline: none;
  border: 1px solid gray;
}

a, button {
  -webkit-tap-highlight-color: none;
  
  @media screen and (max-width: 820px) {
    :hover {
      box-shadow: none;
    }
  }
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    color: #fff;
  }
`;
