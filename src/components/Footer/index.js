import { ContainerFooter, ContentFooter, FooterOne, ListFooter, TitleFooter, DescFooter } from "./styles";
import { Facebook, Instagram, Linkedin, Twitter, Youtube  } from "lucide-react"

export default function Component() {
    return (
        <ContainerFooter>
            <ContentFooter>
                <FooterOne>
                    <ListFooter>
                        <li>
                            <TitleFooter>Sable Credit</TitleFooter>
                            <DescFooter>Sable ONE Credit</DescFooter>
                            <DescFooter>Credit Score <span>Coming Soon</span></DescFooter>

                            <TitleFooter style={{ marginTop: '20px' }}>Sable Debit</TitleFooter>
                            <TitleFooter>App</TitleFooter>

                            <TitleFooter>Learn</TitleFooter>
                            <DescFooter>FAQs</DescFooter>
                            <DescFooter>About Sable</DescFooter>
                        </li>
                        <li>
                            <TitleFooter>Contact</TitleFooter>
                            <DescFooter>Email: help@sablecard.com</DescFooter>
                            <DescFooter>Location: New Yourk, NY</DescFooter>

                            <Instagram />
                            <Twitter />
                            <Facebook />
                            <Youtube />
                            <Linkedin />
                        </li>
                        <li>todo</li>
                    </ListFooter>
                </FooterOne>
            </ContentFooter>
        </ContainerFooter>
    )
}