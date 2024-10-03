import styled from "styled-components";
import Logotipo from "../Logotipo";

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
                    <menu />
                </DivLogoMenu>
            </HeaderContainer>
        </HeaderMain>
    )
}

export default HeaderComponents;