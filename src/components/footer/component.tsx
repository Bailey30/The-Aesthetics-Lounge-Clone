import React from 'react';
import img from '../../img';
import {
    Section,
    Wrapper,
    Row,
    Link,
    IconRow,
    Icon,
    BottomRow,
    OpopGroup,
    Bold,
    DevelopedBy,
    OpopLink,
    OpopLogoSmall,
    Copyright,
    TermsAndConditions,
    LogoRow,
    FooterLogo
} from "./styles"


const Footer = () => {
    return (
        <Section>
            <Wrapper>
                <Row>
                    <Link href="https://theaestheticlounge.co.uk/">HOME</Link>
                    <Link href="https://theaestheticlounge.co.uk/academy">TRAINING ACADEMY</Link>
                    <Link href="https://theaestheticlounge.co.uk/treatments">OUR TREATMENTS</Link>
                    <Link href="https://theaestheticlounge.co.uk/about">ABOUT US</Link>
                    <Link href="https://theaestheticlounge.co.uk/models">MODELS</Link>
                    <Link href="https://theaestheticlounge.co.uk/testimonials">TESTIMONIALS</Link>
                </Row>
                <Row>
                    <Link>FAQS</Link>
                    <Link>CONTACT US</Link>
                </Row>
                <IconRow>
                    <Icon src={img.socialsInstagramWhite} />
                    <Icon src={img.socialsTwitterWhite} />
                    <Icon src={img.socialsFacebookWhite} />
                </IconRow>
                <LogoRow>
                    <FooterLogo src={img.logo} />
                </LogoRow>
                <BottomRow>
                    <OpopGroup>
                        <DevelopedBy>DEVELOPED BY | </DevelopedBy>
                        <OpopLink href="www.opopmedia.co.uk">
                            <OpopLogoSmall src={img.opopLogo} />
                            <DevelopedBy><Bold>OPOP</Bold> MEDIA </DevelopedBy>
                        </OpopLink>
                    </OpopGroup>
                    <Copyright>© Copyright 2022</Copyright>
                    <TermsAndConditions>
                        <Link href="https://theaestheticlounge.co.uk/cookie">Cookie Policy</Link>
                        <Link href="https://theaestheticlounge.co.uk/privacy">Privacy Policy</Link>
                        <Link href="https://theaestheticlounge.co.uk/terms">Terms & Conditions</Link>
                    </TermsAndConditions>
                </BottomRow>
            </Wrapper>
        </Section>
    );
}

export default Footer;
