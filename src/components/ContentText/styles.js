import styled from "styled-components"

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 540px;
    color: #fff;  
    
    @media (max-width: 768px) {
        height: auto;
        margin-top: 20px;
        width: 100%;
    }
`

export const DivText = styled.div`
    text-align: center;
    line-height: 50px;
    letter-spacing: 3px;
    margin: 80px 0;

    p {
        font-size: 50px;
        font-weight: 400;
        line-height: 74.15px;
        letter-spacing: 1.235859990119934px;
        text-align: center;
    }

    span {
        font-size: 50px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        margin: 40px 0;

        p, span {
            font-size: 50px;
            line-height: 74.15px;
            max-width: 540px;
        }

        @media (max-width: 480px) {
            margin: 0 0 25px;

            p, span {
                font-size: 30px;
                line-height: 40px;
                max-width: 325px;
            }
        }
    }
`

export const BotaoExplore = styled.button`
    width: 160px;
    height: 80px;
    border: none;
    border-radius: 154px;
    background: #6FDBD4;
    font-weight: 700;
    cursor: pointer;

    @media(max-width: 480px) {
        width: 150px;
        height: 60px;
    }
`