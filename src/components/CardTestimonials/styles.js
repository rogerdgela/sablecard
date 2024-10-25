import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 40px;
    width: 595px;
    height: 386px;
    padding: 62px;
    background-color: rgba(28, 28, 30, 1);
    border-radius: 20px;
`

export const SeparatorAspas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DescriptionTestemonial = styled.p`
    display: flex;
    flex-direction: column;
    width: 385px;
    font-size: 26.03px;
    font-weight: 400;
    line-height: 32.44px;
    
`

export const NameTestemonial = styled.span`
    font-size: 15.38px;
    font-weight: 700;
    line-height: 20.86px;
    letter-spacing: 0.3475860059261322px;
    margin-left: 80px;
    position: relative;
    
    &:after {
        content: ''; /* Adicionei o content */
        display: flex; /* Para que a largura e altura sejam aplicadas */
        width: 61px;
        height: 4px;
        background-color: white;
        margin-left: -80px; /* Se quiser espaçamento entre o texto e a linha */
        position: absolute;
        top: 10px;
    }
`;
