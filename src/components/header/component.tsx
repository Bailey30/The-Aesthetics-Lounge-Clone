import React from 'react';
import img from "../../img"
import {
    Wrapper,
    Section,
    LinksContainer,
    Link,
    PrimaryLinks,
    SecondaryLinks,
    FAQS,
    ContactUs
} from "./styles"

const links: string[] = ["HOME", "TRAINING ACADEMY", "OUR TREATMENTS", "ABOUT US", "MODELS", "TESTIMONIALS"]

const Header: React.FC<{}> = () => {
    return (
        <Section>
            <Wrapper>
                <LinksContainer>
                    <PrimaryLinks>
                        {links.map((link, i) => {
                            return <Link key={link} i={i}>{link}</Link>
                        })}
                    </PrimaryLinks>
                    <SecondaryLinks>
                        <FAQS>FAQS</FAQS>
                        <ContactUs>Contact Us</ContactUs>
                    </SecondaryLinks>
                </LinksContainer>
            </Wrapper>
        </Section>

    );
}

export default Header;
