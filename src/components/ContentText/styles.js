import styled from "styled-components"

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 540px;
    height: 326px;
    color: #fff;  
    margin-top: 10px;
`

export const DivText = styled.div`
    font-size: 38px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 3px;

    p {
        font-size: 57px;
        font-weight: 400;
        line-height: 74.15px;
        letter-spacing: 1.235859990119934px;
        text-align: center;
    }

    span {
        font-size: 57px;
        font-weight: 700;
    }
`

export const BotaoExplore = styled.button`
    width: 160px;
    height: 80px;
    border: none;
    border-radius: 154px;
    background: #6FDBD4;
    margin-top: 40px;
    font-weight: 700;
    cursor: pointer;
`