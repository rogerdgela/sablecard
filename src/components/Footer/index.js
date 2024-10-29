import { ContainerFooter, ContentFooter, FooterOne, ListFooter, TitleFooter, DescFooter, FooterTwo } from "./styles";
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

                            <div style={{ fontSize: 12.52+"px", fontWeight: 400, lineHeight: 23.11 + "px", textAlign: "right" }}>
                                © Sable Money Inc, all rights reserved.
                            </div>
                        </li>
                    </ListFooter>
                </FooterOne>

                <FooterTwo>
                    <p style={{ paddingBottom: 32+"px" }}>Privacy policy | Terms and conditions</p>
                    <p>*Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.</p>
                    <p>Sable account is FDIC-insured up to $250,000 per depositor through Coastal Community Bank, Member FDIC.</p>
                    <p>**If you are not a U.S. citizen, you can apply with your passport and U.S. Visa. Please note: you must submit an SSN once you receive one. If you are a U.S. citizen, SSN is required to open a bank account.</p>
                    <p>*** Double cashback bonus (through 12/2022)</p>

                    <div style={{ paddingLeft: 15+"px", marginTop: 10+"px" }}>
                        <p>Please see www.sablecard.com/terms-and-conditions#creditrnb for terms and conditions. Some exclusions apply.</p>
                        <p>Please see www.sablecard.com/terms-and-conditions for terms and conditions.</p>
                        <p>This benefit is provided by MasterCard. Benefits are subject to terms, conditions and limitations, including limitations on the amount of coverage. Please see the terms and conditions.</p>
                        <p>Sable estimated annual value</p>
                        <p>Sable product comparisons</p>
                    </div>
                    
                    <p>† Sable Remittance Best Rate Guarantee Terms</p>
                </FooterTwo>
            </ContentFooter>
        </ContainerFooter>
    )
}