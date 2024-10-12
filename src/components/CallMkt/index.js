import {
    SectionContainer,
    SectionOne,
    ContainerTitle,
    Space,
    TitleSmallDefault,
    SubTitle,
    SectionTwo,
    Box,
    BoxIcon,
    BoxTitle,
    BoxDescription,
    SectionSmart
} from "./styles";


export default function Component() {
    return (
        <SectionContainer>
            <SectionOne>
                <ContainerTitle>
                    <TitleSmallDefault>400,000 ACCOUNTS & COUNTING</TitleSmallDefault>
                    <SubTitle>No hidden fees. No credit checks.<span>No more barriers to building credit.</span></SubTitle>
                </ContainerTitle>
            </SectionOne>
            <SectionSmart src="/images/background-call.png" alt="Logo da minha aplicação" />
            <SectionTwo>
                <Box>
                    <BoxIcon src="/images/card.png" alt="Logo da minha aplicação"></BoxIcon>
                    <BoxTitle>Get a secured credit card and bank account in 5 minutes.</BoxTitle>
                    <BoxDescription>No credit history, credit check, or minimum deposit required.</BoxDescription>
                </Box>
                <Box isEven>
                    <BoxIcon src="/images/build.png" alt="Logo da minha aplicação"></BoxIcon>
                    <BoxTitle isRight>Build your U.S. credit</BoxTitle>
                    <BoxDescription isRight>We believe in forming positive habits. Build your U.S. credit with Sable</BoxDescription>
                </Box>
                <Box>
                    <BoxIcon src="/images/trofeu.png" alt="Logo da minha aplicação"></BoxIcon>
                    <BoxTitle>The only premium card for building credit.</BoxTitle>
                    <BoxDescription>2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!</BoxDescription>
                </Box>
                <Box isEven>
                    <BoxIcon src="/images/globo.png" alt="Logo da minha aplicação"></BoxIcon>
                    <BoxTitle isRight>Bank like a global citizen with Sable.</BoxTitle>
                    <BoxDescription isRight>Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.</BoxDescription>
                </Box>
            </SectionTwo>
            <Space />
        </SectionContainer>
    )
}