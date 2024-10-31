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
        color: #A0A1A8;
    }

    @media (max-width: 768px) {
        margin: 50px 0 20px 20px;

        @media (max-width: 480px) {
            margin: 30px 0 20px;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;

            @media (max-width: 375px) {
                margin: 30px 0 50px;
            }
        }
    }    
`