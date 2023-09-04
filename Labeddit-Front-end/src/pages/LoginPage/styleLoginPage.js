import styled from "styled-components";

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    p{
        font-size: 16px;
        font-family: 'IBM Plex Sans';
        font-weight: 300;
        color: #000000;
    }

    div{
        height: 33.33%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;

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

        .signUpButton{
            background: #FFFFFF;
            border: 1px solid #FE7E02;
            color: #FE7E02;
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
    }
`