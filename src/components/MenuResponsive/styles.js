import styled from "styled-components";

export const ListaMenu = styled.ul`
    display: flex;
    list-style: none;
    flex-grow: 1;
    gap: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFFA3;
    margin-left: 35px;
    margin-top: 8px;
    
    li {
        display: inline;
        text-transform: uppercase;
    }

    @media (max-width: 480px) {
        
    }
`