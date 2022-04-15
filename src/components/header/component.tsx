import React, { useState, useEffect } from 'react';
import img from "../../img"
import {
    Wrapper,
    Section,
    Logo,
    LinksContainer,
    Link,
    PrimaryLinks,
    SecondaryLinks,
    FAQS,
    ContactUs
} from "./styles"

const links: string[] = ["HOME", "TRAINING ACADEMY", "OUR TREATMENTS", "ABOUT US", "MODELS", "TESTIMONIALS"]

const Header: React.FC<{}> = () => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(()=> {
        setTimeout(() => {
            setVisible(true)
        }, 2500);
    },[])

    return (
        <Section>
            <Wrapper>
                {/* {visible && <Logo />} */}
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
