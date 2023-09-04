import styled from "styled-components";

export const StyleMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`
export const StyleSectionLoginSignup = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 100vh;

    p{
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        margin-bottom: 1vh;
    }

    div{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;

        .signUpButton{
            background: #FFFFFF;
            border: 1px solid #FE7E02;
            color: #FE7E02;
        }

        .CheckBox{
            height: 18px;
            width: 18px;
        }
    }
`
export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 100vh;

    div:first-child{
        margin-top: 2vh;
        min-height: 26vh;
        width: 100%;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1vh;
        
        .InputPost{
            border-radius: 12px;
            border: none;
            background-color: #EDEDED;
            height: 130px;
            width: 100%;
            font-family: 'IBM Plex Sans';
            color: #6F6F6F;
            font-weight: 400;
            font-size: 18px; 
        }

        button{
            border-radius: 12px;
            width: 100%;
        }

        article{
            display: flex;
            width: 100%;
            gap: 18px;
            padding: 9px 10px;
            flex-direction: column;
            background: #FBFBFB;
            border: 1px solid #E0E0E0;
            border-radius: 12px;
            align-items: flex-start;
            font-family: 'IBM Plex Sans';
            font-weight: 400;
            font-size: 18px;
            color: #000000;

            .subText{
                font-size: 12px;
                color: #6F6F6F;
            }

            .subTextBold{
                font-size: 12px;
                color: #6F6F6F;
                font-weight: 700;
            }

            .menuPost{
                display: flex;
                gap: 2vw;
            }

            span{
                padding: 5px;
                display: flex;
                justify-content: space-between;
                gap: 18px;
                border: 1px solid #E0E0E0;
                border-radius: 28px;
            }

            span:hover{
                cursor: pointer;
            }
        }
    }
`