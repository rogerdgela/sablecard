import { Container } from "./styles";

export default function Component({ description, name }) {
    return (
        <Container>
            { description }
            { name }
        </Container>
    )
}