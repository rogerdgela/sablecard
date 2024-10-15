import { Container, Content, ImageLeft, TextRight } from "./styles";

export default function Component() {
    return (
        <Container>
            <Content>
                <ImageLeft src="/images/cardleft.png" />
                <TextRight>
                    <p>Get a bank account & debit card <span>in five minutes.</span></p>
                </TextRight>   
            </Content>
        </Container>
    )
}