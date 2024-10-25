import { Container, Content, Title, ContentCardsLine } from "./styles";
import CardTestemonials from "../CardTestimonials"


export default function Component() {
    return (
        <Container>
            <Content>
                <Title>Testimonials 4.8</Title>
                <ContentCardsLine>
                    <CardTestemonials description="Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch." name="K Oiwake" />
                    <CardTestemonials description="The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!" name="E Berhe" />
                </ContentCardsLine>
            </Content>
        </Container>
    )
}