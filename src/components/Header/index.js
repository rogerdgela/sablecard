import { HeaderMain, HeaderContainer, DivLogoMenu } from "./styles"; 
import Logotipo from "../Logotipo";
import Menu from "../Menu";
import MenuResponsive from "../MenuResponsive";
import ContentText from "../ContentText";
import MessageLeft from "../MessageLeft";

export default function Component() {
    return (
        <HeaderMain>
            <HeaderContainer>
                <DivLogoMenu>
                    <Logotipo />
                    <Menu />
                    <MenuResponsive />
                </DivLogoMenu>
                <ContentText />
                <MessageLeft />
            </HeaderContainer>
        </HeaderMain>
    )
}