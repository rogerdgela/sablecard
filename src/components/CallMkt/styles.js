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

export const SectionTwo = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 92px;
    width: 1238.39px;
    color: #fff;
    margin-top: 106px;
    padding-bottom: 110px;
`;

export const SectionSmart = styled.img`
    position: absolute;
    height: 884px;
    margin-top: 80px;
`

export const Box = styled.div`
    padding: 20px;
    text-align: ${({ isEven }) => (isEven ? 'right' : 'left')};
`;

export const BoxIcon = styled.img`
    width: 38px;
`

export const BoxTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.36px;
    margin-top: 22px;
    padding-right: ${({ isRight }) => (isRight ? '' : '264px')};
    padding-left: ${({ isRight }) => (isRight ? '264px' : '')};
`

export const BoxDescription = styled.p`
    font-weight: 400;
    line-height: 18px;
    color: #A0A1A8;
    margin-top: 6px;
    padding-right: ${({ isRight }) => (isRight ? '' : '264px')};
    padding-left: ${({ isRight }) => (isRight ? '264px' : '')};
`

export const SectionThree = styled.div`
    width: 1440px;
    height: 232px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ListBanner = styled.ul`
    display: flex;
    justify-content: space-between; /* Distribui os itens igualmente com espaçamento */
    align-items: center; /* Alinha verticalmente ao centro */
    list-style-type: none; /* Remove as bolinhas */
    padding: 0;
    margin: 0;
`

export const ItemBanner = styled.li`
    margin: 0 20px;
`

export const BannerImage = styled.img`
    max-height: 50px; /* Ajusta a altura máxima dos logos */
    object-fit: contain; /* Mantém a proporção */
`