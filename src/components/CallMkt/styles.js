import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1C1C1E;
    
`

export const SectionOne = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 123px;
    width: 1238.39px;
    height: 883.39px;
    background-image: url('/images/background-call.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleSmallDefault = styled.h2`
    color: #6FDBD4;
    font-size: 14.45px;
    font-weight: 400;

`

export const SubTitle = styled.p`
    margin-top: 35px;
    color: white;
    font-size: 36.62px;
    font-weight: 700;
    line-height: 46.34px;
    max-width: 636px;
    text-align: center;

    span {
        display: block;
        font-size: 36.62px;
        font-weight: 400;
        line-height: 46px;
        letter-spacing: 1px;
    }
`

export const Space = styled.div`
    border-bottom: 1px solid #73757B;
    width: 1238.39px;
    height: 1px;
    margin: 30px 0;
`