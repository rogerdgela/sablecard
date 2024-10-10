import { 
    SectionContainer,
    SectionOne, 
    ContainerTitle,
    Space, 
    TitleSmallDefault,
    SubTitle
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
            <Space />           
        </SectionContainer>
    )
}