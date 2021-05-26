import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1700px){
        font-size: 75%;
    }
}
body {
    background: #1b1b1b;
    font-family: 'Noto Sans', sans-serif;
    overflow-x: hidden;
    color: #fff;
}

`

export default GlobalStyle
