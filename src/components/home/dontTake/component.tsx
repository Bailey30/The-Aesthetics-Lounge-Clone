import React from "react";
import data from "./data";
import {
    Section,
    Wrapper,
    TextContainer,
    Title,
    Bold,
    Subtext,
    ImageRow,
    ImageContainer
} from "./styles"




const DontTake = ()=> {
    return (
        <Section>
        <Wrapper> 
             <TextContainer> 
                 <Title>don't just take <Bold>our word for it</Bold></Title> 
                <Subtext>Here's just a few of the people who have been given the complete, perfect look thanks to the Aesthetic Lounge.</Subtext>
            </TextContainer>
            <ImageRow>
                {data.map((item, i)=> {
                    return <ImageContainer img={item.img} href={item.link}></ImageContainer>
                })}
            </ImageRow>
        </Wrapper>
   </Section>
    )
}

export default DontTake;
