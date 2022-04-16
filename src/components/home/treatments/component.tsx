import React, { useState, useEffect } from 'react';
import data, { TreatmentData } from "./data"
import {
    Section,
    Wrapper,
    Title,
    Bold,
    NavImagesContainer,
    NavSquare,
    NavImage,
    NavText,
    TextSpan,
    TreatmentInfoContainer,
    ImageContainer,
    LargeImage,
    TextContainer,
    InfoTitle,
    Description,
    ButtonContainer,
    Button,
    TrainingNotice,
} from "./styles"


const Treatments = () => {
    const [activeData, setActiveData] = useState<TreatmentData>(data[0])
    const [selected, setSelected] = useState<number>(0)

    const handleActiveData = (i: number) => {
        setActiveData(data[i])
        setSelected(i)
    }

    return (
        <Section>
            <Wrapper>
                <Title>our<Bold>treatments</Bold></Title>
                <NavImagesContainer>
                    {data.map((data, i) => {
                        return <NavSquare onClick={() => handleActiveData(i)} i={i} selected={selected}>
                            <NavImage src={data.imgSmall} alt="treatment preview image" />

                            {i !== selected &&
                                <NavText>{data.navText.map((text, i) => {
                                    return <TextSpan key={text}>{text}</TextSpan>

                                })}</NavText>
                            }

                        </NavSquare>
                    })}
                </NavImagesContainer>

                <TreatmentInfoContainer>
                    <ImageContainer>
                        <LargeImage src={activeData?.img} />
                    </ImageContainer>
                    <TextContainer>
                        <InfoTitle>{activeData?.title}</InfoTitle>
                        {activeData.description.map((desc, i) => {
                            return <Description>{desc}</Description>
                        })}
                        <ButtonContainer>
                            <Button filled>Book Me In</Button>
                            <Button>Read More On Treatments</Button>
                        </ButtonContainer>
                    </TextContainer>
                </TreatmentInfoContainer>

                <TrainingNotice>We provide training for<Bold>everyone</Bold></TrainingNotice>
            </Wrapper>
        </Section>
    );
}

export default Treatments;
