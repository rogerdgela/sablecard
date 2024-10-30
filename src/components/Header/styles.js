import styled from "styled-components"

export const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 810px;

    @media (max-width: 768px) {
        height: auto;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1366px;
    background-image: url('/images/background-header.png');
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 480px) {
        background: none;
    }
`

export const DivLogoMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    width: 100%;
    color: #fff;
    margin-top: 155px; 

    @media (max-width: 768px) {
        justify-content: center;
        padding: 40px 0; 
        margin: 0; 
    }
`