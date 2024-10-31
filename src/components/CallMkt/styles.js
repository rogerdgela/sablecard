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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 40px;
    }
    
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

    @media (max-width: 480px) {
        font-size: 22px;
        letter-spacing: 0;
        line-height: 24px;

        span {
            font-size: 23px;
            letter-spacing: 0;
            line-height: 24px;
        }
    }
`

export const Space = styled.div`
    border-bottom: 1px solid #73757B;
    width: 1238px;
    height: 1px;
    margin: 30px 0;
`

export const SectionTwo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 92px;
    width: 1238px;
    color: #fff;
    margin-top: 80px;
    margin-bottom: 220px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 50px;
        margin-bottom: 30px;
        background-image: url('/images/background-call.png'); 
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        
        @media (max-width: 480px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 50px;
            margin-bottom: 30px;
            background: none;
        }
    }
`;

export const SectionSmart = styled.img`
    position: absolute;
    height: 884px;
    top: 950px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Box = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isEven'
})`
    text-align: ${({ isEven }) => (isEven ? 'right' : 'left')};

    @media (max-width: 768px) {
        width: 48%;
        text-align: center;

        @media (max-width: 480px) {
            width: 95%;
            text-align: center;
            padding: 10px;
        }
    }
`;

export const BoxIcon = styled.img`
    width: 38px;
`

export const BoxTitle = styled.h2.withConfig({
    shouldForwardProp: (prop) => prop !== 'isRight'
})`
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.36px;
    margin-top: 22px;
    padding-right: ${({ isRight }) => (isRight ? '' : '320px')};
    padding-left: ${({ isRight }) => (isRight ? '320px' : '')};

    @media (max-width: 768px) {
        margin-top: 10px;
        text-align: center;
        padding: 10px;

        @media (max-width: 480px) {
            margin-top: 10px;
            text-align: center;
            padding: 10px;
        }
    }
`

export const BoxDescription = styled.p.withConfig({
    shouldForwardProp: (prop) => prop !== 'isRight'
})`
    font-weight: 400;
    line-height: 18px;
    color: #A0A1A8;
    margin-top: 6px;
    padding-right: ${({ isRight }) => (isRight ? '' : '330px')};
    padding-left: ${({ isRight }) => (isRight ? '330px' : '')};

    @media (max-width: 768px) {
        padding: 0;
        color: white;
        font-size: 14px;
        margin-top: 2px;
    }
`

export const SectionThree = styled.div`
    width: 1366px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ListBanner = styled.ul`
    display: flex;
    justify-content: space-between; /* Distribui os itens igualmente com espaçamento */
    align-items: center; /* Alinha verticalmente ao centro */
    list-style-type: none; /* Remove as bolinhas */
`

export const ItemBanner = styled.li`
    margin: 0 20px;
`

export const BannerImage = styled.img`
    max-height: 50px; /* Ajusta a altura máxima dos logos */
    object-fit: contain; /* Mantém a proporção */
`