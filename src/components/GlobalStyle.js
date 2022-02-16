import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;500&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle