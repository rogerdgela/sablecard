import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    
    @media (max-width: 480px) {
        display: none;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 1366px;

    @media (max-width: 780px) {
        width: 100%;
    }
`

export const ImageLeft = styled.img`
    margin-top: 129px;
    margin-right: 24px;

    @media (max-width: 780px) {
        margin-top: 80px;
        width: 30%;
    }
`