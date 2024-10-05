import styled from "styled-components";

const ListaMenu = styled.ul`
    display: flex;
    gap: 25px;
    list-style: none;
    flex-grow: 1;
    
    li {
        letter-spacing: 1px;
        display: inline;
        padding-left: 18px;
        font-size: 12px;
        text-transform: uppercase;
        color: #FFFFFFA3;
        cursor: pointer;
    }

    li:hover {
        color: white;
    }
`

function Menu() {
    return (
        <ListaMenu>
            <li>Credit</li>
            <li>Debit</li>
            <li>App</li>
            <li>Learn</li>
        </ListaMenu>
    )
}

export default Menu;