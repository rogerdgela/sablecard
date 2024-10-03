import styled from "styled-components";
import Logotipo from "../Logo";

const Menu = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    height: 200px;
`

function NavHeader() {
    return (
        <Menu>
            <Logotipo></Logotipo>
            Teste
            
        </Menu>
    )
}

export default NavHeader;