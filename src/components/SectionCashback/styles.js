import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1C1C1E; 
    color: rgba(255, 255, 255, 0.3);
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1440px;
    margin-top: 98px;
`

export const LeftHandSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #1C1C1E;
`

export const RightHandSide = styled.div`
    width: 100%;
    background-color: rgba(235, 235, 241, 0.93);
`