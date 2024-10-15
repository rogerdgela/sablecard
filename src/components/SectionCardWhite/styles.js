import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const Content = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 1440px;
`

export const ImageLeft = styled.img`
    margin-top: 82px;
    margin-left: 155px;
`

export const TextRight = styled.div`
    margin-left: 51px;
    width: 542px;
    height: 270px;
    font-size: 38px;
    font-weight: 400;
    line-height: 46px;

    p {
        width: 458px;
    }

    span {
        color: #1FC6BB;
    }
`