import { HeaderMain, HeaderContainer, DivLogoMenu } from "./styles"; 
import Logotipo from "../Logotipo";
import Menu from "../Menu";
import ContentText from "../ContentText";

export default function Component() {
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