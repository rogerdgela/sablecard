import styled from "styled-components";
import Logotipo from "../Logotipo";
import Menu from "../Menu";
import ContentText from "../ContentText";

const HeaderMain = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 810px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1224px;
    background-image: url('/images/background-header.png');
`

const DivLogoMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    width: 100%;
    color: #fff;
    margin-top: 155px; 
`

function HeaderComponents() {
    return (
        <HeaderMain>
            <HeaderContainer>
                <DivLogoMenu>
                    <Logotipo />
                    <Menu />
                </DivLogoMenu>
                <ContentText />
            </HeaderContainer>
        </HeaderMain>
    )
}

export default HeaderComponents;