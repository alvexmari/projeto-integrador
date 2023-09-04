import {createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

.boxOverlay{
    position: fixed;
    opacity: 0.8;
    background-color: #000000;
    height: 100vh;
    width: 100%;

}

h1{
    color: #373737;
    font-weight: 700;
    font-size: 33px;
    font-family: 'IBM Plex Sans';
    cursor: default;
}

h2{
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 18px;
}

h3{
    font-size: 16px;
    font-family: 'IBM Plex Sans';
    font-weight: 300;
    color: #000000;
}

a{
    color: #4088CB;
    text-decoration: none;
}

a:hover{
    cursor: pointer;
}

button{
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    font-family: 'Noto Sans';
    color: #FFFFFF;  
}

button:hover{
    cursor:pointer;
    opacity: 0.8;
}

input{
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 4vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    color: #323941;
}

input:focus{
    outline: none;
}
`