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
    width: 1366px;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 768px;

        @media (max-width: 480px) {
            width: 100%;
            max-width: 480px;
            flex-direction: column;
        }
    }
`

export const ImageLeft = styled.img`
    margin-top: 75px;

    @media (max-width: 768px) {
        width: 35%;

        @media (max-width: 480px) {
            width: 45%;
            margin-top: 50px;
        }
    }
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

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        margin-left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            width: 100%;
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            width: 100%;
            margin: 0;
            height: 20%;

            p {
                width: 100%;
                font-size: 2rem;
                text-align: center;
            }
        }
    }
`