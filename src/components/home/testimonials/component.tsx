import React from 'react';
import img from "../../../img"
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay  } from "swiper"
import 'swiper/css';
import "swiper/css/pagination";
import {
    Section,
    Wrapper,
    LeftContainer,
    TextContainer,
    Title,
    Subtitle,
    ButtonContainer,
    Button,
    RightContainer,
    Card,
    Heading,
    Comment,
    BottomRow,
    NameAndImage,
    Image,
    Name,
    RatingImage
} from "./styles"
import data from './data';

SwiperCore.use([Autoplay])

const Testimonials
    = () => {
        return (
            <Section>
                <Wrapper>
                    <LeftContainer>
                        <TextContainer>
                            <Title>testimonials</Title>
                            <Subtitle>Find out why so many people choose the most comfortable, complete experience courtesy of the Aesthetic Lounge.</Subtitle>
                            <ButtonContainer>
                                <Button filled>Book Me In</Button>
                                <Button>Train With Us</Button>
                            </ButtonContainer>
                        </TextContainer>
                    </LeftContainer>
                    <RightContainer>
                        <Swiper
                            slidesPerView={1}
                            modules={[Pagination, Navigation]}
                            pagination={true}
                            loop
                            autoplay={{ delay: 10000 }}
                        >
                            {data.map((item, i) => {
                                return <SwiperSlide key={i}>
                                    <Card>
                                        <Heading>{item.heading}</Heading>
                                        <Comment>{item.comment}</Comment>
                                        <BottomRow>
                                            <NameAndImage>
                                                <Image src={item.img} />
                                                <Name>{item.name}</Name>
                                            </NameAndImage>
                                            <RatingImage src={img.rating} />
                                        </BottomRow>
                                    </Card>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </RightContainer>
                </Wrapper>
            </Section>
        );
    }

export default Testimonials
    ;
