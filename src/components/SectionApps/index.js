import { Container, Content, BackgroundApps, CornerLeft, CornerRight, TitleCornerLeft, DescCornerLeft } from "./styles";


export default function Component() {
    return (
        <Container>
            <Content>
                <BackgroundApps>
                    <CornerLeft>
                        <TitleCornerLeft>Join Over <span>400,000</span> accounts</TitleCornerLeft>
                        <DescCornerLeft>Download Sable: effortless, borderless banking for a more connected world.</DescCornerLeft>
                    </CornerLeft>
                    <CornerRight>
                        <img src="/images/gplay.png" />
                        <img src="/images/gplay.png" />
                    </CornerRight>
                </BackgroundApps>
            </Content>
        </Container>
    )
}