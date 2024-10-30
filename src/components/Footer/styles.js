import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #fff;
`

export const ContentFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1366px;
    margin-top: 108px;
`

export const FooterOne = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(47, 47, 47, 1);
    padding-bottom: 100px;
`

export const ListFooter = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none; /* Remove as bolinhas padrão */
    padding: 0; /* Remove o padding padrão */
    margin: 0;
`

export const TitleFooter = styled.h2`
    font-size: 28.9px;
    font-weight: 500;
    line-height: 37.08px;
    letter-spacing: 0.3862070143222809px;
    margin-bottom: 14px;
`

export const DescFooter = styled.p`
    font-size: 16.38px;
    font-weight: 400;
    line-height: 20.86px;
    margin-bottom: 5px;

    span {
        color: rgba(31, 198, 187, 1);
    }
`

export const FooterTwo = styled.div`
    padding-top: 70px;
    width: 100%;
    display: block;
    padding-bottom: 100px;

    p {
        display: block;
        font-size: 10.55px;
        font-weight: 400;
        line-height: 15.06px;
        color: rgba(115, 117, 123, 1);
    }
`