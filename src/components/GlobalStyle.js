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
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
}
section {
    padding: 80px 0;
}

@media only screen and (max-width: 1023px) {
    body {
        font-size: 16px;
    } 
    section {
        padding: 30px;
    }
    h1 {
        font-size: 180%;
    }
    h2 {
        font-size: 150%;
    }
}
@media only screen and (max-width: 180px) {
    section {
        padding: 25px 0;
    }
}
`

export default GlobalStyle
