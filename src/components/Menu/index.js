import styled from "styled-components";

const ListaMenu = styled.ul`
    list-style: none;
    flex-grow: 1;
    
    li {
        display: inline;
        padding-left: 20px;
        text-transform: uppercase;
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