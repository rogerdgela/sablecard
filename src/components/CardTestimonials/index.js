import { Container, SeparatorAspas, DescriptionTestemonial, NameTestemonial } from "./styles";

export default function Component({ description, name }) {
    return (
        <Container>
            <img src="/images/aspas.png" alt="Logo tipo Sablecard" width={38} height={30} />
            <SeparatorAspas>
                <DescriptionTestemonial>
                    { description }
                </DescriptionTestemonial>
                
                <NameTestemonial>
                    { name }
                </NameTestemonial>
            </SeparatorAspas>
        </Container>
    )
}