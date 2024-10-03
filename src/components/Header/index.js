import styled from "styled-components";
import Logotipo from "../Logotipo";
import Menu from "../Menu";

const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 810px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 1224px;
    height: 810px;
    background-image: url('/images/background-header.png');
`

const DivLogoMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height:45px;
    align-items: center;
    width: 100%;
    color: #fff;
    margin-top: 142px; 
`

function HeaderComponents() {
    return (
        <HeaderMain>
            <HeaderContainer>
                <DivLogoMenu>
                    <Logotipo />
                    <Menu />
                </DivLogoMenu>
            </HeaderContainer>
        </HeaderMain>
    )
}

export default HeaderComponents;