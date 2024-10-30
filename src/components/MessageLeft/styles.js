import styled from "styled-components";

export const DivImage = styled.div`
    margin-top: 100px;
    height: 25px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 18px;

    p {
        width: 323px;
        top: -2px;
        font-size: 10px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0.20px;
        text-align: left;
        color: #A0A1A8;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
`