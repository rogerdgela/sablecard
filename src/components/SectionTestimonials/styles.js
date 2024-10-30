import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1C1C1E; 
    color: rgba(255, 255, 255, 1);
    background-color: black;
`

export const Content = styled.div`
    width: 1366px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 69.24px;
    font-weight: 500;
    line-height: 77.24px;
    padding-top: 130px;
`

export const ContentCardsLine = styled.div`
    display: flex;
    overflow-x: hidden; /* Para permitir o scroll horizontal quando não couber */
    max-width: 100%; /* Define a largura máxima */
    width: 100%;
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 48px; 
`
