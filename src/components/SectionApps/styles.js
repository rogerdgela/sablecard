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
    width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BackgroundApps = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 154px;
    width: 1238.39px;
    height: 411.86px;
    border-radius: 19.31px;
    background: url('/images/bg-apps.png') no-repeat center;
    background-size: cover;
`

export const CornerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const TitleCornerLeft = styled.p`
    margin-top: 140px;
    margin-right: 20px;
    font-size: 35.62px;
    font-weight: 600;
    line-height: 46.34px;
 

    span {
        font-size: 55.79px;
        font-weight: 600;
        line-height: 74.15px;
        padding-left: 5px;
        padding-right: 5px;
    }
`

export const DescCornerLeft = styled.div`
    font-size: 17.38px;
    font-weight: 400;
    line-height: 25.03px;
    letter-spacing: 0.3475860059261322px;
    text-align: left;
    max-width: 465px;
`

export const CornerRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 23px;
    margin-top: 220px;
`