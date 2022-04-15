import React from 'react';
import { 
    Section,
    Wrapper,
    TextContainer,
    Title,
    Bold,
    Text,
    ButtonContainer,
    Button,
 } from "./styles"



const Hero = () => {
    return (
        <Section>
            <Wrapper>
                <TextContainer>

                <Title><Bold>Aesthetics</Bold> you can trust.</Title>
                <Text>Delivering world-class cosmetic services and aesthetics training to help enhance the natural beauty within.</Text>
                <ButtonContainer>
                    <Button filled>Book Me In</Button>
                    <Button>Train With Us</Button>
                </ButtonContainer>
                </TextContainer>
            </Wrapper>
        </Section>


    );
}

export default Hero;
