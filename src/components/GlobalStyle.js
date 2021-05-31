import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    overflow-x: hidden;
    @media (max-width: 1700px){
        font-size: 75%;
    }
}
body {
    background: #1b1b1b;
    overflow-x: hidden;
    ${'' /* font-family: 'Noto Sans', sans-serif; */}
    font-family: 'Century Gothic', sans-serif;
    color: #fff;
    font-weight: 300;
    font-size: 20px;
    text-rendering: optimizeLegibility;
}
section {
    padding: 80px 0;
}
h1 {
    letter-spacing: 2px;
    font-family: 'Century Gothic', sans-serif
}
h2 {
    font-size: 180%;
    letter-spacing: 1.2px;
    margin: 10px;
    text-align: center;
    font-family: 'Century Gothic', sans-serif
}
h3 {
    font-size: 150%;
    letter-spacing: 1.2px;
    text-align: center;
    margin-bottom: 22px;
    font-weight: 100;
    font-family: 'Century Gothic', sans-serif
}
h1:after {
    display: block;
    height: 1.5px;
    content:"";
    width: 1%;
}
h2:after {
    display: block;
    height: 2px;
    content:"";
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #E8E8E8;
}
h1:hover + h1:after {
    width: 50%;
    content: "";
}
@media only screen and (max-width: 1023px) {
    body {
        font-size: 16px;
    } 
    section {
        padding: 60px;
    }
    h1 {
        font-size: 180%;
    }
    h2 {
        font-size: 150%;
    }
}
@media only screen and (max-width: 767px) {
    body {
        font-size: 16px;
    }
    section {
        padding: 30px
    }
    h1 {
        font-size: 180%;
    }
    h2 {
        font-size: 150%;
    }
}
@media only screen and (max-width: 480px) {
    section {
        padding: 25px 0;
    }
}
`

export default GlobalStyle
