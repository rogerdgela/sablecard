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
                        <li style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                                <TitleFooter>Contact</TitleFooter>
                                <DescFooter>Email: help@sablecard.com</DescFooter>
                                <DescFooter>Location: New Yourk, NY</DescFooter>
                            </div>

                            <div style={{ display: "flex", justifyContent: "flex-start", gap: 36+"px" }}>
                                <Instagram />
                                <Twitter />
                                <Facebook />
                                <Youtube />
                                <Linkedin />
                            </div>
                        </li>
                        <li style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                                <img src="/images/logo-footer.png" alt="logo" />
                            </div>

                            <div style={{ fontSize: 12.52+"px", fontWeight: 400, lineHeight: 23.11 + "px" }}>
                                © Sable Money Inc, all rights reserved.
                            </div>
                        </li>
                    </ListFooter>
                </FooterOne>

                <div>
                    dasd
                </div>
            </ContentFooter>
        </ContainerFooter>
    )
}