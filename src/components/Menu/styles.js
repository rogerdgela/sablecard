import hexToRgba from "hex-to-rgba";
import styled from "styled-components";

export const ListaMenu = styled.nav`
    display: flex;
    list-style: none;
    flex-grow: 1;
    gap: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFFA3;
    margin-left: 35px;
    margin-top: 8px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const LinkMenu = styled.div`
    
`

export const MenuButton = styled.div`
    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`

export const ListaMenuResponsive = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    position: absolute;
    right: 0;
    width: 50%;
    top: 80px; 
`;

// Estilos para os links do menu
export const LinkMenuResponsive = styled.a`
    color: #fff;
    text-decoration: none;
    z-index: 10;
    height: 2rem;
    padding: 1.5rem;
    cursor: pointer;
    background: ${hexToRgba('#fff', '0.1')};
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${hexToRgba('#ffffff', '0.3')};
    transition: background 0.3s ease;
    color: white;

    &:hover {
        background-color: ${hexToRgba('#6FDBD4', '0.6')}; 
    }
`;
