import { Container, Content, LeftHandSide, RightHandSide } from "./styles";
import ContentBoxSide from "../../components/ContentBoxSide"
import ContentLogos from "../../components/ContentLogos"

export default function Component() {
    const imagens01 = [
        {src: '/images/whole.png'},
        {src: '/images/spotify.png'},
        {src: '/images/amazon.png'},
        {src: '/images/empty.png'},
    ]

    const imagens02 = [
        {src: '/images/netflix.png'},
        {src: '/images/ubereats.png'},
        {src: '/images/uber.png'},
    ]

    return (
        <Container>
            <Content>
                <LeftHandSide>
                    <ContentBoxSide title="Earn 2% cash back on favorite brands" description="Earn 2%1 cash back on favorite brands, 1%1 cashback on all purchases, and a 2x cashback match in your first year! Get premium benefits and much more." cor="rgba(255, 255, 255, 0.98)"/>
                    <ContentBoxSide title="Moving to the U.S.? No SSN required" description="Start building credit before you even enter the country. Sign up with your international address, passport & visa instead**." />
                    <ContentBoxSide title="Get help from a real person" description="When you’ve got questions about your finances, get multilingual customer support anytime you need from direct in-app chat, email, phone, and our site FAQs." />
                </LeftHandSide>
                <RightHandSide>
                    <ContentLogos imagens={imagens01} />
                    <ContentLogos imagens={imagens02} />
                </RightHandSide>
            </Content>
        </Container>
    )
}